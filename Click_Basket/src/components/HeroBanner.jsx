// src/components/HeroBanner.jsx
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/f2ffab1767893241.jpg?q=60',
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/2968c0d378979542.jpeg?q=60',
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/6b6acdcf0b6f0108.jpg?q=60',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup
  }, []); // ✅ Empty dependency array — runs once

  return (
    <div className="relative w-full h-[220px] md:h-[350px] mt-4 rounded-xl overflow-hidden shadow-lg">
      <img
        src={images[currentIndex]}
        alt="Hero Banner"
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroBanner;
