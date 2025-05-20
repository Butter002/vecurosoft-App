import React, { useEffect, useState, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';

const images = [cleaningsofa, swimingpool_cleaning];

const Slideshow = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slideChanged(s) {
      // Auto slides handled in useEffect
    },
  });

  const timeout = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="relative w-full h-[960px] overflow-hidden">
      {/* Left Skewed Overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#042d33] -skew-x-[25deg] z-10"></div>

      {/* Slideshow */}
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((img, i) => (
          <div key={i} className="keen-slider__slide relative">
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
