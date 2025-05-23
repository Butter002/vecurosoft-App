import React from 'react';
import cleaningsofa from '../assets/images/cleaningsofa.png';
import { GiAbstract029 } from "react-icons/gi";
import { CiLinkedin } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { SiNorwegian } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
const Section4 = () => {
  return (
    <section className="relative gap-10 bg-[#052429] text-white mt-40 py-16 px-4 md:px-100">
      {/* Video Area */}
      <div className="relative -mt-[160px] bg-center bg-cover  rounded-lg pd-100  overflow-hidden h-[300px] md:h-[400px] lg:h-[555px]"
        style={{ backgroundImage: `url(${cleaningsofa})` }} >

        <div className="absolute inset-0 bg-[#042729]/50 flex flex-col justify-center items-center text-center px-4">
          <button className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-2xl"><FaPlay /></span>
          </button>
          <h2 className="text-2xl md:text-3xl font-bold">Most Trusted service</h2>
          <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-green-600">
            Discover More <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Info + Logos */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div>
          <div className='flex flex-row items-center gap-2'> <div className='h-0.5 w-10 bg-green-400' /><p className="text-green-400 text-sm font-medium">ABOUT CLEANING</p> </div>
          <h3 className="text-3xl font-bold mt-2 leading-tight">
            Excellent <span className="text-green-400">Service</span> cleaning
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user2" className="w-10 h-10 rounded-full border-2 border-white -ml-3" />
            <div className="text-white text-lg font-semibold"><p className=' text-green-400 text-lg font-semibold'>57+</p>  Members</div>
          </div>
        </div>

        {/* Brand Logos */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    Walmart <GiAbstract029 />
  </div>
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    inVision <CiLinkedin /> 
  </div>
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    <SiNorwegian />Logitech
  </div>
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    Yahoo❗
  </div>
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    Monday <FiSlack />
  </div>
  <div className="bg-[#063a41] hover:bg-green-600 p-4 gap-3 rounded-lg flex items-center justify-center h-20 text-white font-bold text-xl text-center">
    Walmart <GiAbstract029 />
  </div>
</div>


      </div>
    </section>
  );
};

export default Section4;
