import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';


const SystemSettings = () => {
  const [businessHours, setBusinessHours] = useState('9:00 AM - 10:00 PM');
  const [serviceAvailability, setServiceAvailability] = useState('Open');
  const [paymentGateway, setPaymentGateway] = useState('Stripe');

  const handleSaveSettings = async () => {
    try {
      const settings = {
        businessHours,
        serviceAvailability,
        paymentGateway,
      };

      // Replace with your actual API endpoint for saving settings
      const response = await fetch('/api/system-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        alert('Settings saved successfully');
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>
<AdminNavbar/>

      <div className='flex-grow mt-16'>
        <div className='max-w-[1240px] mx-auto py-12'>
          <h1 className='text-4xl font-bold text-center mb-8 text-[#d4af37]'>System Settings</h1>

          <div className='bg-[#262626] p-6 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4 text-[#d4af37]'>Business Hours</h2>
            <input
              className='w-full p-3 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              type='text'
              value={businessHours}
              onChange={(e) => setBusinessHours(e.target.value)}
            />

            <h2 className='text-2xl font-bold mt-8 mb-4 text-[#d4af37]'>Service Availability</h2>
            <select
              className='w-full p-3 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              value={serviceAvailability}
              onChange={(e) => setServiceAvailability(e.target.value)}
            >
              <option value='Open'>Open</option>
              <option value='Closed'>Closed</option>
            </select>

            <h2 className='text-2xl font-bold mt-8 mb-4 text-[#d4af37]'>Payment Gateway</h2>
            <select
              className='w-full p-3 rounded-md bg-[#1c1c1c] text-white border border-[#d4af37]'
              value={paymentGateway}
              onChange={(e) => setPaymentGateway(e.target.value)}
            >
              <option value='Stripe'>Stripe</option>
              <option value='PayPal'>PayPal</option>
              <option value='Square'>Square</option>
            </select>

            <div className='flex justify-center mt-8'>
              <button
                className='bg-[#d4af37] text-black px-6 py-3 rounded-md hover:scale-105 duration-300'
                onClick={handleSaveSettings}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SystemSettings;
