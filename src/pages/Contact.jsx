import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServiceBannner = '/assets/images/Frame1618873669.png';
const map123 = '/assets/images/mapimage.png';


import { LuLinkedin } from "react-icons/lu";
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaVimeo } from "react-icons/fa";


function Contact (){
    return (
        <>
        <main>
            <Header/>

             {/* bannner */}
            <div className="relative w-full h-[450px] bg-cover flex overflow-hidden justify-cente lg:pl-50 bg-center" style={{ backgroundImage: `url(${ServiceBannner})` }}>
                <img src={map123} alt="" className="absolute  hidden md:block top-20 left-5"/>
                <div className="flex flex-col pl-5 lg:pl-10 justify-center gap-2 z-10 items-start h-full">
                    <p className="text-white font-bold text-6xl  lg:text-7xl">Contact <span className="text-green-500">Us</span></p>
                    <div className="flex flex-row justify-start">
                    <a href="Home" className="text-white text-xl font-extrabold">Home</a>
                    <div className="pl-5 pr-1 text-2xl font-extrabold text-green-600">//</div>
                    <p className="text-xl font-extrabold text-green-600">Contact Us</p>
                    </div>
                </div>
            </div>

            {/* contact section */}
            <div>
                <div className="flex flex-col justify-center  gap-10 px-6 py-10 lg:p-30  xl:flex-row">
                    {/* left section */}
                   <div className="flex flex-col items-start mt-6">
                    <div className="flex items-center gap-3 ">
                        <div className="w-10 h-0.5 bg-green-600"></div>
                        <p className="text-green-600 font-bold text-xl uppercase">Contact Us</p>
                    </div>

                    <h2 className="text-[#063A41] text-3xl md:text-5xl font-extrabold leading-tight">
                        Get in touch with us
                    </h2>

                    <div className="w-full mt-6 border-b-2 border-dashed border-gray-300">
                    <p className="text-[#5E5C78] text-xl font-semibold mb-10"> <a className="text-green-700 font-bold  text-2xl">Address:</a>
                    roda wQ 966 munich Express <br /> 70Germany, park lan, TX 7859
                    </p>

                    <div className="flex mb-5 gap-6 flex-row">
                        <div className="bg-[#109C3D] hover:bg-[#063A41] flex justify-center items-center rounded-full h-15 w-15 border-4 border-[#ffffff59] text-3xl text-white ">
                            <LuPhoneCall className="rotate-40" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl text-[#063A41]">Customer Service :</p>
                            <p className="font-bold text-[#5E5C78] text-xl">+9-555-888-679, +9-666-888-679</p>
                        </div>
                    </div>  

                    <div className="flex gap-6 mb-5 flex-row">  
                        <div className="bg-[#109C3D] hover:bg-[#063A41] flex justify-center items-center rounded-full h-15 w-15 border-4 border-[#ffffff59] text-3xl text-white ">
                            <LuMail/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-2xl text-[#063A41]">CAREERS :</p>
                            <p className="font-bold text-[#5E5C78] text-xl">poolito@gmail.com</p>
                        </div>
                    </div>   
                    </div>

                    <div className="flex flex-row gap-5 mt-2 items-center justify-center">
                    <span className="font-bold   text-[#063A41] text-2xl">
                    Follow Us :</span> 
                    <a href="#" className="text-xl hover:text-green-700"><FaXTwitter /></a>
                    <a href="#" className="text-xl hover:text-green-700"><LuLinkedin /></a>
                    <a href="#" className="text-xl hover:text-green-700"><GrInstagram /></a> 
                    <a href="#" className="text-xl hover:text-green-700"><FaVimeo/></a> 
                    </div>
                </div>

                {/* right section */}
                <div className="animate__fadeInUp visible  " data-wow-delay="0.55s">
                <div className="max-w-4xl mx-auto p-6   rounded-lg">
                    <form action="mail.php" method="post" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <input
                            name="fname"
                            type="text"
                            className="w-full border text-[#5E5C78] font-bold bg-[#EEF1F2] border-gray-300 rounded-md pl-5 px-15 py-6 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="First Name *"
                            required
                        />
                        </div>
                        <div>
                        <input
                            name="lname"
                            type="text"
                            className="w-full border text-[#5E5C78] font-bold bg-[#EEF1F2] border-gray-300 rounded-md pl-5 px-15 py-6 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Last Name *"
                            required
                        />
                        </div>
                        <div>
                        <input
                            name="number"
                            type="number"
                            className="w-full border text-[#5E5C78] font-bold bg-[#EEF1F2] border-gray-300 rounded-md pl-5 px-15 py-6 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Your Phone *"
                            required
                        />
                        </div>
                        <div>
                        <input
                            name="email"
                            type="email"
                            className="w-full border text-[#5E5C78] font-bold bg-[#EEF1F2] border-gray-300 rounded-md pl-5 px-15 py-6 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Your Email *"
                            required
                        />
                        </div>
                    </div>
                    <div>
                        <textarea
                        name="message"
                        rows="5"
                        className="w-full border text-[#5E5C78] font-bold bg-[#EEF1F2] border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Your message ..."
                        required
                        ></textarea>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="bg-green-600  hover:bg-[#063A41] text-white text-xl font-bold w-50 h-16 rounded-full transition duration-200"
                        >
                        Send message
                        </button>
                    </div>
                    <p className="form-messages text-sm text-gray-600"></p>
                    </form>
                </div>
                </div>

                </div>
            </div>

            {/* map section */}
            <div className="relative w-full overflow-hidden">
            <div className="w-full" style={{ height: '550px' }}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163720.11965853968!2d8.496481908353967!3d50.121347879150306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sbd!4v1665403058628!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>


            <Footer/>
        </main>

        </>
    );
}

export default Contact;