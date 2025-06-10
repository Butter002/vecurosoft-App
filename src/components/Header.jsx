import React, { useEffect, useState } from "react";
import {
  FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope,
  FaClock, FaSearch, FaChevronRight, FaPlus, FaTimes
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/vector/logo-white.svg";
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuList = [
    { name: "HOME", link: "/Home" },
    { name: "ABOUT US", link: "/AboutUs" },
    { name: "SERVICE", link: "/Service" },
    { name: "BLOG", link: "/blog" },
    { name: "PAGES", link: "/pages" },
    { name: "CONTACT", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Topbar only when at top
      setShowTopbar(currentY === 0);

      // Scroll direction
      if (currentY > lastScrollY && currentY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Topbar */}
      {showTopbar && (
        <div className="bg-[#05444d] text-white font-thi text-base transition-all z-100 duration-300">
          <div className="mx-auto xl:px-30 px-15 py-2 flex lg:justify-between justify-center items-center flex-wrap">
            <div className="hidden lg:flex items-center space-x-6 text-md">
              <div className="flex items-center font-bold text-xl space-x-2">
                <FaEnvelope className="text-green-600" />
                <span>info@example.com</span>
              </div>
              <div className="hidden sm:flex items-center gap-[1.5px]">
                <span className="w-[3.5px] h-5 bg-white/30"></span>
                <span className="w-[2.5px] h-3 bg-white/30"></span>
              </div>
              <div className="flex font-bold text-xl items-center space-x-4">
                <FaClock className="text-green-600" />
                <span>Tuesday – Saturday 8:00 Am – 5:00 Pm</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-2 text-white text-xl font-semibold">
              <span className="font-bold">Follow Us On :</span>
              <div className="flex items-center gap-[1.5px]">
                <span className="w-[2px] h-6 bg-white/30"></span>
                <span className="w-[1.5px] h-4 bg-white/30"></span>
              </div>
              <a href="#" className="bg-[#109c3d] p-2 hover:bg-white hover:text-green-600 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-[#109c3d] p-2 hover:bg-white hover:text-green-600 rounded-full"><FaLinkedinIn /></a>
              <a href="#" className="bg-[#109c3d] p-2 hover:bg-white hover:text-green-600 rounded-full"><FaInstagram /></a>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Navbar */}
      <div className={`sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="bg-white shadow-md">
          <div className="flex flex-row justify-between gap-[6rem]">
            {/* Logo */}
            <div className="relative w-[35%] xl:w-[26%] rounded-tr-[1000px] bg-[#109c3d]">
              <div className="absolute top-0 left-3 h-full w-full bg-[#54ce7b] transform skew-x-32 z-0" />
              <div className="relative bg-[#109c3d] h-full px-6 text-white flex items-center gap-3 skew-x-[25deg] z-10">
                <div className="flex items-end gap-2 skew-x-[-25deg]">
                  <img src={logo} alt="icon" className="w-90 lg:h-30 h-15 lg:pl-30" />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex justify-between xl:pr-30">
              <div className="hidden relative lg:flex flex-row gap-4 items-center">

                <div className="absolute call-helpline-container !bg-white flex items-center h-30 right-55">
                  <div className="bg-green-600 h-17 w-17 flex items-center justify-center rounded-full hover:bg-[#05444d] text-white text-lg">
                    <FaPhoneAlt />
                  </div>
                </div>

                <nav className="flex gap-3 items-center text-[17px] font-bold text-[#04363d]">
                  {menuList.map((item, i) => (
                    <a href={item.link} key={i} className={`hover:text-green-600 ${item.name === "HOME" ? "text-green-600" : ""}`}>
                      {item.name}
                    </a>
                  ))}
                </nav>
                <FaSearch className="hidden lg:flex" />
                <div className="hidden md:flex items-center gap-[1.5px]">
                  <span className="w-[2.5px] h-10 bg-black/20"></span>
                  <span className="w-[2px] h-6 bg-black/20"></span>
                </div>
                <div className="hidden pl-30  lg:flex items-center h-[100%] space-x-3 bg-[#109C3D]  px-4 py-2">
                  <div>
                    <p className="text-white text-[1rem] font-bold">Call Helpline</p>
                    <p className="text-white font-bold text-2xl">+88(0) 1237 6421</p>
                  </div>
                </div>
              </div>

              {/* Hamburger */}
              <div className="lg:hidden ">
                <button onClick={() => setMenuOpen(true)} className="text-5xl h-full bg-[#109c3d] text-white">
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
            <h2 className="text-green-700 text-xl font-bold">Poolito</h2>
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-green-600 text-2xl"><FaTimes /></button>
        </div>
        <div className="p-4 space-y-4 text-lg font-semibold text-[#109C3D]">
          {menuList.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b pb-2">
              <a href={item.link}>
                <div className="flex items-center space-x-2">
                  <FaChevronRight />
                  <span>{item.name}</span>
                </div>
              </a>
              <FaPlus className="text-gray-400" />
            </div>
          ))}
          <div className="mt-6 flex items-center space-x-2 text-sm">
            <FaPhoneAlt className="text-green-600" />
            <span className="font-semibold">+88(0) 1237 6421</span>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
