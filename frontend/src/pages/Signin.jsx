import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                email: email,
                password: password
            });

            if (response.data) {
                // Assuming response.data contains user information
                const user = response.data;
                
                // Store user data in sessionStorage
                sessionStorage.setItem('user', JSON.stringify(user));

                // Navigate to the dashboard after successful login
                navigate('/');
            }
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <Navbar/>
            <div className='w-full max-w-md bg-white p-8 rounded-3xl shadow-lg border border-gray-200 my-24'>
                <h1 className='text-4xl font-semibold text-center mb-4'>Welcome Back</h1>
                <p className='text-lg text-gray-500 text-center mb-6'>Please enter your sign-in details.</p>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="email">Email</label>
                        <input
                            type='email'
                            id='email'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className='flex items-center mt-2'>
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className='mr-2'
                            />
                            <label htmlFor="showPassword" className='text-gray-700'>Show Password</label>
                        </div>
                    </div>

                    <div className='flex justify-between items-center mb-4'>
                        <Link className='text-blue-500' to='/forgot-password'>Forgot password?</Link>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-orange-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-600 transition'
                    >
                        Sign In
                    </button>

                    <div className='text-center mt-4'>
                        <p className='text-gray-700'>Don't have an account?</p>
                        <Link className='text-blue-500 font-medium' to='/signup'>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
