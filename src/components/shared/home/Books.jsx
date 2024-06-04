import { useEffect, useState } from "react";
import Book from "./Book";



function Books() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue)
  
  useEffect(() => {
    fetch("https://book-wiz-server.vercel.app/books/")
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

export default Books