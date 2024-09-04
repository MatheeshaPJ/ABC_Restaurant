import React, { useState } from 'react';
import StaffNavbar from './StaffNavbar';

const SystemSettings = () => {
    const [settings, setSettings] = useState({
        businessHours: {
            openingTime: '09:00',
            closingTime: '22:00',
        },
        serviceAvailability: {
            dineIn: true,
            delivery: true,
            takeout: true,
        },
        notifications: {
            emailNotifications: true,
            smsNotifications: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setSettings((prevSettings) => ({
                ...prevSettings,
                serviceAvailability: {
                    ...prevSettings.serviceAvailability,
                    [name]: checked,
                },
            }));
        } else if (name.includes('notifications')) {
            setSettings((prevSettings) => ({
                ...prevSettings,
                notifications: {
                    ...prevSettings.notifications,
                    [name]: value === 'true',
                },
            }));
        } else {
            setSettings((prevSettings) => ({
                ...prevSettings,
                businessHours: {
                    ...prevSettings.businessHours,
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle system settings update, e.g., send data to the backend
        alert("System settings updated successfully!");
    };

    return (
        <div>
             <StaffNavbar/>
            <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center pt-20">
                <div className="w-full max-w-2xl bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">System Settings</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="openingTime">
                                        Opening Time
                                    </label>
                                    <input
                                        type="time"
                                        name="openingTime"
                                        id="openingTime"
                                        value={settings.businessHours.openingTime}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md bg-gray-800 text-white"
                                        required
                                    />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="closingTime">
                                        Closing Time
                                    </label>
                                    <input
                                        type="time"
                                        name="closingTime"
                                        id="closingTime"
                                        value={settings.businessHours.closingTime}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md bg-gray-800 text-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dineIn"
                                        checked={settings.serviceAvailability.dineIn}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Dine-In</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="delivery"
                                        checked={settings.serviceAvailability.delivery}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Delivery</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="takeout"
                                        checked={settings.serviceAvailability.takeout}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Takeout</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="notifications"
                                        value={true}
                                        checked={settings.notifications.emailNotifications}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Enable Email Notifications</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="notifications"
                                        value={false}
                                        checked={!settings.notifications.emailNotifications}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Disable Email Notifications</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="notifications"
                                        value={true}
                                        checked={settings.notifications.smsNotifications}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Enable SMS Notifications</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="notifications"
                                        value={false}
                                        checked={!settings.notifications.smsNotifications}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-[#d4af37] bg-gray-800"
                                    />
                                    <span className="ml-2 text-gray-300">Disable SMS Notifications</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#d4af37] hover:bg-[#b38e2d] text-black font-bold py-2 px-4 rounded-md transition duration-300"
                            >
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SystemSettings;
