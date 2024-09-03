import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className='bg-black text-white'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center py-4 px-6'>
        <h1 className='text-1xl font-bold text-[#d4af37]'>ABC Restaurant Admin</h1>
        <ul className='flex space-x-5'>
          <li>
            <Link
              to='/admin/dashboard'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to='/admin/reservations'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Manage Reservations
            </Link>
          </li>
          <li>
            <Link
              to='/admin/queries'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Manage Queries
            </Link>
          </li>
          <li>
            <Link
              to='/admin/management'
              className='hover:text-[#d4af37] transition duration-300'
            >
              User Management
            </Link>
          </li>
          <li>
            <Link
              to='/admin/management'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Content Management
            </Link>
          </li>
          <li>
            <Link
              to='/admin/reports'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Report Generation
            </Link>
          </li>
          <li>
            <Link
              to='/admin/settings'
              className='hover:text-[#d4af37] transition duration-300'
            >
              System Settings
            </Link>
          </li>
          <li>
            <Link
              to='/admin/orders'
              className='hover:text-[#d4af37] transition duration-300'
            >
              Order Management
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
