import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { CiCirclePlus } from "react-icons/ci";
import { GiAbstract029 } from "react-icons/gi";
import { CiLinkedin } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { SiNorwegian } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import YouTube from 'react-youtube';

import cleaningsofa from '../assets/images/video-preview-image.png';
import map from '../assets/images/mapimage.png';

const Section4 = () => {
  const { ref: brandRef, inView: brandInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: videoTextRef, inView: videoTextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showVideo, setShowVideo] = useState(false);

  const videoOptions = {
    height: '390',
    width: '850',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <div className="relative gap-100 bg-[#052429] text-white mt-40 mb-10 py-18 px-3 md:h-234 md:px-68">
      <div className='absolute top-15 left-0 z-20'><img src={map} alt="" /></div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0  bg-transparent bg-opacity-80 flex items-center justify-center z-[9999] px-4">
          <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden p-4">
            <YouTube videoId="lrPoGx5GWuo" opts={videoOptions}/>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-red-600 transition">
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Video Area */}
      <div
        className="relative z-1 -mt-[190px] bg-center bg-cover pd-100 overflow-hidden h-[490px] md:h-[400px] lg:h-[550px]"
        style={{
          backgroundImage: `url(${cleaningsofa})`,
          border: '8px solid transparent',
          borderImage: 'linear-gradient(to bottom, transparent, rgba(16, 155, 61, 1))',
          borderImageSlice: 1,
        }} >

        <div className="absolute inset-0 flex w-full flex-col justify-center items-center text-center">
          <div className="relative flex items-center justify-center w-16 h-16 mb-4 group">
            {/* Ping animation */}
            <button className="absolute w-16 h-16 rounded-full bg-green-500 opacity-50 animate-ping group-hover:bg-white"
              onClick={() => setShowVideo(true)}></button>

            {/* Play button */}
            <button className="relative z-10 bg-green-500 group-hover:bg-white w-16 h-16 rounded-full flex items-center 
            justify-center transition-colors duration-300" onClick={() => setShowVideo(true)} >

              <span className="text-white group-hover:text-green-900 text-2xl transition-colors duration-300">
                <FaPlay />
              </span>
            </button>
          </div>

          {/* video section text */}
          <div
            ref={videoTextRef}
            className={`flex justify-center items-center flex-col transition-all duration-700 ease-in-out ${videoTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-2xl md:text-4xl font-bold">Most Trusted service</h2>
            <button className="mt-4 bg-green-600 text-white py-2 px-3 font-bold rounded-full flex items-center gap-5 hover:bg-green-600">
              Discover More
              <div className="bg-black hover:bg-green-600 text-3xl h-10 w-10 flex justify-center items-center rounded-full">
                <GoArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Info + Logos */}
      <div className="mt-30 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div>
          <div className='flex flex-row items-center gap-2'>
            <div className='h-0.5 w-10 bg-green-600' />
            <p className="text-green-600 text-lg font-bold">ABOUT CLEANING</p>
          </div>
          <h3 className="lg:text-6xl text-3xl font-extrabold mt-2 leading-tight">
            Excellent <span className="text-green-600">Service</span> cleaning
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <img src="https://randomuser.me/api/portraits/women/49.jpg" alt="user1" className="w-15 h-15 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user2" className="w-15 h-15 rounded-full border-2 border-white -ml-6" />
            <CiCirclePlus className='w-15 h-15 rounded-full -ml-6' />
            <div className="text-white text-xl font-bold">
              <p className='text-green-400 text-lg font-bold'> 57+</p> Members
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div
          ref={brandRef}
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-700 ease-in-out ${brandInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Walmart <div><GiAbstract029 /></div>
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            inVision <div><CiLinkedin /></div>
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            <div><SiNorwegian /></div>Logitech
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Yahoo
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Monday <div><FiSlack /></div>
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Walmart <div><GiAbstract029 /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
