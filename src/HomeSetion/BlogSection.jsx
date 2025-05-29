    import React from "react";
    import { FaCalendarAlt, FaRegComments, FaArrowRight } from "react-icons/fa";

    import './team.css'

    // Image imports
    import blogImg1 from "../assets/images/blog-s-2-1.jpg";
    import blogImg2 from "../assets/images/blog-s-2-1.png";
    import blogImg3 from "../assets/images/blog-s-2-3.jpg";

    const blogData = [
    {
        id: 1,
        title: "Residential House & Apartment Cleaning Services Include",
        date: "may 28, 2025",
        comments: "0 Comments",
        tag: "DEEP CLEANING",
        image: blogImg1,
    },
    {
        id: 2,
        title: "Get Launches Cleaning room service",
        date: "may 28, 2025",
        comments: "10 Comments",
        tag: "BEDROOM",
        image: blogImg2,
    },
    {
        id: 3,
        title: "Exclusive coupon for 10% off cleaning",
        date: "may 28, 2025",
        comments: "2 Comments",
        tag: "MATTRESS",
        image: blogImg3,
    },
    ];

    const Blog = () => {
    return (
        <div className="py-18 bg-gradient-to-b from-white to-green-400/10">
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">

            <div className="flex flex-row  gap-5  items-center justify-center">
                <div className='w-12 h-1 bg-green-600'></div>
                <span className="text-green-600 font-bold  uppercase text-lg   ">
                Our Update Blog
                </span>
                <div className='w-12 h-1 bg-green-600'></div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Updated Natest News
            </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-8">
            {/* Large Blog Card */}
            <div className="bg-white rounded-3xl p-5 flex gap-10  shadow-lg overflow-hidden flex-col group">
                <div className="relative w-7/7 h-90% rounded-2xl overflow-hidden">
                <img src={blogData[0].image} alt="Blog" className="w-full h-100 object-cover transition-transform duration-400 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,156,61,0.3)] to-[rgba(255,255,255,0)] pointer-events-none z-1"></div>

                <div className="absolute bottom-0 left-0 bg-green-600 hover:bg-[#063A41] z-10  !text-white px-8 py-2.5 blog text-lg font-bold uppercase">
                    {blogData[0].tag}
                </div>
                </div>
                <div className=" ">
                <div className="flex items-center gap-4 text-sm text-gray-500 space-x-4 mb-2">
                    <span className="flex items-center text-xl font-bold gap-1">
                    <FaCalendarAlt className="text-green-600" /> {blogData[0].date}
                    </span>
                    <span className="flex items-center text-xl font-bold gap-1">
                    <FaRegComments className="text-green-600" /> {blogData[0].comments}
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {blogData[0].title}
                </h3>
                <div className="flex items-center  justify-between">
                        <a href="#" className="flex gap-4 items-center text-green-600 hover:text-[#063A41] text-xl  font-bold">
                        <div className="border-2 border-dashed  p-1 rounded-full">
                            <button className="text-md hover:bg-[#063A41] bg-green-600 flex flex-col justify-center items-center text-white rounded-full h-11 w-11">
                            <FaArrowRight />
                        </button>
                        </div>  
                        Read More
                        </a>
                        <span className="w-30 h-0.5 bg-green-600 block"></span>
                    </div>
                </div>
            </div>

            {/* Smaller Blog Cards */}
            <div className="flex flex-col  gap-8">
                {blogData.slice(1).map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl p-5 flex-col md:flex-row shadow-lg overflow-hidden flex group">
                    <div className="relative md:w-4/7 rounded-2xl overflow-hidden">
                    <img src={blog.image} alt="Blog" className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,156,61,0.3)] to-[rgba(255,255,255,0)] pointer-events-none z-10"></div>
                    <div className="absolute bottom-0 left-0 bg-green-600 hover:bg-[#063A41] z-10 !text-white px-6 py-2 blog text-lg font-bold uppercase">
                        {blog.tag}
                    </div>
                    </div>
                    <div className="p-12 gap-3 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-1">
                        <span className="flex items-center gap-1 text-xl font-bold">
                        <FaCalendarAlt className="text-green-600" /> {blog.date}
                        </span>
                        <span className="flex items-center gap-1 text-xl font-bold">
                        <FaRegComments className="text-green-600" /> {blog.comments}
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                        {blog.title}
                    </h3>
                    <div className="read-container flex items-center justify-between">
                        <a href="#" className="read-link flex gap-4 items-center text-lg font-bold">
                    <div className="read-icon border-2 border-green-600 border-dashed p-1 rounded-full">
                    <button className="icon-button text-md bg-green-600 flex flex-col justify-center items-center text-white rounded-full h-11 w-11">
                        <FaArrowRight />
                    </button>
                    </div>
                        Read More
                    </a>
                    <span className="w-25 h-0.5 !bg-green-500 "></span>
                    </div>


                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Blog;
