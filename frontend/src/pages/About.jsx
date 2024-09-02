import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BG from '../assets/about-bg.jpg';

const About = () => {
  return (
    <div className='bg-black'>
      <Navbar />

      <div className='mt-10'>
        <div className='w-full bg-white py-16 px-4 mt-5'>
          <hr />
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <div className='bg-gray-300 rounded-tl-3xl rounded-br-3xl mb-[-3rem] mr-10 pt-5'>
              <img className='w-[750px] mx-auto ml-[-2rem] mb-[-2rem] hover:scale-105 duration-300 rounded-tl-3xl rounded-br-3xl shadow-2xl ' src={BG} alt="burger.png" />
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-[rgb(148,196,66)] font-bold'> HUNGRY FOODIES💦</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Welcome to ABC Restaurant – A Taste of Tradition and Innovation</h1>
              <p>At ABC Restaurant, we believe that every meal should be an experience. Nestled in the heart of Sri Lanka, our restaurant chain has been serving culinary delights for over [X years], blending the rich flavors of our heritage with a touch of modern flair. Whether you're craving a hearty Sri Lankan feast or a light and fresh bite, our menu is crafted to cater to every palate.

              </p>
              <p>Our Story What began as a humble family-run eatery has grown into a beloved restaurant chain, celebrated for its commitment to quality and authenticity. Our journey is rooted in the passion for food, inspired by traditional recipes passed down through generations, and enhanced by the creativity of our chefs. At ABC Restaurant, every dish tells a story, and every visit is a new chapter in our culinary adventure.</p>
              <p>Our Philosophy We take pride in sourcing the finest local ingredients, ensuring that every bite is fresh, flavorful, and sustainably prepared. Our commitment to excellence goes beyond the kitchen – it’s in the warm hospitality we offer, the inviting ambiance we create, and the memorable experiences we strive to deliver.</p>
              <p>Join Us Whether you're dining in with family, grabbing a quick bite, or celebrating a special occasion, ABC Restaurant is where cherished memories are made. Come and discover why we are a favorite among locals and travelers alike.</p>
              <p className='font-semibold'>Welcome to ABC Restaurant – Where tradition meets taste.</p>
            </div>


          </div>
          <hr />
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default About