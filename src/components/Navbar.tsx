import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-[#9A2D2D]">Rejua</h1>
          </div>
          <button className="p-2 rounded-full hover:bg-[#FFE5E0] transition-colors">
            <ShoppingCart className="w-6 h-6 text-[#9A2D2D]" />
          </button>
        </div>
      </div>
    </nav>
  );
}