"use client"; // Add this at the top

import React from "react";
import Image from "next/image";
import mainBanner1 from "../assets/main-banner1.jpg";
import mainBanner3 from "../assets/main-banner3.jpg";
import mainBanner2 from "../assets/main-banner2.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Zoom } from "react-slideshow-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-slideshow-image/dist/styles.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { workspace } from "../utils/mockdata";
import Cards from "./Cards";
import VideoSection from "./VideoSection";
import Services from "./Services";

const MainBanner = () => {
  const images = [mainBanner1, mainBanner3, mainBanner2];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 300, // Transition speed in milliseconds
    slidesToShow: 3, // Default to 1 slide
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between transitions (3 seconds)
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 card on mobile devices
        },
      },
      {
        breakpoint: 768, // Small devices (e.g., tablets)
        settings: {
          slidesToShow: 2, // Show 2 cards on small devices
        },
      },
      {
        breakpoint: 1024, // Medium devices and up
        settings: {
          slidesToShow: 3, // Show 3 cards on medium devices and up
        },
      },
    ],
  };
  
  const zoomInProperties = {
    scale: 1,
    translateX: 100,
    duration: 5000,
    transitionDuration: 700,
    infinite: true,
    prevArrow: (
      <div className="bg-black mx-4 opacity-50 p-2 rounded-full text-white cursor-pointer">
        <FaAngleLeft size={20} />
      </div>
    ),
    nextArrow: (
      <div className="bg-black mx-4 opacity-50 p-2 rounded-full text-white cursor-pointer">
        <FaAngleRight size={20} />
      </div>
    ),
  };

  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index}>
            <Image className="scale-125 h-96 object-cover md:h-full" src={each} alt="mainBanner" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#1a0602] opacity-[.6] z-10"></div>
          </div>
        ))}
      </Zoom>

      <div className="absolute w-8/12 m-auto text-center top-0 md:mt-52 mt-32 z-40 bottom-0 left-0 right-0 text-white flex flex-col items-center gap-2 md:gap-4">
        <div className="uppercase font-sans font-thin md:text-[14px] text-[8px] tracking-[0.2rem]">
          The best workspace in newyork
        </div>
        <div className="  flex flex-col md:gap-2 text-white font-extrabold font-sans  text-2xl md:text-6xl text-center ">
          <span className=" ">Professional, Creative,</span>
          <span> Flexible, Scalable Workspace </span>
        </div>
      </div>

      <div>
        <button
          className="absolute border z-40 top-0 md:mt-[25rem] mt-72 md:w-fit w-11/12 mx-4 mr-10 left-0 md:ml-[30rem]
       border-orange bg-orange py-4 px-6 rounded-md
          font-semibold
          text-white transition-colors text-[13px]
           before:absolute before:left-0 before:top-0 before:-z-10 
           before:h-full before:w-full before:origin-top-left before:scale-x-0
            before:bg-slate-100 before:transition-transform before:duration-300 before:content-['']
             hover:text-orange before:rounded-md   hover:rounded-md before:hover:scale-x-100 hover:border-none "
        >
          BOOK A ROOM
        </button>

        <button
          className="absolute border z-40  md:mt-[25rem] top-0 mt-[22rem] md:w-fit w-11/12 mx-4 left-0 md:ml-[40rem]
       border-white bg-transparent py-4 px-6 rounded-md
          font-semibold
          text-white transition-colors text-[13px]
           before:absolute before:left-0 before:top-0 before:-z-10 
           before:h-full before:w-full before:origin-top-left before:scale-x-0
            before:bg-white before:transition-transform before:duration-300 before:content-['']
             hover:text-black  hover:rounded-md before:hover:scale-x-100 before:rounded-md  hover:border-none"
        >
          <MdOutlineSlowMotionVideo
            size={20}
            className="inline hover:text-black"
          />
          WATCH VIDEO
        </button>
      </div>

      <div className="md:flex  w-full   hidden absolute top-0 mt-[37rem] left-0 z-40 py-1 pl-3">
        <div className="w-6/12 flex items-center justify-center uppercase font-sans text-white ">
          <Link href="https://youtu.be/IxRVa1DbSAg?si=ZCX9Oiu4s8xkd2qE">
           
            <IoMdPlayCircle color="white" size={60} />
          </Link>
          <span className="font-semibold text-xl ml-4"> Watch video</span>
        </div>
        <div className="grid grid-cols-3 font-sans text-white bg-orange py-12 px-10">
          <div className="flex gap-4 mx-2">
            <div className="bg-black  rounded-full w-15 h-9 p-2 hover:bg-slate-100  ">
              <IoLocationOutline size={20} className="hover:text-black" />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-normal  text-[17px] text-white">
                Office Address
              </h1>
              <h2 className="text-sm  ">
                27 Division St, New York, NY 10002, USA
              </h2>
            </div>
          </div>
          <div className="flex gap-4 mx-2">
            <div className="bg-black rounded-full w-15 h-9 p-2  hover:bg-slate-100 ">
              <MdOutlineMailOutline size={20} className="hover:text-black" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-[17px] font-sans text-white">
          Email Addresses
              </h1>
              <h2 className="text-sm ">info@tuam.com support@tuam.com</h2>
            </div>
          </div>
          <div className="flex gap-4 mx-2">
            <div className="bg-black  rounded-full  w-15 h-9 p-2  hover:bg-slate-100">
              <FaBusinessTime size={20} className="hover:text-black" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-[17px] text-white ">
                Office Hours
              </h1>
              <h2 className="text-sm ">
                Mon-Fri, 8 AM - 10 PM (Members are 24/7)
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8] md:p-20 py-8 ">
        <div className="flex flex-col items-center justify-center font-sans w-full text-[#524552]">
          <h1 className="md:text-[42px] leading-10 mb-4  md:py-0 py-4 text-[26px] font-extrabold gap-2 w-full md:w-6/12 text-center">
            We Offer creative working environments
          </h1>
          <p className="md:text-[18px] text-sm font-thin w-10/12  md:w-8/12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full my-8 ">
          <Slider {...settings}>
            {workspace.map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                heading={card.heading}
                desc={card.desc}
              />
            ))}
          </Slider>
        </div>

       
      </div>

      <VideoSection/>
      <Services/>
    </div>
  );
};

export default MainBanner;
