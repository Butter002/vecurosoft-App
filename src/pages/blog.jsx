import React from "react";
import { DiVim } from "react-icons/di";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './comancss.css'

import ServiceBannner from '../assets/images/Frame 1618873669.png';
import map123 from '../assets/images/mapimage.png';

import firstimage from '../assets/Blog/blog-first-image.jpg'
import widgetprofile from '../assets/Blog/widget-profile-img-1-1.jpg'

import { FaRegCalendarAlt ,FaChevronRight} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaShareAlt } from "react-icons/fa";


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

                        <div>
                        <div className="w-full "> <img src={firstimage} className="w-full rounded-2xl"/></div>
                        <div className="mt-5 relative div-bottom-border py-8">
                        <div className="absolute bottom-0.5 left-0 w-full h-[2.5px] bg-[#CDD5D6]"></div>
                        <div className="flex flex-row text-green-600 font-bold text-xl items-center gap-2.5"><span className="text-[#063A41]">WRITTEN BY:</span>
                        FRENK <FaRegCalendarAlt /> APRIL 27,2025</div>
                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-5xl py-5 font-bold">Dining & Living Room Cleaning</span>
                        <p className="font-semibold text-[#5E5C78]  text-lg">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can 
                        cause harmfully diseases because of dirters .This also includes changing home bes linens share providd reovinsg that specialized deep unseen 
                        unseen dust echngy mites client.</p>
                        </div>
                        </div>

                        <div className="flex flex-row text-[#063A41]! text-2xl mt-5 items-start h-14 font-bold justify-between">
                        <a className="flex flex-row gap-1.5 items-center hover:text-green-700 justify-center">Read More <i className="fa-solid fa-angles-right text-green-600"></i></a>
                      

                        <div className="flex flex-col items-start gap-4">
                        {/* Social Icons List */}
                        <ul className="flex items-center gap-3">
                            <li>
                            <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                                <FaFacebookF className="text-lg" />
                            </a>
                            </li>
                            <li>
                            <a href="#" target="_blank" className="text-gray-600 hover:text-black transition">
                                <FaXTwitter className="text-lg" />
                            </a>
                            </li>
                            <li>
                            <a href="#" target="_blank" className="text-gray-600 hover:text-pink-500 transition">
                                <FaInstagram className="text-lg" />
                            </a>
                            </li>
                            <li>
                            <a href="#" target="_blank" className="text-gray-600 hover:text-blue-700 transition">
                                <FaLinkedinIn className="text-lg" />
                            </a>
                            </li>
                        </ul>

                        {/* Share Button (your code style) */}
                        <a
                            href="#"
                            className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1.5 transition"
                        >
                            share <IoShareSocialSharp className="text-base" />
                        </a>
                        </div>

                        </div>
                        </div>

                        </div>


                        {/* right section */}
                        <div className="w-3/10 px-5">

                        <div className="mb-5">
                        <img src={widgetprofile}  className="widgetprofile" alt="" />
                        <div className="font-bold text-4xl text-[#063A41] mb-4">Amalia elha</div>
                        <div className="text-[#5E5C78] text-bold text-xl">Lorem ipsum dolor sit amet cons elitsedid that eiusmod aboret dolore</div>
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-row gap-2 text-3xl mb-4 font-bold text-[#063A41]"><span className="font-extrabold text-green-700">//</span>category</div>
                            <ul className="space-y-4">
                            <li className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm hover:bg-gray-50 transition relative">
                                <a
                                href="blog-details.html"
                                className="flex items-center gap-2 text-gray-800 hover:text-green-600 font-medium">
                                <i className="fa-solid fa-angles-right text-green-600"></i>
                                Pool Cleaning
                                </a>
                                <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-600">09</span>
                                <FaChevronRight className="text-green-600 text-xs" />
                                </div>
                            </li>

                            <li className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm hover:bg-gray-50 transition relative">
                                <a
                                href="blog-details.html"
                                className="flex items-center gap-2 text-gray-800 hover:text-green-600 font-medium"
                                >
                                <i className="fa-solid fa-angles-right text-green-600"></i>
                                Pools Maintenance
                                </a>
                                <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-600">02</span>
                                <FaChevronRight className="text-green-600 text-xs" />
                                </div>
                            </li>

                            <li className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm hover:bg-gray-50 transition relative">
                                <a
                                href="blog-details.html"
                                className="flex items-center gap-2 text-gray-800 hover:text-green-600 font-medium"
                                >
                                <i className="fa-solid fa-angles-right text-green-600"></i>
                                Sweep Home
                                </a>
                                <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-600">08</span>
                                <FaChevronRight className="text-green-600 text-xs" />
                                </div>
                            </li>

                            <li className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm hover:bg-gray-50 transition relative">
                                <a
                                href="blog-details.html"
                                className="flex items-center gap-2 text-gray-800 hover:text-green-600 font-medium"
                                >
                                <i className="fa-solid fa-angles-right text-green-600"></i>
                                Window Cleaning
                                </a>
                                <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-600">03</span>
                                <FaChevronRight className="text-green-600 text-xs" />
                                </div>
                            </li>
                            </ul>
                        </div>

                        </div>
                </div>
        </div>
        <Footer/>
        </>
);
    
}

export default Blog;