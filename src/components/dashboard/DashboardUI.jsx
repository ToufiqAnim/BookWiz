import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaPlus } from "react-icons/fa";

const DashboardUI = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center ">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>

        <div className="drawer-side text-white bg-slate-900 lg:w-80">
          <label htmlFor="my-drawer-2" className="drawer-overlay lg:hidden"></label>
          <ul className="menu p-4 w-64 sm:w-72 md:w-80 min-h-full">
            <h1 className="text-2xl font-bold mb-2">
              <Link to={'/dashboard'}>Dashboard</Link>
            </h1>
            <hr />
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out hover:scale-105">
              <Link to={"/"}>
                <FaHome className="inline-block mr-2" /> 
                <span className="hover:text-md">Home</span>
              </Link>
            </li>
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out hover:scale-105">
              <Link to={"/dashboard/all-books"}>
                <FaBook className="inline-block mr-2" /> 
                <span className="hover:text-md">Explore Books</span>
              </Link>
            </li>
            <li className="hover:border hover:border-white p-2 my-2 rounded-md transition-all duration-300 ease-in-out hover:scale-105">
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
