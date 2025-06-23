
import React from "react";
import { DiVim } from "react-icons/di";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './comancss.css'

import ServiceBannner from '../assets/images/Frame 1618873669.png';
import map123 from '../assets/images/mapimage.png';

import firstimage from '../assets/Blog/blog-first-image.jpg'
import widgetprofile from '../assets/Blog/widget-profile-img-1-1.jpg'
import girlwithitems from '../assets/images/blog-s-1-2.jpg'
import buket from '../assets/Blog/blog-s-1-1.png'

import recent1 from '../assets/Blog/recent-post-1-1.jpg';
import recent2 from '../assets/Blog/recent-post-1-2.jpg';
import recent3 from '../assets/Blog/recent-post-1-3.jpg';

import { FaRegCalendarAlt ,FaChevronRight} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearchPlus } from "react-icons/fa";


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
                    <div className="flex 2xl:px-50 md:px-8 py-30 flex-col lg:flex-row">
                        {/* left section */}
                        <div className="lg:w-7/10  w-full flex flex-col px-5 ">

                        <div>
                        <div className="w-full "> <img src={firstimage} className="w-full rounded-2xl"/></div>
                        <div className="mt-5 relative div-bottom-border py-8">
                        <div className="absolute bottom-0.5 left-0 w-full h-[2.5px] bg-[#CDD5D6]"></div>
                        <div className="flex flex-row text-green-600 hover:text-[#063A41] font-bold text-xl items-center gap-2.5"><span className="text-[#063A41]">WRITTEN BY:</span>
                        FRENK <FaRegCalendarAlt /> APRIL 27,2025</div>
                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-5xl py-5 hover:text-green-600 font-bold">Dining & Living Room Cleaning</span>
                        <p className="font-semibold text-[#5E5C78]  text-lg">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can 
                        cause harmfully diseases because of dirters .This also includes changing home bes linens share providd reovinsg that specialized deep unseen 
                        unseen dust echngy mites client.</p>
                        </div>
                        </div>

                        <div className="flex flex-row text-[#063A41]! text-2xl mt-5 items-start h-14 font-bold justify-between">
                        <a className="flex flex-row gap-1.5 items-center hover:text-green-700 justify-center">Read More <i className="fa-solid fa-angles-right text-green-600"></i></a>
                      

                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-[#063A41] font-bold text-2xl hover:text-green-600 transition">
                                Share <IoShareSocialSharp className="text-2xl text-green-600" />
                            </button>
                            <div className="absolute right-0 mt-2 hidden group-hover:flex gap-3 bg-white p-3 rounded-md shadow-md z-10 transition-all duration-300">
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                                <FaFacebookF className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-black transition">
                                <FaTwitter className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-pink-500 transition">
                                <FaInstagram className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-700 transition">
                                <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>

                        </div>
                        </div>

                        <div>
                        <div className="w-full "><img src={girlwithitems} className="w-full rounded-2xl" /></div>
                        <div className="mt-5 relative div-bottom-border py-8">
                        <div className="absolute bottom-0.5 left-0 w-full h-[2.5px] bg-[#CDD5D6]"></div>
                        <div className="flex flex-row text-green-600 font-bold text-xl items-center gap-2.5"><span className="text-[#063A41]">WRITTEN BY:</span>
                        FRENK <FaRegCalendarAlt /> APRIL 27,2025</div>
                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-5xl py-5 hover:text-green-600 font-bold">Keeping the Hive Clean home</span>
                        <p className="font-semibold text-[#5E5C78]  text-lg">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can 
                        cause harmfully diseases because of dirters .This also includes changing home bes linens share providd reovinsg that specialized deep unseen 
                        unseen dust echngy mites client.</p>
                        </div>
                        </div>

                        <div className="flex flex-row text-[#063A41]! text-2xl mt-5 items-start h-14 font-bold justify-between">
                        <a className="flex flex-row gap-1.5 items-center hover:text-green-700 justify-center">Read More <i className="fa-solid fa-angles-right text-green-600"></i></a>
                      

                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-[#063A41] font-bold text-2xl hover:text-green-600 transition">
                                Share <IoShareSocialSharp className="text-2xl text-green-600" />
                            </button>
                            <div className="absolute right-0 mt-2 hidden group-hover:flex gap-3 bg-white p-3 rounded-md shadow-md z-10 transition-all duration-300">
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                                <FaFacebookF className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-black transition">
                                <FaTwitter className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-pink-500 transition">
                                <FaInstagram className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-700 transition">
                                <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>

                        </div>
                        </div>

                        <div>
                        <div className="w-full "><img src={buket} className="w-full rounded-2xl" /></div>
                        <div className="mt-5 relative div-bottom-border py-8">
                        <div className="absolute bottom-0.5 left-0 w-full h-[2.5px] bg-[#CDD5D6]"></div>
                        <div className="flex flex-row text-green-600 font-bold text-xl items-center gap-2.5"><span className="text-[#063A41]">WRITTEN BY:</span>
                        FRENK <FaRegCalendarAlt /> APRIL 27,2025</div>
                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-5xl py-5 hover:text-green-600 font-bold">Most Caring Cleaning Service?</span>
                        <p className="font-semibold text-[#5E5C78]  text-lg">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can 
                        cause harmfully diseases because of dirters .This also includes changing home bes linens share providd reovinsg that specialized deep unseen 
                        unseen dust echngy mites client.</p>
                        </div>
                        </div>

                        <div className="flex flex-row text-[#063A41]! text-2xl mt-5 items-start h-14 font-bold justify-between">
                        <a className="flex flex-row gap-1.5 items-center hover:text-green-700 justify-center">Read More <i className="fa-solid fa-angles-right text-green-600"></i></a>
                      

                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-[#063A41] font-bold text-2xl hover:text-green-600 transition">
                                Share <IoShareSocialSharp className="text-2xl text-green-600" />
                            </button>
                            <div className="absolute right-0 mt-2 hidden group-hover:flex gap-3 bg-white p-3 rounded-md shadow-md z-10 transition-all duration-300">
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
                                <FaFacebookF className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-black transition">
                                <FaTwitter className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-pink-500 transition">
                                <FaInstagram className="text-lg" />
                                </a>
                                <a href="#" target="_blank" className="text-gray-600 hover:text-blue-700 transition">
                                <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>

                        </div>
                        </div>

                        </div>


                        {/* right section */}
                        <div className="lg:w-3/10 w-full px-5">

                        <div className="mb-5">
                        <img src={widgetprofile} className="widgetprofile" />
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

                        <div className="flex flex-col mt-5 ">
                        <div className="flex flex-row gap-2 text-3xl mb-4 font-bold text-[#063A41]"><span className="font-extrabold text-green-700">//</span>Recent Post</div>
                        <div className="flex flex-col mb-5">
                             <div className="flex flex-row">
                                <div className="mr-8 w-2/5"> <img src={recent1} className="w-full rounded-xl" /></div>
                                <div className="flex flex-col w-3/5 flex-wrap "><span className="flex  flex-row font-bold gap-2.5 text-xl text-green-600 items-center"><FaRegCalendarAlt />dec 12,2024</span>
                                <span className="text-[#063A41] font-semibold text-2xl">Dining & Leaving Room Cleaning</span></div>
                             </div>   
                        </div>

                         <div className="flex flex-col mb-5">
                             <div className="flex flex-row">
                                <div className="mr-8 w-2/5"> <img src={recent2} className="w-full rounded-xl" /></div>
                                <div className="flex flex-col w-3/5 flex-wrap "><span className="flex  flex-row font-bold gap-2.5 text-xl text-green-600 items-center"><FaRegCalendarAlt />dec 12,2024</span>
                                <span className="text-[#063A41] font-semibold text-2xl">Dining & Leaving Room Cleaning</span></div>
                             </div>   
                        </div>

                         <div className="flex flex-col mb-5">
                             <div className="flex flex-row">
                                <div className="mr-8 w-2/5"> <img src={recent3} className="w-full rounded-xl" /></div>
                                <div className="flex flex-col w-3/5 flex-wrap "><span className="flex  flex-row font-bold gap-2.5 text-xl text-green-600 items-center"><FaRegCalendarAlt />dec 12,2024</span>
                                <span className="text-[#063A41] font-semibold text-2xl">Dining & Leaving Room Cleaning</span></div>
                             </div>   
                        </div>
                        </div>

                        {/* tags */}
                        <div>
                            <div className="flex flex-row gap-2 text-3xl mb-5 font-bold text-[#063A41]"><span className="font-extrabold text-green-700">//</span>Tags</div>
                            <div className="flex flex-wrap gap-3 mt-6">
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                cleaning
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                keeping
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                service
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                Window
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                Move-In
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                Water Pool
                            </a>
                            <a href="blog-details.html" className="bg-[#E6EAEB] text-[#5E5C78] px-7 py-3 rounded-md text-md  font-semibold hover:bg-green-600 hover:text-white transition">
                                home clean
                            </a>
                            </div>

                        </div>

                        <div className="mt-5">
                        <div className="flex flex-row gap-2 text-3xl mb-5 font-bold text-[#063A41]"><span className="font-extrabold text-green-700">//</span> Follow Us</div>
                         <div>
                            <div className="grid grid-cols-3 md:w-[90%]  w-full  gap-3">
                            {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"].map((img, index) => (
                            <div key={index} className="group overflow-hidden rounded-md  relative">
                            <div className="absolute hidden group-hover:flex justify-center items-center  bg-[rgba(27,235,93,0.5)] h-full w-full roup z-10">  <div className="text-3xl hover:text-green-600 
                            rounded-full h-15 w-15  hover:bg-white group flex items-center justify-center" ><FaSearchPlus /></div> </div>
                            <img src={`src/assets/team/${img}`} alt={`Insta ${index}`} 
                            className="transition-transform md:w-100% w-full duration-500 group-hover:scale-110"/>
                            </div>

                                ))}
                            </div>
                            </div>
                        </div>

                            <div className="widget_search mt-5 animate-fadeInUp">
                        <form className="flex items-center border-b-2 border-gray-300  overflow-hidden ">
                            <input
                            type="text"
                            placeholder="type here..."
                            className="w-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <button type="submit" className="px-4 py-2 text-green-600 hover:text-white hover:bg-green-600 transition">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        </div>


                        </div>
                    </div>
                </div>
            <Footer/>
        </>
);
    
}

export default Blog;