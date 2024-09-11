import React, { useState, useEffect } from 'react';
import AdminNavbar from '../AdminNavbar';


const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, status) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          )
        );
      } else {
        throw new Error('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>

<AdminNavbar/>
      <div className='flex-grow mt-16'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>Order Management</h1>

          <div className='bg-[#262626] p-6 rounded-lg'>
            <table className='w-full text-left'>
              <thead>
                <tr className='bg-[#333333]'>
                  <th className='p-4 text-[#d4af37]'>Order ID</th>
                  <th className='p-4 text-[#d4af37]'>Customer Name</th>
                  <th className='p-4 text-[#d4af37]'>Order Date</th>
                  <th className='p-4 text-[#d4af37]'>Total Amount</th>
                  <th className='p-4 text-[#d4af37]'>Status</th>
                  <th className='p-4 text-[#d4af37]'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className='border-b border-[#333333]'>
                    <td className='p-4'>{order.id}</td>
                    <td className='p-4'>{order.customerName}</td>
                    <td className='p-4'>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td className='p-4'>Rs. {order.totalAmount}</td>
                    <td className='p-4'>
                      <select
                        className='p-2 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      >
                        <option value='Pending'>Pending</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Completed'>Completed</option>
                      </select>
                    </td>
                    <td className='p-4'>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => alert(`View details for Order ID: ${order.id}`)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ManageOrder;
