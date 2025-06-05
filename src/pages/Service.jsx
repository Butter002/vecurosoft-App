import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewAndBooking from "../HomeSetion/ReviewAndBooking";
import Section2 from "../HomeSetion/Section4";
import ServiceBannner from '../assets/images/cleaning_banner.png';
import map from '../assets/images/mapimage.png';

import brand1 from "../assets/cards/brand-2-1.png";
import brand2 from "../assets/cards/brand-2-2.png";
import brand3 from "../assets/cards/brand-2-3.png";
import brand4 from "../assets/cards/brand-2-4.png";
import brand5 from "../assets/cards/brand-2-5.png";
import brand6 from "../assets/cards/brand-2-6.png";
import brand7 from "../assets/cards/brand-2-7.png";
import brand8 from "../assets/cards/brand-2-8.png";
import brand9 from "../assets/cards/brand-2-9.png";
import cleaningsofa from "../assets/images/cleaningsofa.png";
import section2image from "../assets/images/section2image.png";
import vector1 from "../assets/vector/Vector 1.png";

const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];

function Service() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        rtl: true,
        renderMode: "performance",
        slides: {
        perView: 5,
        spacing: 10,
        },
        breakpoints: {
        "(max-width: 1024px)": {
            slides: { perView: 3, spacing: 15 },
        },
        "(max-width: 768px)": {
            slides: { perView: 2, spacing: 10 },
        },
        },
    });

    // Autoplay effect
    useEffect(() => {
        let timeout;
        let mouseOver = false;

        const nextTimeout = () => {
        clearTimeout(timeout);
        if (mouseOver || !instanceRef.current) return;
        timeout = setTimeout(() => {
            instanceRef.current?.prev();
            nextTimeout();
        }, 3000);
        };

        sliderRef.current?.addEventListener("mouseover", () => {
        mouseOver = true;
        clearTimeout(timeout);
        });
        sliderRef.current?.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
        });

        nextTimeout();

        return () => clearTimeout(timeout);
    }, [instanceRef]);

    const [ref2, inView2] = useInView({ triggerOnce: true,threshold: 0.2,});
    // Place at the top inside the Service component function
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);


    return (
    <>
      <Header />
      {/* Banner */}
      <div className="relative w-full h-[450px] bg-cover flex justify-cente lg:pl-50 bg-center" style={{ backgroundImage: `url(${ServiceBannner})` }}>
        <img src={map} alt="" className="absolute top-20 left-5"/>
        <div className="flex flex-col lg:pl-10 justify-center gap-2 z-10 items-start h-full">
          <p className="text-white font-bold text-7xl">our <span className="text-green-500">service</span></p>
          <div className="flex flex-row justify-start">
            <a href="Home" className="text-white text-xl font-extrabold">Home</a>
            <div className="pl-5 pr-1 text-2xl font-extrabold text-green-600">//</div>
            <p className="text-xl font-extrabold text-green-600">our service</p>
          </div>
        </div>
      </div>

      {/* Section 2 & 3 */}
      <Section2 />
      <ReviewAndBooking />


      {/* forth section  */}
        <div className="bg-green-300/10 py-18 lg:m-1 px-4 md:px-16 xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-5 lg:px-20">
            {/* Left Side Images */}
            <div
              ref={ref2}
              className={`relative h-auto flex flex-row pl-6 gap-5 items-start w-full transition-opacity duration-700 ${inView2 ? "slide-up-fade" : "opacity-0 translate-y-8"}`}>
                
              <img src={cleaningsofa} alt="Cleaning" className="h-[570px] object-cover w-full max-w-[450px] border-transparent"/>

      <div className="bg-[#109c3d] w-full mt-8 h-2" />

      <div className="absolute -left-0">
        <img src={vector1} />
      </div>

      <div className="absolute bottom-[-40px] right-[0px] hidden lg:flex items-center justify-center w-[326px] h-[530px] border-[15px] border-green-600">
        <img src={section2image} alt="Worker" className="h-full object-cover w-full" />
      </div>
    </div>

    {/* Right Side Content */}
    <div
      ref={ref2}
      className={`gap-3 flex flex-col transition-opacity duration-700 ${
        inView2 ? "slide-up-fade" : "opacity-0 translate-y-8"
      }`} >
        
      {/* title area  */}
      <p className="text-green-600 font-semibold flex flex-row items-center gap-5 text-lg">
        <div className="h-1 w-10 bg-green-600" /> ASKED QUESTIONS
      </p>
      <h2 className="lg:text-5xl text-4xl text-[#063a41] font-bold leading-15 mb-6">
        General Frequently <span className="text-green-600">Asked</span>
        <br /> Questions
      </h2>

      {/* card area */}
      <div className="max-h-[300px] overflow-y-visible pr-1">
        {[
          {
            title: "1. Deep House Cleaning Service",
            content:
              "Give your home a fresh new look and feel especially after a long day of work. Our deep clean will help bring your property back up to scratch.",
          },
          {
            title: "2. NYC home cleaning company",
            content:
              "Give your home a fresh new look and feel especially after a long day of work. Our deep clean will help bring your property back up to scratch.",
          },
          {
            title: "3. 100% secure online payments",
            content:
              "Give your home a fresh new look and feel especially after a long day of work. Our deep clean will help bring your property back up to scratch.",
          },
          {
            title: "4. Fast, same day booking confirmation",
            content:
              "Yes, despite the removal of Government Feed-in Tariff, installs have been forecast to continue at the current rate and even increase in 2025.",
          },
        ].map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl mb-4 shadow-sm">

           <button
  onClick={() => toggle(index)}
  className={`w-full text-left px-10 py-3 text-xl font-bold  focus:outline-none flex justify-between items-center transition-all duration-300
    ${openIndex === index 
      ? "bg-green-600 text-white rounded-t-xl border-b-0" 
      : "bg-white text-gray-800 rounded-xl border-b border-gray-200"}`}
>
  {item.title}
  <span className={openIndex === index ? "text-white" : "text-green-600"}>{openIndex === index ? "-" : "+"}</span>
</button>


            <div className={`px-6 overflow-hidden transition-all duration-300 bg-gray-50 rounded-b-xl text-gray-800 
            ${openIndex === index ? "max-h-[200px] py-4" : "max-h-0 py-0" }`} >

              <p className="text-lg px-5">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>


      {/* Brand slider */}
      <div className="w-full bg-white py-20">
        <div ref={sliderRef} className="keen-slider px-4 max-w-[1300px] mx-auto">
          {[...brandImages, ...brandImages].map((img, index) => (
            <div key={index} className="keen-slider__slide flex justify-center items-center">
              <img
                src={img}
                alt={`Brand ${index + 1}`}
                className="h-[80px] object-contain bg-white "
              />
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Service;
