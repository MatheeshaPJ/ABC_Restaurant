import React, { useState } from 'react';
import StaffNavbar from './StaffNavbar';

const ordersData = [
    { id: 1, customer: 'John Doe', item: 'Burger', quantity: 2, total: 2500, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', item: 'Pizza', quantity: 1, total: 1500, status: 'Preparing' },
    { id: 3, customer: 'Sam Wilson', item: 'Pasta', quantity: 3, total: 4500, status: 'Delivered' },
    // Add more sample orders as needed
];

const ManageOrders = () => {
    const [orders, setOrders] = useState(ordersData);

    const handleStatusChange = (id, newStatus) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (

       <div>
            <StaffNavbar/>
            <div className="min-h-screen bg-black text-white p-6 pt-20">
                <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Order Management</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-[#1f1f1f] rounded-lg">
                        <thead>
                            <tr>
                                <th className="px-6 py-4 text-left">Customer Name</th>
                                <th className="px-6 py-4 text-left">Item Ordered</th>
                                <th className="px-6 py-4 text-left">Quantity</th>
                                <th className="px-6 py-4 text-left">Total (Rs.)</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-gray-700">
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">{order.item}</td>
                                    <td className="px-6 py-4">{order.quantity}</td>
                                    <td className="px-6 py-4">{order.total}</td>
                                    <td className="px-6 py-4">{order.status}</td>
                                    <td className="px-6 py-4 text-center">
                                        <select
                                            className="bg-gray-800 text-white p-2 rounded-md"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Preparing">Preparing</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    );
};

export default ManageOrders;
