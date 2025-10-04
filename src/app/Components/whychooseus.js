// components/WhyChooseUs.js
"use client";

import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaStar, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    title: "Affordable Price",
    description:
      "We provide the best value for your money without compromising quality.",
    icon: <FaDollarSign className="text-3xl text-green-500" />,
  },
  {
    title: "Personal Connection",
    description:
      "We prioritize building relationships with our clients to understand their needs.",
    icon: <FaUsers className="text-3xl text-blue-500" />,
  },
  {
    title: "Industry Standard",
    description:
      "Our services meet the highest industry standards and best practices.",
    icon: <FaStar className="text-3xl text-yellow-500" />,
  },
  {
    title: "100% Trust",
    description:
      "We are committed to transparency and integrity in all our dealings.",
    icon: <FaShieldAlt className="text-3xl text-red-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full p-8 bg-blue-100 flex flex-col items-center overflow-hidden  font-poppins font-extrabold">
      <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-700 text-center">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
