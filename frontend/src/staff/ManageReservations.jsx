import React, { useState, useEffect } from 'react';
import StaffNavbar from './StaffNavbar';

const reservationsData = [
    { id: 1, name: 'John Doe', date: '2024-09-10', time: '19:00', guests: 2, status: 'Pending' },
    { id: 2, name: 'Jane Smith', date: '2024-09-11', time: '20:00', guests: 4, status: 'Confirmed' },
    { id: 3, name: 'Sam Wilson', date: '2024-09-12', time: '18:30', guests: 3, status: 'Cancelled' },
    // Add more sample data as needed
];

const ManageReservations = () => {
    const [reservations, setReservations] = useState(reservationsData);

    const handleStatusChange = (id, newStatus) => {
        setReservations((prevReservations) =>
            prevReservations.map((reservation) =>
                reservation.id === id ? { ...reservation, status: newStatus } : reservation
            )
        );
    };

    return (
        <div>
             <StaffNavbar/>
            <div className="min-h-screen bg-black text-white p-6 pt-20">
                <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Manage Reservations</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-[#1f1f1f] rounded-lg">
                        <thead>
                            <tr>
                                <th className="px-6 py-4 text-left">Customer Name</th>
                                <th className="px-6 py-4 text-left">Date</th>
                                <th className="px-6 py-4 text-left">Time</th>
                                <th className="px-6 py-4 text-left">Guests</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation) => (
                                <tr key={reservation.id} className="border-b border-gray-700">
                                    <td className="px-6 py-4">{reservation.name}</td>
                                    <td className="px-6 py-4">{reservation.date}</td>
                                    <td className="px-6 py-4">{reservation.time}</td>
                                    <td className="px-6 py-4">{reservation.guests}</td>
                                    <td className="px-6 py-4">{reservation.status}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md mr-2"
                                            onClick={() => handleStatusChange(reservation.id, 'Confirmed')}
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                                            onClick={() => handleStatusChange(reservation.id, 'Cancelled')}
                                        >
                                            Cancel
                                        </button>
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

export default ManageReservations;
