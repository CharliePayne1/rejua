import React from 'react';

export function BrandStory() {
  return (
    <section className="py-12 sm:py-16 bg-[#FFF5F3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#9A2D2D] mb-6">
          Our Story
        </h2>
        <div className="prose prose-rose mx-auto">
          <p className="text-gray-700 mb-4">
            We want to empower everyone to feel good in their own skin, by
            creating deeper, longer-lasting results rather than a surface-level
            fix.
          </p>
          <p className="text-gray-700 mb-4">
            That’s why every product we create is led by science, designed to
            nourish the body at a cellular level, as we understand that when you
            feel good, you look good, naturally.
          </p>
          <p className="text-gray-700">
            Because everyone knows it’s what’s on the inside that really
            matters.
          </p>
        </div>
      </div>
    </section>
  );
}
