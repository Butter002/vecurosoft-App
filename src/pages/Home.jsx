import React from 'react';

import Header from '../components/Header';
import Slideshowcomponent from '../components/SlideShow'
import cleaningsofa from '../assets/images/cleaningsofa.png';
import swimingpool_cleaning from '../assets/images/swimingpool_cleaning.png';
import profile from '../assets/images/Co-founder.png'

import { FaPlay, FaSmile, FaTrophy, FaUsers,FaTasks} from 'react-icons/fa';
import { ImUsers } from "react-icons/im";
import { MdMapsHomeWork } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiBroom,GiVacuumCleaner } from "react-icons/gi";

import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <div className="font-sans">
    <Header />
    <main className=''>
      {/* section 1 */}
    <Slideshowcomponent />


    {/* Section 2 */}
    <div className="flex flex-col bg-[#109c3d] lg:flex-row">
      {/* Left Green Panel */}
      <div className=" flex items-center justify-start px-7 py-14 w-full border-dashed border-black lg:w-[35%]">
        <div className="flex items-center  gap-5">
          <div className='border-2 border-white border-dashed hover:border-black rounded-full'>
          <div className="bg-[#042a2f] p-7 rounded-full text-white hover:text-green-600 text-3xl">
            <FaPlay />
          </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-white font-bold text-sm tracking-wider">
              ABOUT CLEANING
              <div className="h-[2px] w-10 bg-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-2">
              DEEP CLEANING<br />IN YOUR CITY
            </div>
          </div>
        </div>
      </div>

      {/* Right Dark Panel */}
      <div className="bg-[#042a2f] w-full lg:w-[75%] lg:mb-2 px-11 py-6 lg:py-0 grid grid-cols-2 gap-6 sm:gap-8 lg:flex lg:items-center lg:justify-between">

        {/* Block 1 */}
        <div className="flex items-center">
          <div className="text-white text-4xl mr-3">
          <ImUsers />
          </div>
          <div>
            <div className="text-4xl font-bold text-white">950+</div>
            <div className="text-1x; text-white/80 font-semibold">Happy Client</div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex items-center">
          <div className="text-white text-4xl mr-3">
            <FaTrophy />
          </div>
          <div>
            <div className="text-4xl font-bold text-white">45+</div>
            <div className="text-1x; text-white/80 font-semibold">Award Winner</div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex items-center">
          <div className="text-white text-4xl mr-3">
            <MdMapsHomeWork />
          </div>
          <div>
            <div className="text-4xl font-bold text-white">400+</div>
            <div className="text-1x; text-white/80 font-semibold">Completed Project</div>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex items-center">
          <div className="text-white text-4xl mr-3">
            <FaUsers />
          </div>
          <div>
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-1x; text-white/80 font-semibold">Team Member</div>
          </div>
        </div>
      </div>
    </div>

    {/* section 3 */}
    <div className="bg-white py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        {/* Left Side Images */}
        <div className="relative w-full">
          <img src={cleaningsofa} alt="Cleaning" className="rounded-lg border-4 h-[650px] object-cover lg:w-[510px] border-green-600" />
          <div className="absolute bottom-[-40px] right-[0px] bg-white border-4 hidden border-green-600 rounded-lg shadow-lg p-2 w-[420px] h-[560px] lg:flex items-center justify-center">
            <img src={swimingpool_cleaning} alt="Worker" className="rounded-lg h-full w-[full] object-cover" />
          </div>
          <div className="absolute top-[50%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl">
            <GiBroom />
          </div>
        </div>

        {/* Right Side Content */}
        <div className='gap-10'>
          <p className="text-green-600 font-semibold mb-2">— ABOUT CLEANING</p>
          <h2 className="text-6xl text-[#063a41] font-bold mb-4">
            Our Cleaning <span className="text-green-600">Agency</span><br /> For Your City
          </h2>
          <p className="text-gray-500 font-bold mb-6">
            When You Work Angeles House Cleaners Referral Agency Cleaning Breathe Easy Because Your Home Will Soon
          </p>

          {/* Services */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <GiVacuumCleaner className="text-green-600 text-6xl mb-2" />
              <h4 className="font-bold text-lg">House Cleaning</h4>
              <p className="text-sm text-gray-600">Leaning Machine Your Ultrasonic Parts Cleaning Dioxide</p>
            </div>
            <div>
              <GiBroom className="text-green-600 text-6xl mb-2" />
              <h4 className="font-bold text-lg">Living Room Cleaning</h4>
              <p className="text-sm text-gray-600">Leaning Machine Your Ultrasonic Parts Cleaning Dioxide</p>
            </div>
          </div>

          {/* CTA and Author */}
          <div className="flex items-center  flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-[#062F33] text-white py-3 px-5 rounded-full font-semibold object-cover justify-between flex items-center gap-10">
              Read More <div className="bg-black hover:bg-green-600 text-2xl p-2 px-3 flex  rounded-full">&rarr;</div>
            </button>
            <div className="flex items-center gap-3">
              <img src={profile} alt="D. markwin"
                className="w-16 h-16 rounded-full border-2 border-dashed border-green-500 object-cover"/>
              <div>
                <h5 className="font-bold">D.justy </h5>
                <p className="text-green-600 text-sm">Co-founder</p>
              </div>
            </div>
          </div>

          {/* Footer Tag */}
          <div className="flex items-center gap-2 mt-6 text-green-600 font-semibold">
            <FaMapLocationDot className="text-xl" />
            <span>Give Your Home A Deep Clean for aesthetic.</span>
          </div>
        </div>
      </div>
    </div>
      <div className='bg-white h-100 w-100'></div>
    </main>
    <Footer />
    </div>
    </>
  );
}

export default Home;
