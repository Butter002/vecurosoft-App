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
        <section className="py-22 bg-gradient-to-b from-white to-green-400/10">
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
            <span className="text-green-600 font-bold  uppercase text-lg  pt-1">
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
                        className="w-full h-84 object-cover transition-transform duration-400 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 bg-green-600 hover:bg-[#063A41] text-white px-8 py-2.5 blog text-lg font-bold uppercase">
                    {blogData[0].tag}
                </div>
                </div>
                <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                    <span className="flex items-center text-xl font-bold gap-1">
                    <FaCalendarAlt className="text-green-600" /> {blogData[0].date}
                    </span>
                    <span className="flex items-center text-xl font-bold gap-1">
                    <FaRegComments className="text-green-600" /> {blogData[0].comments}
                    </span>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
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
                <div key={blog.id} className="bg-white rounded-3xl shadow-lg overflow-hidden flex group">
                    <div className="relative w-1/3 overflow-hidden">
                    <img src={blog.image} alt="Blog"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    <div className="absolute bottom-0 left-0 bg-green-600 hover:bg-[#063A41] text-white px-6 py-2 blog text-lg font-bold uppercase">
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
                    <div className="flex items-center  justify-between">
                        <a href="#" className="flex gap-4 items-center hover:text-green-600 text-lg  font-bold">
                        <div className="border-2 border-dashed p-1 rounded-full">
                            <button className="text-md bg-green-600 hover:bg-[#063A41] flex flex-col justify-center items-center text-white rounded-full h-11 w-11">
                            <FaArrowRight />
                        </button>
                        </div>  
                        Read More
                        </a>
                        <span className="w-25 h-0.5 bg-green-600/70 block"></span>
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
