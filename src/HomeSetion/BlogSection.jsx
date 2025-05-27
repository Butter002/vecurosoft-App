import React from "react";
import { FaCalendarAlt, FaRegComments, FaArrowRight } from "react-icons/fa";

// Image imports
import blogImg1 from "../assets/images/blog-s-2-1.jpg";
import blogImg2 from "../assets/images/blog-s-2-1.png";
import blogImg3 from "../assets/images/blog-s-2-3.jpg";

const blogData = [
  {
    id: 1,
    title: "Residential House & Apartment Cleaning Services Include",
    date: "April 27, 2024",
    comments: "0 Comments",
    tag: "DEEP CLEANING",
    image: blogImg1,
  },
  {
    id: 2,
    title: "Get Launches Cleaning room service",
    date: "April 27, 2024",
    comments: "0 Comments",
    tag: "BEDROOM",
    image: blogImg2,
  },
  {
    id: 3,
    title: "Exclusive coupon for 10% off cleaning",
    date: "April 27, 2024",
    comments: "0 Comments",
    tag: "MATTRESS",
    image: blogImg3,
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f6faf8] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold  uppercase text-lg border-t-2 border-green-500 inline-block pt-1">
            Our Update Blog
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Updated Natest News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large Blog Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col group">
            <div className="relative overflow-hidden">
              <img src={blogData[0].image} alt="Blog"
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"/>

              <div className="absolute bottom-0 left-0 bg-green-600 text-white px-4 py-1 rounded-tr-2xl text-xs font-bold uppercase">
                {blogData[0].tag}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-green-600" /> {blogData[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments className="text-green-600" /> {blogData[0].comments}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {blogData[0].title}
              </h3>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center text-green-600 font-semibold">
                  <span className="text-lg bg-green-600 text-white rounded-full p-2 mr-2">
                    <FaArrowRight />
                  </span>
                  Read More
                </a>
                <span className="w-16 h-0.5 bg-green-200 block"></span>
              </div>
            </div>
          </div>

          {/* Smaller Blog Cards */}
          <div className="flex flex-col gap-6">
            {blogData.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex group"
              >
                <div className="relative w-1/3 overflow-hidden">
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-green-600 text-white px-3 py-1 rounded-tr-xl text-xs font-bold uppercase">
                    {blog.tag}
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-1">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-green-600" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegComments className="text-green-600" /> {blog.comments}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center text-green-600 font-semibold">
                      <span className="text-md bg-green-600 text-white rounded-full p-1.5 mr-2">
                        <FaArrowRight />
                      </span>
                      Read More
                    </a>
                    <span className="w-10 h-0.5 bg-green-200 block"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
