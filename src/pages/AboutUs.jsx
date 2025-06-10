import React from "react";
import { DiVim } from "react-icons/di";
import Header from "../components/Header";
import Footer from "../components/Footer";


function AboutUs (){

return (

   <>
   <main className="flex flex-col content-between">
    <Header/>
    <div className="flex items-center h-100 justify-center text-black text-4xl ">
        <p>About Us page</p>
    </div>
    <Footer/>
   </main>
   </>
);
    
}

export default AboutUs;