import React from "react";
import {FaGamepad,FaCarSide,FaPuzzlePiece,FaDolly,FaDog,} from "react-icons/fa";

const ShopByAge = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h2 className="text-[40px] font-bold text-black">Shop by Category</h2>
        <p>
          We have products of all types. Our assistants always help you to do
          right choice.
        </p>
      </div>

      <div className="grid md:grid-cols-5 grid-cols-1 gap-10 md:gap-30 items-center justify-center mt-10 ">
        <div className="flex flex-col items-center ">
          <div className="bg-sky-400 text-white p-6 rounded-3xl text-8xl  transition-transform duration-300  hover:scale-80 hover:-translate-y-3 hover:shadow-xl" style={{
       borderRadius: "45% 55% 60% 40% / 50% 40% 60% 50%",}}>
          <FaPuzzlePiece />
          </div>
          <p className="mt-2 text-center font-semibold hover:text-blue-500 cursor-pointer">
            Building Toys
            <br/>
            Learning
          </p>
        </div>
        {/* 2 */}
         <div className="flex flex-col items-center">
        <div className="bg-green-500 text-white p-6 rounded-3xl text-8xl transition-transform duration-300  hover:scale-80 hover:-translate-y-3 hover:shadow-xl " style={{
       borderRadius: "45% 55% 60% 40% / 50% 40% 60% 50%",}}>
          <FaDolly />
        </div>
        <p className="mt-2 text-center font-semibold hover:text-blue-500 cursor-pointer">
          Dolls &<br />Dollhouse
        </p>
      </div>
      {/* 3 */}
      <div className="flex flex-col items-center">
        <div className="bg-cyan-500 text-white p-6 rounded-3xl text-8xl transition-transform duration-300  hover:scale-80 hover:-translate-y-3 hover:shadow-xl " style={{
       borderRadius: "45% 55% 60% 40% / 50% 40% 60% 50%", }}>
          <FaGamepad />
        </div>
        <p className="mt-2 text-center font-semibold hover:text-blue-500 cursor-pointer">
          Video Games<br />for Kids
        </p>
      </div>
      {/* 4 */}
      <div className="flex flex-col items-center">
        <div className="bg-red-400 text-white p-6 rounded-4xl text-8xl transition-transform duration-300  hover:scale-80 hover:-translate-y-3 hover:shadow-xl " style={{
       borderRadius: "45% 55% 60% 40% / 50% 40% 60% 50%",}}>
          <FaDog />
        </div>
        <p className="mt-2 text-center font-semibold hover:text-blue-500 cursor-pointer">
          Stuffed Animals<br />& Plush Toys
        </p>
      </div>
      {/* 5 */}
      <div className="flex flex-col items-center">
        <div className="bg-amber-400 text-white p-6 rounded-3xl text-8xl transition-transform duration-300  hover:scale-80 hover:-translate-y-3 hover:shadow-xl " style={{
       borderRadius: "45% 55% 60% 40% / 50% 40% 60% 50%",
     }}>
          <FaCarSide />
        </div>
        <p className="mt-2 text-center font-semibold hover:text-blue-500 cursor-pointer">
          Remote Control<br />Vehicles
        </p>
      </div>
      </div>
    </div>
  );
};

export default ShopByAge;
