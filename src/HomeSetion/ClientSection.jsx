import React from 'react';
import cleaningsofa from '../assets/images/cleaningsofa.png';
import map from '../assets/images/mapimage.png'
import { CiCirclePlus } from "react-icons/ci";
import { GiAbstract029 } from "react-icons/gi";
import { CiLinkedin } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { SiNorwegian } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
const Section4 = () => {
  return (
    <div className="relative gap-100 bg-[#052429] text-white mt-40 mb-10 py-18 px-3  md:h-234 md:px-68">
      
      <div className='absolute top-15  left-0 z-20'><img src={map} alt="" /></div>
      {/* Video Area */}
      <div className="relative z-50 -mt-[160px] bg-center bg-cover  pd-100  overflow-hidden h-[490px] md:h-[400px] lg:h-[440px]"
        style={{  backgroundImage: `url(${cleaningsofa})`,
        border: '8px solid transparent',
        borderImage: 'linear-gradient(to bottom, rgba(4, 39, 41, 0%), rgba(16, 155, 61, 1))',
        borderImageSlice: 1,}} >

        <div className="absolute inset-0 bg-[#042729]/50 flex flex-col justify-center items-center text-center px-4">
        <div className="relative flex items-center justify-center w-16 h-16 mb-4 group">
      {/* Wave effect - changes color on hover using group-hover */}
      <span className="absolute w-16 h-16 rounded-full bg-green-500 opacity-50 animate-ping group-hover:bg-white"></span>

      {/* Main Button */}
      <button className="relative z-10 bg-green-500 group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
        <span className="text-white group-hover:text-green-900 text-2xl transition-colors duration-300">
          <FaPlay />
        </span>
      </button>
    </div>
          <h2 className="text-2xl md:text-3xl font-bold">Most Trusted service</h2>
          <button className="mt-4 bg-green-600 text-white py-2 px-6 font-bold rounded-full flex items-center gap-2 hover:bg-green-600">
            Discover More <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Info + Logos */}
      <div className="mt-30 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div>
          <div className='flex flex-row items-center gap-2'> <div className='h-0.5 w-10 bg-green-600' /><p className="text-green-600 text-lg font-bold">ABOUT CLEANING</p> </div>
          <h3 className="lg:text-6xl text-3xl font-extrabold mt-2 leading-tight">
            Excellent <span className="text-green-600">Service</span> cleaning 
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <img src="https://randomuser.me/api/portraits/women/49.jpg" alt="user1" className="w-15 h-15 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user2" className="w-15 h-15 rounded-full border-2 border-white -ml-6" />
            <CiCirclePlus className='w-15 h-15  rounded-full -ml-6' />
            <div className="text-white text-xl font-bold"><p className='text-green-400 text-lg font-bold'> 57+</p>  Members</div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Walmart <div><GiAbstract029 /></div>
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            inVision <div> <CiLinkedin /></div> 
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            <div><SiNorwegian /></div>Logitech
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Yahoo
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Monday <div><FiSlack /></div>
          </div>
          <div className="bg-[#063a41] hover:bg-green-600 py-15 px-4 gap-2  flex items-center justify-center h-30 text-white font-bold text-3xl text-center">
            Walmart <div><GiAbstract029 /></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Section4;
