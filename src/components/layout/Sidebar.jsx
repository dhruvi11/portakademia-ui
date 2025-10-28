import React from 'react';
import { Home, User, Book, ClipboardList, FileText, DollarSign, Award, CheckCircle } from 'lucide-react';

const links = [
  { label: 'Dashboard', icon: <Home size={18} /> },
  { label: 'My Profile', icon: <User size={18} /> },
  { label: 'Subjects', icon: <Book size={18} /> },
  { label: 'Exams', icon: <ClipboardList size={18} /> },
  { label: 'Grades', icon: <FileText size={18} /> },
  { label: 'Payments', icon: <DollarSign size={18} /> },
  { label: 'Transcript', icon: <FileText size={18} /> },
  { label: 'Diploma', icon: <Award size={18} /> },
  { label: 'Clearance', icon: <CheckCircle size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 bg-[#0b1630]/90 backdrop-blur-md rounded-2xl text-white p-5 shadow-lg border border-white/10">
      <h2 className="text-sm font-semibold mb-4 text-[#f39c12] tracking-wide">Navigation</h2>
      <ul className="space-y-2">
        {links.map((item, i) => (
          <li key={i}>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:pl-4"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
