"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navlinks = () => {
  const [showSublinks, setShowSublink] = useState(false);
  const links = [
    {
      name: "HOME",
      subMenu: false,
      link: "/",
    
    },
    {
      name: "EVENTS",
      subMenu: true,
      link: "/events",
      subLink: [
        { name: "Events", link: "/events" },
        { name: "Events Details", link: "/events/events-details" },
      ],
    },
    { name: "PLACE", link: "/place", subMenu: false },
    {
      name: "PAGES",
      link: "/pages",
      subMenu: true,
      subLink: [
        { name: "Gallery", link: "/pages/gallery" },
        { name: "Services", link: "/pages/services" },
        { name: "Pricing", link: "/pages/pricing" },
        { name: "Team", link: "/pages/team" },
      ],
    },
    {
      name: "NEWS",
      subMenu: true,
      link: "/news",
      subLink: [
        { name: "Right slider", link: "/news/right-slider" },
        { name: "News Details", link: "/news/news-details" },
      ],
    },
  ];

  return (
    <>
      {links.map((item, index) => (
        <div key={index} className="relative group md:block hidden">
          {item.subMenu ? (
            <h1 className="flex items-center cursor-pointer group-hover:text-orange">
              {item.name}
              {item.subMenu && <RiArrowDropDownLine size={40} />}
            </h1>
          ) : (
            <Link href={item.link} className="flex items-center cursor-pointer group-hover:text-orange">
              {item.name}
            </Link>
          )}

          {item.subMenu && (
            <div
              className="absolute top-16 left-0 max-h-0 
              overflow-hidden group-hover:max-h-[28rem] transition-[max-height] duration-[0.2s] 
              ease-[cubic-bezier(1, 1, 1, 0.2)] origin-top bg-white text-black shadow-lg w-56"
            >
              <div className="flex flex-col gap-4 p-4">
                {item.subLink?.map((mysubLink, subIndex) => (
                  <Link key={subIndex} href={mysubLink.link}>
                    <h1 className="hover:text-orange">{mysubLink.name}</h1>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    {/* -------------------mobile links--------------- */}
      {links.map((item, index) => (
        <div key={index} className="relative group md:hidden">
          <h1 onClick={() => setShowSublink(!showSublinks)} className="flex justify-between items-center cursor-pointer group-hover:text-orange">
           <Link href={item.link}> {item.name}</Link>
            {item.subMenu && <RiArrowDropDownLine size={40} />}
          </h1>
          {item.subMenu && showSublinks && (
            <div>
              <div className="flex flex-col gap-4 p-4">
                {item.subLink?.map((mysubLink, subIndex) => (
                  <Link key={subIndex} href={mysubLink.link}>
                    <h1 className="hover:text-orange">{mysubLink.name}</h1>
                  </Link>
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
