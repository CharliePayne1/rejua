import React from 'react';

export function ProductFeatures() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#9A2D2D]">Key Features</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="font-medium">• Science-led beauty</span>
        </li>
        <li className="flex items-start">
          <span className="font-medium">• 30 Servings (250g)</span>
        </li>
        <li className="flex items-start">
          <span className="font-medium">• Peach and elderflower flavor</span>
        </li>
      </ul>
    </div>
  );
}