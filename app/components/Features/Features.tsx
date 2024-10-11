import React from 'react'
import Img1 from "@/public/Images/f1.jpg"
import Img2 from "@/public/Images/f2.jpg"
import Img3 from "@/public/Images/f3.jpg"
import Image from 'next/image'

const Features = () => {
  return ( 
    <div className="pt-[5rem] pb-[3rem]">
        {/*heaading*/}
        <h1 className="heading">
            Burgers Made With Love<br/> 
            <span className="text-red-600">Proper Hygiene</span>
        </h1>
        {/*cards*/}
        <div className="w-[90%] md:w[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {/*1st card*/}
            <div data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            >
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200 ">
                    <Image src={Img1} alt="burger" className="rounded-3xl" />
                    <h1 className="mt-[0.2rem] text-[24px] text-black font-semibold text-center">
                       Summer Deal NO 1
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-80 text-center">
                        Double Chapli Beef Burger with cheddar cheese topped with lettuce and sliced tomatoe and Medium Fries and 500ml Coldrink
                    </p>
                </div>
            </div>
            {/*2nd card*/}
            <div data-aos="zoom-in"
            data-aos-delay="200" 
            data-aos-anchor-placement="top-center" 
            >
                <div className="p-6 hover:bg-white translate-y-[3rem] rounded-lg transition-all duration-200 ">
                    <Image src={Img2} alt="burger" className="rounded-3xl" />
                    <h1 className="mt-[0.2rem] text-[24px] text-black font-semibold text-center">
                       Summer Deal NO 2
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-80 text-center">
                        Single Chapli Beef Burger with cheddar cheese topped with Mayo Garlic Sauce lettuce and and small Fries and 250ml Coldrink
                    </p>
                </div>
            </div>
            {/*card no 03*/}
            <div data-aos="fade-right"
            data-aos-delay="200" 
            data-aos-anchor-placement="top-center" >
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200 ">
                    <Image src={Img3} alt="burger" className="rounded-3xl" />
                    <h1 className="mt-[0.2rem] text-[24px] text-black font-semibold text-center">
                       Summer Deal NO 3
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-80 text-center">
                        Two Fiery Hot and spicyBeef Burger with peporoni topped with tobasco chilli Sauce lettuce
                    </p>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Features