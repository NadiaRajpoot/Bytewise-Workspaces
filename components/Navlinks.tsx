"use client"
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navlinks = () => {
  const [showSublinks , setShowSublink] =useState(false)
  const links = [
    {
      name: "HOME",
      subMenu: true,
      subLink: [
        { name: "Events" },
        { name: "Events Details" },
      ],
    },
    {
      name: "EVENTS",
      subMenu: true,
      subLink: [
        { name: "Events" },
        { name: "Events Details" },
      ],
    },
    { name: "PLACE", subMenu: false },
    {
      name: "PAGES",
      subMenu: true,
      subLink: [
        { name: "Gallery" },
        { name: "Services" },
        { name: "Pricing" },
        { name: "Team" },
      ],
    },
    {
      name: "NEWS",
      subMenu: true,
      subLink: [
        { name: "Right slider" },
        { name: "News Details" },
      ],
    },
  ];

  return (
    <>
     
      {links.map((item, index) => (
        <div key={index} className="relative group md:block hidden">
          <h1 className="flex items-center cursor-pointer group-hover:text-orange">
            {item.name}
            {item.subMenu && <RiArrowDropDownLine size={40} />}
          </h1>
          {item.subMenu && (
            <div
              className="absolute top-16 left-0 max-h-0 
              overflow-hidden group-hover:max-h-[28rem] transition-[max-height] duration-[0.2s] 
              ease-[cubic-bezier(1, 1, 1, 0.2)] origin-top bg-white text-black shadow-lg w-56"
            >
              <div className="flex flex-col gap-4 p-4">
                {item.subLink?.map((mysubLink, subIndex) => (
                  <h1 key={subIndex} className="hover:text-orange">
                    {mysubLink.name}
                  </h1>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}


{links.map((item, index) => (
        <div key={index} className="relative group md:hidden ">
          <h1  onClick={()=>{setShowSublink(!showSublinks)}} className="flex  justify-between items-center cursor-pointer group-hover:text-orange">
            {item.name}
            {item.subMenu && <RiArrowDropDownLine size={40} />}
          </h1>
          {item.subMenu && showSublinks && (
            <div
              
            >
              <div className="flex flex-col gap-4 p-4">
                {item.subLink?.map((mysubLink, subIndex) => (
                  <h1 key={subIndex} className="hover:text-orange">
                    {mysubLink.name}
                  </h1>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      
    </>
  );
};

export default Navlinks;
