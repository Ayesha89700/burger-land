/* eslint-disable */

"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';

const responsive = {
  superLargeDesktop: {
      // For large desktop devices (above 1600px screen width)
      breakpoint: { max: 4000, min: 1600 },
      items: 4,
      slidesToSlide:1
      
  },
  desktop: {
      // For desktop devices (1024px to 1600px)
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
      slidesToSlide:1
  },
  tablet: {
      // For tablet devices (464px to 1024px)
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide:1
  },
  mobile: {
      // For mobile devices (below 464px)
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide:1 
  }
};




export const PopularBurger = () => (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
            Our Most Demanding <span className="text-red-600">Burgers </span>
        </h1>
        <div className="w-[80%] mt-[4rem] mx-auto">
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                slidesToSlide={1}
                centerMode={false}
                infinite
                responsive={responsive}
                itemClass="item" 
                showDots={false}
                >

                <BurgerCard 
                title="Beefy Bite"
                image="/images/burger card/b1.png"
                reviews="6"
                price="PKR 800" />

                <BurgerCard 
                title="Nucker Beef"
                image="/images/burger card/b2.png"
                reviews="5"
                price="PKR 750" />
               
               <BurgerCard 
                title="Chapli Beef Burger"
                image="/images/burger card/b3.png"
                reviews="5"
                price="PKR 600" />

              <BurgerCard 
                title="Double Bango"
                image="/images/burger card/b4.png"
                reviews="5"
                price="PKR 900" />

               <BurgerCard 
                title="Chapli TWist"
                image="/images/burger card/b5.png"
                reviews="6"
                price="PKR 500" />

               <BurgerCard 
                title="Fiery bang"
                image="/images/burger card/b6.png"
                reviews="6"
                price="PKR 400" />

              <BurgerCard 
                title="Red Bull Burger"
                image="/images/burger card/b7.png"
                reviews="6"
                price="PKR 300" />

               <BurgerCard 
                title="Beefy Bite"
                image="/images/burger card/b8.png"
                reviews="6"
                price="PKR 830" />

               <BurgerCard 
                title="Quadra Burger"
                image="/images/burger card/b9.png"
                reviews="6"
                price="PKR 560" />
            </Carousel>

        </div>
    </div>
)