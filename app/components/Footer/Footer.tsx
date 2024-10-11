import { FaBurger, FaInstagram, FaTwitter } from "react-icons/fa6";
import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 
      mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        {/*1st part*/ }
        <div>
            {/*Logo*/}
            <div className="flex items-center text-white space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2 rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500"></FaBurger>
          <h1 className="text-[20px] sm:text-[30px]  font-semibold">
            BurgerHeaven
          </h1>
        </div>
        <p className="text-white text-opacity-60 mt-[0.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse, sed molestiae nam dolorem vero quod maxime modi perspiciatis ab exercitat
             </p>
             <p className="mt-[1rem] text-white ">support@burgerheaven.com </p>
             <p className="text-red-300 text-[19px] font-bold ">
                021 3454 98458
             </p>        
        </div>
        {/*2nd part*/}
        <div>
            <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Products</h1>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Chicken Burger</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Zinger Burger</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> BeefBurger</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Nashville Burger</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Yango Burger</p>
        </div>
        {/*3rd part*/}
        <div>
            <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Products</h1>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Quick Links</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Home</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> About</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Menu</p>
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
            duration-200 cursor-pointer w-fit"> Products</p>
        </div>
        {/*4th part*/}
        <div>
        <h1 className="text-[23px] font-semibold mb-[2rem] text-white uppercase">
            Opening hours
             </h1>
             <p className="text-white text-[18px]">
              Monday - Friday : <span className="text-yellow-300">1pm - 12pm</span>
             </p>
             <p className="text-white text-[18px]">
              Saturday- - Sunday : <span className="text-yellow-300">11am - 3am</span>
             </p>
             {/*Social icons*/}
             <div className="flex mt-[2rem] items-center space-x-6">
              <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
              <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
              <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
             </div>     
        </div>
      </div>
      {/*copyright text*/}
      <p className="text-center text-white opacity-50 mt-[1.5rem]">
        Copyright © 2024 <span className="text-yellow-300">WebDevWarriors </span> . All rights reserved
        </p>
        {/*develop by*/}
        <p className="text-center text-white opacity-50 mt[1.5rem]">
          Developed By <span className="text-yellow-300">AYESHA ARSALAN </span>
        </p>
    </div>
  );
};

export default Footer;