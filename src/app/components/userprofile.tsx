'use client';

import React, { useState, useEffect } from 'react';
import Banner from '../components/banner';
import Link from 'next/link';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchedUserDetails = {
      name: 'Enter your name',
      email: 'Enter your email',
      phone: 'Enter your phone number',
      address: '123 Street, City, Country',
    };
    setUserDetails(fetchedUserDetails);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">User Profile</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; User Profile
            </p>
          </div>
        </div>
      </header>

      {/* User Profile Form */}
      <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">User Profile</h2>

        {isEditing ? (
          <form className="space-y-4">
            {['name', 'email', 'phone', 'address'].map((field) => (
              <div key={field}>
                <label className="block text-sm sm:text-base font-medium text-gray-600 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={userDetails[field as keyof typeof userDetails]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md mt-1 text-sm sm:text-base focus:ring focus:ring-blue-200"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4 transition"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-4 text-sm sm:text-base">
            {Object.entries(userDetails).map(([key, value]) => (
              <div key={key}>
                <strong className="text-gray-700 capitalize">{key}:</strong> {value}
              </div>
            ))}

            <button
              onClick={() => setIsEditing(true)}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 transition"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
