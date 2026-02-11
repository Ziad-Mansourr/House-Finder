import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.patch(
        '/api/v1/user/update-profile',
        {
          firstName,
          lastName,
          phone, 
        },
        {
          headers: {
            Authorization: `USER ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success('Profile updated successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8"
      >
          
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Edit Profile</h1>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white py-2 px-6 rounded-md
            hover:bg-blue-700 transition-colors font-medium ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </>
  );
}
