import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaPlus } from "react-icons/fa";

const DashboardUI = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
      
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center">
          <div className="w-full lg:hidden flex justify-between items-center bg-slate-900 text-white p-4">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <h1 className="text-2xl font-bold"> <Link to={'/dashboard'}>Dashboard</Link></h1>
          </div>
          <Outlet />
        </div>

        <div className="drawer-side text-white lg:bg-slate-900 lg:w-80 lg:min-h-full sm:w-64 sm:min-h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay lg:hidden "></label>
          <ul className="menu p-4 w-64 sm:w-64 md:w-80  l mt-12 ">
          <h1 className="text-2xl font-bold hidden lg:flex"> <Link to={'/dashboard'}>Dashboard</Link></h1>
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out ">
              <Link to={"/"}>
                <FaHome className="inline-block mr-2" /> 
                <span className="hover:text-md">Home</span>
              </Link>
            </li>
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out ">
              <Link to={"/dashboard/all-books"}>
                <FaBook className="inline-block mr-2" /> 
                <span className="hover:text-md">Explore Books</span>
              </Link>
            </li>
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out ">
              <Link to={"/dashboard/add-books"}>
                <FaPlus className="inline-block mr-2" /> 
                <span className="hover:text-md">Add Books</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DashboardUI;
