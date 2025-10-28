import React from 'react';

export default function Grades() {
  const grades = [
    { subject: 'Algorithms', grade: 'A' },
    { subject: 'Database Systems', grade: 'B+' },
    { subject: 'Software Engineering', grade: 'A-' },
    { subject: 'Artificial Intelligence', grade: 'B' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">🎓 Final Grades</h2>
      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <label className="font-semibold text-sm">Filter:</label>
          <select className="px-3 py-2 rounded-md border border-gray-300 dark:bg-[#0b1630]">
            <option>Current Semester</option>
          </select>
        </div>

        <ul className="space-y-2">
          {grades.map((g, i) => (
            <li key={i} className="flex justify-between">
              <span className="text-gray-800 dark:text-gray-100">{g.subject}</span>
              <span className="font-semibold text-[#3498db]">{g.grade}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
