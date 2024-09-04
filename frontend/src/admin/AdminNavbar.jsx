import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-10'>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
                <Link className='w-full text-2xl font-bold text-[#d4af37] cursor-pointer' to="/admin/dashboard">
                    ABC Admin
                </Link>
                <ul className='hidden md:flex space-x-6'>
                   
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/reservations'>
                        Manage Reservations
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/queries'>
                        Manage Queries
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/users'>
                        User Management
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/content'>
                        Content Management
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/reports'>
                        Report Generation
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/settings'>
                        System Settings
                    </Link>
                    <Link className='p-4 hover:scale-105 duration-300 cursor-pointer' to='/admin/orders'>
                        Order Management
                    </Link>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20' : 'fixed left-[-100%] duration-500 z-20'}>
                <h1 className='w-full text-3xl font-bold text-[#d4af37] m-4 cursor-pointer'>
                    ABC Admin
                </h1>
                <ul className='p-4 uppercase'>
                    
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/reservations'>Manage Reservations</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/queries'>Manage Queries</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/users'>User Management</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/content'>Content Management</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/reports'>Report Generation</Link>
                    </li>
                    <li className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/settings'>System Settings</Link>
                    </li>
                    <li className='p-4 hover:scale-105 duration-300 cursor-pointer'>
                        <Link onClick={handleNav} to='/admin/orders'>Order Management</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminNavbar;
