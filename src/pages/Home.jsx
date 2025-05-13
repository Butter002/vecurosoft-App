import React from 'react';
import Header from '../components/Header';
import Slideshowcomponent from '../components/SlideShow'
import { FaPlay, FaSmile, FaTrophy, FaUsers,FaTasks} from 'react-icons/fa';
import { ImUsers } from "react-icons/im";
import { MdMapsHomeWork } from "react-icons/md";

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


    </main>
    </div>
    </>
  );
}

export default Home;
