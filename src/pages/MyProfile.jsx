import React, { useContext, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import pic from "../assets/user.png";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyProfile = () => {
  const {user} =useContext(Authcontext);

  const [name, setName] = useState(user?.displayName ||"");
  const [photoURL, setPhotoURL] = useState(user?.photoURL||"");
  const [editMode, setEditMode] = useState(false);

  const handleUpdate=async(e)=> {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast("Failed to update profile. Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f9fafb] px-6 py-10 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <img
          src={pic?.photoURL || pic}
          alt="User"
          className="w-28 h-28 mx-auto rounded-full border-4 border-[#93d0c6] object-cover"
        />

        {!editMode ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {user?.email || "No email available"}
            </p>

            <p className="text-gray-700 mb-6">
              Welcome back{" "}
              <span className="font-semibold text-rose-600">
                {user?.displayName?.split(" ")[0] || "friend"}
              </span>
              ! We’re happy to see you again at{" "}
              <span className="text-[#93d0c6] font-semibold">ToyTopia</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setEditMode(true)}
                className="btn btn-outline text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Update Info
              </button>
              <Link
                to="/"
                className="btn btn-outline text-[#93d0c6] hover:bg-[#93d0c6] hover:text-white">
                My Toys
              </Link>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter new photo URL"
              className="input input-bordered w-full"
              required
            />
            <div className="flex justify-center gap-3">
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
