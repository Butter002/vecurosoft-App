import React from "react";
import { DiVim } from "react-icons/di";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './comancss.css'

import ServiceBannner from '../assets/images/Frame 1618873669.png';
import map123 from '../assets/images/mapimage.png';

import firstimage from '../assets/Blog/blog-first-image.jpg'
import widgetprofile from '../assets/Blog/widget-profile-img-1-1.jpg'

import { FaRegCalendarAlt } from "react-icons/fa";

function Blog (){

return (
        <>
        <Header/>
         {/* bannner */}
                    <div className="relative w-full h-[450px] bg-cover flex overflow-hidden justify-cente lg:pl-50 bg-center" style={{ backgroundImage: `url(${ServiceBannner})` }}>
                        <img src={map123} alt="" className="absolute  hidden md:block top-20 left-5"/>
                        <div className="flex flex-col pl-5 lg:pl-10 justify-center gap-2 z-10 items-start h-full">
                            <p className="text-white font-bold text-6xl  lg:text-7xl">BLOG <span className="text-green-500">SIDEBAR</span></p>
                            <div className="flex flex-row justify-start">
                            <a href="Home" className="text-white text-xl font-extrabold">Home</a>
                            <div className="pl-5 pr-1 text-2xl font-extrabold text-green-600">//</div>
                            <p className="text-xl font-extrabold text-green-600">OUR BLOG</p>
                            </div>
                        </div>
                    </div>

                <div>
                <div className="flex xl:px-50 py-30 flex-row">
                        {/* left section */}
                        <div className="w-7/10 flex flex-col px-5 ">
                        <img src={firstimage} alt="" />
                       <div className="mt-5">
                        <div className="flex flex-row text-green-600 font-bold text-xl items-center gap-2.5"><span className="text-[#063A41]">WRITTEN BY:</span>
                        FRENK <FaRegCalendarAlt /> APRIL 27,2025</div>
                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-5xl py-5 font-bold">Dining & Living Room Cleaning</span>
                        <p>Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can cause harmfully diseases because of dirters
                        .This also includes changing home bes linens share providd reovinsg that specialized deep unseen unseen dust echngy mites client.</p>
                         </div>
                       </div>

                        </div>

                        {/* right section */}
                        <div className="w-3/10 px-5">
                        <img src={widgetprofile}  className="widgetprofile" alt="" />
                        <div className="font-bold text-4xl text-[#063A41] mb-4">Amalia elha</div>
                        <div className="text-[#5E5C78] text-bold text-xl"><p>Lorem ipsum dolor sit amet cons elitsedid that eiusmod aboret dolore</p></div>
                        </div>
                </div>
        </div>
        <Footer/>
        </>
);
    
}

export default Blog;