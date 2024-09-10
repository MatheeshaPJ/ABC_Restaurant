import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: 'MATARA', // Only 'MATARA' is available
    reserveUnder: '',
    specialNote: '',
    contact: '', // New contact field
  });

  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fetch available tables based on the selected date, time, and location
  const checkAvailability = async () => {
    try {
      // Ensure date is formatted as 'YYYY-MM-DD'
      const formattedDate = new Date(formData.date).toISOString().split('T')[0];
      const response = await fetch(`http://localhost:8080/reservation/available-tables?date=${formattedDate}&time=${formData.time}&location=${formData.location}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tables = await response.json();
      setAvailableTables(tables);
      setStatusMessage(tables.length > 0 ? '' : 'No tables available for the selected time.');
    } catch (error) {
      console.error('Error checking table availability:', error);
      setStatusMessage('Error checking table availability.');
    }
  };

  // Handle reservation submission
  const handleReservation = async () => {
    if (!selectedTable) {
      setStatusMessage('Please select a table.');
      return;
    }

    const reservationData = {
      reservationDate: formData.date,
      reservationTime: formData.time,
      location: formData.location,
      specialNote: formData.specialNote,
      reserveUnder: formData.reserveUnder,
      contact: formData.contact, // Include contact in reservation data
      status: 'PENDING',
      table: { tableId: selectedTable },
      customer: { userId: 1 }, // Replace with session-based user ID later
    };

    try {
      const response = await fetch('http://localhost:8080/reservation/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
      if (response.ok) {
        window.alert('Reservation made successfully!');
        navigate("/"); // Use navigate instead of Navigate
        // Reset form
        setFormData({
          date: '',
          time: '',
          location: 'MATARA',
          reserveUnder: '',
          specialNote: '',
          contact: '', // Reset contact field
        });
        setAvailableTables([]);
        setSelectedTable('');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error making the reservation:', error);
      setStatusMessage('Error making the reservation.');
    }
  };

  return (
    <div>
      <Navbar />

      <header className='text-center bg-[#d19831] mt-20 py-8'>
        <p className='text-black font-bold text-3xl'>Make Your Reservation</p>
      </header>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white px-6 py-10 my-20 rounded-3xl border-2 border-gray-200">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">Make Your Reservation</h1>
          <p className="font-medium text-sm md:text-lg text-gray-500 mt-4 text-center">
            Please Enter Your Requirements
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16">

            <div className="space-y-6">
              <div>
                <label className="text-base md:text-lg font-medium">Date:</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="date"
                  placeholder="Select Date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-base md:text-lg font-medium">Time:</label>
                <select
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select Time</option>
                  <option value="17:00:00">5:00 PM</option>
                  <option value="18:00:00">6:00 PM</option>
                  <option value="19:00:00">7:00 PM</option>
                  <option value="20:00:00">8:00 PM</option>
                  <option value="21:00:00">9:00 PM</option>
                  <option value="22:00:00">10:00 PM</option>
                </select>
              </div>

              <div>
                <label className="text-base md:text-lg font-medium">Location:</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="location"
                  type="text"
                  value="MATARA" // Fixed value for now
                  readOnly
                />
              </div>

              <button
                className="w-full bg-[#000000] text-white text-base md:text-lg font-bold py-3 rounded-xl active:scale-95 transition-transform hover:scale-105"
                onClick={checkAvailability}
              >
                Check Availability
              </button>

              {statusMessage && <p className="text-red-600 mt-2">{statusMessage}</p>}
            </div>

            <div className="space-y-6">
              {availableTables.length > 0 && (
                <div>
                  <label className="text-base md:text-lg font-medium">Select Table:</label>
                  <select
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    name="table"
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                  >
                    <option value="">Select Table</option>
                    {availableTables.map((table) => (
                      <option key={table.tableId} value={table.tableId}>
                        Table {table.tableNumber} (Seats: {table.seatCount})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="text-base md:text-lg font-medium">Reservation Name:</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="reserveUnder"
                  placeholder="Enter Name"
                  type="text"
                  value={formData.reserveUnder}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-base md:text-lg font-medium">Contact:</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="contact"
                  placeholder="Enter Contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-base md:text-lg font-medium">Special Notes (Optional):</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  name="specialNote"
                  placeholder="Enter Special Notes"
                  type="text"
                  value={formData.specialNote}
                  onChange={handleChange}
                />
              </div>

              <button
                className="w-full bg-[#000000] text-white text-base md:text-lg font-bold py-3 rounded-xl active:scale-95 transition-transform hover:scale-105"
                onClick={handleReservation}
              >
                Reserve
              </button>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservation;
