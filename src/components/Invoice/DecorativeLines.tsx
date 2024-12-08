import React from 'react';

const DecorativeLines: React.FC = () => (
  <div className="absolute right-0 top-1/2 h-96 w-32">
    <div className="relative h-full">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute right-0 h-full w-1 bg-[#4C1D95] opacity-10"
          style={{
            transform: `translateX(${i * 8}px)`,
          }}
        />
      ))}
    </div>
  </div>
);