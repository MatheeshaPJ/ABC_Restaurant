import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend to validate admin credentials
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      });

      const { role } = response.data;

      // Check if the logged-in user is an admin
      if (role === 'ROLE_ADMIN') {
        navigate('/admin/dashboard'); // Navigate to admin dashboard
      } else {
        setError('Access denied: Only admins can log in.');
      }
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='bg-gray-50 h-full'>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-full lg:w-2/5 bg-white px-10 py-12 rounded-3xl border-2 border-gray-200 shadow-lg'>
          <h1 className='text-4xl font-bold text-center text-[#f09c20]'>ABC Restaurant Admin</h1>
          <p className='font-medium text-lg text-gray-600 mt-4 text-center'>
            Sign in to manage your restaurant's operations
          </p>

          {/* Display error message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <form onSubmit={handleSubmit} className='mt-8'>
            <div>
              <label className='text-lg font-medium text-gray-500'>Email</label>
              <input
                type='email'
                className='w-full rounded-xl p-4 mt-2 bg-white border'
                placeholder='Enter your Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mt-4'>
              <label className='text-lg font-medium text-gray-500'>Password</label>
              <input
                type='password'
                className='w-full rounded-xl p-4 mt-2 bg-white border'
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='mt-8 flex justify-center items-center'>
              <button
                type='submit'
                className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl text-center w-full transition-transform transform hover:scale-105'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
