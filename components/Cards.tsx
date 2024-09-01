import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface CardProps {
  image: StaticImageData;
  heading: string;
  desc: string;
}
const Cards: React.FC<CardProps> = ({ image, heading, desc }) => {


  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <div className="">
        <Image
          className=" object-cover"
          src={image}
          alt="card"
        ></Image>
      </div>
      <div className=" bg-[#524552] text-white  p-8 font-sans flex flex-col items-center justify-center gap-4">
        <h1 className=" font-bold text-xl">{heading}</h1>
        <hr className="w-16 h-[2px] bg-white" />
        <p className="text-sm text-center">
         {desc}. 
        </p>
      </div>
    </div>
  );
};

export default Cards;
