"use client";

import { motion } from "framer-motion";

const techSteps = [
  {
    number: "01",
    title: "Foundation: HTML, CSS & JavaScript",
    description:
      "HTML structures content, CSS styles it, and JavaScript brings interactivity to web applications.",
  },
  {
    number: "02",
    title: "Styling: Tailwind CSS & Bootstrap",
    description:
      "Tailwind CSS offers utility-first design, while Bootstrap provides a component-based approach for responsive web layouts.",
  },
  {
    number: "03",
    title: "Full Stack: MERN Stack",
    description:
      "MongoDB, Express.js, React, and Node.js power scalable, modern web applications.",
  },
  {
    number: "04",
    title: "Advanced: Next.js",
    description:
      "Server-side rendering, API routes, and performance optimization make Next.js ideal for SEO-friendly applications.",
  },
  {
    number: "05",
    title: "Graphic Design Tools",
    description:
      "Adobe Photoshop, Illustrator, and Figma help create stunning UI/UX designs and branding assets.",
  },
  {
    number: "06",
    title: "Video Editing Tools",
    description:
      "Adobe Premiere Pro, After Effects, and DaVinci Resolve enable professional video production.",
  },
];

const Technology = () => {
  return (
    <section className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins overflow-hidden">
      {/* Background Glow Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-5 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-blue-400/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Header */}
      <motion.h2
        className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Technology & Development Process
      </motion.h2>

      {/* Steps */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        {techSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-black/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 hover:scale-[1.03] transition-transform duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Step Number Circle */}
            <div className="absolute -top-9 sm:-left-10 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg sm:text-2xl font-bold rounded-full shadow-xl">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="mt-10 sm:mt-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
