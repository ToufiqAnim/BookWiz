const Banner = () => {
    return (
<div className="hero min-h-[700px] bg-[#E5E6E1]">
  <div className="lg:flex-row-reverse hero-content gap-5">
    <div className='flex-1 gap-10 justify-between items-start flex w-full max-w-[50%]'> 
    <div className=" w-full max-w-[50%] mt-32">
    <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13-p-500.jpg" />
    </div>
 <div className="w-full max-w-[50%]">
 <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03.jpg" />
 </div>
    </div>
    <div className="flex-1">
      <h1 className="text-7xl font-light">Find your next great read at our online book store</h1>

      <button className="px-7 py-4 bg-black border-0 text-white rounded-full mt-6 ">Explore Books</button>
    </div>
  </div>
</div>
    );
  };
  
  export default Banner;