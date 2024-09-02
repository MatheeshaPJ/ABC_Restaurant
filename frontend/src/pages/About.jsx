import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BG from '../assets/about-bg.jpg';

const About = () => {
  return (
    <div className='bg-black'>
      <Navbar />

      <section className='bg-white py-16 px-4 mt-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='flex justify-center md:justify-end'>
           

            <div className='flex flex-col justify-center'>
              <div className='bg-gray-300 rounded-tl-3xl rounded-br-3xl mb-[-3rem] mr-10 pt-5'>
              <img className='w-[750px] mx-auto ml-[-2rem] mb-[-2rem] hover:scale-105 duration-300 rounded-tl-3xl rounded-br-3xl shadow-2xl ' src={BG} alt="burger.png" />
              </div>
            </div>




          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-[rgb(148,196,66)] font-bold text-lg uppercase tracking-wide'>
              Hungry Foodies💦
            </p>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-4'>
              Welcome to ABC Restaurant – A Taste of Tradition and Innovation
            </h1>
            <p className='text-gray-700 leading-relaxed'>
              At ABC Restaurant, we believe that every meal should be an experience. Nestled in the heart of Sri Lanka, our restaurant chain has been serving culinary delights for over <strong>25 years </strong> , blending the rich flavors of our heritage with a touch of modern flair. Whether you're craving a hearty Sri Lankan feast or a light and fresh bite, our menu is crafted to cater to every palate.
            </p>
            <p className='mt-4 text-gray-700 leading-relaxed'>
              <strong>Our Story:</strong> What began as a humble family-run eatery has grown into a beloved restaurant chain, celebrated for its commitment to quality and authenticity. Our journey is rooted in the passion for food, inspired by traditional recipes passed down through generations, and enhanced by the creativity of our chefs. At ABC Restaurant, every dish tells a story, and every visit is a new chapter in our culinary adventure.
            </p>
            <p className='mt-4 text-gray-700 leading-relaxed'>
              <strong>Our Philosophy:</strong> We take pride in sourcing the finest local ingredients, ensuring that every bite is fresh, flavorful, and sustainably prepared. Our commitment to excellence goes beyond the kitchen – it’s in the warm hospitality we offer, the inviting ambiance we create, and the memorable experiences we strive to deliver.
            </p>
            <p className='mt-4 text-gray-700 leading-relaxed'>
              <strong>Join Us:</strong> Whether you're dining in with family, grabbing a quick bite, or celebrating a special occasion, ABC Restaurant is where cherished memories are made. Come and discover why we are a favorite among locals and travelers alike.
            </p>
            <p className='mt-6 font-semibold text-gray-900'>
              Welcome to ABC Restaurant – Where tradition meets taste.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
