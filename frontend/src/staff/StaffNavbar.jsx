import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StaffNavbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-10 '>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
                <Link className='w-full text-3xl font-bold text-[#d4af37] m-4 cursor-pointer' to="/staff/dashboard">ABC Restaurant Staff</Link>
                <ul className='hidden md:flex'>
                    
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/reservations'>Manage Reservations</Link>
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/queries'>Manage Queries</Link>
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/orders'>Order Management</Link>
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/profile'>Update Profile</Link>
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/settings'>System Settings</Link>
                    <Link className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer' to='/staff/logout'>Logout</Link>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#d4af37] m-4 cursor-pointer'>ABC Restaurant Staff</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/dashboard'>Dashboard</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/reservations'>Manage Reservations</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/queries'>Manage Queries</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/orders'>Order Management</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/update-profile'>Update Profile</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/settings'>System Settings</Link>
                    </li>
                    <li className='p-4 hover:text-[#d4af37] transition duration-300 cursor-pointer'>
                        <Link to='/staff/logout'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StaffNavbar;
