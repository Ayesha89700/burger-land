"use client";
import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import { PopularBurger } from './components/PopularBurger/PopularBurger';
import Delivery from './components/Delivery/Delivery';
import { Team } from './components/Team/Team';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration:1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
 });
    };

    initAOS();
  })
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <NewsLetter />
      <Footer />
    </div>
  )
};
export default Home;