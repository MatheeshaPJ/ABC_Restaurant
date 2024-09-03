import React, { useState, useEffect } from 'react';


const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    // Mock fetching data from API or backend service
    const fetchReservations = async () => {
      const response = await fetch('/api/reservations'); // Replace with actual API endpoint
      const data = await response.json();
      setReservations(data);
    };

    fetchReservations();
  }, []);

  const handleReservationAction = (reservationId, action) => {
    // Logic to handle reservation action (confirm, modify, cancel)
    console.log(`Action: ${action} on reservation ID:`, reservationId);
    // Clear the selected reservation after action
    setSelectedReservation(null);
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-between'>
 

      <div className='flex-grow'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>Manage Reservations</h1>

          {/* Reservations List */}
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-[#1c1c1c] text-white'>
              <thead>
                <tr>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Customer</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Service</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Date</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Time</th>
                  <th className='px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className='hover:bg-[#333333]'>
                    <td className='px-6 py-4 border-b border-gray-600'>{reservation.customerName}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{reservation.service}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{new Date(reservation.date).toLocaleDateString()}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>{reservation.time}</td>
                    <td className='px-6 py-4 border-b border-gray-600'>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 mr-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => handleReservationAction(reservation.id, 'Confirm')}
                      >
                        Confirm
                      </button>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 mr-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => handleReservationAction(reservation.id, 'Modify')}
                      >
                        Modify
                      </button>
                      <button
                        className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                        onClick={() => handleReservationAction(reservation.id, 'Cancel')}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reservation Details and Actions */}
          {selectedReservation && (
            <div className='mt-8'>
              <h2 className='text-2xl font-bold text-center mb-4 text-[#d4af37]'>Reservation Details</h2>
              <div className='max-w-[600px] mx-auto bg-[#262626] p-6 rounded-lg'>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='service'>
                    Service
                  </label>
                  <p className='bg-black text-white p-2 rounded-md'>{selectedReservation.service}</p>
                </div>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='date'>
                    Date
                  </label>
                  <p className='bg-black text-white p-2 rounded-md'>{new Date(selectedReservation.date).toLocaleDateString()}</p>
                </div>
                <div className='mb-4'>
                  <label className='block text-[#d4af37] text-sm font-bold mb-2' htmlFor='time'>
                    Time
                  </label>
                  <p className='bg-black text-white p-2 rounded-md'>{selectedReservation.time}</p>
                </div>
                <div className='flex justify-center'>
                  <button
                    className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300 mr-2'
                    onClick={() => handleReservationAction(selectedReservation.id, 'Confirm')}
                  >
                    Confirm
                  </button>
                  <button
                    className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300 mr-2'
                    onClick={() => handleReservationAction(selectedReservation.id, 'Modify')}
                  >
                    Modify
                  </button>
                  <button
                    className='bg-[#d4af37] text-black px-4 py-2 rounded-md hover:scale-105 duration-300'
                    onClick={() => handleReservationAction(selectedReservation.id, 'Cancel')}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default ManageReservations;
