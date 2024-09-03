import React from 'react';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-between'>
 
      
      <div className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8'>Admin Dashboard</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link to='/admin/reservations' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>Reservations</h2>
              <p>View and manage all customer reservations.</p>
            </Link>
            <Link to='/admin/queries' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>Customer Queries</h2>
              <p>Respond to customer queries and requests.</p>
            </Link>
            <Link to='/admin/orders' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>Orders</h2>
              <p>View and manage all customer online orders.</p>
            </Link>
            <Link to='/admin/users' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>User Management</h2>
              <p>Manage customer and staff accounts.</p>
            </Link>
            <Link to='/admin/content' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>Content Management</h2>
              <p>Update menu items, promotions, and gallery.</p>
            </Link>
            <Link to='/admin/reports' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>Reports</h2>
              <p>Generate reports on user activity and finances.</p>
            </Link>
            <Link to='/admin/settings' className='bg-[#d19831] rounded-lg p-6 hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold mb-4'>System Settings</h2>
              <p>Configure system-wide settings and preferences.</p>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AdminDashboard;
