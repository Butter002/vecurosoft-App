
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './comancss.css'

import { IoShareSocialSharp } from "react-icons/io5";


const ServiceBannner =  '/assets/images/Frame 1618873669.png';
const map123 =  '/assets/images/mapimage.png';

const firstimage =  '/assets/Blog/blog-first-image.jpg'
const widgetprofile =  '/assets/Blog/widget-profile-img-1-1.jpg'


const recent1 = '/assets/Blog/recent-post-1-1.jpg';
const recent2 = '/assets/Blog/recent-post-1-2.jpg';
const recent3 = '/assets/Blog/recent-post-1-3.jpg';
const blogd2 = '/assets/Blog/blog-d-2.jpg'
const blogd3 = '/assets/Blog/blog-d-3.jpg'
const blogpost1 =  '/assets/Blog/blog-post-user-1.jpg'
const blogpost2 = '/assets/Blog/blog-post-user-2.jpg'
const blogpost3 = '/assets/Blog/blog-post-user-3.jpg' 
const blogpostadmin = '/assets/Blog/blog-post-admin-1.jpg'


import { FaRegCalendarAlt ,FaChevronRight, FaArrowLeft} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowRight ,FaReply} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";



function Blog (){

return (
        <>
        <Header/>
         {/* bannner */}
                    <div>
                        <div className="relative w-full h-[450px] bg-cover flex overflow-hidden justify-cente lg:pl-50 bg-center" style={{ backgroundImage: `url(${ServiceBannner})` }}>
                        <img src={map123} alt="" className="absolute  hidden md:block top-20 left-5"/>
                        <div className="flex flex-col pl-5 lg:pl-10 justify-center gap-2 z-10 items-start h-full">
                            <p className="text-white font-bold text-6xl  lg:text-7xl">BLOG <span className="text-green-500">DETAILS</span></p>
                            <div className="flex flex-row justify-start">
                            <a href="Home" className="text-white text-xl font-extrabold">Home</a>
                            <div className="pl-5 pr-1 text-2xl font-extrabold text-green-600">//</div>
                            <p className="text-xl font-extrabold text-green-600">OUR BLOG</p>
                            </div>
                        </div>
                    </div>
                    </div>

                <div>
                    <div className="flex 2xl:px-50 md:px-8 py-30 flex-col lg:flex-row">
                        {/* left section */}
                        <div className="lg:w-7/10  w-full flex flex-col px-5 ">

                        <div className="mb-8">
                        <div className="w-full"><img src={firstimage} className="w-full rounded-2xl"/></div>
                        <div className="mt-5 relative  py-8">
                        <div className="flex flex-row font-bold text-xl items-center gap-2.5">
                        <span className="text-[#063A41]">WRITTEN BY:</span>
                        <span className="text-green-600">FRENK</span>
                        <span className="flex items-center gap-2 text-green-600 hover:text-[#063A41] cursor-pointer">
                            <FaRegCalendarAlt /> APRIL 27, 2025
                        </span>
                        </div>

                        <div className="flex flex-col justify-start">
                        <span className="text-[#063A41] text-4xl py-5 hover:text-green-600 font-bold">Dining & Living Room Cleaning</span>
                        <p className="font-semibold text-[#5E5C78]  text-xl">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs can 
                        cause harmfully diseases because of dirters .This also includes changing home bes linens share providd reovinsg that specialized deep unseen 
                        unseen dust echngy mites client.</p>
                        </div>
                        </div>

                        <blockquote
                        class="text-left px-[30px] pb-[40px] pt-0 pl-[110px] border-l-0 bg-transparent border-b-[8px] border-[#109C3D] rounded-[30px] my-[40px] mb-[38px] animate__animated animate__fadeInUp"
                        data-wow-delay="0.25s">

                        <p class="text-2xl text-[#063A41] font-bold italic">
                            “ Derek Ramsay and Ellen Adarna known thriving acting carers clean home can be nearly impossible “
                        </p>
                        <div className="flex flex-row mt-4 gap-1 text-green-600 items-center!">
                            <div className="h-1.5 w-10 rounded-2xl bg-green-500" />
                            <p class="block  text-lg font-semibold">Written by: frenk</p></div>
                        </blockquote>

                         <p className="font-semibold text-[#5E5C78]  text-xl">Window diseases because of dirters.
                         This also includes changing home bes linens share providd reovinsg that specialized deep unseen unseen dust echngy mites client.
                         We hand-deliver peace of mind and a tidy space, as well as the luxury of spare time to residents all across Chicago.</p>
                        </div>


                        <div className="pb-25 mb-8 relative div-bottom-border">
                        <div className="absolute bottom-0.5 left-0 w-full h-[2.5px] bg-[#CDD5D6]"></div>
                            <div className="w-full ">
                                <div className="text-[#063A41] font-bold mb-5 mt-5 text-4xl">What the Benefits?</div>
                                <p className="font-semibold text-[#5E5C78]  text-xl">Giving to your bed a new life to breathe by closed system where recircltng cleaning 
                                solution is applied (often with nozzles) cleans, rinses and sanitises equipment.
                                The CIP system the help of nanles reoving unseen dust mites and bed bugs can cause harmful diseases because of dirters. 
                                usually automatically controlled and the closed system where recircltng cleaning given.</p>
                            </div>
                            <div className="flex flex-row py-5 gap-4">
                                <img src={blogd2} className="w-2/4 rounded-4xl" />
                                <img src={blogd3} className="w-2/4 rounded-4xl" />
                            </div>
                            <div>
                                <span className="font-semibold text-[#5E5C78] text-xl">
                                Rainbow’s high techngy system with the help of nanleees reoving unseen dusot mites and bed bugs 
                                can cause harmfully diseases because of dirters. This also includes changing home bes linens share 
                                providd reovinsg that specialized deep unseen unseen dust echngy mites client. We hand-deliver peace
                                of mind and a tidy space, as well as the luxury of spare time to residents all across Chicago.</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-1 items-center">
                                    <span className="font-bold text-xl text-[#063A41]">TAGS : </span> 
                                    <p className="text-lg text-[#5E5C78] font-semibold"> Game, Everyone, fun</p>
                                </div> 
                                <div className="flex flex-row gap-1 items-center">
                                    <span className="text-xl text-[#063A41] hover:text-green-600 font-semibold">Share </span>
                                    <p> <IoShareSocialSharp className="text-xl text-green-600"/></p>
                                </div> 
                            </div>
                            <div className="flex flex-col  mt-8 lg:p-10 p-15 lg:flex-row bg-[#084a53] rounded-4xl   justify-center  items-center lg:gap-4  "> 
                                <div className="w-3/10" ><img src={blogpostadmin} className="rounded-full  border-4 border-green-600"/></div>
                                <div className="flex flex-col w-12/10 gap-4">

                                    <div className=" flex flex-row gap-2 flex-wrap  items-start">
                                        <span className="text-white font-bold text-3xl">Alex Aster</span>
                                        <p className="text-green-600 font-semibold text-lg">Founder & Ceo</p>
                                    </div>
                                    
                                    <span className="text-xl text-white ">Rainbow’s high techngy system with the help of nanleees reoving unseen dusot
                                    mites and bed bugs can causeharmfully diseases because of dirters. This also includes changing home bes linens.</span>
                                    
                                    <div className="flex flex-row gap-3 text-xl text-white"> <FaFacebookF/><span className="text-green-500"><BsTwitterX/></span><FaInstagram/><FaYoutube/></div>
                                </div>  
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <button className="flex hover:text-green-600 gap-3 font-semibold text-[#063A41] items-center text-xl mt-5"><FaArrowLeft/> PERVIOUS POST</button>
                                <button className="flex hover:text-green-600 gap-3 font-semibold items-center text-[#063A41] text-xl mt-5">NEXT POST <FaArrowRight/></button>
                            </div>
                        </div>

                        <div className="mt-15 mb-10">
                            <span className="font-bold  text-4xl text-[#063A41]">3 Comments</span>
                            <div>
                                <div className="flex flex-col lg:p-10 p-15 lg:flex-row justify-center items-center lg:gap-4"> 
                                <div className="w-3/10" ><img src={blogpost1} className="rounded-full  border-4 border-green-600"/></div>
                                <div className="flex flex-col border-2 border-dashed border-gray-400 w-12/10 gap-4 relative rounded-xl">
                                    <div className="flex flex-row gap-2 p-5 flex-wrap items-end">
                                        <span className="text-[#063A41] font-bold text-3xl">Alex Aster</span>
                                        <p className="text-green-600 font-semibold text-lg">April 27, 2025</p>
                                        <span className="text-xl text-gray-600 ">concept gaming tournament is essntially the same as any other sport everyone there is competing.</span>
                                    </div>
                                    <button className="text-green-600 absolute flex flex-row items-center gap-3 font-bold -bottom-10 left-2 text-xl"> REPLAY <FaReply className="text-lg"/></button>
                                </div>  
                                </div>

                                 <div className="flex ml-25 flex-col  lg:p-10 p-15 lg:flex-row justify-center  items-center lg:gap-4"> 
                                <div className="w-3/10" ><img src={blogpost3}  className="rounded-full  border-4 border-green-600"/></div>
                                <div className="flex flex-col border-2 border-dashed border-gray-400 w-12/10 gap-4 relative rounded-xl">
                                    <div className="flex flex-row gap-2 p-5 flex-wrap items-end">
                                        <span className="text-[#063A41] font-bold text-3xl">Emily Blunt</span>
                                        <p className="text-green-600 font-semibold text-lg">April 27, 2025</p>
                                        <span className="text-xl text-gray-600 ">concept gaming tournament is essntially the same as any other sport everyone there is competing.</span>
                                    </div>
                                    <button className="text-green-600 absolute flex flex-row items-center gap-3 font-bold -bottom-10 left-2 text-xl"> REPLAY <FaReply className="text-lg"/></button>
                                </div>  
                            </div>

                             <div className="flex flex-col  lg:p-10 p-15 lg:flex-row justify-center  items-center lg:gap-4  "> 
                                <div className="w-3/10" ><img src={blogpost2} className="rounded-full  border-4 border-green-600"/></div>
                                <div className="flex flex-col border-2 border-dashed border-gray-400 w-12/10 gap-4 relative rounded-xl">
                                    <div className="flex flex-row gap-2 p-5 flex-wrap items-end">
                                        <span className="text-[#063A41] font-bold text-3xl">Thomas Shelby</span>
                                        <p className="text-green-600 font-semibold text-lg">April 27, 2025</p>
                                        <span className="text-xl text-gray-600 ">concept gaming tournament is essntially the same as any other sport everyone there is competing.</span>
                                    </div>
                                    <button className="text-green-600 absolute flex flex-row items-center gap-3 font-bold -bottom-10 left-2 text-xl"> REPLAY <FaReply className="text-lg"/></button>
                                </div>  
                            </div>
                            </div>
                        </div>

                        {/* comment form */}
                        <div class="bg-green-600/4 p-6 rounded-lg shadow-sm">
                        <div>
                            <h2 class="text-4xl font-bold text-gray-800 mb-2">Leave a Reply</h2>
                            <p class="text-gray-600 mb-6 text-lg font-medium">
                            Your email address will not be published. Required fields are marked *
                            </p>

                            <form class="space-y-6">
                            <div>
                                <textarea
                                class="w-full border border-dashed border-gray-400 font-medium rounded-lg p-4 text-md"
                                rows="5"
                                placeholder="Your Comments *"
                                ></textarea>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                type="text"
                                placeholder="Your Name *"
                                class="w-full border border-dashed border-gray-400 font-medium rounded-lg p-6 text-md"
                                />
                                <input
                                type="email"
                                placeholder="Your Name *"
                                class="w-full border border-dashed border-gray-400 font-medium rounded-lg p-6 text-md"
                                />
                            </div>

                            <div class="flex items-start gap-2">
                                <input type="checkbox" id="vs-checkbox1" class="mt-1" />
                                <label for="vs-checkbox1" class="text-sm text-gray-700">
                                Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            <div>
                                <button
                                type="submit"
                                class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full text-sm transition-all duration-200"
                                >
                                Post Comment
                                </button>
                            </div>
                            </form>
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
                                <span className="text-[#063A41] font-semibold text-2xl hover:text-green-600">Dining & Leaving Room Cleaning</span></div>
                             </div>   
                        </div>

                         <div className="flex flex-col mb-5">
                             <div className="flex flex-row">
                                <div className="mr-8 w-2/5"> <img src={recent2} className="w-full rounded-xl" /></div>
                                <div className="flex flex-col w-3/5 flex-wrap "><span className="flex  flex-row font-bold gap-2.5 text-xl text-green-600 items-center"><FaRegCalendarAlt />dec 12,2024</span>
                                <span className="text-[#063A41] font-semibold text-2xl hover:text-green-600">Keeping the Hive Deep Clean plan</span></div>
                             </div>   
                        </div>

                         <div className="flex flex-col mb-5">
                             <div className="flex flex-row">
                                <div className="mr-8 w-2/5"> <img src={recent3} className="w-full rounded-xl" /></div>
                                <div className="flex flex-col w-3/5 flex-wrap "><span className="flex  flex-row font-bold gap-2.5 text-xl text-green-600 items-center"><FaRegCalendarAlt />dec 12,2024</span>
                                <span className="text-[#063A41] font-semibold text-2xl hover:text-green-600"> Most Caring Cleaning Service?</span></div>
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
                            rounded-full h-15 w-15  hover:bg-white group flex items-center justify-center" ><CiCirclePlus /></div> </div>
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
                            className="w-full px-4 py-2 text-md outline-none "
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