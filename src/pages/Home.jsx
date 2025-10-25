import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSlider from '../component/HeroSlider';
import PopularToys from '../component/PopularToys';
import ShopByAge from '../component/ShopByAge';
import Benefits from '../component/benefits';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | ToyTopia</title>
        <meta name="description" content="Discover the most popular toys at ToyTopia. Shop, explore, and enjoy!" />
      </Helmet>
           <HeroSlider></HeroSlider>
           <PopularToys></PopularToys>
           <ShopByAge></ShopByAge>
           <Benefits></Benefits>
        </div>
    );
};

export default Home;