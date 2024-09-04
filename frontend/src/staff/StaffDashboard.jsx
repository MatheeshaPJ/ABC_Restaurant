import React from 'react';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-[1240px] mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Staff Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/staff/reservations" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">Manage Reservations</h2>
                    </Link>
                    <Link to="/staff/queries" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">Manage Queries</h2>
                    </Link>
                    <Link to="/staff/orders" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">Manage Orders</h2>
                    </Link>
                    <Link to="/staff/profile" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">Update Profile</h2>
                    </Link>
                    <Link to="/staff/settings" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">System Settings</h2>
                    </Link>
                    <Link to="/" className="bg-[#1f1f1f] hover:bg-[#d4af37] text-center py-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold">Logout</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
