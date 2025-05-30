import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './team.css';

import map from '../assets/images/mapimage.png';
import team1 from '../assets/instagram/2.jpg';
import team2 from '../assets/instagram/3.jpg';
import team3 from '../assets/instagram/7.jpg';
import team4 from '../assets/instagram/5.jpg';

const teamMembers = [
  { name: 'Erica Hanson', role: 'Supervisor', image: team1 },
  { name: 'Alexandra Dario', role: 'Founder, CEO', image: team2 },
  { name: 'Emely Jonson', role: 'Office Cleaner', image: team3 },
  { name: 'Tonoy Rahomon', role: 'Supervisor', image: team4 },
  { name: 'Erica Hanson', role: 'Supervisor', image: team1 },
  { name: 'Emely Jonson', role: 'Office Cleaner', image: team3 },
  { name: 'Tonoy Rahomon', role: 'Supervisor', image: team4 },
];

const TeamArea = () => {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 4, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 1 },
    created(s) {
      timer.current = setInterval(() => {
        s.next();
      }, 4000);
    },
    destroyed() {
      clearInterval(timer.current);
    },
  });

  const handlePrev = () => {
    if (slider.current) slider.current.prev();
  };

  const handleNext = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16 relative overflow-hidden group">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1.5 w-15 rounded-2xl bg-green-600"></div>
            <span className="text-green-600 font-bold text-xl tracking-wide">MEET OUR TEAM</span>
            <div className="h-1.5 w-15 rounded-2xl bg-green-600"></div>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#063A41] font-extrabold mt-2">We have an expert team</h2>
        </div>

        <div className="relative">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="bg-white overflow-hidden group transition-all duration-300">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full rounded-2xl h-auto transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="h-2.5 w-full bottom-0 absolute bg-green-600"></div>
                    <div className="absolute bottom-2 left-0 bg-green-600 flex flex-col items-center justify-center group-hover:opacity-100 px-3 py-8 vs-team__social--media">
                      <a href="#" className="text-white bg-green-600 hover:text-[#063A41] p-2 rounded-full">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-white bg-green-600 hover:text-[#063A41] p-2 rounded-full">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#" className="text-white bg-green-600 hover:text-[#063A41] p-2 rounded-full">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-transparent">
                    <h3 className="text-2xl font-bold text-[#063A41] hover:text-green-600 capitalize">{member.name}</h3>
                    <p className="text-lg font-bold text-green-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (hidden by default, visible on hover on group) */}
          <div className="absolute top-1/2 left-0 -translate-x-20 -translate-y-1/2 z-10 hidden group-hover:flex lg:flex">
            <div className="border-2 border-dashed border-[#146673] rounded-full ml-2">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-green-500 text-white text-3xl flex justify-center items-center h-15 w-15 rounded-full"
              >
                <GoArrowLeft />
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 translate-x-20 -translate-y-1/2 z-10 hidden group-hover:flex lg:flex">
            <div className="border-2 border-dashed border-[#146673] rounded-full mr-2">
              <button
                onClick={handleNext}
                className="bg-gray-300 hover:bg-green-500 text-white text-3xl flex justify-center items-center h-15 w-15 rounded-full"
              >
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
