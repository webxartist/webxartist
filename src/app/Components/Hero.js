"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Automatically rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % 3); // Cycle through 3 cards
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const cardImages = [
    "/hero1.png", // Replace with your actual images
    "/hero2.png",
    "/hero3.png",
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-200 to-gray-100 pt-20 lg:pt-20 pb-16 px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row justify-between items-center overflow-hidden font-poppins ">
      {/* Left Side: Hero Content */}
      <motion.div
        className="md:w-1/2 space-y-6 relative z-10 text-center lg:text-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }} // Smooth on-load transition
      >
        {/* Code symbol moved to the start of content */}
        <div className="relative top-4 left-0 text-red-600 text-4xl font-bold animate-pulse">
          &lt;/&gt;
        </div>

        <motion.h1
          className="text-4xl  lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 leading-tight"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Show Your Brandness with <br />
          WebXArtist!
        </motion.h1>

        <motion.p
          className="text-xl lg:text-2xl text-gray-600 font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We provide cutting - edge web development, design, and marketing
          services to elevate your brand.
        </motion.p>

        <Link href="https://www.instagram.com/webxartist2024/" target="_blank">
          <motion.button
            className="px-6 py-3 mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-purple-500 hover:via-pink-400 hover:to-purple-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Get On Instagram
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Side: Rotating 3D Cards with Improved Styling */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 relative h-[24rem] flex justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
      >
        <div className="relative w-80 h-full mx-auto">
          {cardImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 transform-gpu rounded-2xl shadow-xl overflow-hidden ${
                currentCard === index
                  ? "opacity-100 scale-100 rotate-0 shadow-2xl"
                  : "opacity-0 scale-90 rotate-6"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            >
              <img
                src={imgSrc}
                alt={`Card ${index + 1}`}
                fill="true"
                className="rounded-2xl object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stylish Background Elements, Avoiding Text and Cards */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Repositioned geometric shapes and icons to avoid overlapping with content */}
        <div className="absolute top-10 left-20 w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>
        <div className="absolute top-2/4 left-12 right-22 w-6 h-6 bg-purple-700 rounded-full shadow-lg"></div>
        <div className="absolute bottom-2 left-10 w-12 h-12 bg-fuchsia-800 rounded-lg shadow-lg"></div>{" "}
        {/* Moved red icon away from WhatsApp button */}
        <div className="absolute bottom-2 right-28  w-12 h-12 bg-green-500 rotate-45 shadow-lg"></div>
        <div className="absolute bottom-2 right-28 text-gray-300 text-4xl">
          🐞
        </div>
        <div className="absolute top-3/4 right-16 text-gray-300 text-4xl transform rotate-45">
          *
        </div>
      </div>
    </div>
  );
};

export default Hero;
