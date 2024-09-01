import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Burger from '../assets/burger.png';

const Cards = () => {
  return (
    <div>
        <div className='text-5xl font-bold text-center py-8 bg-gray-300'><h1>GALLERY</h1></div>
    <div className='w-full py-[1rem] px-4 bg-gray-300'>
      <div className='max-w-[1240px] my- mx-auto px-3 py-3 bg-white rounded-3xl '>
        <Swiper
        
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation
         
          modules={[Navigation, Pagination]}  // Registering modules here
        >
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 1</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 2</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 3</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 4</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 5</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-90 duration-300 bg-white'>
              <img className='w-40 mx-auto mt-[-2rem]' src={Burger} alt="Burger" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger 6</h2>
              <p className='text-center text-4xl font-bold'>Rs.600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>asdsdasdad</p>
                <p className='py-2 border-b mx-8 '>asdsded eqf dasdad</p>
                <p className='py-2 border-b mx-8 '>asds qe dasdad</p>
              </div>
              <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-black'>Order</button>
            </div>
          </SwiperSlide>

          {/* Additional SwiperSlides for other cards */}

        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Cards;
