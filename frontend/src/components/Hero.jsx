import React from 'react';
import { ReactTyped } from 'react-typed';
import BG from '../assets/home-bg.jpg';

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <div
                className='absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-70'
                style={{ backgroundImage: `url(${BG})` }}
            ></div>
            <div className='absolute top-0 left-0 w-full bg-black opacity-30'></div>
            <div className='relative max-w-[1240px] mx-auto h-full flex items-center'>
                <div className='text-white text-center md:text-left'>
                    <p className='text-[#d19831] font-bold p-2'>Welcome!</p>
                    <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>Authentic Sri Lankan Cuisines </h1>
                    <div className='flex justify-center md:justify-start items-center mt-5'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Mixed up with Newest Tastes </p>
                        <div>
                        <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                            strings={['DRIVE', 'ORDER', 'EAT']}
                            typeSpeed={50}
                            backSpeed={60}
                            loop />
                            </div>
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-300'>dsancancjkdsncisj k ihbhbuhsdcscvicgsdvu fu ufw vug uug</p>
                    <button className='bg-[#d19831] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Make your Reservation </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
