"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Technology = () => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return (
    <div
      id="technology-section"
      ref={setRef}
      className="w-full flex font-poppins flex-col items-center p-12  bg-gradient-to-r from-blue-50 to-gray-100 text-black overflow-hidden"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-10 text-center uppercase"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Technology & Development Process
      </motion.h2>

      {/* Development Process */}
      <div className="w-full max-w-4xl space-y-12">
        {[
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
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-16 border-l-4 border-purple-950"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="absolute left-[-30px] top-0 w-12 h-12 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-full">
              {item.number}
            </div>
            <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
            <p className="text-black font-semibold">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
