import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send a POST request to the backend with email and password
        const response = await axios.post('http://localhost:8080/login', {
          email: email,
          password: password
        });
  
        // If login is successful, redirect to the dashboard or another page
        if (response.data) {
          // You can save user data to localStorage or context if needed
          // For example: localStorage.setItem('user', JSON.stringify(response.data));
          
          navigate('/'); // Navigate to the dashboard after successful login
        }
      } catch (err) {
        // Handle error if login fails
        setError('Invalid email or password');
      }
    };
  


    return (
      <div className='bg-white h-full '>
        <div className='flex w-full h-screen justify-center items-center'>
          <div className='w-full lg:w-2/5 justify-center items-center bg-white px-10 py-10 mt- rounded-3xl border-2 border-gray-200 shadow'>
            <h1 className='text-5xl font-semibold text-center'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'>
              Welcome back! Please Enter Your Sign-in details.
            </p>
  
            {/* Display error message */}
            {error && <p className="text-red-500 text-center">{error}</p>}
  
            <form onSubmit={handleSubmit} className='mt-8'>
              <div>
                <label className='text-lg font-medium'>Email</label>
                <input 
                  type='email'
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className='text-lg font-medium'>Password</label>
                <input 
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder='Enter your Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
  
              <div className='mt-8 flex justify-between items-center'>
                <div>
                  <input type="checkbox" name="showPassword" id="showPassword" />
                  <label htmlFor="showPassword" className='ml-2 font-medium text-base'>Show Password</label>
                </div>
                <button className='ml-2 font-medium text-base text-blue-400'>Forgot password</button>
              </div>
  
              <div className='mt-8 flex flex-col gap-y-4'>
                <button type='submit' className='bg-[#f09c20] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] transition-all hover:scale-[1.01] ease-in-out text-center'>
                  Sign-in
                </button>
              </div>
  
              <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Don't have an account?</p>
                <Link className='text-blue-400 text-base font-medium ml-2' to='/signup'>Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Signin;

 





