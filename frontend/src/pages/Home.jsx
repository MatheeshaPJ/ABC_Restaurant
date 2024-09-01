import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Offers from "../components/Offers";


const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Analytics />
      <Offers/>
      <Cards />
      <Newsletter />
      <Footer />
      
    </div>
  )
}

export default Home