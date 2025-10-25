import React from "react";

import HeroSlider from "../component/HeroSlider";
import PopularToys from "../component/PopularToys";
import ShopByAge from "../component/ShopByAge";
import Benefits from "../component/benefits";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <PopularToys></PopularToys>
      <section className="0 mb-20">
        <ShopByAge />
      </section>
      <section className="relative z-20">
        <Benefits />
      </section>
    </div>
  );
};

export default Home;
