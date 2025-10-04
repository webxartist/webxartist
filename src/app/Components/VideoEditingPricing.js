"use client"; // Ensure this component is client-side

import React from "react";
import { motion } from "framer-motion";

const VideoEditingPricing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="navbar min-h-screen  text-white py-12 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          Every Video Tells a Story
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pricing for video editing can vary based on the project's complexity
          and requirements. Here are some average prices based on past projects.
          We'll work with you to meet your budget.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Editing */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-3">
            Basic Editing
          </h3>
          <p className="text-xl font-bold text-black">$60 - $180</p>
          <ul className="mt-4 text-purple-900 font-semibold">
            <li>- Up to 5 minutes of footage</li>
            <li>- Basic cuts and transitions</li>
            <li>- One round of revisions</li>
          </ul>
        </motion.div>

        {/* Standard Editing */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl text-purple-900 font-bold mb-3">
            Standard Editing
          </h3>
          <p className="text-xl font-bold text-black">$240 - $480</p>
          <ul className="mt-4 font-semibold text-purple-900">
            <li>- Up to 15 minutes of footage</li>
            <li>- Advanced effects and transitions</li>
            <li>- Two rounds of revisions</li>
          </ul>
        </motion.div>

        {/* Premium Editing */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl text-purple-900 font-bold mb-3">
            Premium Editing
          </h3>
          <p className="text-xl font-bold text-black">$600 - $1,200+</p>
          <ul className="mt-4 font-semibold text-purple-900">
            <li>- Up to 30 minutes of footage</li>
            <li>- Complete editing with animations</li>
            <li>- Unlimited revisions and additional features</li>
          </ul>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <p className="text-white text-lg">
          $$$ Looking for a custom package? We offer tailored solutions to meet
          your needs.
        </p>
        <button className="mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default VideoEditingPricing;
