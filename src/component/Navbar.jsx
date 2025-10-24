import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user,logout } = useContext(Authcontext);
      const handlelogout=()=>{
        console.log("user trying to logout")
        logout().then(()=>{
        alert('you logged out')
        }).catch((error)=>{
        console.log(error)
        })
    }
  return (
    <div className="navbar bg-base-300 shadow-sm sticky top-0 z-10 flex justify-between px-6">
        <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src={logo}></img>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl text-rose-600 font-bold"
        >
          ToyTopia
        </NavLink>
      </div>
      <div>{user && user.email}</div>
     

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
        {user ? (
          <div className="flex items-center gap-3">
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {user.displayName}
              </span>
            </div>
            <button
              onClick={logout}
              className="btn btn-sm bg-gray-700 text-white"
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
    </div>
  );
};

export default Navbar;
