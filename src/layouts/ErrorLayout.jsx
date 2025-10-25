import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ErrorPage from "../pages/ErrorPage";
import page from "../assets/error.png"

const ErrorLayout = () => {
  return (
     <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 text-center">
      <img src={page} alt="404 Illustration" className="w-full max-w-[700px] h-auto mb-6 drop-shadow-lg animate-bounce-slow"/>

      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2">
        Oops! Page Not Found 
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Looks like you took a wrong turn. Let’s get you back to the fun!
      </p>

      {/* Go Home */}
      <a href="/" className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md hover:shadow-pink-300 transition-all">
        Back to Home 🏠
      </a>
    </div>
  );
};

export default ErrorLayout;
