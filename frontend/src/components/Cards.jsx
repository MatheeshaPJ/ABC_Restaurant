import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Cards = () => {
  const [foodItems, setFoodItems] = useState([]);

  // Fetch food items from the API (same as in the Menu component)
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
          availability: menuItem.availability ? 'Yes' : 'No' // Adjust for boolean value
        }));
        setFoodItems(fetchedFoodItems.slice(0, 4)); // Limit to the first 4 items
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  return (
    <div>
      <div className='text-5xl font-bold text-center py-8 bg-gray-300'>
        <h1>Our Featured Menu</h1>
      </div>
      <div className='w-full py-[1rem] px-4 bg-gray-300'>
        <div className='max-w-[1240px] mx-auto px-3 py-3 bg-white rounded-3xl'>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation
            modules={[Navigation, Pagination]}  // Registering modules here
          >
            {foodItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
                  <img className='w-40 mx-auto mt-[-2rem]' src={item.imageSrc} alt={item.title} />
                  <h2 className='text-2xl font-bold text-center py-8'>{item.title}</h2>
                  <p className='text-center text-4xl font-bold'>Rs. {item.price}</p>
                  <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>{item.description}</p>
                  </div>
                  <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>
                    Order
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* See Full Menu Button */}
          <div className='text-center mt-8'>
            <Link to='/menu'>
              <button className='bg-[#d19831] text-white rounded-md font-medium w-[200px] mx-auto px-6 py-3 text-black'>
                See Full Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
