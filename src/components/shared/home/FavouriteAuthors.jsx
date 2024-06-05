import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavouriteAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookwiz-server-1.onrender.com/books/"
        );
        const data = await response.json();
        setAuthors(data.slice(2,8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-10 text-center">Favourite Authors</h2>
      <Slider {...settings}>
        {authors?.map((author) => (
          <div key={author._id} className="px-2 w-full ">
            <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-48 h-48 object-cover object-center rounded-full p-4"
                src={author.image}
                alt={author.author}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{author.author}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavouriteAuthors;
