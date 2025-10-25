import React from "react";
import { FaClock, FaKey, FaRocket, FaSun } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="bg-green-600 rounded-2xl py-5 mt-20">
    <div className="container mx-auto mt-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center place-items-center ">
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaClock className="text-6xl mx-auto mb-4"></FaClock>
        <h2>Fast Delivery</h2>
        <p>
          Find tracking information and order <br />
          details from Your Orders.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaRocket className="text-7xl mx-auto mb-4"></FaRocket>
        <h2>Fast Returns</h2>
        <p>Money back. If the item didn’t suit you.</p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaKey className="text-6xl mx-auto mb-4"></FaKey>
        <h2>Save Money</h2>
        <p>
          Save $5 every year compared to the
          <br /> monthly plan by paying yearly.
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center justify-center h-[180px]">
        <FaSun className="text-6xl mx-auto mb-4"></FaSun>
        <h2>Online Support</h2>
        <p>
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
