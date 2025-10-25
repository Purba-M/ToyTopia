import React, { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import pic from '../assets/user.png'
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f9fafb] px-6 py-10 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
     <img
          src={pic}
          alt="User"
          className="w-28 h-28 mx-auto rounded-full border-4 border-[#93d0c6] object-cover"
        />

        
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          {user?.displayName || "Guest User"}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {user?.email || "No email available"}
        </p>

        <p className="text-gray-700 mb-6">
          Welcome back{" "}
          <span className="font-semibold text-rose-600">
            {user?.displayName?.split(" ")[0]||"friend"}
          </span>! We’re happy to see you again at <span className="text-[#93d0c6] font-semibold">ToyTopia</span>.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button className="btn btn-outline text-rose-600 hover:bg-rose-600 hover:text-white">
            Update Info
          </button>
          <Link to='/' className="btn btn-outline text-[#93d0c6] hover:bg-[#93d0c6] hover:text-white">
            My Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
