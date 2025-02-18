"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Burger Delivery App",
    image: "/images/burger-app.jpg",
    link: "https://github.com/TU-USUARIO/burger-delivery",
  },
  {
    name: "NFT Collection",
    image: "/images/nft-collection.jpg",
    link: "https://github.com/TU-USUARIO/nft-collection",
  },
  {
    name: "Football Manager Web3",
    image: "/images/football-manager.jpg",
    link: "https://github.com/TU-USUARIO/football-manager",
  },
  {
    name: "P2E Gaming Insights",
    image: "/images/p2e-gaming.jpg",
    link: "https://github.com/TU-USUARIO/p2e-gaming",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">My Projects</h1>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        className="w-full max-w-3xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-gray-900 p-6 rounded-lg shadow-lg"
              onClick={() => window.open(project.link, "_blank")}
            >
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold text-center">{project.name}</h2>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
