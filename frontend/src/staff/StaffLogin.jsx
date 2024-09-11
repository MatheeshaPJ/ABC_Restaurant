import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StaffLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                email: email,
                password: password
            });

            if (response.data) {
                const staffUser = response.data;

                // Check if the user has the role "ROLE_STAFF"
                if (staffUser.roles && staffUser.roles.includes('ROLE_STAFF')) {
                    // Store staff user data in sessionStorage
                    sessionStorage.setItem('staffUser', JSON.stringify(staffUser));

                    // Navigate to the staff dashboard after successful login
                    navigate('/staff-dashboard');
                } else {
                    // User does not have the "ROLE_STAFF" role
                    setError('Access denied: You are not authorized to login as staff.');
                }
            }
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black bg-opacity-80">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-[#d4af37] mb-8">
                    Staff Login
                </h2>
                
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
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

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-[#d4af37] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#b8860b] transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                        <Link
                            to="/"
                            className="inline-block align-baseline font-bold text-sm text-[#d4af37] hover:text-[#b8860b] transition duration-300 ease-in-out"
                        >
                            Back to Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StaffLogin;
