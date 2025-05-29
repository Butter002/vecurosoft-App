import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { GoArrowRight } from "react-icons/go";
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';
import map from '../assets/images/mapimage.png'
import vector from '../assets/vector/Vector 2160.png'
import BubbleBackground from './BubbleBackground'

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
    <div className="w-full md:h-[820px] h-[1040px] bg-[#042d33] flex flex-col md  md:flex-row  overflow-hidden">
      {/* Left Skewed Overlay */}
      <div className="w-1/2 lg:3/  md:h-full h-400 relative flex pl-30  justify-center items-center">
        {/* design layout */}
        <div className="absolute top-0 hidden lg:flex left-38 w-full h-full bg-[#042d33] -skew-x-[18deg] origin-left z-10" />
        <div className='absolute top-0 left-0 z-20'><img src={map} alt="" /></div>
        <div className=' z-100'><BubbleBackground /> </div>

        {/* text section */}
        <div className='relative flex flex-col pl-5 lg:pt-10 lg:pl-10 md:items-start z-30 '>
        <div className='absolute top-0 left-0'><img src={vector} alt="" /></div>  
        <div className='text-green-600 font-bold text-xl inline-100'>100% Satisfaction</div>
        <div className='lg:text-8xl font-bold text-3xl text-white'>CLEANING
        SERVICES <a className='text-green-700'> FOR</a><br />
        YOUR CITY</div>
        <div className='w-full h-11'/>
        <div><button className="bg-gradient-to-r from-[#1da8b5] to-[#67b846] text-white hover:text-[#042D33] py-1 px-4 rounded-full text-lg font-semibold flex items-center gap-6">
        GET PRICING
        <div className="bg-[#042D33] text-white  hover:bg-white text-2xl hover:text-[#042D33] h-12 w-12 flex justify-center items-center rounded-full">
        <GoArrowRight />
        </div>
        </button></div>
        </div>

      </div>

      {/* Right Slideshow */}
      <div className="w-full object-fill lg:w-1/2  h-full relative">
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
