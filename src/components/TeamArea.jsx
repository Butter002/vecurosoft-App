import React from 'react';
import './team.css'
// Local images
import map from '../assets/images/mapimage.png'
import team1 from '../assets/instagram/2.jpg'
import team2 from '../assets/instagram/3.jpg'
import team3 from '../assets/instagram/7.jpg'
import team4 from '../assets/instagram/5.jpg'

const teamMembers = [
  { name: 'Erica Hanson', role: 'Supervisor', image: team1 },
  { name: 'Alexandra Dario', role: 'Founder, CEO', image: team2 },
  { name: 'Emely Jonson', role: 'Office Cleaner', image: team3 },
  { name: 'Tonoy Rahomon', role: 'Supervisor', image: team4 },
];

const TeamArea = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold text-xl tracking-wide">MEET OUR TEAM</span>
          <h2 className="text-3xl md:text-5xl text-[#063A41] font-extrabold mt-2">We have a expert team</h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white  overflow-hidden group transition-all duration-300">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full rounded-2xl h-auto transform transition-transform duration-500 group-hover:scale-110"/>

                {/* <div className='absolute top-0 right-0  '><img src={map} alt="" /></div> */}
                <div className='h-2.5 w-full bottom-0 absolute bg-green-600'></div>
                <div className="absolute bottom-2 left-0 bg-green-600  flex flex-col skew-x-[0deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300 vs-team__social--media">
                  <a href="#" className="text-white bg-green-600 hover:bg-green-700 p-2 rounded-full">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white bg-green-600 hover:bg-green-700 p-2 rounded-full">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="text-white bg-green-600 hover:bg-green-700 p-2 rounded-full">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4 bg-transparent    ">
                <h3 className="text-xl font-semibold text-[#063A41] hover:text-green-600 capitalize">{member.name}</h3>
                <p className="text-sm text-green-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default TeamArea;
