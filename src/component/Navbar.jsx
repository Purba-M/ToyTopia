import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import pic from '../assets/user.png'

const Navbar = () => {
  const { user, logout} = useContext(Authcontext);
  const [isOpen, setIsOpen] = useState(false);

  const handlelogout = () => {
    logout()
      .then(() => alert("Logged Out Successfully"))
      .catch((error) => {
        console.log(error);
        alert("Logged Out Failed");
      });
  };

  return (
    <div className="navbar bg-[#93d0c6] shadow-sm sticky top-0 z-20 px-6 flex justify-between items-center">
      {/* Logo*/}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden btn btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <img className="h-10 w-10 rounded-full" src={logo} alt="Logo" />
        <NavLink to="/" className="text-xl text-rose-600 font-bold">
          ToyTopia
        </NavLink>
      </div>

     
      <div className="hidden lg:flex items-center gap-6">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "text-rose-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

    
      <div className="flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="relative group">
              <img
                src={pic}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer border"
              />
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {user.displayName}
              </span>
            </div>
            <button
              onClick={handlelogout}
              className="btn btn-outline btn-sm text-rose-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/auth/login"
            className="btn btn-outline btn-sm text-rose-600"
          >
            Login
          </NavLink>
        )}
      </div>

    
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-base-200 shadow-lg z-30 flex flex-col p-6 gap-4 lg:hidden transition-transform duration-300 ease-in-out">
          <button
            className="self-end btn btn-ghost btn-sm"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <NavLink
            to="/home"
            onClick={() => setIsOpen(false)}
            className="text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="text-lg"
          >
            My Profile
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
