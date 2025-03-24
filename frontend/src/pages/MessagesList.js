import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const fetchMessages = async () => {
    try {
      const response = await fetch('https://deploy-my-app-api.onrender.com/messages', {
        headers: {
          'Authorization': localStorage.getItem('token'),
        }
      });

      const result = await response.json();
      if (response.ok) {
        setMessages(result);
      } else {
        setError('Failed to fetch messages.');
      }
    } catch (err) {
      setError('An error occurred while fetching messages.');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    try {
      const response = await fetch(`https://deploy-my-app-api.onrender.com/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      });

      if (response.ok) {
        setMessages(messages.filter(msg => msg._id !== id));
      } else {
        alert('Failed to delete the message.');
      }
    } catch (err) {
      alert('An error occurred while deleting the message.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
      <h2>Messages</h2>
      {error && <p>{error}</p>}
      {messages.length > 0 ? (
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>
              <p><strong>{msg.name}</strong> ({msg.email})</p>
              <p>{msg.message}</p>
              <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default MessagesList;
