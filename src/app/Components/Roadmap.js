"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    icon: <FaComments className="text-4xl text-orange-500" />,
  },
  {
    title: "Planning",
    description: "Creating a detailed plan and timeline for the project.",
    icon: <FaClipboardList className="text-4xl text-orange-500" />,
  },
  {
    title: "Design",
    description: "Developing prototypes and design concepts.",
    icon: <FaPaintBrush className="text-4xl text-orange-500" />,
  },
  {
    title: "Development",
    description:
      "Building the project with a focus on quality and performance.",
    icon: <FaCode className="text-4xl text-orange-500" />,
  },
  {
    title: "Testing",
    description: "Thorough testing to ensure everything works as intended.",
    icon: <FaCheckCircle className="text-4xl text-orange-500" />,
  },
  {
    title: "Launch",
    description: "Deploying the project and going live.",
    icon: <FaRocket className="text-4xl text-orange-500" />,
  },
  {
    title: "Feedback",
    description: "Collecting feedback for continuous improvement.",
    icon: <FaCommentDots className="text-4xl text-orange-500" />,
  },
  {
    title: "Support",
    description: "Providing ongoing support and maintenance.",
    icon: <FaHeadset className="text-4xl text-orange-500" />,
  },
];

const Strategy = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-24 font-poppins text-white overflow-hidden">
      {/* Floating Glow Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Section Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          Strategy
        </span>
      </motion.h2>

      {/* Strategy Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.1)] p-8 max-w-lg w-full cursor-pointer hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-500"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6 space-x-4">
            {steps[currentStep].icon}
            <h3 className="text-3xl font-bold text-white">
              {steps[currentStep].title}
            </h3>
          </div>
          <p className="text-gray-300 text-lg">
            {steps[currentStep].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-6 mt-10 z-10">
        <button
          className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="w-full max-w-lg mt-8 z-10">
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Strategy;
