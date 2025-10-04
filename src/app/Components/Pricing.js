"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Custom Website",
    price: "$3,500 - $8,000",
    description:
      "A fully custom website designed and built specifically for you. Multiple revisions during the design phase, lead to a polished and customized website. Custom code means a highly performant website with lightning-fast load times, strong security, and good SEO from the ground up.",
    features: [
      "Custom, unique design",
      "Custom coded development",
      "3-5 pages + blog/articles",
      "No eCommerce functionality",
    ],
  },
  {
    title: "Custom eCommerce",
    price: "$4,500 - $20,000+",
    description:
      "A completely custom web application built using the MERN stack (MongoDB, Express, React, and Node.js) with Next.js for enhanced performance. Multiple design revisions ensure an optimized and user-friendly experience, tailored specifically for your business needs.",
    features: [
      "Custom, unique design",
      "Built with MERN stack & Next.js",
      "3-5 pages + blog/articles",
      "Fully scalable and secure",
    ],
  },
  {
    title: "Awwwards-worthy",
    price: "$20,000+",
    description:
      "If you're truly serious about making an impact, we'll spend weeks refining every single element of your website. Unique interactions and animations coupled with stand-out design and every element painstakingly hand-coded leads to a website that will make waves.",
    features: [
      "Extremely detailed and unique design",
      "Advanced animations & interactions",
      "Optimized for high performance",
    ],
  },
];

export default function PricingComponent() {
  return (
    <div className="navbar min-h-screen  text-black py-20 px-5 sm:px-10 md:px-20 font-poppins">
      <h2 className="text-center text-white text-4xl font-bold mb-10">
        Every Project is Unique
      </h2>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
        There are so many variables to consider when deciding how much to spend
        on a website. We've tried to simplify it with these average prices:
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {pricingData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-r from-blue-200 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-purple-900">{item.title}</h3>
            <p className="text-xl font-bold mt-2">{item.price}</p>
            <p className="text-gray-600 font-semibold mt-4">
              {item.description}
            </p>
            <ul className="mt-4 space-y-2">
              {item.features.map((feature, i) => (
                <li key={i} className="text-purple-900 font-semibold">
                  • {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <h3 className="text-3xl font-semibold text-gray-300">$$$</h3>
        <p className="text-white mt-2 max-w-xl mx-auto">
          Want a lower budget? We can accommodate lower budgets! Skipping the
          design phase, and using a prebuilt (but still custom coded) theme can
          save significantly on the budget. Get in touch today and let's discuss
          your project.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold rounded-lg hover:bg-yellow-600 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
}
