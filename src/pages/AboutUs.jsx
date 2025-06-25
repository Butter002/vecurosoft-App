import React from "react";
import { DiVim } from "react-icons/di";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section2 from "../HomeSetion/ClientSection"
import Section3 from "../HomeSetion/TeamArea"

import { GiBroom, GiVacuumCleaner } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";

const rightcorner= "/assets/images/about-shape-1-2.png"
const cleaningsofa= "/assets/images/cleaningsofa.png"
const vector1= "/assets/vector/Vector 1.png"
const section2image= "/assets/images/section2image.png"
const mapicon= "/assets/vector/about-icon4.svg"
const profile= "/assets/images/Co-founder.png"
const ServiceBannner= "/assets/images/Frame1618873669.png"
const map123= "/assets/images/mapimage.png"




function AboutUs (){
const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [ref2, inView2] = useInView({ triggerOnce: true,threshold: 0.2,});
return (

   <>
   <main className="flex flex-col content-between">
    <Header/>
      {/* bannner */}
      <div className="relative w-full h-[450px] bg-cover flex  justify-cente lg:pl-50 bg-center" style={{ backgroundImage: `url(${ServiceBannner})` }}>
        <img src={map123} alt="" className="absolute  hidden md:block top-20 left-5"/>
        <div className="flex flex-col pl-5 lg:pl-10 justify-center gap-2 z-10 items-start h-full">
          <p className="text-white font-bold text-6xl  lg:text-7xl">About <span className="text-green-500">Us</span></p>
          <div className="flex flex-row justify-start">
            <a href="Home" className="text-white text-xl font-extrabold">Home</a>
            <div className="pl-5 pr-1 text-2xl font-extrabold text-green-600">//</div>
            <p className="text-xl font-extrabold text-green-600">About Us</p>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="bg-white relative  mb-50 py-12 px-4">
        
      <img src={rightcorner} className="right-0 top-0 absolute"/>
                    
      <div className="flex flex-col xl:flex-row directionn gap-10 py-5 2xl:px-50 md:px-4 md:gap-25 items-center">
                    
      {/* Left Side Images */}  
      <div className="width-lg leftimage-w backcolor">
      <div ref={ref2} 
      className={`relative h-full flex  flex-row pl-6 pt-6 gap-5 items-start w-full
      transition-opacity duration-700 ${inView2 ? "slide-up-fade" : "opacity-0 translate-y-8"}`} > 

      <img src={cleaningsofa} alt="Cleaning" className="h-[570px] object-cover w-[100%] max-w-[450px] border-transparent" />

      <div className="bg-[#109c3d] w-full mt-8 h-2"/>

      <div className="absolute -left-0 top-6">
      <img src={vector1}/>
      </div>

      <div className="absolute image-box-position bottom-[-40px] right-[0px] hidden md:flex items-center justify-center w-[326px] h-[530px] border-15 border-green-600">
      <img src={section2image} alt="Worker" className="h-full object-cover w-full" />
      </div>

      </div>
      </div>
        
      {/* Right Side Content */}  
      <div ref={ref2}
          className={`gap-3 flex width-lg flex-col transition-opacity duration-700 ${inView2 ? "slide-up-fade" : "opacity-0 translate-y-8"}`}>                  

          <p className="text-green-600 font-semibold flex flex-row items-center text-lg "><div className="h-1 w-10 bg-green-600" />ABOUT CLEANING</p>

          <h2 className="lg:text-5xl text-4xl text-[#063a41] font-bold leading-10mb-6">
          Our Cleaning <span className="text-green-600">Agency</span>
          <br/> For Your City</h2>
          <p className="text-gray-500 font-bold mb-6">
          When You Work Angeles House Cleaners Referral Agency Cleaning
          Breathe Easy Because Your Home Will Soon</p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div>
              <GiVacuumCleaner className="text-green-600 text-6xl mb-2" />
              <h4 className="font-bold text-lg">House Cleaning</h4>
              <p className="text-sm text-gray-600">
              Leaning Machine Your Ultrasonic Parts Cleaning Dioxide
              </p>
          </div>
          <div>
              <GiBroom className="text-green-600 text-6xl mb-2" />
              <h4 className="font-bold text-lg">Living Room Cleaning</h4>
              <p className="text-sm text-gray-600">
              Leaning Machine Your Ultrasonic Parts Cleaning Dioxide
              </p>
          </div>
          </div>

          {/* CTA and Author */}
          <div className="flex items-center flex-wrap gap-4">
              <div className="group">
              <button className="bg-green-600 group-hover:bg-[#062F33] text-white py-2.5 px-4 rounded-full text-lg font-semibold flex items-center gap-6 transition-all duration-300">
                  Read More
                  <span className="bg-black group-hover:bg-green-600 text-white text-3xl h-10 w-10 flex justify-center items-center rounded-full transition-all duration-300">
                  <GoArrowRight />
                  </span>
              </button>
              </div>

          <div className="flex items-center gap-3">
              <div className="border-2 border-dashed p-1 border-green-500 object-cover rounded-full ">
              <img src={profile} alt="D. markwin" className="w-20 h-20 rounded-full" />
              </div>

              <div>
              <h5 className="font-bold text-2xl">D.justy</h5>
              <p className="text-green-600 text-xl">Co-founder</p>
              </div>
          </div>
          </div>

          {/* Footer Tag */}
          <div className="flex items-center gap-2 mt-6 text-green-600 font-semibold">
          <img src={mapicon} alt="" />
          <span className="font-bold text-2xl">
              Give Your Home A Deep Clean for aesthetic.
          </span>
          </div>
      </div>
      </div>
      </div>

      {/* section 2 */}
      <Section2 />

      {/* section 3 */}
      <Section3/>
      
    <Footer/>
   </main>
   </>
);
    
}

export default AboutUs;