import React, { useEffect, useRef } from 'react';

import 'keen-slider/keen-slider.min.css';
import './animations.css';

import { useKeenSlider } from 'keen-slider/react';
import { GoArrowRight } from "react-icons/go";
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';
import roomcleaning from  '../assets/images/roomcleaning.png'
import map from '../assets/images/mapimage.png'
import vector from '../assets/vector/Vector 2160.png'
import { FaSoap } from "react-icons/fa";


const images = [cleaningsofa, swimingpool_cleaning , roomcleaning];

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
    return () => clearInterval(interval);}, [slider]);

  return (
    <div className="w-full md:h-[820px] h-[990px] bg-[#042d33] flex flex-col md  md:flex-row  overflow-hidden">
      {/* Left Skewed Overlay */}
      <div className="md:w-1/2 w-full md:h-full h-400 relative flex lg:pl-30 md:justify-center justify-start items-center">
      
        {/* design layout */}
        <div className="absolute top-0 hidden lg:flex left-38 w-full h-full bg-[#042d33] -skew-x-[18deg] origin-left z-10"/>
        <div className='absolute top-0 left-0 z-20 slide-left-fade'><img src={map} alt="" /></div>

        

        {/* text section */}
        <div className='relative flex flex-col gap-6 pl-9 lg:pt-10 textsection lg:pl-10 md:items-start z-30 '>
        <div className='absolute -top-10 md:block hidden  left-0'><img src={vector} alt=""/></div> 
        <div className='absolute -top-10 md:hidden left-2'><img src={vector} alt=""/></div>  

        <div className='text-green-600 flex gap-3 font-extrabold text-2xl slide-up-fade inline-100'> <FaSoap />100% Satisfaction</div>
        <div className='lg:text-7xl font-extrabold text-5xl text-white slide-up-fade'>CLEANING <br/>
        SERVICES <a className='text-green-700'>FOR</a><br/>YOUR CITY
        </div>

        <div className="slide-up-fade group">
  <button className="bg-gradient-to-r from-[#1da8b5] to-[#67b846] text-white group-hover:text-[#042D33] py-1 px-1 rounded-full text-lg font-semibold flex items-center gap-6">
    GET PRICING
    <span className="bg-[#042D33] text-white group-hover:bg-white group-hover:text-[#042D33] text-3xl h-12 w-12 flex justify-center items-center rounded-full transition-all">
      <GoArrowRight />
    </span>
  </button>
</div>


        </div>
      </div>

      {/* Right Slideshow */}
      <div className="w-full object-fill lg:w-1/2  h-full relative">
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {images.map((img, i) => (
            <div key={i} className="keen-slider__slide relative">
              <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
