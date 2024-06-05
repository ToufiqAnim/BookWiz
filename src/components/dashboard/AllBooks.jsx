import { useEffect, useState } from "react";
import AllBook from "./AllBook";

const AllBooks = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-wiz-server.vercel.app/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    setBooks(Books.filter((book) => book._id !== _id));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl m-5 font-bold text-center">All Books</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Genre</th>
          
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((book) => (
              <AllBook key={book._id} book={book} onDelete={handleDeleteProduct} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
