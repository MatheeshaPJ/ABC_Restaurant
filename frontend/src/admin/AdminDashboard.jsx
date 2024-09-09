import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1240px] mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/admin/reservations" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Manage Reservations</h2>
            <p className="mt-2 text-sm">View and manage all customer reservations.</p>
          </Link>
          <Link to="/admin/queries" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Customer Queries</h2>
            <p className="mt-2 text-sm">Respond to customer queries and requests.</p>
          </Link>
          <Link to="/admin/orders" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Manage Orders</h2>
            <p className="mt-2 text-sm">View and manage all customer online orders.</p>
          </Link>
          <Link to="/admin/users" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">User Management</h2>
            <p className="mt-2 text-sm">Manage customer and staff accounts.</p>
          </Link>
          <Link to="/admin/menu" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Menu Management</h2>
            <p className="mt-2 text-sm">Manage restaurant menu.</p>
          </Link>
          <Link to="/admin/tables" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Table Management</h2>
            <p className="mt-2 text-sm">Manage customer and staff accounts.</p>
          </Link>
          <Link to="/admin/content" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Content Management</h2>
            <p className="mt-2 text-sm">Update menu items, promotions, and gallery.</p>
          </Link>
          <Link to="/admin/reports" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">Reports</h2>
            <p className="mt-2 text-sm">Generate reports on user activity and finances.</p>
          </Link>
          <Link to="/admin/settings" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold">System Settings</h2>
            <p className="mt-2 text-sm">Configure system-wide settings and preferences.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
