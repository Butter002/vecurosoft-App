import React, { useEffect, useRef } from "react";
import { GiBroom } from "react-icons/gi";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoBedSharp } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBath,FaKitchenSet } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { MdOutlineWindow } from "react-icons/md";
import { GiFloorPolisher,GiVacuumCleaner   } from "react-icons/gi";

import "./Section4.scss";

// Import images
import img1 from "../assets/instagram/1.jpg";
import img2 from "../assets/instagram/2.jpg";
import img3 from "../assets/instagram/3.jpg";
import img4 from "../assets/instagram/4.jpg";
import img5 from "../assets/instagram/5.jpg";
import img6 from "../assets/instagram/6.jpg";
import img7 from "../assets/instagram/window_cleainng.png";
import img8 from "../assets/instagram/3.jpg";

  const cardData = [
    { title: "BED & MATTRES", image: img1, icon: <IoBedSharp /> },
    { title: "HOUSE CLEAN", image: img2, icon: <BiSolidBuildingHouse /> },
    { title: "HOME SERVICE", image: img3, icon: <GiVacuumCleaner /> },
    { title: "KITCHEN CLEAN", image: img4, icon: <FaKitchenSet /> },
    { title: "BATHROOM CLEAN", image: img5, icon: <FaBath /> },
    { title: "FLOOR & WALL", image: img6, icon: <GiFloorPolisher /> },
    { title: "WINDOW CLEAN", image: img7, icon: <MdOutlineWindow /> },
    { title: "OFFICE CLEAN", image: img8, icon: <ImOffice /> },
  ];

    const Section4 = () => {
      const timerRef = useRef(null);

      const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
          perView: 4,
          spacing: 15,
        },
      });

      useEffect(() => {
        const slider = instanceRef.current;
        if (!slider) return;

        // Autoplay every 3 seconds
        timerRef.current = setInterval(() => {
          slider.next();
        }, 3000);

        // Clear timer on unmount
        return () => clearInterval(timerRef.current);
      }, [instanceRef]);

        return (
          <div className=" py-12 px-4 md:px-16 section4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="bg-green-600 h-1 w-[90px]" />
                <div className="font-semibold text-gray-700 text-lg tracking-wider">
                  CLEANING SERVICE
                </div>
                <div className="bg-green-600 h-1 w-[90px]" />
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#062F33]">
                Our Excellent Service
              </h2>
            </div>

            <div ref={sliderRef} className="keen-slider">
              {cardData.map((card, index) => (
              <div className="keen-slider__slide" key={index}>
      <div className="relative group rounded-xl mb-4 pb-7 shadow-md bg-white mx-2 xl:mx-4">

        {/* Image Zoom on Card Hover */}
        <div className="overflow-hidden flex flex-col justify-center items-center text-center rounded-t-xl">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-65 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <div className="px-10 py-6 flex flex-col gap-3 items-start">
          <div className="flex flex-row items-end w-full justify-between">
            <div>
              <div className="text-[#109c3d] font-bold text-xl">
                CLEANING 0{index + 1}
              </div>
              <h3 className="font-bold text-3xl text-[#063A41] hover:text-green-600 line-clamp-1 mt-1">
                {card.title}
              </h3>
            </div>
            <div className="text-4xl bg-grey">{card.icon}</div>
          </div>
          <div className="text-gray-600 text-xl my-2">
            ------------------------------
          </div>
          <p className="text-gray-500 text-xl">
            Aweeps & mopsd vacuum floor House Cleaners.
          </p>
          </div>
        {/* Bottom Bar Hover Effect */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-white group-hover:bg-[#109c3d] transition-all duration-300 rounded-b-xl" />
      </div>
    </div>

              ))}
            </div>
          </div>
        );
    };

export default Section4;
