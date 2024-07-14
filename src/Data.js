import { FaStar } from "react-icons/fa";
import { TbBadgeFilled } from "react-icons/tb";
import Delivery from "../src/asset/delivery.png";


export const Services = [
  {
    id: 1,
    title: "Quality",
    icon: <FaStar color="#FFC107" size={20} />,
  },
  {
    id: 2,
    title: "Longevity",
    icon: <TbBadgeFilled color="#1976D2" size={20} />,
  },
  {
    id: 3,
    title: "Fast Delivery",
    icon: (
      <img
        src={Delivery}
        alt="delivery-car"
        style={{ height: "20px", width: "20px" }}
      />
    ),
  },
];


export const ProductData = [
   {
      id: 1,
      productName: "Cabinet",
      ratings: 4,
      price: "$150",
      quantity: 10,
      photo: "https://i.ibb.co/wCwtJvW/5.jpg",
      slug: "cabinet",
      tax: 0,
      delivery: 100,
      desc: "A cabinet is a versatile storage unit often used in kitchens, living rooms, or offices. It typically features multiple shelves or compartments behind doors, providing ample space to organize and store items such as dishes, books, or office supplies. Cabinets can be made from wood, metal, or other materials and come in various styles, from traditional to modern."
   },
   {
      id: 2,
      productName: "Fancy Chair",
      ratings: 5,
      price: "$130",
      quantity: 12,
      photo: "https://i.ibb.co/m6nPBBQ/2.jpg",
      slug: "fancy-chair",
      tax: 0,
      delivery: 100,
      desc: "The fancy chair is a stylish and elegant piece of furniture designed for both comfort and aesthetics. It typically features a sleek and modern design, often crafted from high-quality materials such as leather, velvet, or polished wood. The chair may include unique elements like ornate carvings, intricate patterns, or bold colors, making it a standout addition to any room. Its ergonomic design ensures maximum comfort, making it perfect for both lounging and formal seating arrangements."
   },
   {
      id: 3,
      productName: "Sofa",
      ratings: 3,
      price: "$250",
      quantity: 4,
      photo: "https://i.ibb.co/9s7YhSm/6.jpg",
      slug: "sofa",
      tax: 0,
      delivery: 100,
      desc: "A sofa is a large, upholstered seating piece designed for comfort and relaxation. It can accommodate multiple people and is often a central feature in living rooms. Sofas come in various styles, including sectional, loveseat, and sleeper, and can be covered in materials like leather, fabric, or microfiber."
   },
   {
      id: 4,
      productName: "Wardrobe",
      ratings: 4,
      price: "$90",
      quantity: 9,
      photo: "https://i.ibb.co/VQphjdw/7.jpg",
      slug: "wardrobe",
      tax: 0,
      delivery: 100,
      desc: "A wardrobe is a tall, freestanding cabinet used for storing clothes and accessories. It typically includes hanging space, shelves, and sometimes drawers. Wardrobes can be made from wood, metal, or composite materials and come in various designs, from classic to contemporary, to suit different interior styles."
   },
   {
      id: 5,
      productName: "Comfy Chair",
      ratings: 5,
      price: "$100",
      quantity: 15,
      photo: "https://i.ibb.co/jD9DBWG/4.jpg",
      slug: "comfy-chair",
      tax: 0,
      delivery: 100,
      desc: "A comfy chair is a plush and cozy seating option designed for maximum comfort. It often features generous padding, soft upholstery, and ergonomic support. Ideal for lounging, reading, or watching TV, comfy chairs come in various styles and materials to fit any home decor."
   },
   {
      id: 6,
      productName: "Cuddler Chair",
      ratings: 4,
      price: "$200",
      quantity: 6,
      photo: "https://i.ibb.co/182YxZx/3.jpg",
      slug: "cuddler-chair",
      tax: 0,
      delivery: 100,
      desc: "A cuddler chair is a large, inviting chair designed for snuggling and relaxing. Bigger than a standard armchair but smaller than a loveseat, it provides ample space for one person to lounge comfortably or for two people to cuddle. It typically features deep seats, soft cushions, and cozy upholstery, making it perfect for intimate and cozy settings."
   }
];

