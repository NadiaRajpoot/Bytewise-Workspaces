"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { floors, FloorData } from "../../utils/FloorsData";

const Place: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState<FloorData | null>(null);

  useEffect(() => {
    // Set initial state to "Floor 1"
    const initialFloor =
      floors.find((f) => f.data.heading === "Floor 1") || null;
    setCurrentFloor(initialFloor);
  }, []);

  const handleFloorClick = (floorHeading: string) => {
    const updated = floors.find((f) => f.data.heading === floorHeading);
    if (updated) {
      setCurrentFloor(updated);
    } else {
      console.error("Floor not found");
    }
  };

  return (
    <div>
      <div className="relative">
        <Image
        src={"/main-banner4.jpg"}
          className="max-h-[450px] object-cover md:h-full"
          alt="place"
          width={1000} 
          height={450} 
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-[195px] md:h-[450px] bg-[#1a0602] opacity-[.6] z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 font-sans">
          <div className="text-center text-white">
            <h2 className="md:text-[42px] text-[26px] font-bold">The Place</h2>
            <ul className="mt-[12px]  flex gap-2 justify-center ">
              <li
                className="relative inline-block mr-[20px] before:absolute before:content-[''] 
            before:-right-[18px] before:top-[11px] before:h-[6px] before:w-[6px]
             before:rounded-full before:bg-orange"
              >
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="inline-block">The Place</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/background.jpg"}
          alt="background"
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 md:mt-[80px]  mt-[50px] items-center justify-center z-10 font-sans text-[#524552]">
          <div className="max-w-[1140px] mx-auto text-center">
            <div className="max-w-[750px] mx-auto">
              <h2 className="md:text-[42px] text-[32px] font-bold">
                The Floor Plans
              </h2>
              <p className="mt-2 text-[18px] max-w-[650px] my-10 mx-auto font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col md:w-11/12 w-10/12 mx-auto">
            <ul className="w-full mx-[-15px] mb-[40px] md:flex items-center grid grid-cols-2  bg-white cursor-pointer">
              <li
                onClick={() => handleFloorClick("Floor 1")}
                className={`${
                  currentFloor?.data.heading === "Floor 1"
                    ? "bg-orange text-white"
                    : ""
                }block relative py-[18px] px-[40px] text-[16px] font-[600] z-10 flex-1 text-center`}
              >
                FLOOR1
              </li>
              <li
                onClick={() => handleFloorClick("Floor 2")}
                className={`${
                  currentFloor?.data.heading === "Floor 2"
                    ? "bg-orange text-white"
                    : ""
                }block relative py-[18px] px-[40px] text-[16px] font-[600] z-10 flex-1 text-center`}
              >
                FLOOR2
              </li>
              <li
                onClick={() => handleFloorClick("Floor 3")}
                className={`${
                  currentFloor?.data.heading === "Floor 3"
                    ? "bg-orange text-white"
                    : ""
                }block relative py-[18px] px-[40px] text-[16px] font-[600] z-10 flex-1 text-center`}
              >
                FLOOR3
              </li>
              <li
                onClick={() => handleFloorClick("Floor 4")}
                className={`${
                  currentFloor?.data.heading === "Floor 4"
                    ? "bg-orange text-white"
                    : ""
                }block relative py-[18px] px-[40px] text-[16px] font-[600] z-10 flex-1 text-center`}
              >
                FLOOR4
              </li>
              <li
                onClick={() => handleFloorClick("Floor 5")}
                className={`${
                  currentFloor?.data.heading === "Floor 5"
                    ? "bg-orange text-white"
                    : ""
                }block relative py-[18px] px-[40px] text-[16px] font-[600] z-10 flex-1 text-center`}
              >
                FLOOR5
              </li>
            </ul>

            <div className="bg-white p-[35px] rounded-md">
              <div className="md:flex flex-1 gap-12">
                <div className="max-w-[500px]">
                  <h3 className="mb-[12px] text-[24px] font-semibold">
                    {currentFloor?.data.heading || "Floor"}
                  </h3>
                  <p className="mb-[15px] md:text-[16px] font-thin w-11/12">
                    {currentFloor?.data.desc || "Description"}
                  </p>
                  <ul className="mt-[25px]">
                    <li className="pb-[12px] border-b-[1px] flex justify-between border-[#eee] font-medium mb-[12px]">
                      <span>FLOOR</span>
                      <span>{currentFloor?.data.floorNo || "N/A"}</span>
                    </li>
                    <li className="pb-[12px] border-b-[1px] flex justify-between border-[#eee] font-medium mb-[12px]">
                      <span>ROOMS</span>
                      <span>{currentFloor?.data.rooms || "N/A"}</span>
                    </li>
                    <li className="pb-[12px] border-b-[1px] flex justify-between border-[#eee] font-medium mb-[12px]">
                      <span>TOTAL AREA</span>
                      <span>{currentFloor?.data.totaArea || "N/A"}</span>
                    </li>
                    <li className="pb-[12px] border-b-[1px] flex justify-between border-[#eee] font-medium mb-[12px]">
                      <span>BATHROOM</span>
                      <span>{currentFloor?.data.bathroom || "N/A"}</span>
                    </li>
                    <li className="pb-[12px] border-b-[1px] flex justify-between border-[#eee] font-medium mb-[12px]">
                      <span>WINDOW</span>
                      <span>{currentFloor?.data.windows || "N/A"}</span>
                    </li>
                  </ul>
                  <button className="text-[15px] font-semibold text-white py-[14px] my-8 px-[30px] transition-[.5s] rounded-[5px] bg-orange">
                    SCHEDULE A VISIT
                  </button>
                </div>
                <div>
                  <Image
                    width={300}
                    height={300}
                    src={"/floor-img1.png"}
                    alt="floor1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
