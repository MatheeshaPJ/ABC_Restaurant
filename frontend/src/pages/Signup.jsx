import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        address: "",
        role: "ROLE_CUSTOMER",
    });
    const [error, setError] = useState(""); // State for error handling

    const { email, firstName, lastName, password, address, role } = user;
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/register", user);
            navigate("/signin");
        } catch (error) {
            if (error.response && error.response.status === 409) { // Assuming 409 is returned for email conflict
                setError("Email already exists. Please try a different email.");
            } else {
                console.error("There was an error signing up!", error);
                setError("There was an error signing up. Please try again.");
            }
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <Navbar/>
            <div className='w-full max-w-md bg-white p-8 rounded-3xl shadow-lg border border-gray-200 my-24'>
                <h1 className='text-4xl font-semibold text-center mb-4'>Register Here</h1>
                <p className='text-lg text-gray-500 text-center mb-6'>Enter your details to create an account.</p>

                {/* Display error message if exists */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="email">Email</label>
                        <input
                            type='email'
                            id='email'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your email'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="firstName">First Name</label>
                        <input
                            type='text'
                            id='firstName'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your first name'
                            name='firstName'
                            value={firstName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="lastName">Last Name</label>
                        <input
                            type='text'
                            id='lastName'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your last name'
                            name='lastName'
                            value={lastName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="password">Password</label>
                        <input
                            type='password'
                            id='password'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your password'
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="address">Address</label>
                        <input
                            type='text'
                            id='address'
                            className='w-full border-2 border-gray-300 rounded-lg p-3'
                            placeholder='Enter your address'
                            name='address'
                            value={address}
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-lg font-medium mb-1' htmlFor="role">Role</label>
                        <select
                            name="role"
                            id="role"
                            className="w-full border-2 border-gray-300 rounded-lg p-3"
                            value={role}
                            onChange={onInputChange}
                            required
                        >
                            <option value="ROLE_CUSTOMER">Customer</option>
                            {/* Add more roles if needed */}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-orange-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-600 transition'
                    >
                        Sign Up
                    </button>

                    <div className='text-center mt-4'>
                        <p className='text-gray-700'>Already have an account?</p>
                        <Link className='text-blue-500 font-medium' to='/signin'>Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
