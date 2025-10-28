import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function Exams() {
  const exams = [
    { name: 'Algorithms Midterm', date: 'Oct 15, 2025' },
    { name: 'Database Project Submission', date: 'Oct 20, 2025' },
    { name: 'AI Final Test', date: 'Nov 2, 2025' },
    { name: 'Software Eng. Report', date: 'Nov 10, 2025' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white shadow-md">
          <ClipboardList size={22} />
        </div>
        <h2 className="text-2xl font-bold text-gradient">Exams & Deadlines</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam, i) => (
          <div
            key={i}
            className="relative overflow-hidden bg-white/90 dark:bg-[#101b3c]/90 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3498db] to-[#f39c12]" />
            <h3 className="text-lg font-semibold mt-2">{exam.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{exam.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
