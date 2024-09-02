import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import burger from '../assets/burger.png';

const MenuItem = ({ title, price, imageSrc }) => (
  <div className='w-full shadow-lg flex flex-col p-4 rounded-lg hover:scale-105 transition-transform duration-300 bg-white border border-gray-200'>
    <img className='w-full h-48 object-cover rounded-t-lg' src={imageSrc} alt={title} />
    <div className='p-4'>
      <h2 className='text-2xl font-bold text-center mb-2'>{title}</h2>
      <p className='text-3xl font-bold text-center mb-4'>Rs. {price}/=</p>
      <div className='text-center font-medium mb-4'>
        <p className='py-1'>Delicious</p>
        <p className='py-1'>Tasty</p>
        <p className='py-1'>For You</p>
      </div>
      <button className='bg-[#000000] w-full rounded-md font-medium py-3 text-white hover:bg-[#333333] transition-colors'>
        Order Now
      </button>
    </div>
  </div>
);

const Order = () => {
  const menuItems = [
    { title: 'Burger', price: 1250, imageSrc: burger },
    { title: 'Wrap', price: 1250, imageSrc: burger },
    { title: 'Pizza', price: 1250, imageSrc: burger },
    { title: 'Pasta', price: 1250, imageSrc: burger },
  ];

  return (
    <div>
      <Navbar />
      
      <header className='text-center bg-[#d19831] py-8'>
        <p className='text-black font-bold text-3xl'>Order Your Favorite Dish</p>
      </header>
      
      <div className='w-full px-4 bg-gray-100 py-12'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {menuItems.map((item, index) => (
            <MenuItem key={index} title={item.title} price={item.price} imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
