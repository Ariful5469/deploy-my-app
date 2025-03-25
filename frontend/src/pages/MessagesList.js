import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    try {
      const response = await fetch('https://deploy-mern-app-1-api.vercel.app/messages', {
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
      const response = await fetch(`https://deploy-mern-app-1-api.vercel.app/messages/${id}`, {
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
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td className="border px-4 py-2">{msg.name}</td>
                <td className="border px-4 py-2">{msg.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteMessage(msg._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default MessagesList;
