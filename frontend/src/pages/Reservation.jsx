import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
  return (
    <div>
      <Navbar />

      <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-4xl bg-white px-6 py-10 rounded-3xl border-2 border-gray-200'>
          <h1 className='text-2xl md:text-3xl font-semibold text-center'>Make Your Reservation</h1>
          <p className='font-medium text-sm md:text-lg text-gray-500 mt-4 text-center'>
            Please Enter Your Requirements
          </p>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16'>

            <div className='space-y-6'>
              <div>
                <label className='text-base md:text-lg font-medium'>Date:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  name='date'
                  placeholder='Select Date'
                  type='date'
                />
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>Time:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Select Time'
                  type='time'
                />
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>Location:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Location'
                  type='text'
                />
              </div>

              <button className='w-full bg-blue-600 text-white text-base md:text-lg font-bold py-3 rounded-xl active:scale-95 transition-transform hover:scale-105'>
                Check Availability
              </button>
            </div>

            <div className='space-y-6'>
              <div className='flex justify-between'>
                <label className='text-base md:text-lg font-medium'>No of Available Seats:</label>
                <span>00</span>
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>Reservation Name:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Name'
                  type='text'
                />
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>No of Seats:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Number of Seats'
                  type='number'
                  min={0}
                />
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>Contact Info:</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Contact Info'
                  type='text'
                />
              </div>

              <div>
                <label className='text-base md:text-lg font-medium'>Special Notes (Optional):</label>
                <input
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter Special Notes'
                  type='text'
                />
              </div>

              <button className='w-full bg-blue-600 text-white text-base md:text-lg font-bold py-3 rounded-xl active:scale-95 transition-transform hover:scale-105'>
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
