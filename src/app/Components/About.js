"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
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
      { threshold: 0.1 }
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
      id="about-section"
      ref={setRef}
      className="w-full flex flex-col font-poppins font-extrabold items-center p-6 bg-gradient-to-r from-blue-50 to-gray-100 overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-gray-800 "
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About WebXArtist
      </motion.h2>

      {/* Image and Content Section */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center overflow-hidden">
        {/* Left Side: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/about.png"
            alt="About WebXArtist"
            width={450}
            height={450}
            className="rounded-lg shadow-xl border-4 border-blue-300"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="w-full lg:w-1/2 px-6 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-3xl text-gray-700 mb-6 text-center lg:text-left font-semibold">
            Transforming Ideas into Digital Success
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
            WebXArtist is a leading web development, graphic design, and video
            editing agency, helping businesses establish a strong online
            presence with visually compelling and strategically designed digital
            assets. Whether you need a stunning website, brand identity, or
            captivating video content, we bring innovation and expertise to
            every project.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our Expertise
          </h3>
          <ul className="list-none text-gray-700 space-y-4">
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-3">✔</span>
              Custom Website Development–Optimized for SEO, speed, and user
              experience.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-3">✔</span>
              Graphic Design & Branding – Logos, banners, social media
              creatives, and marketing materials.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-3">✔</span>
              Editing & Motion Graphics – Engaging content to boost audience
              interaction and conversions.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 text-xl mr-3">✔</span>
              E-Commerce Solutions – From Shopify to custom stores, ensuring
              seamless customer experiences.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Call to Action */}
    </div>
  );
};

export default About;
