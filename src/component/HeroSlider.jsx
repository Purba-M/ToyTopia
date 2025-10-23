import React from 'react';
import toy1 from '../assets/toy1.png'
import toy2 from '../assets/toy2.png'
import toy3 from '../assets/toy3.png'

const HeroSlider = () => {
    return (
       <div className="carousel w-full">
        
  <div id="slide1" className="carousel-item relative w-full  bg-gradient-to-r from-[#1C1F4C] to-[#2E336F] text-white">
      <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fun Toys <br /> For Your Kids
            </h1>
            <p className="text-gray-200 max-w-md mx-auto lg:mx-0">
              Browse through our exciting toy collection to make playtime full
              of fun, learning, and imagination.
            </p>
            <button className="bg-[#FFB703] hover:bg-[#E99D06] text-[#1C1F4C] font-semibold px-8 py-3 rounded-md transition">
             Explore Now
            </button>
          </div>
    <img
      src={toy1}
      className="w-[60%] md:w-[40%] drop-shadow-2xl " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <div className="flex-1 text-center lg:text-left space-y-6 bg-gradient-to-r from-[#1C1F4C] to-[#2E336F]">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fun Loving <br /> New age Toys
            </h1>
            <p className="text-gray-200 max-w-md mx-auto lg:mx-0">
              Well‑engineered products for enjoyable means of children with brain development and inspiring active play.
            </p>
            <button className="bg-[#FFB703] hover:bg-[#E99D06] text-[#1C1F4C] font-semibold px-8 py-3 rounded-md transition">
              Explore Now
            </button>
          </div>
    <img
      src={toy2}
      className="w-[80%] md:w-[40%] drop-shadow-2xl " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className="flex-1 text-center lg:text-left space-y-6 bg-gradient-to-r from-[#1C1F4C] to-[#2E336F]">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fun Loving <br /> New age Toys
            </h1>
            <p className="text-gray-200 max-w-md mx-auto lg:mx-0">
              Well‑engineered products for enjoyable means of children with brain development and inspiring active play.
            </p>
            <button className="bg-[#FFB703] hover:bg-[#E99D06] text-[#1C1F4C] font-semibold px-8 py-3 rounded-md transition">
              Explore Now
            </button>
          </div>
    <img
      src={toy3}
      className="w-full w-[80%] md:w-[40%] drop-shadow-2xl " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
    );
};

export default HeroSlider;