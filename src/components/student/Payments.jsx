import React from 'react';

export default function Payments() {
  const payments = [
    { fee: 'Tuition Fee', status: 'Clear' },
    { fee: 'Library Fee', status: 'Unclear' },
    { fee: 'Lab Fee', status: 'Clear' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">💳 Payments</h2>
      <div className="card p-6">
        <ul className="space-y-3">
          {payments.map((p, i) => (
            <li key={i} className="flex justify-between">
              <span>{p.fee}</span>
              <span
                className={`px-3 py-1 rounded-md text-sm ${
                  p.status === 'Clear' ? 'bg-green-500/20 text-green-600' : 'bg-red-500/20 text-red-600'
                }`}
              >
                {p.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
