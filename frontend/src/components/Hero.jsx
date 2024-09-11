import React from 'react';
import BG from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-70' style={{ backgroundImage: `url(${BG})` }}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='relative max-w-[1240px] mx-auto h-full flex items-center'>
                <div className='text-white text-center md:text-left py-20'>
                    <p className='text-[#d19831] font-bold p-2'>Welcome to ABC Restaurant</p>
                    <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>Experience Authentic Sri Lankan Cuisines</h1>
                    <div className='flex justify-center md:justify-start items-center mt-5'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Blended with Modern Flavors</p>
                        
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-300 mb-10'>Taste the blend of tradition and innovation with every bite.</p>
                    <Link className='bg-[#d19831] w-[200px] rounded-md font-medium my-6 mx-auto px-3 py-3 text-black hover:scale-105 duration-300'to={"/reservation"}>Make Your Reservation</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
