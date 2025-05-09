import React, { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaPlus
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Topbar */}
      <div className="bg-[#04363d] text-white text-base">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap">
          {/* Hide on small screens */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>Tuesday – Saturday 8:00 Am – 5:00 Pm</span>
            </div>
          </div>

          {/* Show only on small screens */}
          <div className="w-full md:hidden flex justify-center mb-2">
            <span className="text-sm">Follow Us On :</span>
          </div>

          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <span>Follow Us On :</span>
            <a href="#" className="bg-green-500 p-1.5 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-green-500 p-1.5 rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="bg-green-500 p-1.5 rounded-full"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md relative z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <h1 className="text-green-700 text-3xl font-bold">Poolito</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[17px] font-semibold text-[#04363d]">
            <a href="#" className="text-green-600">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICE</a>
            <a href="#">BLOG</a>
            <a href="#">PAGES</a>
            <a href="#">CONTACT</a>
          </nav>

          {/* Call info */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="bg-green-600 p-4 rounded-full text-white text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-green-600 font-bold">Call Helpline</p>
              <p className="text-[#04363d] font-semibold text-base">+88(0) 1237 6421</p>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#04363d]">
              <FaBars />
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
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
