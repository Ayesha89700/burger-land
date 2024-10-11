
import React from 'react'
import DeliveryImg from '@/public/Images/delivery.svg'
import Image from 'next/image'
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BiDoorOpen } from 'react-icons/bi'

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]"> {/* Fixed CSS class */}
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div data-aos="fade-right" data-aos-placement="top-center">
          <Image src={DeliveryImg} alt="delivery" />
        </div>
        {/* Text content */}
        <div>
          <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-600">Favourite Burger</span> On the Way..
          </h1>
          <p>
            Best fastest delivery service.Our riders are very proffesional and do fastest delivery also minimum delivery charges
          </p>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-semibold">
              Delivery in just 35 minutes
            </h1>
          </div>


          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-semibold">
              Fresh and hot food
            </h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <BiDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-semibold">
              Delivery on your doorstep
            </h1>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Delivery;