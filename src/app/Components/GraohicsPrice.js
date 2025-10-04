"use client"; // Ensure this component is client-side

import React from "react";
import { motion } from "framer-motion";

const GraphicDesignPricing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="navbar min-h-screen  text-black py-12 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl text-white font-bold mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          Every Design is Unique
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          There are many factors to consider when pricing a graphic design
          project. Here are some average prices based on past projects. Your
          project may vary, and we'll work with you to meet your budget.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Design */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-3">
            Basic Design
          </h3>
          <p className="text-xl font-bold text-black"> $120 - $300</p>
          <ul className="mt-4 font-semibold text-purple-900">
            <li>- Logo Design</li>
            <li>- Social Media Graphics</li>
            <li>- Business Card Design</li>
          </ul>
        </motion.div>

        {/* Standard Branding */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-3">
            Standard Branding
          </h3>
          <p className="text-xl font-bold text-black">$360 - $850</p>
          <ul className="mt-4 font-semibold text-purple-900">
            <li>- Custom Logo & Brand Identity</li>
            <li>- Social Media Kit</li>
            <li>- Stationery Design</li>
          </ul>
        </motion.div>

        {/* Premium Branding */}
        <motion.div
          className="bg-gradient-to-r from-blue-200 to-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-3">
            Premium Branding
          </h3>
          <p className="text-xl font-bold text-black">$900 - $2,400+</p>
          <ul className="mt-4 text-purple-900 font-semibold">
            <li>- Complete Brand Strategy</li>
            <li>- Custom Illustrations</li>
            <li>- UI/UX Design for Web & Apps</li>
          </ul>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <p className="text-white text-lg">
          $$$ Looking for a budget-friendly option? We offer customized
          solutions tailored to your needs.
        </p>
        <button className="mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GraphicDesignPricing;
