import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Clearance() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white shadow-md">
          <CheckCircle2 size={22} />
        </div>
        <h2 className="text-2xl font-bold text-gradient">Clearance Slip Request</h2>
      </div>

      <div className="card p-8 text-gray-800 dark:text-gray-200">
        <p className="mb-6 text-sm sm:text-base">
          You can request a clearance slip for administration purposes.
        </p>

        <button className="btn-gradient w-full py-3 rounded-lg text-lg font-medium hover:scale-[1.02] active:scale-95">
          🧾 Request Clearance Slip
        </button>
      </div>
    </div>
  );
}
