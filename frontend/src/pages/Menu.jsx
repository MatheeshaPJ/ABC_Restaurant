import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MenuItem = ({ title, price, description, imageSrc }) => (
  <div className='bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300'>
    <img className='w-full h-52 object-cover' src={imageSrc} alt={title} />
    <div className='p-6 text-center'>
      <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
      <p className='text-gray-600 mt-2'>{description}</p>
      <p className='text-xl font-bold text-[#d19831] mt-4'>Rs. {price}/=</p>
      <button className='mt-6 bg-[#000000] text-white py-2 px-6 rounded-full hover:bg-[#d19831] transition-colors duration-300'>
        Order Now
      </button>
    </div>
  </div>
);

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/category/getallcategory');
        const fetchedCategories = response.data.map((cat) => cat.categoryName);
        setCategories(['All', ...fetchedCategories]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/menu/getallmenu');
        const fetchedFoodItems = response.data.map((menuItem) => ({
          id: menuItem.menuId,
          title: menuItem.item,
          price: menuItem.price,
          imageSrc: `http://localhost:8080/menu/image/${menuItem.menuId}`,
          category: menuItem.category.categoryName,
          description: menuItem.description,
          availability: menuItem.availability ? 'Yes' : 'No'
        }));
        setFoodItems(fetchedFoodItems);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  const filteredItems = foodItems.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-[#f8f9fa] to-[#d19831]'>
      <Navbar />
      <header className='text-center bg-[#d19831] py-10 mt-20'>
        <h1 className='text-5xl font-extrabold text-white'>Our Menu</h1>
        <p className='text-lg text-white mt-2'>Fresh, delicious food for every mood.</p>
      </header>

      <div className='w-full px-4 py-4 bg-white flex flex-col sm:flex-row justify-center items-center gap-4'>
        <input
          type='text'
          placeholder='Search for food...'
          className='border border-gray-300 p-2 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-[#f09c20] outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className='border p-2 rounded-md focus:ring-2 focus:ring-[#f09c20] outline-none w-full sm:w-48'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <section className='py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            ))
          ) : (
            <p className='text-center w-full text-gray-600'>No food items found. Please try a different search.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
