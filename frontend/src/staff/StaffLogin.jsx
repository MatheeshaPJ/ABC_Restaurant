import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StaffLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Staff Login:', { email, password });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black bg-opacity-80">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-[#d4af37] mb-8">
                    Staff Login
                </h2>
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
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
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
