
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async()=>{
    await logout()
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Explore Books</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            BookWiz
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 px-1">
            <li>
              <Link to={'/recipe'}>Explore Books</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        {!user?.email ? (
          <div className="navbar-end flex gap-4">
            <Link to={'/login'} className="btn">
              Login
            </Link>
            <Link to={'/register'} className="btn">
              Registration
            </Link>
          </div>
        ) : (
          <div className="navbar-end flex gap-4">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-full">
                <small className="p-2">{user?.displayName}</small>
              </div>
            </div>
            <div>
              <Link to={'/dashboard'}>Dashboard</Link>
            </div>
            <div>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
