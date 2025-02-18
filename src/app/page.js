"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6">
      
      {/* Header con nombre y links */}
      <div className="absolute top-6 left-6 text-gray-400 text-sm font-semibold tracking-wide font-[Poppins]">
        LEANDRO
      </div>

      <div className="absolute top-6 right-6 flex space-x-4 text-gray-400">
        <a href="https://linkedin.com/in/lpetrini" target="_blank">
          <FaLinkedin size={20} className="hover:text-white transition-colors duration-300" />
        </a>
        <a href="mailto:leapetrini.dev@gmail.com" target="_blank">
          <FaEnvelope size={20} className="hover:text-white transition-colors duration-300" />
        </a>
      </div>

      {/* Texto central */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mt-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm Lea ✌️
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-400 text-center max-w-lg mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Software developer crafting digital experiences. Passionate about Web3, full-stack development, and intuitive user interfaces.
        <br /> Building next-generation applications with modern technologies.
        <br /> Always pushing boundaries in digital innovation.
      </motion.p>

      {/* Sección de proyectos (con scroll hacia abajo) */}
      <div className="mt-32 w-full max-w-4xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={false}
          className="overflow-hidden"
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

      {/* Sección de contacto */}
      <div className="mt-32 text-center">
        <motion.button
          whileHover={{ y: 3 }}
          className="text-lg font-semibold text-gray-400 hover:text-white transition-all duration-300"
        >
          Get in Touch
        </motion.button>
      </div>

    </div>
  );
}
