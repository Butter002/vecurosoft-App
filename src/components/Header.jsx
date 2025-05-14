import React, { useState } from 'react';
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaPhoneAlt, FaEnvelope,FaClock,FaBars,FaTimes,FaChevronRight,FaPlus, FaSearch}

from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Topbar */}
      <div className="bg-[#05444d] text-white  font-thi text-base">
        <div className="mx-auto px-15 py-1 flex lg:justify-between justify-center  items-center flex-wrap">
          {/* Hide on small screens */}
          <div className="hidden lg:flex items-center space-x-6 text-md">
            <div className="flex  items-center font-bold  space-x-2">
              <FaEnvelope className='text-green-600' /> 
              <span>info@example.com</span>
            </div>
            {/* line design */}
            <div className="hidden sm:flex items-center gap-[1.5px]">
            <span ></span>
            <span className="w-[2.5px] h-5 bg-white/30"></span>
            <span className="w-[1.5px] h-3 pr-[-1px] bg-white/30"></span>
            </div>
            <div className="flex font-bold text-2x items-center space-x-4">
              <FaClock className='text-green-600' />
              <span>Tuesday – Saturday 8:00 Am – 5:00 Pm</span>
            </div>
            </div>

            <div className="flex items-center justify-center gap-3 py-2 text-white text-md font-semibold">
            
            <span className='font-bold'>Follow Us On :</span>

            <div className="flex items-center gap-[1.5px]">
            <span ></span>
            <span className="w-[2px] h-6 bg-white/30"></span>
            <span className="w-[1.5px] h-4 pr-[-1px] bg-white/30"></span>
            </div>

            {/* Icons */}
            <a href="#" className="bg-[#109c3d] p-2  hover:bg-white hover:text-green-600 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-[#109c3d] p-2  hover:bg-white hover:text-green-600 rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="bg-[#109c3d] p-2  hover:bg-white hover:text-green-600 rounded-full"><FaInstagram /></a>
          </div>
        </div>
      </div>  

      {/* Main Navbar */}
      <div className="bg-white shadow-md relative z-20">
        <div className=" mx-auto flex justify-between items-center px-5 py-5.5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-green-700 text-3xl font-bold">Poolito</h1>
          </div>

         <div className='hidden lg:flex flex-row gap-4 justify-center items-center'>
           {/* Desktop Nav */}
           <nav className="flex gap-3 items-center space-x-8 text-[17px] font-bold text-[#04363d]">
            <a href="/" className="text-green-600 font-bold">HOME</a>
            <a href="*">ABOUT US</a>
            <a href="*">SERVICE</a>
            <a href="*">BLOG</a>
            <a href="*">PAGES</a>
            <a href="*">CONTACT</a>
          </nav>
          <FaSearch className='hidden lg:flex' />
          <div className="hidden md:flex items-center gap-[1.5px]">
            <span ></span>
            <span className="w-[2.5px] h-10 bg-black/20"></span>
            <span className="w-[2px] h-6 pr-[-1px] bg-black/20"></span>
            </div>
          {/* Call info */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="bg-green-600 p-6 rotate-280 rounded-full hover:bg-[#05444d] text-white text-lg"><FaPhoneAlt /></div>
            
            <div>
              <p className="text-green-500 text-1xl font-bold">Call Helpline</p>
              <p className="text-[#04363d] font-bold text-2xl">+88(0) 1237 6421</p>
            </div>
          </div>
         </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden text-cyan-50">
            <button onClick={() => setMenuOpen(true)} className="text-5xl bg-[#109c3d] text-[#fff]">
              <FaBars className='' />
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10" />
              <h2 className="text-green-700 text-xl font-bold">Poolito</h2>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-green-600 text-2xl">
              <FaTimes />
            </button>
          </div>

          <div className="p-4 space-y-4 text-lg font-semibold text-[#04363d]">
            {['Home', 'About Us', 'Service', 'Blog', 'Pages', 'Contact'].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-2">
                  <FaChevronRight />
                  <span>{item}</span>
                </div>
                {item !== 'Contact' && <FaPlus className="text-gray-400" />}
              </div>
            ))}

            {/* Call Info (optional in mobile menu) */}
            <div className="mt-6 flex items-center space-x-2 text-sm">
              <FaPhoneAlt className="text-green-600" />
              <span className="font-semibold">+88(0) 1237 6421</span>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/70 bg-opacity-40 z-40" onClick={() => setMenuOpen(false)}></div>
        )}
      </div>
      
    </header>
  );
};

export default Header;
