import { useEffect, useState } from "react";
import Product from "../home/Product";

const Books=()=> {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue)
  
  useEffect(() => {
    fetch("http://localhost:3000/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data?.slice(0, 6)));
  }, []);


  console.log(books)
  return (
    <>
      <div>
        <h1 className="text-4xl text-center bold p-4">Books</h1>
        <div className="text-center">
        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search shoes here" className="input input-bordered input-info w-full max-w-xs m-5 justify-center" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
      {books?.filter((book) => {
        return searchValue?.toLowerCase() === " " ? book : book?.name?.toLowerCase()?.includes(searchValue)
      }) .map((book) =>  <Product book={book} key={book._id}/>)}
      </div>
      </div>
    </>
  )
}

export default Books