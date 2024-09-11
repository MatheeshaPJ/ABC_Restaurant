import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Offers from "../components/Offers";
import Promotion from '../components/Promotion';

const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Promotion />
      <Offers />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;
