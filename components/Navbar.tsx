"use client"; // Add this at the top
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import Navlinks from "./Navlinks";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Get 10% of the viewport height
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollThreshold = viewportHeight * 0.3;

    if (scrollPosition > scrollThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-around w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "fixed bg-[#524552]" : "absolute bg-transparent"}`}
    >
<div className="absolute z-30 top-0 left-1/2 transform -translate-x-1/2 flex justify-between w-[90%] items-center">
  <Image className="md:w-48 w-32 object-cover p-2" src={logo} alt="logo" />
  <IoMdMenu size={20} />
</div>


      <ul className="text-white md:flex  gap-10 items-center text-[15px]">
        <Navlinks />
      </ul>

      <div className="md:flex gap-1 ">
        <div className="bg-orange rounded-full w-10 h-10 p-2 mx-2 items-center flex">
          <FaPhoneVolume size={20} />
        </div>

        <div className="">
          <div className="text-sm text-white font-thin">Call Us:</div>
          <div className="text-[13px] text-orange ml-1 font-[500]">
            +1 518 285679
          </div>
        </div>

        <div className="ml-4">
          <button
            className="relative border border-white bg-transparent px-4 py-3 rounded-md text-white transition-colors text-[13px]
            before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0
            before:bg-orange before:transition-transform before:duration-300 before:content-['']
            hover:text-white before:hover:scale-x-100 before:rounded-md hover:border-none"
          >
            SCHEDULE A TOUR
          </button>
        </div>
      </div>


      {/* -------
       */}

       {/* <ul className=" md:hidden text-sm py-4 text-white px-10 bg-[#524552] w-full h-full ">
        <Navlinks/>
       </ul> */}

       <div>
        <div>

        </div>
       </div>

      
    </div>
  );
};

export default Navbar;
