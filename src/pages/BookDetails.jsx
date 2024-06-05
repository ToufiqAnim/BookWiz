/* import { useLoaderData } from "react-router-dom";



function BooksDetails() {
  const book = useLoaderData();


  return (
    <>
      <div>
        <div className="container mx-auto flex justify-evenly items-center mt-10 gap-10">
          <div className="shadow-2xl p-4">
            <img src={book?.image} alt="" className="w-96" />
          </div>
          <div className="font-lobstar flex-1">
            <h1 className="text-6xl mb-6">{book?.name}</h1>
            <p className="text-2xl mb-6">{book?.author}</p>
            <p className="text-md mb-6">{book?.description.slice(0, 200)}...</p>
            <div className="flex gap-4 items-center justify-between">
              <button className="mt-3 bg-slate-800 text-white px-8 py-3 rounded text-xl">
                Start Reading
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-28 flex justify-around items-center gap-28  bg-[#f1f1ee] shadow-lg mt-[-60px] mb-20">
          <div className="flex flex-col gap-6 font-lobstar w-2/4">
            <h1 className="text-3xl">Description</h1>
            <p>{book?.description}</p>

            
          </div>
          <div className=" font-lobstar">
            <h1 className="text-3xl mb-4">Editor</h1>
            <p className="text-xl mb-6">Harper Lee (author)</p>
            <h1 className="text-2xl mb-2">Language</h1>
            <p className="mb-4">Standard English (USA & UK)</p>
            <h1 className="text-2xl mb-2">Paperback</h1>
            <p>
              Paper textured, full color, 335 pages,
              <br /> ISBN:9876789
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksDetails; */

import { useLoaderData } from "react-router-dom";

function BooksDetails() {
  const book = useLoaderData();

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row items-center md:justify-evenly md:gap-10">
          <div className="shadow-2xl p-4">
            <img src={book?.image} alt="" className="w-full md:w-96" />
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <h1 className="text-4xl md:text-6xl mb-2">{book?.name}</h1>
            <p className="text-xl mb-2">{book?.author}</p>
            <p className="text-sm md:text-md mb-4">{book?.description.slice(0, 200)}...</p>
            <div>
              <button className="bg-slate-800 text-white px-6 py-3 rounded-md text-lg">
                Start Reading
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center bg-[#f1f1ee] shadow-lg mt-10 md:mt-[-60px] mb-20">
          <div className="flex flex-col gap-6 font-lobstar w-full md:w-2/4">
            <h1 className="text-2xl md:text-3xl">Description</h1>
            <p>{book?.description}</p>
          </div>
          <div className="font-lobstar mt-10 md:mt-0 md:ml-10 md:w-1/4">
            <h1 className="text-2xl md:text-3xl mb-2">Editor</h1>
            <p className="text-lg md:text-xl mb-4">Harper Lee (author)</p>
            <h1 className="text-xl md:text-2xl mb-2">Language</h1>
            <p className="mb-4">Standard English (USA & UK)</p>
            <h1 className="text-xl md:text-2xl mb-2">Paperback</h1>
            <p>
              Paper textured, full color, 335 pages,
              <br /> ISBN:9876789
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksDetails;

