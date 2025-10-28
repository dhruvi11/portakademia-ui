import React from 'react';
import { FileText } from 'lucide-react';

export default function Transcript() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white shadow-md">
          <FileText size={22} />
        </div>
        <h2 className="text-2xl font-bold text-gradient">Transcript</h2>
      </div>

      <div className="card p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#3498db] to-[#f39c12] blur-2xl"></div>

        <p className="text-gray-700 dark:text-gray-200 mb-6 z-10 relative">
          Download transcript for academic year <strong>2024–2025</strong>:
        </p>

        <button className="btn-gradient w-full py-3 text-lg rounded-lg hover:scale-[1.02] active:scale-95">
          ⬇️ Download PDF
        </button>
      </div>
    </div>
  );
}
