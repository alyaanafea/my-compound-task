import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <header className="bg-blue-900 text-white shadow-md fixed w-full z-20 ">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold ">
          YourCar
        </Link>

        <nav className="hidden md:flex space-x-6  font-medium">
          <Link
            to="/"
            className="hover:bg-blue-900 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-blue-900 hover:text-white transition"
          >
            About Us
          </Link>
          {isLoggedIn && (
            <Link
              to="/profile"
              className="hover:bg-blue-900 hover:text-white transition"
            >
              Your Profile
            </Link>
          )}
        </nav>

        <div className="hidden md:block">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="px-3 py-2">
                Hello, {user.name} !
              </Link>
              <button
                className="ml-3 text-white px-3 py-2 rounded-md  cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                  navigate("/login");
                }}
              >
                logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-200 rounded-md text-blue-900 px-5 py-2  hover:bg-blue-900 hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md   ">
          <Link
            to="/"
            className="block text-blue-900 font-medium px-4 py-2 hover:bg-blue-900 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-blue-900 font-medium px-4 py-2 hover:bg-blue-900 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="block text-blue-900 font-medium  px-5 py-2  hover:bg-blue-900 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                }}
                className="block text-blue-900 font-medium  px-5 py-2  hover:bg-blue-900 hover:text-white  transition w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block text-blue-900 font-medium px-4 py-2 hover:bg-blue-900 hover:text-white transition"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
