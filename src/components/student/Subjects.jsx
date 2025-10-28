import React from 'react';

export default function Subjects() {
  const subjects = [
    'Algorithms – Prof. John Smith',
    'Database Systems – Dr. Emily Lee',
    'Software Engineering – Ms. Sarah Carter',
    'Artificial Intelligence – Dr. Raj Patel',
    'Project Lab – Prof. William Brown',
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">📘 Subjects & Teachers</h2>
      <div className="card p-6">
        <ul className="space-y-2">
          {subjects.map((subj, i) => (
            <li key={i} className="border-b border-gray-200/50 py-2 text-gray-800 dark:text-gray-100">
              {subj}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
