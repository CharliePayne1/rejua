import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductImage } from './components/ProductImage';
import { ProductFeatures } from './components/ProductFeatures';
import { ProductStats } from './components/ProductStats';
import { AddToCart } from './components/AddToCart';
import { ProductDetails } from './components/ProductDetails';
import { BrandStory } from './components/BrandStory';
import { WavePattern } from './components/WavePattern';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const price = 49.99;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F3] to-white relative">
      <WavePattern />
      <Navbar />

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ProductImage />

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif text-[#9A2D2D] mb-2 sm:mb-4">
                  Bovine Collagen
                </h1>
                <p className="text-lg sm:text-xl text-[#B84C4C]">
                  Peach and Elderflower
                </p>
              </div>

              <ProductFeatures />
              <ProductStats />
              <AddToCart
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
              />
            </div>
          </div>
        </div>
      </div>

      <BrandStory />
      <ProductDetails />
    </div>
  );
}
