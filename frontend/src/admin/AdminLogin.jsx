import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (username === 'admin' && password === 'password123') {
      navigate('/admin/dashboard'); // Redirect to Admin Dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-between'>

      
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-md p-8 bg-white text-black rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold text-center mb-6'>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-2' htmlFor='username'>
                Username
              </label>
              <input
                type='text'
                id='username'
                placeholder='Enter username'
                className='w-full p-3 border border-gray-300 rounded-md'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                placeholder='Enter password'
                className='w-full p-3 border border-gray-300 rounded-md'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
            <button
              type='submit'
              className='w-full bg-[#d19831] text-black font-bold py-3 rounded-md hover:scale-105 duration-300'
            >
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AdminLogin;
