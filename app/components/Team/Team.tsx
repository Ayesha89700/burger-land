import React from 'react'
import TeamCard from './TeamCard';

export const Team = () => {
  return (
    <div className="pt-[8rem] pb-[3rem] w-[80%] mx-auto">
        <h1 className="heading">
            MEET Our Expert <span className="text-red-600">Chefs</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[4rem] 
        items-center">
          <div data-aos="fade-right"
           data-aos-anchor-placement="top-center">
            
            <TeamCard 
            image="/images/t1.jpg"
             name="jhanzaib Ali"
             position="kitchen Porter" />
             </div>
            
            <div data-aos="zoom-in"
           data-aos-anchor-placement="top-center"
           data-aos-delay="300">

            <TeamCard
             image="/images/t2.jpg" 
             name="Alisha Khan" 
             position="Executive Chef" />

            </div>

            <div data-aos="fade-right"
           data-aos-anchor-placement="top-center"
           data-aos-delay="600">

            <TeamCard 
             image="/images/t3.jpg" 
             name="shazaib khan"
              position="kitchen Porter"/>
            </div>
        


        </div>
    </div>
  );
};

export default Team;