import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-black text-white py-8 px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Brand Section */}
        <div>
          <h1 className='text-3xl font-bold text-[#d19831] mb-4'>ABC Restaurant</h1>
          <p className='text-gray-400'>
            Serving authentic Sri Lankan cuisine with a modern twist. Join us for an unforgettable dining experience.
          </p>
          <div className='flex space-x-6 mt-4'>
            <FaFacebook className='text-2xl cursor-pointer hover:scale-110 duration-300' />
            <FaInstagram className='text-2xl cursor-pointer hover:scale-110 duration-300' />
            <FaTwitter className='text-2xl cursor-pointer hover:scale-110 duration-300' />
            <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-300' />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold text-[#d19831] mb-4'>Quick Links</h2>
          <ul>
            <li className='py-2 text-sm hover:underline'><Link to='/'>Home</Link></li>
            <li className='py-2 text-sm hover:underline'><Link to='/menu'>Menu</Link></li>
            <li className='py-2 text-sm hover:underline'><Link to='/reservation'>Reservation</Link></li>
            <li className='py-2 text-sm hover:underline'><Link to='/order'>Order</Link></li>
            <li className='py-2 text-sm hover:underline'><Link to='/contact'>Contact</Link></li>
            <li className='py-2 text-sm hover:underline'><Link to='/about'>About</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className='text-xl font-bold text-[#d19831] mb-4'>Contact Us</h2>
          <p className='text-gray-400 text-sm'>
            123 Matara Rd, Matara, Sri Lanka
          </p>
          <p className='text-gray-400 text-sm'>Phone: +94 123 456 789</p>
          <p className='text-gray-400 text-sm'>Email: info@abcrestaurant.lk</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className='text-xl font-bold text-[#d19831] mb-4'>Opening Hours</h2>
          <ul className='text-gray-400'>
            <li className='py-1 text-sm'>Mon-Fri: 10am - 10pm</li>
            <li className='py-1 text-sm'>Sat-Sun: 12pm - 12am</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='flex justify-between items-center mt-8 border-t border-gray-600 pt-4'>
        <p className='text-sm text-gray-400'>&copy; 2024 ABC Restaurant. All rights reserved.</p>
        <div className='text-sm text-gray-400'>
          <Link className='hover:underline' to='/privacy'>Privacy Policy</Link> | <Link className='hover:underline' to='/terms'>Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
