import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';

const images = [cleaningsofa, swimingpool_cleaning];

const Slideshow = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
  });

  const timeout = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="w-full h-[820px] bg-[#042d33] flex overflow-hidden">
      {/* Left Skewed Overlay */}
      <div className="w-1/2 h-full relative">
        <div className="absolute top-0 left-50 w-full h-full bg-[#042d33] -skew-x-[14deg] origin-left z-10" />
      </div>

      {/* Right Slideshow */}
      <div className="w-1/2 h-full relative">
        <div ref={sliderRef} className="keen-slider h-full w-full">
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
    </div>
  );
};

export default Slideshow;
