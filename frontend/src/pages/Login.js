import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate here
import { ToastContainer } from 'react-toastify';

import { handleError, handleSuccess } from '../utils';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // Initialize navigate here

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `https://deploy-my-app-api.onrender.com/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => navigate('/messages'), 1000); // Use navigate to redirect after login
            } else if (error) {
                handleError(error?.details?.[0]?.message || message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="flex flex-row min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="flex bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="w-1/2 flex flex-col items-center justify-center p-4 border-r">
                    <img src="logo.png" alt="Logo" className="w-48 mb-4" />
                    <p className="text-center text-gray-700">Welcome to CyberCraft Bangladesh</p>
                    <p className="text-center text-gray-500">Join us and unleash your creativity</p>
                </div>

                <div className="w-1/2 p-6">
                    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={loginInfo.email}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter your password..."
                                value={loginInfo.password}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                        >
                            Login
                        </button>
                        <div className="mt-4 text-center text-gray-600">
                            <span>Don't have an account? 
                                <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 ml-1">Sign Up</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
