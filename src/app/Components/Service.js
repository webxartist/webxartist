"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { name: "Web Development", image: "/webdevelopment.png" },
  { name: "Graphic Design", image: "/graphic.png" },
  { name: "Logo Design", image: "/logodesign.png" },
  { name: "Video Editing", image: "/videoediting.png" },
  { name: "SEO Services", image: "/seo.png" },
  { name: "Social Media Management", image: "/social.png" },
  { name: "Content Creation", image: "/content.png" },
  { name: "Email Marketing", image: "/email.png" },
];

const Service = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins px-6 py-20 overflow-hidden">
      {/* Soft Glow Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-violet-600/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Section Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-14 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
          Services
        </span>
      </motion.h2>

      {/* Service Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Service Image */}
            <div className="relative w-24 h-24 flex justify-center items-center mb-6">
              <motion.div
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition-opacity duration-500"></div>
            </div>

            {/* Service Name */}
            <h3 className="text-xl font-bold mb-2 text-center group-hover:text-pink-400 transition-colors duration-300">
              {service.name}
            </h3>

            {/* Decorative Glow Line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating Shine Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 to-transparent"
              style={{ mixBlendMode: "overlay" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
