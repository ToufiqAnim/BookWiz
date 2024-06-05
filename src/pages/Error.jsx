import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <div className="text-center animate-bounce mb-8">
        <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg">Oops!</h1>
        <h2 className="text-5xl font-semibold mb-4 drop-shadow-lg">404</h2>
        <h3 className="text-2xl font-medium mb-2 drop-shadow-lg">Page Not Found</h3>
      </div>
      <p className="text-lg mb-6">The page you are looking for could not be found.</p>
      <Link 
        to="/" 
        className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition duration-300 transform hover:bg-gray-300 hover:text-gray-800 hover:scale-105 shadow-lg"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Error;
