import { Link } from "react-router-dom";

  const Banner = () => {
    return (
      <div className="hero min-h-[600px] bg-[#E5E6E1] flex items-center justify-center py-10 px-4 ">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-5 w-full max-w-screen-lg">
          <div className='flex  lg:flex-row justify-between items-start gap-5 lg:gap-10 w-full lg:w-1/2'>
            <div className="w-full max-w-[50%] lg:max-w-[45%] mt-10 lg:mt-32 ">
              <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13-p-500.jpg" alt="Book 1" />
            </div>
            <div className="w-full max-w-[50%] lg:max-w-[45%]">
              <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03.jpg" alt="Book 2" />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-light">Find your next great read at our online book store</h1>
            <button className="px-7 py-4 bg-black border-0 text-white rounded-full mt-6">
              <Link to={'/books'}>Explore Books</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  