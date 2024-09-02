import React from 'react';
import Kichen1 from '../assets/kichen1.jpg';
import Kichen2 from '../assets/kichen2.jpg';
import Kichen3 from '../assets/kichen3.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const GallerySection = ({ title, images }) => (
  <div className='w-full py-12 px-4 bg-white'>
    <div className='text-center mb-8'>
      <p className='text-[#d19831] font-bold text-3xl mb-2'>{title}</p>
      <hr className='border-[#d19831] border-2 mx-auto w-24 mb-4' />
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      {images.map((imgSrc, index) => (
        <div key={index} className='w-full overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
          <img className='w-full h-72 object-cover' src={imgSrc} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const dishes = [Kichen1, Kichen2, Kichen3];
  const facilities = [Kichen1, Kichen2, Kichen3];

  return (
    <div>
      <Navbar />
      
      <header className='w-full bg-[#d19831] h-60 flex flex-col justify-center items-center text-center rounded-b-3xl'>
        <h1 className='text-black font-bold text-6xl'>Gallery</h1>
        <p className='text-white font-semibold text-2xl mt-4'>Discover our vibrant dishes and cozy facilities</p>
      </header>

      <GallerySection title="Our Dishes" images={dishes} />
      <GallerySection title="Our Facilities" images={facilities} />

      <Footer />
    </div>
  );
};

export default Gallery;
