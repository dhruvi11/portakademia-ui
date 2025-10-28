import React from 'react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Welcome, Alex Johnson 👋</h2>
        <p className="text-sm opacity-90">B.Sc. Computer Science – Year 3</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { title: 'Enrolled Program', value: 'B.Sc. Computer Science' },
          { title: 'Academic Year', value: '2024-2025' },
          { title: 'Semester', value: 'Fall 2025' },
          { title: 'Status', value: 'Active' },
        ].map((item, i) => (
          <div
            key={i}
            className="card p-5 border-l-4 border-[#3498db] hover:border-[#f39c12] transition-all"
          >
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p className="text-lg font-semibold mt-1 text-gray-800 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
