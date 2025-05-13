import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import FooterLogo from '../assets/images/broom.png'
import { FaAnglesRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#042a2f] text-white">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20 py-16">
        
        {/* Logo & Info */}
        <div>
          <div className="flex items-center gap-3">
            <img src={FooterLogo} alt="Logo" className="h-19 w-19" />
            <h2 className="text-3xl font-bold text-white">Poolito</h2>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Provide Detailed House Cleaning Sanitizing Services For Valued Clients.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <TbPhoneCall   className="text-green-500 text-5xl" />
            <div>
              <p className="font-bold text-lg">+1 999 888 666</p>
              <p className="text-green-500 text-sm">Call 24/7</p>
            </div>
          </div>

          <p className="text-green-500 mt-6 font-semibold">Follow On :</p>
          <div className="flex items-center gap-4 mt-2">
            <FaFacebookF className="bg-[#011619] p-2 text-xl rounded-full" />
            <FaLinkedinIn className="bg-[#011619] p-2 text-xl rounded-full" />
            <FaInstagram className="bg-[#011619] p-2 text-xl rounded-full" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <div className="h-[2px] w-[90%] bg-gradient-to-r from-green-500 to-transparent mb-6"></div>
          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300">
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Help Center</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Apartment Cleaning</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> About Us</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> One-Time Clean</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Contact Us</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Shield Glass</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Become A Cleaner</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Vacation Rental Cleaning</p>
            <p className="flex items-center  gap-2 font-bold hover:text-white cursor-pointer"><FaAnglesRight className="text-green-600" /> Blog</p>
          </div>
        </div>

        {/* Instagram Images */}
        <div>
          <h3 className="text-xl font-bold mb-4">Instagram</h3>
          <div className="h-[2px] w-[90%] bg-gradient-to-r from-green-500 to-transparent mb-6"></div>
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
      <div className="bg-[#109c3d] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-4 text-sm text-white">
        <p className="mb-2 lg:mb-0">
          © Copyright 2025 - <span className="text-white font-bold">Poolito</span> All rights reserved.
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
