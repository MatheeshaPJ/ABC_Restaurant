import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: 'MATARA',
    reserveUnder: '',
    specialNote: '',
    contact: '',
  });

  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const user = sessionStorage.getItem('user');
    if (!user) {
      navigate('/signin'); // Redirect to sign-in page if not logged in
    } else {
      setUserId(JSON.parse(user).id); // Set userId from session storage
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkAvailability = async () => {
    try {
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

  const handleReservation = async () => {
    if (!selectedTable) {
      setStatusMessage('Please select a table.');
      return;
    }
    if (!userId) {
      setStatusMessage('User is not logged in.');
      return;
    }

    const reservationData = {
      reservationDate: formData.date,
      reservationTime: formData.time,
      location: formData.location,
      specialNote: formData.specialNote,
      reserveUnder: formData.reserveUnder,
      contact: formData.contact,
      status: 'PENDING',
      table: { tableId: selectedTable },
      customer: { userId: userId }, // Include userId in the request
    };

    try {
      const response = await fetch('http://localhost:8080/reservation/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData),
      });
      if (response.ok) {
        window.alert('Reservation made successfully!');
        navigate("/");
        setFormData({
          date: '',
          time: '',
          location: 'MATARA',
          reserveUnder: '',
          specialNote: '',
          contact: '',
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
          <h1 className="text-3xl font-semibold text-center">Reserve Your Table Here</h1>
          <p className="text-lg text-gray-500 mt-4 text-center">
            Please enter your intended Date & Time and Check Table Availability before Adding Reservation
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <label className="block text-lg font-medium">Date:</label>
              <input
                type="date"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Time:</label>
              <select
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
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
              <label className="block text-lg font-medium">Location:</label>
              <select
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="MATARA">Matara</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                className="w-full bg-[#000000] text-white py-4 rounded-full hover:bg-[#d19831] transition-colors duration-300"
                onClick={checkAvailability}
              >
                Check Available Tables
              </button>
            </div>

            <div className="md:col-span-2">
              {availableTables.length > 0 ? (
                <div className="mt-4">
                  <p className="text-lg font-semibold">Available Tables:</p>
                  <ul className="grid grid-cols-2 gap-4 mt-2">
                    {availableTables.map((table) => (
                      <li
                        key={table.tableId}
                        className={`p-4 border-2 rounded-lg text-center cursor-pointer ${
                          selectedTable === table.tableId
                            ? 'border-[#d19831] text-[#d19831]'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setSelectedTable(table.tableId)}
                      >
                        Table {table.tableId}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-4 text-red-500 text-center">{statusMessage}</p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium">Name for Reservation:</label>
              <input
                type="text"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                name="reserveUnder"
                value={formData.reserveUnder}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg font-medium">Special Note (Optional):</label>
              <textarea
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                name="specialNote"
                value={formData.specialNote}
                onChange={handleChange}
                placeholder="Any special requests or considerations"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg font-medium">Contact:</label>
              <input
                type="text"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter Contact Number"
              />
            </div>

            <div className="md:col-span-2">
              <button
                className="w-full bg-[#000000] text-white py-4 rounded-full hover:bg-[#d19831] transition-colors duration-300"
                onClick={handleReservation}
              >
                Make Reservation
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
