/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="w-full">
      <Link to={`/books/${book._id}`}>
        <div className="shadow-lg w-full h-full flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full md:w-48 flex-none bg-cover text-center overflow-hidden">
            <img src={book?.image} alt="" className="h-64 w-full object-cover md:h-full" />
          </div>
          <div className="p-4 flex flex-col justify-between w-full">
            <div className="mb-4">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {book?.name}
              </div>
              <p className="text-gray-500 text-base">
                {book.description.slice(0, 150)}...
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={book.image}
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{book.author}</p>
                <p className="text-gray-600">{book.genre}</p>
                <p className="text-gray-600">{book.publicationDate}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
