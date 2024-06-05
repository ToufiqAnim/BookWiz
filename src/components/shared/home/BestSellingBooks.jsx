import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-wiz-server.vercel.app/books/")
      .then((response) => response.json())
      .then((data) => {
      
        setBooks(data.slice(4,9));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-semibold text-center mb-8">Best Selling Books</h1>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book._id} className="px-2 w-full border border-gray-300">
            <div className=" rounded-lg overflow-hidden flex items-center justify-between">
              <div className="aspect-w-2 aspect-h-3 ">
                <img
                  src={book.image}
                  alt={book.name}
                  className="object-cover w-56 h-72 p-2"
                />
              </div>
              <div className="p-4">
                <h2 className="text-md  mb-2 ">{book.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="text-sm text-gray-700">{book.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSellingBooks;
