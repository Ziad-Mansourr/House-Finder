import React, { useState } from 'react';

export default function ProfileSettings() {
  // Profile states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Security states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile submission
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Profile Section */}
      <form onSubmit={handleProfileSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Edit profile</h1>

        {/* Name Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-4">Contact information</h2>

          {/* Phone Input */}
          <div className="mb-6">
            <div className="flex items-center mb-2 w-full"> {/* Added w-full here */}
              <div className="inline-flex items-center w-full"> {/* Added w-full here */}
                <span className="bg-gray-100 px-3 py-3 border-y border-l border-gray-300 text-gray-500 rounded-l-md">+20</span>
                <input type="tel" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" // Changed flex-1 to w-full
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This is the number for buyers contacts, reminders, and other notifications.</p>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <input type="email"  value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <p className="text-sm text-gray-500 mt-2">
              We won't reveal your email to anyone else nor use it to send you spam
            </p>
          </div>
        </div>

        {/* Save Profile  */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Save changes</button>
        </div>
      </form>

      {/* Security Section */}
      <form onSubmit={handlePasswordSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Update password</h1>

        {/* Password Inputs */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
          <input type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <p className="mt-2 text-sm text-gray-500">
            Use a minimum of 8 characters with at least 1 number, 1 special character, 1 letter
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input type="password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        {/* Password Update  */}
        <div className="flex justify-end mb-12">
          <button type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Update Password</button>
        </div>

        {/*  Deletion Section */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Delete Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <input type="checkbox"
              checked={isDeleteConfirmed}
              onChange={(e) => setIsDeleteConfirmed(e.target.checked)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"/>
            <span className="text-sm text-gray-700">
              I understand that all my data will be permanently deleted
            </span>
          </div>

          <button type="button"
            onClick={handleDeleteAccount}
            disabled={!isDeleteConfirmed}
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 
            transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed">
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}