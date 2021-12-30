import React from 'react'
import '../../app.css';
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/Herosection/HeroSection';

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
        </>
    )
}

export default Home;