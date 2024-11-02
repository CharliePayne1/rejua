import React from 'react';

export function ProductStats() {
  const stats = [
    { value: '32%', label: 'Reduction in wrinkle depth', period: '(8 weeks daily use)' },
    { value: '10%', label: 'Increase in skin elasticity', period: '(3 months daily use)' },
    { value: '31%', label: 'Increase in hair follicle cell production', period: '(5 months daily use)' },
    { value: '42%', label: 'Reduction in broken nails', period: '(6 months daily use)' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#FFE5E0] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#9A2D2D]">{stat.value}</div>
          <div className="text-sm text-[#B84C4C]">{stat.label}</div>
          <div className="text-xs text-gray-600">{stat.period}</div>
        </div>
      ))}
    </div>
  );
}