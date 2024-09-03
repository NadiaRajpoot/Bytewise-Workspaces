import React from 'react'
import Image from 'next/image'
import office_image from "../assets/video-img.jpg"
import { IoMdPlayCircle } from "react-icons/io";
const VideoSection = () => {
  return (
    <div className="bg-orange relative z-10 before:w-full before:-z-10 before:content-[''] before:absolute before:left-0 before:bottom-0 before:bg-white before:h-[30%]">
       <div className='max-w-[1140px] pt-[100px] text-white font-sans mx-auto'>
       <div className='md:max-w-[780px]  max-w-[400px]  mx-auto text-center'>
            <h1 className='md:text-[42px]  text-[28px]  mx-8font-bold'>Watch this video presentation to know more about our Coworking</h1>
            <p className='max-w-[585px] mt-[15px] mx-auto font-thin text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="relative top-0 md:max-w-[980px] max-w-[680px] mt-[55px] mx-auto text-center before:content-[''] before:absolute before:w-full before:h-full
         before:opacity-[.5] before:bg-[#524552] before:left-0 before:top-0 before:rounded-[5px]" >
            <Image className='max-w-[100%] h-auto rounded-lg' src={office_image} alt="img"></Image>
            <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <IoMdPlayCircle color="white" size={100} className='animate-pulse'/>
        </div>
        </div>

       
       </div>
      
    </div>
  )
}

export default VideoSection
