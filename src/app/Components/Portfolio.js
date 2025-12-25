"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Portfolio() {
  return (
    <section className="relative min-h-screen p-10 overflow-hidden font-poppins bg-gradient-to-br from-blue-50 to-gray-100 text-black">
      {/* Section Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        WebXArtist Portfolio
      </motion.h2>

      {/* Portfolio Categories */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="space-y-20"
      >
        {portfolioCategories.map((category, index) => (
          <motion.div key={index} className="space-y-8">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-center mb-8"
              variants={fadeInVariants}
            >
              {category.category}
            </motion.h3>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInVariants}
                  className="relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-md border-l-8 border-purple-500 shadow-2xl cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <motion.h3
                      className="text-white text-2xl md:text-3xl font-bold text-center px-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-20 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-48 h-48 bg-pink-500/20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-500/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}
