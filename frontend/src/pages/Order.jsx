import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import burger from '../assets/burger.png'; // Example image, replace with actual images

const MenuItem = ({ title, price, imageSrc, addToCart, availability }) => (
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
      <button
        className={`bg-[#000000] w-full rounded-md font-medium py-3 text-white hover:bg-[#333333] transition-colors ${availability === 'No' ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={availability === 'No'}
        onClick={addToCart}
      >
        {availability === 'Yes' ? 'Order Now' : 'Not Available'}
      </button>
    </div>
  </div>
);

const Order = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]); // Cart state to store selected items
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  // Fetch categories from the API
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

  // Fetch food items from the API
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/menu/getallmenu');
        const fetchedFoodItems = response.data.map((menuItem) => ({
          id: menuItem.menuId,
          name: menuItem.item,
          price: menuItem.price,
          image: `http://localhost:8080/menu/image/${menuItem.menuId}`,
          category: menuItem.category.categoryName,
          description: menuItem.description,
          availability: menuItem.availability ? 'Yes' : 'No' // Adjust for boolean value
        }));
        setFoodItems(fetchedFoodItems);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  // Calculate the total price of items in the cart whenever the cart updates
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  // Function to submit the order
  const submitOrder = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty! Please add some items to the cart.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/orders', { items: cart });
      alert('Order submitted successfully!');
      setCart([]); // Clear the cart after successful submission
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit the order.');
    }
  };

  // Filter food items based on the search term and selected category
  const filteredItems = foodItems.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <header className='text-center bg-[#d19831] mt-20 py-8'>
        <p className='text-black font-bold text-3xl'>Order Your Favorite Dish</p>
      </header>
      
      {/* Search bar */}
      <div className='w-full px-4 bg-white text-center py-4'>
        <input
          type='text'
          placeholder='Search for food...'
          className='border p-2 w-[300px] rounded-md focus:ring-2 focus:ring-[#d19831] outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category selection */}
      <div className='w-full px-4 bg-white text-center py-4'>
        <div className='flex justify-center items-center font-semibold text-xl'>Categories</div>
        <select
          className='border p-2 rounded-md focus:ring-2 focus:ring-[#d19831] outline-none'
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

      {/* Display filtered food items */}
      <div className='w-full px-4 bg-gray-100 py-12'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {filteredItems.length ? (
            filteredItems.map((item) => (
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
            <p className='text-center w-full text-gray-600'>No food items found.</p>
          )}
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className='w-full px-4 bg-white text-center py-4'>
          <h2 className='text-2xl font-bold'>Cart</h2>
          <div className='flex flex-col items-center'>
            {cart.map((item) => (
              <div key={item.id} className='w-full border-b py-2'>
                <p>{item.name} - Rs. {item.price}</p>
                <button 
                  className='text-red-500' 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <h3 className='text-xl font-bold mt-4'>Total Price: Rs. {totalPrice}</h3>
            <button 
              className='bg-[#000000] w-[300px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-white'
              onClick={submitOrder}
            >
              Pay and Submit Order
            </button>
          </div>
        </div>
      )}

      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
