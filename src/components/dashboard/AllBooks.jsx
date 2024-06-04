

import { useEffect, useState } from "react";
import AllBook from "./AllBook";



const AllBooks = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    setBooks(Books.filter((product) => product._id !== _id || product._id === ""));
  };

  return (
    <div className="flex justify-center flex-wrap" >
      <h1 className="text-4xl m-5 font-bold text-center">All Books</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {Books.map((book) => (
          <AllBook
            key={book._id}
            book={book}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;