import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Inspiration from '../../Components/Inspiration/Inspiration';
import SlicedProducts from '../../Components/SlicedProducts/SlicedProducts';
import Welcome from '../../Components/Welcome/Welcome';
import Reviews from '../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Inspiration></Inspiration>
            <Welcome></Welcome>
            <SlicedProducts></SlicedProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;