"use client"; // Add this at the top
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setshowMenu] = useState(true);

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
      className={`flex items-center md:justify-around 
        justify-between w-full top-0 left-0 z-50 transition-all  duration-300 ease-in-out 
        ${isSticky ? "fixed bg-[#524552] shadow-lg " : "md:absolute bg-transparent"}`}
    >
      <div className="md:block hidden">
  <Image className="md:w-48 w-32 object-cover px-2" src={logo} alt="logo" />
</div>
      <div className="flex  justify-between items-center w-full bg-[#524552]  md:hidden">
        <Image className="md:w-48 w-32  object-cover p-2" src={logo} alt="logo" />
       <div onClick={()=>{
        setshowMenu(!showMenu)
       }}>
       {
        showMenu?  <IoMdMenu size={20} color="white" className="md:hidden mr-10"/>:
        <RxCross2  size={20} color="white" className="md:hidden mr-10"/>
       }
       </div>
      </div>

      <ul className="text-white md:flex hidden gap-10 items-center text-[15px]">
        <Navlinks />
      </ul>

      <div className="md:flex gap-1 hidden">
        <div className="bg-orange rounded-full w-10 h-10 p-2 mx-2 items-center flex">
          <FaPhoneVolume size={20} />
        </div>

        <div >
          <div className="text-sm text-white font-thin">Call Us:</div>
          <div className="text-[13px] text-orange ml-1 font-[500]">
            +1 518 285679
          </div>
        </div>

        <div className="ml-4 ">
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

     {
     !showMenu && <ul className="absolute z-50 top-14 left-0 bg-white w-full p-10 md:hidden ">
        <Navlinks/>
      </ul>
     }

       

      
    </div>
  );
};

export default Navbar;