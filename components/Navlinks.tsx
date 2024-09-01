"use client"; 
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface SubLink {
  name: string;
}

interface LinkItem {
  name: string;
  subMenu: boolean;
  subLink?: SubLink[];
}

const Navlinks: React.FC = () => {
  // State to track the index of the currently open submenu
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Example links data
  const links: LinkItem[] = [
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

  // Handle menu toggle
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Desktop view */}
      <div className="md:block">
        {links.map((item, index) => (
          <div key={index} className="relative group">
            <h1 className="flex items-center cursor-pointer group-hover:text-orange">
              {item.name}
              {item.subMenu && <RiArrowDropDownLine size={40} />}
            </h1>
            {item.subMenu && (
              <div
                className={`absolute top-16 left-0 max-h-0 overflow-hidden 
                  transition-[max-height] duration-[0.2s] e
                  ase-[cubic-bezier(1, 1, 1, 0.2)] origin-top bg-white text-black shadow-lg w-56 ${
                  activeIndex === index ? "max-h-[28rem]" : ""
                }`}
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
      </div>

      {/* Mobile view */}
      <div className="mt-20 md:hidden">
        {links.map((item, index) => (
          <div key={index} className="relative group my-10">
            <h1
              className="flex items-center cursor-pointer group-hover:text-orange justify-between"
              onClick={() => handleToggle(index)}
            >
              {item.name}
              {item.subMenu && <RiArrowDropDownLine size={40} />}
            </h1>
            {item.subMenu && activeIndex === index && (
              <div className="flex flex-col gap-4 p-4">
                {item.subLink?.map((mysubLink, subIndex) => (
                  <h1 key={subIndex} className="hover:text-orange">
                    {mysubLink.name}
                  </h1>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navlinks;
