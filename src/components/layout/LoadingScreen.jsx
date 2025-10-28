import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#3498db] to-[#f39c12] text-white z-50">
      <div className="w-16 h-16 border-4 border-white/40 border-t-white rounded-full animate-spin mb-6"></div>
      <h2 className="text-xl font-semibold animate-pulse">Loading Portal...</h2>
    </div>
  );
}
