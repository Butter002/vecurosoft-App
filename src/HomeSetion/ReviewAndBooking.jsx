import React, { useState } from 'react';
import officeCleaningImg from '../assets/images/officecleaning.png';
import coFounderImg from '../assets/images/Co-founder.png';
import client2 from '../assets/images/Co-founder.png';

const testimonials = [
  {
    name: 'Rodja Hartmann',
    image: coFounderImg,
    rating: 4,
    message: 'When you work with Los Angeles House Cleaners Referral Agency, you can breathe easy because your home will soon be sparkling clean.',
  },
  {
    name: 'Anna Smith',
    image: client2,
    rating: 5,
    message: 'They are fantastic! Always punctual, reliable, and do an amazing job. Highly recommended!',
  },
  // Add more if needed
];

const ReviewAndBooking = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
   <section className="relative bg-[#052429] lg:py-30 bg-no-repeat bg-left bg-[length:25%_100%] py-16" style={{ backgroundImage: `url(${officeCleaningImg})` }}>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Booking Form */}
         {/* Left Booking Form */}
        <div className="w-full lg:w-5/12 bg-green-600 bg-opacity-90 backdrop-blur-md p-12 rounded-2xl shadow-xl">
          <span className="text-sm text-white font-semibold uppercase">Cleaning Service</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-6">Book Your Cleaning?</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fname" placeholder="Your Name *" required className="w-full border border-gray-300  bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>

              <input type="email" name="email" placeholder="Email *" required className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>

              <input type="number" name="number" placeholder="Phone *" required className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>

              <select name="subject" defaultValue="" required className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">

                <option value="" disabled hidden>Type of service</option>
                <option>Deep Cleaning</option>
                <option>Carpet Cleaning</option>
                <option>Window Cleaning</option>
                <option>Exterior Cleaning:</option>
                <option>Mopping</option>
              </select>
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-green-500"></textarea>
            <button type="submit" className="w-full bg-[#052429] hover:bg-green-700 text-white py-2 rounded-md font-extrabold transition duration-300">
              See My Instant Quote
            </button>
          </form>
        </div>

          {/* Testimonial Section */}
          <div className="w-full lg:w-7/12   text-white">
            <div className="mb-6 animate-fadeInUp">
              <span className="text-sm font-semibold uppercase text-green-300">Testimonial</span>
              <h2 className="text-3xl font-bold mt-2">Our Clients Are Saying</h2>
              <p className="text-gray-200 mt-2 max-w-xl">
                When you work with Los Angeles House Cleaners Referral Agency, breathe easy because your home will soon be clean and fresh.
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="relative bg-[#0b3c43] p-6 rounded-lg backdrop-blur-md border border-white/20 animate-fadeInUp">
              <span className="text-3xl text-green-400 mb-4 block">“</span>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt="Profile"
                  className="w-14 h-14 object-cover rounded-full border-2 border-green-500"
                />
                <div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`text-sm mr-1 ${
                          i < testimonial.rating ? 'fas fa-star' : 'far fa-star'
                        }`}
                      ></i>
                    ))}
                  </div>
                  <h3 className="font-semibold text-white capitalize">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-200 text-sm">{testimonial.message}</p>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              </div>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewAndBooking;
