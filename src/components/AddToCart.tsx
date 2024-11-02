import React from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

interface AddToCartProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  price: number;
}

export function AddToCart({ quantity, setQuantity, price }: AddToCartProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="text-[#9A2D2D] hover:text-[#B84C4C] transition-colors"
        >
          <MinusCircle className="w-6 h-6" />
        </button>
        <span className="text-xl font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="text-[#9A2D2D] hover:text-[#B84C4C] transition-colors"
        >
          <PlusCircle className="w-6 h-6" />
        </button>
      </div>
      <div className="text-2xl font-bold text-[#9A2D2D]">£{(price * quantity).toFixed(2)}</div>
      <button className="w-full bg-[#9A2D2D] text-white py-3 px-6 rounded-lg hover:bg-[#B84C4C] transition-colors">
        Add to Cart
      </button>
    </div>
  );
}