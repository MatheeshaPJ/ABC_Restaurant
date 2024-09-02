import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-10'>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
                <Link className='w-full text-3xl font-bold text-[#d19831] m-4 cursor-pointer' to="/">ABC Restaurant</Link>
                <ul className='hidden md:flex'>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/'>Home</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/menu'>Menu</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/reservation'>Reservation</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/order'>Order</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/contact'>Contact</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/gallery'>Gallery</Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/about'>About</Link>
                </ul>
                <Link className='bg-[#d19831] w-[200px] rounded-md  font-bold my-4 mx-4 py-3 text-center text-black hover:scale-105 duration-300' to="/signin">Sign-in</Link>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#d19831] m-4 cursor-pointer'>ABC Restaurant</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>Menu</li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>Services</li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>Contact</li>
                    <li className='p-4 hover:scale-105 duration-300 cursor-pointer'>About</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
