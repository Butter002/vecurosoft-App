import React from 'react';
import Header from '../components/Header';
import Slideshowcomponent from '../components/SlideShow'
import { FaPlay } from 'react-icons/fa';

function Home() {
  const stats = [
    { value: '950+', label: 'Happy Client' },
    { value: '45+', label: 'Aword Winner' },
    { value: '400+', label: 'Projects Completed' },
    { value: '100+', label: 'Team Member' },
  ];
  return (
    <>
    <div className="font-sans">
    <Header />
    <main className=''>
    <Slideshowcomponent />
    <div className='bg-[#109c3d] h-55 flex items-center gap-5 lg:flex-row overflow-hidden'>
      <div className="bg-black p-10   rounded-full hover:bg-[#05444d] text-white text-lg"><FaPlay /></div>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-3  text-white font-bold text-2xl'>ABOUT CLEANING <div className='h-1 w-15 bg-white'/> </div>
        <div className='text-4xl font-bold text-white'>DEEP CLEANINGIN YOUR CITY</div>
      </div>
      <div className='bg-[#042a2f] h-52 mb-3'>
      <div className="flex   w-[1120px] h-[195px] mt-[27px] items-center justify-center mx-auto">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center px-4 text-center">
          <span className="text-5xl font-bold text-white">{item.value}</span>
          <p className="text-2xl text-white font-bold "  >{item.label}</p>
        </div>
      ))}
    </div>
      </div>

    </div>
    </main>
    </div>
    </>
  );
}

export default Home;
