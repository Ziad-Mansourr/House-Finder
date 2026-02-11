import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found. Please login first.');
        setLoading(false);
        return;
      }

      await axios.post(
        '/api/v1/auth/revoke-token',
        null,
        {
          headers: {
            Authorization: `USER ${token}`,
          },
        }
      );

      localStorage.removeItem('token');
      toast.success('Logged out successfully!');

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error(error.response?.data || error);
      toast.error('Logout failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Are you sure you want to logout?
          </h2>
          <p className="text-gray-600 text-center max-w-xs">
            Logging out will remove your session and you will need to login again to continue.
          </p>
          <button
            onClick={handleLogout}
            disabled={loading}
            className={`w-1/2 max-w-xs text-white font-semibold py-4 px-10 rounded-xl shadow-lg
              transition-all duration-300 transform
              ${loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 active:scale-95'}
            `}
          >
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </div>
    </>
  );
}
