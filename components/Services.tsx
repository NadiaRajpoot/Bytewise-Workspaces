import React from 'react'
import ServiceCard from './ServiceCard'
import {icons_data} from "../utils/mockdata"

const Services = () => {
  return (
    <div className='pt-[100px]'>
        <div className='max-w-[1140px] mx-auto text-center'>
            <div className='text-[#524552] font-sans'>
                <h2 className='md:text-[42px]  text-[32px] font-bold'>Our Amenities</h2>
                <p className='md:text-[18px]  text-[15px] md:max-w-[650px] max-w-[350px] mt-[10px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 place-items-center '>
                {
                    icons_data.map((card, index)=>(
                        <ServiceCard key={index} icon={card.icon} heading= {card.heading} desc = {card.desc}/>
                    ))
                }
                
            </div>
        </div>
      
    </div>
  )
}

export default Services
