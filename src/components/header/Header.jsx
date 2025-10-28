import React from 'react';
import ThemeToggle from '../layout/ThemeToggle.jsx';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#3498db] via-[#4facfe] to-[#f39c12] shadow-md transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20 font-bold text-lg">
            P
          </div>
          <div>
            <h1 className="font-semibold text-xl">Portakademia</h1>
            <p className="text-xs text-white/80">Student & Staff Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-3">
            {['Home', 'News', 'Student', 'Staff', 'Admin'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
