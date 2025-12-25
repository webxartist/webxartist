"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioCategories = [
  {
    category: "Web Design",
    items: [
      { title: "Website Template 1", image: "/web1.webp" },
      { title: "Website Template 2", image: "/web2.webp" },
      { title: "Website Template 3", image: "/web3.svg" },
    ],
  },
  {
    category: "Branding",
    items: [
      { title: "Logo Design 1", image: "/branding1.jpg" },
      { title: "Logo Design 2", image: "/branding2.jpg" },
      { title: "Brand Identity Design", image: "/branding3.jpg" },
    ],
  },
  {
    category: "Graphic Design",
    items: [
      { title: "Graphic Works", image: "/g1.jpg" },
      { title: "Graphic Works", image: "/g3.jpg" },
      { title: "Graphic Works", image: "/g4.jpg" },
    ],
  },
  {
    category: "Print Design",
    items: [
      { title: "Print Works", image: "/print1.jpg" },
      { title: "Print Works", image: "/p2.jpg" },
      { title: "Print Works", image: "/p3.jpg" },
    ],
  },
  {
    category: "Video Editing",
    items: [
      { title: "Video Project 1", image: "/video1.webp" },
      { title: "Video Project 2", image: "/video2.webp" },
      { title: "Short Film Editing", image: "/video3.webp" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className=" navbar relative min-h-screen  text-white p-10 overflow-hidden font-poppins font-extrabold">
      {/* Portfolio Title */}
      <motion.h2
        className="text-center text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        WebXArtist Portfolio
      </motion.h2>

      {/* Portfolio Categories */}
      {portfolioCategories.map((category, index) => (
        <motion.div
          key={index}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          {/* Category Title */}
          <motion.h3
            className="text-3xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {category.category}
          </motion.h3>

          {/* Portfolio Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {category.items.map((item, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl shadow-xl overflow-hidden bg-gray-800 border border-gray-700 group cursor-pointer transform perspective-1000 transition-transform duration-300 hover:rotate-1 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform transform group-hover:scale-110"
                />

                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.h3
                    className="text-white text-2xl font-bold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-20 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-32 h-32 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>
    </section>
  );
}
