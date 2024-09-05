import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape1 from "../assets/box-shape1.png";
import shape2 from "../assets/box-shape2.png";

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  desc: string;
}

const ServiceCard: React.FC<CardProps> = ({ icon, heading, desc }) => {
  return (
    <div className="group border-[#d7c1d7] border relative mb-2 text-[#524552] rounded-lg hover:scale-105 hover:ease-out hover:bg-[#524552] transition-all duration-300 hover:text-white md:mx-0 mx-8">
      <div className="p-[30px] mb-[30px] text-center rounded-[5px] relative z-10 font-sans">
        <div className="text-center">
          <div className=" text-4xl object-cover text-center ml-32">{icon}</div>
        </div>

        <h3 className="mb-[4px] text-[24px] pt-4 pb-[8px] font-semibold">
          {heading}
        </h3>
        <hr className="w-[100px] h-[2px] bg-[#e9e9e9] rounded-full mx-auto" />

        <p className="mt-4 text-[14px] font-light">{desc}</p>

        <Link
          className="inline-block mt-[16px] text-orange font-semibold"
          href="#"
        >
          Learn More
        </Link>

        {/* Shape Images */}
        <div>
          <Image
            className="absolute top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            src={shape1}
            alt="shape1"
          />
          <Image
            className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src={shape2}
            alt="shape2"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
