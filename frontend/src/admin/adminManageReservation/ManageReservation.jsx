import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [statusMap, setStatusMap] = useState({});  // This will store the status for each reservation

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    try {
      const result = await axios.get('http://localhost:8080/reservation/getallreservation');
      setReservations(result.data);

      // Initialize the statusMap based on the current status of each reservation
      const initialStatusMap = {};
      result.data.forEach((reservation) => {
        initialStatusMap[reservation.reservationId] = reservation.status;
      });
      setStatusMap(initialStatusMap);

    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const updateReservationStatus = async (id) => {
    try {
      const status = statusMap[id];
      const response = await axios.put(`http://localhost:8080/reservation/update-status/${id}`, { status });
      console.log("Status updated:", response.data);
      loadReservations();  // Reload reservations after status update
    } catch (error) {
      console.error('Error updating reservation status:', error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/reservation/delete/${id}`);
      console.log("Reservation deleted:", response.data);
      loadReservations();  // Reload reservations after deletion
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setStatusMap({
      ...statusMap,
      [id]: newStatus,  // Update the status for the specific reservation
    });
  };

  return (
    <div className="container mx-auto p-4 bg-white h-screen">
      <AdminNavbar />

      <div className="mt-20">
        <h1 className="text-center text-2xl font-bold text-[#f09c20]">RESERVATION MANAGEMENT</h1>
      </div>

      <div className="overflow-x-auto shadow-xl mt-5">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Reserve Under</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Customer</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Table</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Date</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Time</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Location</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Special Note</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Timestamp</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Status</th>
              <th className="px-4 py-2 text-center text-sm text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.reservationId} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="px-4 py-2 text-gray-700 text-center font-bold">{reservation.reservationId}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.reserveUnder}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.customer.userId}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.table.tableNo}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.reservationDate}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.reservationTime}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.location}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.specialNote || 'N/A'}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.timestamp}</td>
                <td className="px-4 py-2 text-gray-700 text-center">{reservation.status}</td>
                <td className="px-4 py-2 text-gray-700 text-center">
                  <select
                    value={statusMap[reservation.reservationId]}  // Bind each dropdown to its specific reservation status
                    onChange={(e) => handleStatusChange(reservation.reservationId, e.target.value)}
                    className="outline outline-gray-500 text-gray-700 py-1 px-2 rounded mr-2 text-xs"
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="APPROVED">APPROVED</option>
                    <option value="DECLINED">DECLINED</option>
                  </select>
               
                  <button
                    onClick={() => updateReservationStatus(reservation.reservationId)}
                    className="outline outline-green-600 text-green-700 hover:bg-green-700 hover:text-white hover:outline-none py-1 px-3 rounded mr-2 text-xs"
                  >
                    Update Status
                  </button>
                  <button
                    onClick={() => deleteReservation(reservation.reservationId)}
                    className="outline outline-red-600 text-red-700 hover:bg-red-700 hover:text-white hover:outline-none py-1 px-3 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationManagement;
