import gallery_image1 from "../assets/gallery1.jpg";
import gallery_image2 from "../assets/gallery2.jpg";
import gallery_image3 from "../assets/gallery3.jpg";
import gallery_image4 from "../assets/gallery4.jpg";
import { HiOutlineBuildingOffice } from "react-icons/hi2"

import { GiVideoConference } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { PiOfficeChairBold } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
export const workspace = [
  {
    image: gallery_image1,
    heading: "Office Space",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate dolorum",
  },
  {
    image: gallery_image2,
    heading: "Meeting Room",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor",
  },
  {
    image: gallery_image3,
    heading: "Meeting Room",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor",
  },
  {
    image: gallery_image4,
    heading: "Meeting Room",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor",
  },
  // Add more data as needed
];

export const icons_data = [
  {
    icon: <HiOutlineBuildingOffice />,
    heading: "Virtual Offices",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
  {
    icon: <PiOfficeChairBold />,
    heading: "Full-Time Offices",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
  {
    icon: <GiVideoConference />,
    heading: "Conference Rooms",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
  {
    icon: <AiOutlineGlobal />,
    heading: "Global Access",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
  {
    icon: <AiFillProduct />,
    heading: "Discounted Products",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
  {
    icon: <IoHome />,
    heading: "B2B Opportunities",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.",
  },
];
