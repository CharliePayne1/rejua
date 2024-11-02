import React from 'react';

export function WavePattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9A2D2D" />
            <stop offset="100%" stopColor="#B84C4C" />
          </linearGradient>
        </defs>
        <path
          d="M 0 200 C 200 100, 400 300, 600 200 S 800 300, 1000 200 V 800 H 0 Z"
          fill="url(#wave-gradient)"
          opacity="0.1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-200 0"
            to="0 0"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M -200 300 C 0 200, 200 400, 400 300 S 600 400, 800 300"
          fill="none"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          opacity="0.2"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="200 0"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}