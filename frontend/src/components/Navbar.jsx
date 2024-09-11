import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if the user is logged in by checking sessionStorage
    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    // Handle logout logic
    const handleLogout = () => {
        sessionStorage.removeItem('user'); // Clear the user from session storage
        setIsLoggedIn(false); // Set logged-in state to false
        navigate('/signin'); // Redirect to signin page
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-10'>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
                <Link className='w-full text-3xl font-bold text-[#d19831] m-4 cursor-pointer' to="/">ABC Restaurant</Link>
                <ul className='hidden md:flex'>
                    {['Home', 'Menu', 'Reservation', 'Order', 'Contact', 'Gallery', 'About'].map((item) => (
                        <Link key={item} className='p-4 hover:scale-105 duration-300 cursor-pointer' to={`/${item.toLowerCase()}`}>{item}</Link>
                    ))}
                </ul>

                {/* Conditionally render based on login status */}
                {isLoggedIn ? (
                    <div className="flex items-center space-x-4">
                        {/* Profile/Avatar Icon */}
                        <Link
                            to="/profile"
                            className="flex items-center bg-[#d19831] text-black px-4 py-2 rounded-md hover:scale-105 duration-300"
                        >
                            <AiOutlineUser size={24} className="mr-2" />
                            Profile
                        </Link>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105 duration-300"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        className='bg-[#d19831] w-[200px] rounded-md font-bold my-4 mx-4 py-3 text-center text-black hover:scale-105 duration-300'
                        to="/signin"
                    >
                        Sign-in
                    </Link>
                )}

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#d19831] m-4 cursor-pointer'>ABC Restaurant</h1>
                <ul className='p-4 uppercase'>
                    {['Home', 'Menu', 'Services', 'Contact', 'About'].map((item) => (
                        <li key={item} onClick={handleNav} className='p-4 border-b border-b-gray-600 hover:scale-105 duration-300 cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
