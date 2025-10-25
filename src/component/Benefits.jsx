import React from "react";
import { FaClock, FaKey, FaRocket, FaSun } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fcb69f] rounded-2xl py-5 mt-20">
    <div className="container mx-auto mt-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center place-items-center ">
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaClock className="text-6xl mx-auto mb-4"></FaClock>
        <h2 className="font-bold text-white text-[30px]">Fast Delivery</h2>
        <p className="text-white ">
          Find tracking information and order <br />
          details from Your Orders.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaRocket className="text-7xl mx-auto mb-3"></FaRocket>
        <h2 className="font-bold text-white text-[30px]">Fast Returns</h2>
        <p className="text-white ">Money back. If the item didn’t suit you.</p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaKey className="text-6xl mx-auto mb-4"></FaKey>
        <h2 className="font-bold text-white text-[30px]">Save Money</h2>
        <p className="text-white ">
          Save $5 every year compared to the
          <br /> monthly plan by paying yearly.
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaSun className="text-6xl mx-auto mb-4"></FaSun>
        <h2  className="font-bold text-white text-[30px]">Online Support</h2>
        <p className="text-white "> 
          Online Support Use our 24/7 customer hotline so you’re<br/> not alone if
          you have a question
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Benefits;
