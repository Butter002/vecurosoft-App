import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaPlay, FaSmile, FaTrophy, FaUsers, FaTasks } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdMapsHomeWork } from "react-icons/md";
import { GiBroom, GiVacuumCleaner } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section4 from "../HomeSetion/Section4";
import Section1 from "../HomeSetion/SlideShow";
import ClientSection from "../HomeSetion/ClientSection";
import TeamArea from "../HomeSetion/TeamArea";
import ReviewAndBooking from "../HomeSetion/ReviewAndBooking";
import './Section2.css'

import cleaningsofa from "../assets/images/cleaningsofa.png";
import section2image from "../assets/images/section2image.png";
import profile from "../assets/images/Co-founder.png";
import Blog from "../HomeSetion/BlogSection";
import vector1 from "../assets/vector/Vector 1.png";
import mapicon from '../assets/vector/about-icon4.svg'

function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [ref2, inView2] = useInView({ triggerOnce: true,threshold: 0.2,});

  return (
    <>
      
        <Header/>
        <main className="">
          {/* section 1 */}
          <Section1/>

          {/* Section 2 */}
          <div className="flex flex-col  bg-[#109c3d] md:flex-row">
            
            {/* Left Green Panel */}
            <div className="flex items-center justify-start px-6 py-14 w-full border-dashed border-black lg:w-[35%]">
              <div className="flex items-center gap-5">
                <div className="border-2 border-white border-dashed hover:border-black rounded-full">
                  <div className="bg-[#042a2f] p-7 rounded-full text-white hover:text-green-600 text-3xl">
                    <FaPlay />
                  </div>
                </div>
                <div
                  ref={ref}
                  className={`transition-opacity duration-700 ${
                    inView ? "slide-up-fade" : "opacity-0 translate-y-8"}`} >               

                  <div className="flex items-center gap-3 text-white font-bold text-sm tracking-wider">
                    ABOUT CLEANING
                    <div className="h-[2px] w-10 bg-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-2">
                    DEEP CLEANING
                    <br />
                    IN YOUR CITY
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dark Panel */}
            <div ref={ref}
              className="bg-[#042a2f] w-full lg:w-[75%] lg:mb-2 px-11 py-6 lg:py-0 grid grid-cols-2  gap-6 sm:gap-8  lg:flex lg:items-center lg:justify-between" >
              {[
                { icon: <ImUsers />, count: 950, label: "Happy Client" },
                { icon: <FaTrophy />, count: 45, label: "Award Winner" },
                {
                  icon: <MdMapsHomeWork />,
                  count: 400,
                  label: "Completed Project",
                },
                { icon: <FaUsers />, count: 100, label: "Team Member" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-white text-6xl mr-3">{item.icon}</div>
                  <div>
                    <div className="text-4xl font-bold text-white">
                      {inView && <CountUp end={item.count} duration={2} />}+
                    </div>
                    <div className="text-xl  text-white/60 font-semibold">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* section 3 */}
          <div className="bg-white py-12 lg:m-1 px-4 px-lg">
            <div className="flex flex-col xl:flex-row directionn gap-20 py-5 lg:px-20 items-center">
              {/* Left Side Images */}
              <div className=" width-lg backcolor  ">
                <div ref={ref2} 
                className={`relative h-full flex  flex-row pl-6 pt-6 gap-5 items-start w-full
                transition-opacity duration-700 ${inView2 ? "slide-up-fade" : "opacity-0 translate-y-8"}`} > 

                <img src={cleaningsofa} alt="Cleaning" className="h-[570px] object-cover w-[100%] max-w-[450px] border-transparent" />

                <div className="bg-[#109c3d] w-full mt-8 h-2"/>

                <div className="absolute -left-0 top-6">
                  <img src={vector1}/>
                </div>

                <div className="absolute image-box-position bottom-[-40px] right-[0px] hidden lg:flex items-center justify-center w-[326px] h-[530px] border-15 border-green-600">
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

          {/* section 3 for responsive */}


          {/* section 4 */}
          <Section4/>

          {/* sectiom 5 */}
          <ClientSection/>

          {/* section 6*/}
          <TeamArea/>

          {/* section 7 */}
          <ReviewAndBooking/>

          {/* section 8 */}
          <Blog/>

          </main>
        <Footer />
      
    </>
  );
}

export default Home;
