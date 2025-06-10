import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import { IoBedSharp } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBath, FaKitchenSet } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { MdOutlineWindow } from "react-icons/md";
import { GiFloorPolisher, GiVacuumCleaner } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

import "keen-slider/keen-slider.min.css";
import "./Section4.scss";
import "./SliderButtons.css"

import img1 from "../assets/instagram/1.jpg";
import img2 from "../assets/instagram/2.jpg";
import img3 from "../assets/instagram/3.jpg";
import img4 from "../assets/instagram/4.jpg";
import img5 from "../assets/instagram/5.jpg";
import img6 from "../assets/instagram/6.jpg";
import img7 from "../assets/instagram/window_cleainng.png";
import img8 from "../assets/instagram/3.jpg";



const cardData = [
  { title: "BED & MATTRES", image: img1, icon: <IoBedSharp /> },
  { title: "HOUSE CLEAN", image: img2, icon: <BiSolidBuildingHouse /> },
  { title: "HOME SERVICE", image: img3, icon: <GiVacuumCleaner /> },
  { title: "KITCHEN CLEAN", image: img4, icon: <FaKitchenSet /> },
  { title: "BATHROOM CLEAN", image: img5, icon: <FaBath /> },
  { title: "FLOOR & WALL", image: img6, icon: <GiFloorPolisher /> },
  { title: "WINDOW CLEAN", image: img7, icon: <MdOutlineWindow /> },
  { title: "OFFICE CLEAN", image: img8, icon: <ImOffice /> },
];

      const Section4 = () => {
        const timerRef = useRef(null);
        const [sliderRef, instanceRef] = useKeenSlider({
          loop: true,
          mode: "free",
          slides: { perView: 4, spacing: 15 },
          breakpoints: {
            "(max-width: 768px)": {
              slides: {
                perView: 1,
                spacing: 10,
              },
            },  
          },
        });

        const { ref: inViewRef, inView } = useInView({ triggerOnce: true,threshold: 0.2,});

        const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });

        useEffect(() => {
          const slider = instanceRef.current;
          if (!slider) return;

          timerRef.current = setInterval(() => {slider.next();}, 3000);

        return () => clearInterval(timerRef.current); }, [instanceRef]);

        return (
        <div ref={inViewRef} className=" relative py-24 mb-10  lg:px-40 section4">


          {/* upper section */}
          <div ref={titleRef} className={`text-center mb-10 transform transition-all duration-700 ease-out 
          ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="bg-green-600 h-1 w-[90px]" />
            <div className="font-semibold text-gray-700 text-lg tracking-wider">
              CLEANING SERVICE
            </div>
            <div className="bg-green-600 h-1 w-[90px]"/>
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#062F33]">
            Our Excellent Service
          </h2>
          </div>

          {/* card sectio  */}
          <div className="slider-wrapper flex items-center gap-2 flex-row">
          {/* Left Arrow */}
          <button onClick={() => instanceRef.current?.prev()} className="slider-arrow hidden lg:flex h-16 w-16 
          rounded-full border-4 border-dashed border-gray-300 items-center justify-center transition-all duration-300 hover:bg-green-600 hover:border-white">
          <FaArrowLeft className="arrow-icon text-xl text-gray-500 transition-colors duration-300" />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {cardData.map((card, index) => (
              <div className="keen-slider__slide pb-5" key={index}>
                <div
                  className={`relative h-full group rounded-xl m-4 mt-0 pb-5 shadow-md bg-white lg:m-0 xl:mx-8 
                  transition-all duration-700 ease-out ${inView ? "card-animate opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={inView ? { animationDelay: `${index * 0.2}s` } : {}} >
                  <div className="overflow-hidden flex flex-col justify-center items-center text-center rounded-t-xl">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <div className="px-6 py-5 flex flex-col gap-5 items-start">
                    <div className="flex flex-row border-gray-400 border-b-2 group-hover:border-green-600 border-dashed pb-5 items-end w-full justify-between">
                      <div>
                        <div className="text-[#109c3d] font-bold text-xl">
                          CLEANING 0{index + 1}
                        </div>
                        <h3 className="font-bold text-2xl text-[#063A41] hover:text-green-600 line-clamp-1 mt-1">
                          {card.title}
                        </h3>
                      </div>
                      <div className="text-3xl bg-grey">{card.icon}</div>
                    </div>
                    <p className="text-gray-500 text-lg">
                      Aweeps & mopsd vacuum floor House Cleaners.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-4 bg-white group-hover:bg-[#109c3d] transition-all duration-300 rounded-b-xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={() => instanceRef.current?.next()} className="slider-arrow hidden lg:flex h-16 w-16 rounded-full
          border-4 border-dashed border-gray-300 items-center justify-center transition-all duration-300 hover:bg-green-600 hover:border-white" >
          <FaArrowRight className="arrow-icon text-xl text-gray-400 transition-colors duration-300" />
          </button>
          </div>

    </div>
  );
};

export default Section4;
