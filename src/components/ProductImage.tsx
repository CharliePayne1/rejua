import React from 'react';

export function ProductImage() {
  return (
    <div className="relative">
      <div className="bg-[#FFD4CC] rounded-3xl p-4 sm:p-8 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1612353413650-314fc8c4a5d4?auto=format&fit=crop&w=800&q=80"
          alt="Rejua Collagen Product"
          className="w-full h-auto rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB4A8]/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}