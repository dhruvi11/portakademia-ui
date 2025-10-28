import React from 'react';

export default function Diploma() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">🏅 Diploma</h2>
      <div className="card p-6 text-gray-800 dark:text-gray-100">
        <p>Diploma will be available upon graduation.</p>
        <div className="mt-4 w-full bg-gray-200 rounded-md">
          <div className="py-2 text-center text-gray-700 font-medium bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white rounded-md">
            Not Available
          </div>
        </div>
      </div>
    </div>
  );
}
