import React from 'react';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      className="relative p-[2px] rounded-full bg-gradient-to-r from-[#3498db] to-[#f39c12] transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#0b1630] text-lg">
        {theme === 'dark' ? '🌙' : '☀️'}
      </div>
    </button>
  );
}
