import floor1 from "../assets/floor-img1.png";
import floor2 from "../assets/floor-img2.png";
import floor3 from "../assets/floor-img3.png";
import floor4 from "../assets/floor-img4.png";
import floor5 from "../assets/floor-img5.png";
import { StaticImageData } from "next/image";
export type FloorData = {
  img: StaticImageData;
  data: {
    heading: string;
    desc: string;
    floorNo: string;
    totaArea: string;
    rooms: string;
    bathroom: string;
    windows: string;
  };
};

export const floors: FloorData[] = [
  {
    img: floor1,
    data: {
      heading: "Floor 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      floorNo: "1",
      totaArea: "311.50 sqft",
      rooms: "4",
      bathroom: "Yes",
      windows: "3",
    },
  },
  {
    img: floor2,
    data: {
      heading: "Floor 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      floorNo: "2",
      totaArea: "311.50 sqft",
      rooms: "3",
      bathroom: "Yes",
      windows: "3",
    },
  },
  {
    img: floor3,
    data: {
      heading: "Floor 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      floorNo: "3",
      totaArea: "311.50 sqft",
      rooms: "2",
      bathroom: "Yes",
      windows: "3",
    },
  },
  {
    img: floor4,
    data: {
      heading: "Floor 4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      floorNo: "4",
      totaArea: "311.50 sqft",
      rooms: "4",
      bathroom: "Yes",
      windows: "5",
    },
  },
  {
    img: floor5,
    data: {
      heading: "Floor 5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      floorNo: "5",
      totaArea: "311.50 sqft",
      rooms: "2",
      bathroom: "Yes",
      windows: "2",
    },
  },
];
