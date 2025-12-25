"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LetStart() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-blue-50 to-gray-100 overflow-hidden font-poppins font-extrabold">
      {/* Floating Decorative Circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute -bottom-16 right-10 w-56 h-56 bg-orange-400 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl p-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl text-center flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s Start to Make Your Brands
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We help you build a strong, professional, and memorable brand identity
          that stands out in today’s competitive market.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/8169413149"
          className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
