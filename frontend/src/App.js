import { Navigate, Route, Routes, Link } from 'react-router-dom';
import './App.css';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import MessageList from './pages/MessagesList';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Clear authentication data (e.g., token)
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false); // Update authentication status
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <img src="logo.png" alt="Logo" height="70" width="120" />
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            {!isAuthenticated ? (
              <>
                <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                <li><Link to="/signup" className="hover:text-gray-300">Register</Link></li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as the default page */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<MessageList />} /> {/* Correct route for MessageList */}
        </Routes>
      </main>
    </div>
  );
}

export default App;