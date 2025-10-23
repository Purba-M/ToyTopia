import React from 'react';
import HeroSlider from '../component/HeroSlider';
import PopularToys from '../component/PopularToys';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <PopularToys></PopularToys>
        </div>
    );
};

export default Home;