// components/Service.js
"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Web Design",
    image: "/webdevelopment.png", // Replace with actual image URLs
  },
  {
    name: "Graphic Design",
    image: "/graphic.png",
  },
  {
    name: "Logo Design",
    image: "/logodesign.png",
  },
  {
    name: "Video Editing",
    image: "/videoediting.png",
  },
  {
    name: "SEO Services",
    image: "/seo.png",
  },
  {
    name: "Social Media Management",
    image: "/social.png",
  },
  {
    name: "Content Creation",
    image: "content.png",
  },
  {
    name: "Email Marketing",
    image: "email.png ",
  },
];

const Service = () => {
  return (
    <div className=" navbar w-full p-8 flex flex-col items-center  font-poppins font-extrabold ">
      <h2 className="text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-32 object-contain rounded-md transition-transform duration-500 transform hover:scale-110"
              />
              {/* Add a glowing effect on hover */}
              <motion.div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-40 transition-opacity duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 drop-shadow">
              {service.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
