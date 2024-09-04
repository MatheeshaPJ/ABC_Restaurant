import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user authentication data (e.g., tokens, user info)
        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');

        // Redirect to the login page after logout
        navigate('/staff/login');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4 text-[#d4af37]">Logging out...</h1>
                <p className="text-lg">Please wait while we sign you out.</p>
            </div>
        </div>
    );
};

export default Logout;
