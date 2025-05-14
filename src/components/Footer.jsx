import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import FooterLogo from '../assets/images/broom.png'
import { FaAnglesRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#062f33] text-white">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20 py-16">
        
        {/* Logo & Info */}
        <div>
          <div className="flex items-center mb-14 gap-1">
            <img src={FooterLogo} alt="Logo" className="h-20 w-20" />
            <h2 className="text-5xl font-bold text-white">Poolito</h2>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
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
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <div className="h-[2px] w-[90%] bg-gradient-to-r from-green-500 to-transparent mb-6"></div>
          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Help Center
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Apartment Cleaning
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> About Us
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> One-Time Clean
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Contact Us
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Shield Glass
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Become A Cleaner
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Vacation Rental Cleaning
          </p>
          <p className="flex items-center gap-2 font-bold hover:text-green-600 hover:translate-x-2 transition-transform duration-300 cursor-pointer">
            <FaAnglesRight className="text-green-600" /> Blog
          </p>
        </div>
        </div>

        {/* Instagram Images */}
        <div>
          <h3 className="text-xl font-bold mb-4">Instagram</h3>
          <div className="h-[2px] w-[100%] bg-gradient-to-r from-green-500 to-transparent mb-6"></div>
          <div className="grid grid-cols-3 gap-3">
            {["1.jpg", "2.jpg", "7.jpg", "4.jpg", "5.jpg", "6.jpg"].map((img, index) => (
              <img
                key={index}
                src={`src/assets/instagram/${img}`}
                alt={`Insta ${index}`}
                className="rounded-md border-2 border-green-400 transition-transform duration-300 hover:scale-75"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sub Footer Section */}
      <div className="bg-[#063a41] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-8 text-lg text-white">
        <p className="mb-2 lg:mb-0">
          © Copyright 2025 - <span className="text-green-500 font-bold">Poolito</span> All rights reserved.
          <span className="text-[#042a2f] font-bold"> Vecuro</span>
        </p>
        <div className="flex items-center gap-3">
          {["visa.png", "paypal.png", "mastercard.png", "amex.png", "discover.png"].map((img, i) => (
            <img key={i} src={`src/assets/cards/${img}`} alt="card" className="h-5" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
