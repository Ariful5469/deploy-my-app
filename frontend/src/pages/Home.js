import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';

import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "https://deploy-my-app-api.onrender.com/products";
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);

      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        console.error("The fetched result is not an array.");
        setProducts([]);
      }
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      try {
        const response = await fetch("https://deploy-mern-app-1-api.vercel.app/messages", {
          method: 'POST',
          headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          handleSuccess('Message sent successfully!');
        } else {
          handleError('Failed to send message.');
        }
      } catch (err) {
        handleError(err);
      }
    } else {
      handleError('Please fill in all the fields');
    }
  };

  return (
    <div className="pt-2 mt-2" style={{
      backgroundImage: `url(/bg.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      marginTop: 2,
      paddingTop: 2,
      minHeight: '140vh',
    }}>
      <div className="p-6 max-w-md pl-16 pt-[180px]" style={{ zIndex: 10 }}>
        <div mt-8>
          <img src="logo.png" alt="Logo" height="200" width="300" />
          <p>Welcome back to CyberCraft Bangladesh,</p>
          <p>where your creativity thrives</p>
          <form onSubmit={handleSendMessage} className="space-y-4 pt-4">
            <div mt-4>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
