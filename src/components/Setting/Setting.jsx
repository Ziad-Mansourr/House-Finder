import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from "../../services/axiosInstance";
import { Toaster, toast } from 'react-hot-toast';
export default function ProfileSettings() {

  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);


  // Update profile function
  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('You are not logged in!');
      return;
    }

    const updatedData = {
      fullName: name, 
      phone,
      email,
    };

    try {
      const response = await axiosInstance.patch('/users/updateMe', updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success('Profile updated successfully');
        setTimeout(() => {
          localStorage.removeItem('token');
          navigate('/login');
          window.location.reload(); // Reload the page to reflect changes
        }, 2000); 
      } else {
        toast.error('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data.message || 'Failed to update profile. Please try again.');
    }
  };

  // Handle password update
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('You are not logged in!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await axiosInstance.patch('/users/updateMyPassword', {
        currentPassword: currentPassword,
        password: password,
        passwordConfirm: confirmPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        toast.success('Password updated successfully');

        setTimeout(() => {
          localStorage.removeItem('token');
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error(error.response?.data?.message || 'Failed to update password. Please try again.');
    }
  };

  // Delete account function
  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      toast.error('You are not logged in!');
      return;
    }
  
    try {
      const response = await axiosInstance.delete('/users/deleteMe', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 204) {
        toast.success('Account deleted successfully');
        
        setTimeout(() => {
          localStorage.removeItem('token');
          navigate('/signUp'); 
        }, 2000); 
      } else {
        toast.error('Failed to delete account. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error(error.response?.data.message || 'Failed to delete account. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Edit profile form */}
      <form onSubmit={handleProfileSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Edit Profile</h1>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter Name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2
             focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-4">Contact Information</h2>

          <div className="mb-6">
            <div className="flex items-center mb-2 w-full">
              <div className="inline-flex items-center w-full border border-gray-300 
              rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="bg-gray-100 px-3 py-3 text-gray-500 rounded-l-md">+20</span>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="Enter Phone Number" 
                  className="w-full p-3 border-0 rounded-r-md focus:ring-0" 
                  pattern="[0-9]{10}" 
                  title="Please enter a 10-digit phone number" 
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This is the number for buyers' contacts, reminders, and other notifications.
            </p>
          </div>

          <div className="mb-6">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter Email Address" 
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2
               focus:ring-blue-500 focus:border-blue-500" 
            />
            <p className="text-sm text-gray-500 mt-2">
              We won't reveal your email to anyone else nor use it to send you spam.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Password update form */}
      <form onSubmit={handlePasswordSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-8">Update Password</h1>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <input 
            type="password" 
            value={currentPassword} 
            onChange={(e) => setCurrentPassword(e.target.value)} 
            placeholder="Enter current password" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="New Password" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
          <p className="mt-2 text-sm text-gray-500">
            Use a minimum of 8 characters with at least 1 number, 1 special character, and 1 letter.
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password" 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="flex justify-end mb-12">
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Update Password
          </button>
        </div>
      </form>

      {/* Delete account section */}
      <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Delete Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <input 
              type="checkbox" 
              checked={isDeleteConfirmed} 
              onChange={(e) => setIsDeleteConfirmed(e.target.checked)} 
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" 
            />
            <span className="text-sm text-gray-700">
              I understand that all my data will be permanently deleted.
            </span>
          </div>

          <button 
            type="button" 
            onClick={handleDeleteAccount} 
            disabled={!isDeleteConfirmed} 
            className={`py-3 px-6 rounded-md font-semibold transition-colors ${
              isDeleteConfirmed ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Delete Account
          </button>
        </div>
      </form>

      <Toaster />
    </div>
  );
}
