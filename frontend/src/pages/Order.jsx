import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, price, imageSrc, addToCart, availability }) => (
  <div className='bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200'>
    <img className='w-full h-52 object-cover' src={imageSrc} alt={title} />
    <div className='p-6 text-center'>
      <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
      <p className='text-xl font-bold text-[#d19831] mt-4'>Rs. {price}/=</p>
      <button
        className={`mt-6 bg-[#000000] text-white py-2 px-6 rounded-full hover:bg-[#333333] transition-colors duration-300 ${availability === 'No' ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={availability === 'No'}
        onClick={addToCart}
      >
        {availability === 'Yes' ? 'Order Now' : 'Not Available'}
      </button>
    </div>
  </div>
);

const Order = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const user = sessionStorage.getItem('user');
    if (!user) {
      navigate('/signin'); // Redirect to sign-in page if not logged in
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/category/getallcategory');
        setCategories(['All', ...response.data.map(cat => cat.categoryName)]);
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
        setFoodItems(response.data.map(item => ({
          id: item.menuId,
          name: item.item,
          price: item.price,
          image: `http://localhost:8080/menu/image/${item.menuId}`,
          category: item.category.categoryName,
          availability: item.availability ? 'Yes' : 'No'
        })));
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  useEffect(() => {
    setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const submitOrder = async () => {
    if (cart.length === 0 || !deliveryAddress || !contact) {
      alert('Please fill out all fields before placing the order.');
      return;
    }
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    
    try {
      const orderItems = cart.map(item => ({ itemId: item.id, quantity: item.quantity, price: item.price }));
      await axios.post('http://localhost:8080/order/place-order', {
        items: orderItems,
        deliveryAddress,
        contact,
        finalPrice: totalPrice,
        userId: loggedInUser.id,
        userName: loggedInUser.name,
      });
      alert('Order placed successfully!');
      setCart([]);
      setDeliveryAddress('');
      setContact('');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Order submission failed.');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-[#f8f9fa] to-[#d19831]'>
      <Navbar />
      <header className='text-center bg-[#d19831] py-10 mt-20'>
        <h1 className='text-5xl font-extrabold text-white'>Order Your Favorite Dish</h1>
      </header>

      <div className='w-full px-4 py-4 bg-white flex flex-col sm:flex-row justify-center items-center gap-4'>
        <input
          type='text'
          placeholder='Search for food...'
          className='border border-gray-300 p-2 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-[#d19831] outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className='border p-2 rounded-md focus:ring-2 focus:ring-[#d19831] outline-none w-full sm:w-48'
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
          {foodItems.length ? (
            foodItems
              .filter(item => (selectedCategory === 'All' || item.category === selectedCategory) && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(item => (
                <MenuItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  imageSrc={item.image}
                  addToCart={() => addToCart(item)}
                  availability={item.availability}
                />
              ))
          ) : (
            <p className='text-center w-full text-gray-600'>No food items found. Please try a different search.</p>
          )}
        </div>
      </section>

      {cart.length > 0 && (
        <div className='w-full px-4 py-4 bg-white text-center'>
          <h2 className='text-2xl font-bold'>Cart</h2>
          {cart.map(item => (
            <div key={item.id} className='w-full border-b py-2'>
              <p>{item.name} - Rs. {item.price} x {item.quantity}</p>
              <button className='text-red-500' onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3 className='text-xl font-bold mt-4'>Total: Rs. {totalPrice}/=</h3>
          <input
            type='text'
            placeholder='Delivery Address'
            className='border p-2 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-[#d19831] outline-none mb-4'
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
          <input
            type='text'
            placeholder='Contact Number'
            className='border p-2 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-[#d19831] outline-none mb-4'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button className='bg-[#d19831] text-white font-bold py-2 px-6 rounded-md' onClick={submitOrder}>Place Order</button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Order;
