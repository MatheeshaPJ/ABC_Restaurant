import React, { useState } from 'react';
import StaffNavbar from './StaffNavbar';

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profile.password !== profile.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Add logic to handle profile update, e.g., send data to the backend
        alert("Profile updated successfully!");
    };

    return (
        <div>
             <StaffNavbar/>
            <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center pt-20">
                <div className="w-full max-w-md bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">Update Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-800 text-white"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-800 text-white"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                                New Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={profile.password}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={profile.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-800 text-white"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-[#d4af37] hover:bg-[#b38e2d] text-black font-bold py-2 px-4 rounded-md transition duration-300"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
