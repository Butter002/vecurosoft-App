import React, { useEffect, useState } from 'react';
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';

const images = [cleaningsofa, swimingpool_cleaning];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[1000px] overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`} className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
