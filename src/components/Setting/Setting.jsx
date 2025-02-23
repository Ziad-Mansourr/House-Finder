import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function ProfileSettings() {
  // Profile states
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

  // Validation Schema
  const profileSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, 'Phone number is invalid').required('Phone is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const passwordSchema = yup.object().shape({
    password: yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character'
      )
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const profileFormik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      console.log('Profile Updated:', values);
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      console.log('Password Updated:', values);
    },
  });

  const handleDeleteAccount = () => {
    if (isDeleteConfirmed) {
      console.log('Account Deleted');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Profile Form */}
      <form onSubmit={profileFormik.handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Edit profile</h1>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={profileFormik.values.name}
            onChange={profileFormik.handleChange}
            onBlur={profileFormik.handleBlur}
            placeholder="Enter Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {profileFormik.touched.name && profileFormik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{profileFormik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-4">Contact information</h2>

          <div className="mb-6">
            <div className="flex items-center mb-2 w-full">
              <div className="inline-flex items-center w-full border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="bg-gray-100 px-3 py-3 text-gray-500 rounded-l-md">+20</span>
                <input
                  type="tel"
                  name="phone"
                  value={profileFormik.values.phone}
                  onChange={profileFormik.handleChange}
                  onBlur={profileFormik.handleBlur}
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border-0 rounded-r-md focus:ring-0"
                />
              </div>
            </div>
            {profileFormik.touched.phone && profileFormik.errors.phone ? (
              <div className="text-red-500 text-sm mt-1">{profileFormik.errors.phone}</div>
            ) : null}
            <p className="text-sm text-gray-500 mt-2">
              This is the number for buyers' contacts, reminders, and other notifications.
            </p>
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={profileFormik.values.email}
              onChange={profileFormik.handleChange}
              onBlur={profileFormik.handleBlur}
              placeholder="Enter Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {profileFormik.touched.email && profileFormik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{profileFormik.errors.email}</div>
            ) : null}
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
            Save changes
          </button>
        </div>
      </form>

      {/* Password Form */}
      <form onSubmit={passwordFormik.handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Update password</h1>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
          <input
            type="password"
            name="password"
            value={passwordFormik.values.password}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            placeholder="New Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {passwordFormik.touched.password && passwordFormik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{passwordFormik.errors.password}</div>
          ) : null}
          <p className="mt-2 text-sm text-gray-500">
            Use a minimum of 8 characters with at least 1 number, 1 special character, 1 letter.
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordFormik.values.confirmPassword}
            onChange={passwordFormik.handleChange}
            onBlur={passwordFormik.handleBlur}
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm mt-1">{passwordFormik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <div className="flex justify-end mb-12">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Update Password
          </button>
        </div>

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
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}