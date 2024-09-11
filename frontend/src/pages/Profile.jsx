import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get user data from sessionStorage
                const storedUser = sessionStorage.getItem('user');
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    setUser(userData);

                    // Extract user ID
                    const userId = userData.userId;

                    // Fetch reservations and orders
                    const reservationsResponse = await axios.get(`http://localhost:8080/reservation/customer/${userId}`);
                    setReservations(reservationsResponse.data);

                    const ordersResponse = await axios.get(`http://localhost:8080/order/customer/${userId}`);
                    setOrders(ordersResponse.data);
                } else {
                    navigate('/signin'); // Redirect to sign in if no user data is found
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        // Clear user data from sessionStorage
        sessionStorage.removeItem('user');
        navigate('/');
    };

    if (loading) {
        return <div className='text-center text-lg'>Loading...</div>;
    }

    return (
        <div className='bg-black min-h-screen flex flex-col items-center'>
            <div className='w-full max-w-4xl bg-white p-8 mt-6 rounded-3xl shadow-lg border border-gold-200'>
                <h1 className='text-4xl font-bold text-center mb-4 text-gold-500'>My Profile</h1>

                {/* User Details */}
                {user && (
                    <div className='mb-6'>
                        <h2 className='text-2xl font-semibold mb-2 text-gold-400'>User Details</h2>
                        <div className='p-4 border border-gold-400 rounded-lg'>
                            <p className='text-lg'><strong>Email:</strong> {user.email}</p>
                            <p className='text-lg'><strong>First Name:</strong> {user.firstName}</p>
                            <p className='text-lg'><strong>Last Name:</strong> {user.lastName}</p>
                            <p className='text-lg'><strong>Address:</strong> {user.address}</p>
                            <p className='text-lg'><strong>Role:</strong> {user.role}</p>
                        </div>
                    </div>
                )}

                {/* Reservations */}
                <div className='mb-6'>
                    <h2 className='text-2xl font-semibold mb-2 text-gold-400'>Reservations</h2>
                    <div className='border border-gold-400 rounded-lg'>
                        {reservations.length > 0 ? (
                            reservations.map((reservation) => (
                                <div key={reservation.id} className='p-4 border-b last:border-b-0 border-gold-400'>
                                    <p><strong>Date:</strong> {reservation.reservationDate}</p>
                                    <p><strong>Time:</strong> {reservation.reservationTime}</p>
                                    <p><strong>Location:</strong> {reservation.location}</p>
                                    <p><strong>Status:</strong> {reservation.status}</p>
                                </div>
                            ))
                        ) : (
                            <p className='p-4 text-gray-500'>No reservations found.</p>
                        )}
                    </div>
                </div>

                {/* Orders */}
                <div className='mb-6'>
                    <h2 className='text-2xl font-semibold mb-2 text-gold-400'>Orders</h2>
                    <div className='border border-gold-400 rounded-lg'>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <div key={order.id} className='p-4 border-b last:border-b-0 border-gold-400'>
                                    <p><strong>Order ID:</strong> {order.id}</p>
                                    <p><strong>Date:</strong> {order.date}</p>
                                    <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                                    <p><strong>Status:</strong> {order.status}</p>
                                </div>
                            ))
                        ) : (
                            <p className='p-4 text-gray-500'>No orders found.</p>
                        )}
                    </div>
                </div>

                {/* Logout Button */}
                <div className='text-center'>
                    <button
                        onClick={handleLogout}
                        className='bg-black text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-gold-600 transition'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
