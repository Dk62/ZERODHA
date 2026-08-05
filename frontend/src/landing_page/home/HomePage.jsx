import React from 'react';
import Awards from './Awards';
import HeroSection from './HeroSection';
import Education from './Education';
import Stats from './stats';
import Pricing from './pricing';


import OpenAccount from '../OpenAccount';
function HomePage() {
    return ( 
        <>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
       
     );
}

export default HomePage;