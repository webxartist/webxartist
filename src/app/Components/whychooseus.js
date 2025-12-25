"use client";

import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaStar, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    title: "Affordable Price",
    description:
      "We provide the best value for your money without compromising quality.",
    icon: <FaDollarSign className="text-4xl text-green-400" />,
  },
  {
    title: "Personal Connection",
    description:
      "We prioritize building relationships with our clients to understand their needs.",
    icon: <FaUsers className="text-4xl text-blue-400" />,
  },
  {
    title: "Industry Standard",
    description:
      "Our services meet the highest industry standards and best practices.",
    icon: <FaStar className="text-4xl text-yellow-400" />,
  },
  {
    title: "100% Trust",
    description:
      "We are committed to transparency and integrity in all our dealings.",
    icon: <FaShieldAlt className="text-4xl text-red-400" />,
  },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 font-poppins text-white overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 z-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
            Choose Us?
          </span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-6">{reason.icon}</div>

              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 group-hover:text-pink-400 transition duration-300">
                {reason.title}
              </h3>

              <p className="text-center text-gray-200 text-lg">
                {reason.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT SECTION - FIXED */}
      <section className="px-6 py-20 max-w-5xl mx-auto font-poppins bg-white text-gray-800 leading-relaxed">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Best Affordable Website Development Agency in Mumbai, Thane & Mumbra
        </h2>

        <p className="mb-4 text-lg">
          WebXArtist is a trusted and affordable website development agency
          serving clients across Mumbai, Thane, Mumbra, and all over India. We
          specialize in custom React websites, full branding, SEO optimization,
          and professional digital marketing services designed to help your
          business grow online.
        </p>

        <p className="mb-4 text-lg">
          Whether you're searching for{" "}
          <strong>“affordable website developer Mumbai”</strong>,{" "}
          <strong>“best website design company Thane”</strong>, or{" "}
          <strong>“trusted web agency in Mumbra”</strong>, WebXArtist delivers
          premium quality at an unmatched price.
        </p>

        <h3 className="text-3xl font-semibold mt-10 mb-4">
          Locations We Serve
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Mumbai</li>
          <li>Thane</li>
          <li>Mumbra</li>
          <li>Navi Mumbai</li>
          <li>Pune</li>
          <li>Pan India (Online + Offline Projects)</li>
        </ul>

        <p className="text-lg mt-6">
          Whether you're a startup, business owner, or brand, our team ensures
          high-quality website development at an affordable price—without
          compromising on design, functionality, or SEO.
        </p>
      </section>
    </>
  );
};

export default WhyChooseUs;
