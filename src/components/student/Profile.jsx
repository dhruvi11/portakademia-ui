import React from 'react';

export default function Profile() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
        👤 My Profile
      </h2>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Alex Johnson</p>
            <p className="text-sm text-gray-500">Student ID: CS2025001</p>
            <p className="text-sm text-gray-500">Email: alex.johnson@example.com</p>
            <p className="text-sm text-gray-500">Address: 123 Main St, Springfield</p>
          </div>

          <div className="flex gap-3">
            <button className="btn-gradient">Upload Profile Photo</button>
            <button className="btn-gradient">Update Address</button>
          </div>
        </div>
      </div>
    </div>
  );
}
