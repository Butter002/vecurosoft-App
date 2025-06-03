    import React, { useState } from 'react';
    import { FaQuoteLeft } from "react-icons/fa";
    import { GoArrowLeft, GoArrowRight } from "react-icons/go";
    import officeCleaningImg from '../assets/images/officecleaning.png';
    import coFounderImg from '../assets/images/Co-founder.png';
    import client2 from '../assets/images/Co-founder.png';
    import map from '../assets/images/mapimage2.png'

    const testimonials = [
    {
        name: 'Rodja Hartmann',
        image: coFounderImg,
        rating: 4,
        message: 'When you work with Los Angeles House Cleaners Refal Agen cleaning room breathe easy because your home will soon When yowork with Angeles House Cleaners Referal Agency cleaning breathe',
    },
    {
        name: 'Anna Smith',
        image: client2,
        rating: 5,
        message: ' When you work with Los Angeles House Cleaners Refal Agen cleaning room breathe easy because your home will soon When yowork with Angeles House Cleaners Referal Agency cleaning breathe ',
    },
    {
        name: 'ridhi soni',
        image: client2,
        rating: 4.5,
        message: ' When you work with Los Angeles House Cleaners Refal Agen cleaning room breathe easy because your home will soon When yowork with Angeles House Cleaners Referal Agency cleaning breathe ',
    }
    ];

    const ReviewAndBooking = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonial = testimonials[currentIndex];

    const handlePrev = () => { setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));};

    const handleNext = () => { setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));};

    return (
    <section className="relative bg-[#052429] lg:p-30 !md:pt-25 bg-no-repeat object-cover overflow-clip bg-left  py-16" >

            <div className='absolute top-15  hidden lg:block  -right-60 '><img src={map} alt="" /></div>
            <div className='absolute hidden lg:block top-0 object-cover w-[32%] h-[100%] -left-32'><img src={officeCleaningImg} alt="" className='bject-cover  h-[100%] ' /></div>

            <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row  gap-10 md:gap-0 items-start">

            {/* Booking Form */}
            <div className="w-full lg:w-4/11 bg-green-600 bg-opacity-90 gap-5 z-10 py-20 md:px-20 px-5"
             style={{border: '8px solid transparent',
                    borderImage: 'linear-gradient(to bottom, #04272980, rgba(16, 155, 61, 1))',
                    borderImageSlice: 1,}}>

            <div className='flex flex-row gap-2 items-center'> <div className='h-1 w-10 bg-white rounded-2xl'></div><span className="text-lg text-white font-bold uppercase">Cleaning Service</span></div>
            
            <h2 className="text-4xl font-bold text-white mt-2 mb-6">Book Your Cleaning?</h2>
            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="fname" placeholder="Your Name *" required className="w-full border border-gray-300  bg-white px-5 py-5 rounded-md focus:outline-none font-bold text-gray-500 focus:ring-2 focus:ring-green-500"/>

                <input type="email" name="email" placeholder="Email *" required className="w-full border border-gray-300 bg-white px-5 py-5 rounded-md focus:outline-none font-bold text-gray-500 focus:ring-2 focus:ring-green-500"/>

                <input type="number" name="number" placeholder="Phone *" required className="w-full border border-gray-300 bg-white px-5 py-5 rounded-md focus:outline-none font-bold text-gray-500 focus:ring-2 focus:ring-green-500"/>

                <select name="subject" defaultValue="" required className="w-full border border-gray-300 px-5 py-5 rounded-md bg-white focus:outline-none font-bold text-gray-400 focus:ring-2 focus:ring-green-500">

                <option value="" disabled hidden>Type of servcice</option>
                <option className='text-black'>Deep Cleaning</option>
                <option className='text-black'>Carpet Cleaning</option>
                <option className='text-black'>Window Cleaning</option>
                <option className='text-black'>Exterior Cleaning:</option>
                <option className='text-black'>Mopping</option>
                </select>
                </div>
                <textarea name="message" rows="4" placeholder="Your message" className="w-full border border-gray-300 px-5 py-7 rounded-md focus:outline-none font-bold text-gray-500 focus:ring-2 bg-white focus:ring-green-500"></textarea>
                <button type="submit" className="w-full bg-[#0b424a] text-xl hover:bg-green-700 text-white py-2 rounded-md font-bold transition duration-300">
                SEE MY INSTANT QUOTE 
                </button>
            </form>
            </div>

            {/* Testimonial Section */}
            <div className="w-full lg:w-6/11  flex flex-col overflow-hidden z-10 justify-center items-center gap-5  text-white">
                {/* heading text */}
                <div className="mb-6 flex flex-col gap-1  animate-fadeInUp">
                <div className='flex-row flex  items-center gap-3'> <div className='w-10 h-0.5 bg-white rounded-2xl '></div><span className="text-lg font-semibold uppercase text-green-600">Testimonial</span></div>
                <h2 className="text-3xl font-extrabold mt-2 inline-[200]">Our Clients Are Saying</h2>
                <p className="text-gray-300 mt-2 max-w-xl">When you work with Los Angeles House Cleaners Referral Agency, breathe easy because your home will soon be clean and fresh.</p>
                </div>

                {/* Testimonial Card */}
                <div className="relative bg-[#0b3c43] py-12 pt-15  px-15 animate-fadeInUp">
                <span className="absolute top-15 right-15 text-4xl font-extrabold text-green-600 mb-4 block"><FaQuoteLeft /></span>
                <div className="flex items-center gap-4 mb-4">
            <div className='border-2 border-dashed rounded-full border-green-600'> <img src={testimonial.image} alt="Profile" className="w-22 h-22 object-cover rounded-full bor"/></div>                    
                    <div>
                    <div className="flex items-center text-green-700">
                        {[...Array(5)].map((_, i) => (
                        <i key={i} className={`text-xl mr-1 ${
                        i < testimonial.rating ? 'fas fa-star' : 'far fa-star'
                        }`}></i>
                        ))}
                    </div>
                    <h3 className="font-bold text-white text-xl capitalize">{testimonial.name}</h3>
                    </div>
                </div>
                <p className="text-gray-400 font-bold text-xl">"{testimonial.message}"</p>
                </div>
                        {/* button div */}
                 <div className=' md:flex hidden mt-10 mb-10 ml-52 w-full h-0.5 bg-green-600 flex-row  items-center justify-start  gap-5'> 
                    {/* Navigation Buttons */}
                    <div className='ml-20 flex gap-5 p-5 bg-[#052429] flex-row' >
                    <div className='border-2 border-dashed border-[#146673] rounded-full'> 
                    <button onClick={handlePrev} className="bg-[#0b3c43]  hover:bg-green-700 text-white text-3xl flex justify-center items-center h-15 w-15  rounded-full">
                    <GoArrowLeft />
                    </button>
                    </div>  
                    
                    <div className='border-2 border-dashed border-[#146673] rounded-full'> 
                    <button
                    onClick={handleNext}
                    className="bg-[#0b3c43]  hover:bg-green-700 text-white text-3xl flex justify-center items-center h-15 w-15   rounded-full">
                     <GoArrowRight />
                    </button>
                </div>
                    </div>
                   
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default ReviewAndBooking;
