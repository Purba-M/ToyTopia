import { NavLink } from "react-router";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm sticky top-0 z-10 flex justify-between px-6">
      <div className="flex items-center">
        <img className='h-10 w-10 rounded-full' src={logo}></img>
        <NavLink to="/" className="btn btn-ghost text-xl text-rose-600 font-bold">
          ToyTopia
        </NavLink>
      </div>

      <div className="flex-none gap-3">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
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

        <NavLink to="/auth/login" className="btn btn-outline btn-sm text-rose-600">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
