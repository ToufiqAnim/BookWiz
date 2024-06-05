import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className='border-b border-gray-100'>
      <div className="navbar bg-base-100 shadow-lg">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-center"
            >
              <li className="hover:bg-gray-200 rounded">
                <Link to={'/books'}>Explore Books</Link>
              </li>
              <li className="hover:bg-gray-200 rounded">
                <Link to={'/about'}>About Us</Link>
              </li>
              <li className="hover:bg-gray-200 rounded">
                <Link to={'/contact'}>Contact Us</Link>
              </li>
              {!user?.email ? (
                <div className="flex flex-col">
                  <Link to={'/login'} className="btn mt-2">
                    Login
                  </Link>
                  <Link to={'/register'} className="btn mt-2">
                    Registration
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col mt-2">
                  <div className="avatar placeholder flex items-center justify-center gap-2">
                    <div className="bg-neutral text-neutral-content rounded-full p-2">
                      <FaUser />
                    </div>
                    <p>{user?.displayName}</p>
                  </div>
                  <Link to={'/dashboard'} className="btn mt-2">Dashboard</Link>
                  <button className="btn mt-2" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-center">
            BookWiz
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 px-1 text-center">
            <li className="hover:bg-gray-200 rounded">
              <Link to={'/books'}>Explore Books</Link>
            </li>
            <li className="hover:bg-gray-200 rounded">
              <Link to={'/about'}>About Us</Link>
            </li>
            <li className="hover:bg-gray-200 rounded">
              <Link to={'/contact'}>Contact Us</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-4">
          {!user?.email ? (
            <>
              <Link to={'/login'} className="btn">
                Login
              </Link>
              <Link to={'/register'} className="btn">
                Registration
              </Link>
            </>
          ) : (
            <>
              <div className="avatar placeholder flex items-center gap-2">
                <div className="bg-neutral text-neutral-content rounded-full p-2">
                  <FaUser />
                </div>
                <p>{user?.displayName}</p>
              </div>
              <Link to={'/dashboard'} className="btn">
                Dashboard
              </Link>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
