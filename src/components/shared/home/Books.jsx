/* import { useEffect, useState } from "react";
import Book from "./Book";



function Books() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue)
  
  useEffect(() => {
    fetch("https://bookwiz-server-1.onrender.com/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data?.slice(0, 6)));
  }, []);


  console.log(books)
  return (
    <>
      <div>
        <h1 className="text-4xl text-center bold p-4">Featured Books</h1>
        <div className="text-center">
      
        </div>
        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search Your Fabourite Books " className="input border-1 border-gray-500 w-full max-w-sm ml-4" />
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 gap-8">
      {books?.filter((book) => {
        return searchValue?.toLowerCase() === " " ? book : book?.name?.toLowerCase()?.includes(searchValue)
      }) .map((book) =>  <Book book={book} key={book._id}/>)}
      </div>
   
      </div>
    </>
  )
}

export default Books */
import { useEffect, useState } from "react";
import Book from "./Book";

function Books() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch("https://bookwiz-server-1.onrender.com/books/")
      .then((res) => res.json())
      .then((data) => {
        let slicedBooks = data;
        if (window.location.pathname === "/") {
          slicedBooks = data.slice(0, 6);
        }
        setBooks(slicedBooks);
        const uniqueGenres = Array.from(new Set(data.map((book) => book.genre)));
        setGenres(uniqueGenres);
        const uniqueYears = Array.from(new Set(data.map((book) => new Date(book.publicationDate).getFullYear())));
        setYears(uniqueYears);
      });
  }, []);

  const filterBooks = (book) => {
    const isMatch =
      book.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (!selectedGenre || book.genre === selectedGenre) &&
      (!selectedYear || new Date(book.publicationDate).getFullYear() === selectedYear);
    return isMatch;
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-center bold p-4">Featured Books</h1>
        <div className="flex justify-center gap-4 mb-4">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search Your Favorite Books"
            className="input border-1 border-gray-500 w-full max-w-sm"
          />
          <select onChange={handleGenreChange} className="input border-1 border-gray-500">
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <select onChange={handleYearChange} className="input border-1 border-gray-500">
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mx-auto container">
          {books?.filter(filterBooks).map((book) => (
            <Book book={book} key={book._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;

