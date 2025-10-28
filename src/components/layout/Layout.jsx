import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import useTheme from '../../hooks/useTheme';

export default function Layout({ children }) {
  useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#eaf5ff] to-[#fff8f0] dark:from-[#071029] dark:to-[#0b1630] transition-all duration-300">
      <Header />
      <main className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 hidden lg:block">
          <Sidebar />
        </div>
        <div className="lg:col-span-9">
          <div className="bg-white dark:bg-[#101b3c] rounded-2xl shadow-lg p-8 transition-all duration-300">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
