import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { FaAnglesRight } from "react-icons/fa6";
import FooterLogo from '../assets/vector/logo.svg'
import { FaSearchPlus } from "react-icons/fa";
import '../HomeSetion/team.css'
const Footer = () => {
  return (
    <footer className="bg-[#062f33] text-white">
      <img src="" alt="" />
      {/* Main Footer Section */}
      <div className="md:grid grid-cols-1 flex flex-col  gap-10 md:grid-cols-2 lg:grid-cols-3  px-6 lg:px-40 py-16">
        
        {/* Logo & Info */}
        <div>
          <div className="flex items-center mb-1 gap-1">
            <img src={FooterLogo} alt="Logo" className="h-30 w-fit" />
          </div>
          <p className="text-gray-300 font-bold mt-4 leading-relaxed">
            Provide Detailed House Cleaning Sanitizing<br/> Services For Valued Clients.
          </p>

          <div className="flex items-center gap-3 mb-3 mt-6">
            <TbPhoneCall   className="text-green-500 text-5xl" />
            <div className="bg-[#0b6538] w-[1px] h-12"/>
            <div>
              <p className="font-bold hover:text-green-600 text-lg">+1 999 888 666</p>
              <p className="text-green-500 text-sm">Call 24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <p className="text-green-500 font-semibold whitespace-nowrap">Follow On :</p>
            <div className="flex items-center gap-[1.5px]">
            <span></span>
            <span className="w-[2px] h-6 bg-white/30"></span>
            <span className="w-[1.5px] h-4 pr-[-1px] bg-white/30"></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#115960] p-2 rounded-full">
                <FaFacebookF className="text-white text-lg" />
              </div>
              <div className="bg-[#115960] p-2 rounded-full">
                <FaLinkedinIn className="text-white text-lg" />
              </div>
              <div className="bg-[#115960] p-2 rounded-full">
                <FaInstagram className="text-white text-lg" />
              </div>
            </div>
          </div>

        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
          <div className="h-[2px] w-full  bg-[#144f56] flex justify-start  mb-6"><div className=" h-full w-15 bg-green-600"></div></div>
          <div className="grid md:grid-cols-2 gap-y-5 text-sm text-gray-300">
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Help Center
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Apartment Cleaning
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> About Us
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> One-Time Clean
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Contact Us
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Shield Glass
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Become A Cleaner
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Vacation Rental Cleaning
          </p>
          <p className="custom-link">
            <FaAnglesRight className="text-green-600" /> Blog
          </p>
        </div>
        </div>

        {/* Instagram Images */}
        <div>
        <h3 className="text-xl font-bold mb-4">Instagram</h3>
        <div className="h-[2px] w-full  bg-[#144f56] flex justify-start  mb-6"><div className=" h-full w-15 bg-green-600"></div></div>
        <div className="grid grid-cols-3 md:w-[90%]  w-full  gap-3">
        {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"].map((img, index) => (
        <div key={index} className="group overflow-hidden rounded-md border-2 border-green-400 relative">
        <div className="absolute hidden group-hover:flex justify-center items-center  bg-[rgba(27,235,93,0.5)] h-full w-full roup z-10">  <div className="text-3xl hover:text-green-600 
        rounded-full h-15 w-15  hover:bg-white group flex items-center justify-center" ><FaSearchPlus /></div> </div>
          <img
            src={`src/assets/team/${img}`}
            alt={`Insta ${index}`}
            className="transition-transform md:w-100% w-full duration-500 group-hover:scale-110"/>
        </div>

            ))}
          </div>
        </div>

      </div>

      {/* Sub Footer Section */}
      <div className="bg-[#063a41] flex gap-5 flex-col lg:flex-row py-8  md:py-0  items-center justify-between text-lg text-white">
         <div className=" bottom-0 left-0 md:bg-green-600  text-white  md:py-8 md:pl-40 md:pr-30 md:px-8 blog  md:text-md text-md font-bold  ">
          © Copyright 2025 - <span className="md:text-[#042a2f] text-green-500">Poolito</span> All rights reserved.
          <span className="md:text-[#042a2f] text-green-500 "> Vecuro</span>
        </div>
        <div className="flex items-center gap-4 md:pr-20">
          {["visa.png", "paypal.png", "mastercard.png", "amex.png", "discover.png"].map((img, i) => (
            <img key={i} src={`src/assets/cards/${img}`} alt="card" className="ld:h-8 h-6" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
