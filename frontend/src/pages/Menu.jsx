import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import burger from '../assets/burger.png'; // Example image, replace with actual images

const MenuItem = ({ title, price, description, imageSrc }) => (
  <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'>
    <img className='w-full h-48 object-cover' src={imageSrc} alt={title} />
    <div className='p-6'>
      <h2 className='text-2xl font-bold text-gray-800 text-center'>{title}</h2>
      <p className='text-gray-600 text-center mt-2'>{description}</p>
      <p className='text-xl font-bold text-center text-[#d19831] mt-4'>Rs. {price}/=</p>
      <button className='block bg-[#000000] text-white font-medium py-2 px-4 mt-6 mx-auto rounded-md hover:bg-[#d19831] transition-colors duration-300'>
        Order Now
      </button>
    </div>
  </div>
);

const Menu = () => {
  const menuItems = [
    {
      title: 'Classic Beef Burger',
      price: 1250,
      description: 'Juicy beef patty with fresh lettuce, tomato, and cheese.',
      imageSrc: burger,
    },
    {
      title: 'Spicy Chicken Wrap',
      price: 1150,
      description: 'Grilled chicken with a spicy sauce, wrapped in soft tortilla.',
      imageSrc: burger,
    },
    {
      title: 'Margherita Pizza',
      price: 1450,
      description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
      imageSrc: burger,
    },
    {
      title: 'Creamy Alfredo Pasta',
      price: 1350,
      description: 'Pasta in a rich and creamy Alfredo sauce with garlic bread.',
      imageSrc: burger,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-[#f8f9fa] to-[#d19831]'>
      <Navbar />
      <header className='text-center bg-[#d19831] py-8'>
        <h1 className='text-4xl font-bold text-white'>Our Menu</h1>
        <p className='text-lg text-white mt-2'>Delicious food made with love and the finest ingredients.</p>
      </header>
      <section className='py-12'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              price={item.price}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
