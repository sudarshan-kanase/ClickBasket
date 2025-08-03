// src/components/HeroBanner.jsx
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/f2ffab1767893241.jpg?q=60',
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/2968c0d378979542.jpeg?q=60',
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/6b6acdcf0b6f0108.jpg?q=60',
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/28ce80d034b9c679.jpg?q=60',
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6daa071083b36b1b.jpeg?q=60',
  'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/62e6dcf19df89081.jpeg?q=60',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[360px] lg:h-[420px] mt-4 px-2 md:px-6 rounded-xl overflow-hidden shadow-md">
      <img
        src={images[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
