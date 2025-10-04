// components/Strategy.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    description: "Understanding your requirements and goals.",
    icon: <FaComments className="text-3xl text-orange-500" />,
  },
  {
    title: "Planning",
    description: "Creating a detailed plan and timeline for the project.",
    icon: <FaClipboardList className="text-3xl text-orange-500" />,
  },
  {
    title: "Design",
    description: "Developing prototypes and design concepts.",
    icon: <FaPaintBrush className="text-3xl text-orange-500" />,
  },
  {
    title: "Development",
    description:
      "Building the project with a focus on quality and performance.",
    icon: <FaCode className="text-3xl text-orange-500" />,
  },
  {
    title: "Testing",
    description: "Thorough testing to ensure everything works as intended.",
    icon: <FaCheckCircle className="text-3xl text-orange-500" />,
  },
  {
    title: "Launch",
    description: "Deploying the project and going live.",
    icon: <FaRocket className="text-3xl text-orange-500" />,
  },
  {
    title: "Feedback",
    description: "Collecting feedback for continuous improvement.",
    icon: <FaCommentDots className="text-3xl text-orange-500" />,
  },
  {
    title: "Support",
    description: "Providing ongoing support and maintenance.",
    icon: <FaHeadset className="text-3xl text-orange-500" />,
  },
];

const Strategy = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <div className="w-full p-8 bg-gradient-to-r from-blue-100 to-gray-100 flex flex-col items-center overflow-hidden  font-poppins font-extrabold">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-lg">
          Our Strategy
        </h2>
        <div className="flex flex-col items-center w-full">
          <motion.div
            key={currentStep}
            className="bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md transition-transform transform hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              {steps[currentStep].icon}
              <h3 className="text-3xl font-semibold ml-2 text-gray-900">
                {steps[currentStep].title}
              </h3>
            </div>
            <p className="text-gray-700">{steps[currentStep].description}</p>
          </motion.div>
          <div className="flex justify-center space-x-4 mt-6 w-full">
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <motion.div
            className="h-1 w-24 bg-orange-500 rounded-full mx-auto"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </>
  );
};

export default Strategy;
