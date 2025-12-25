"use client";

import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const adSections = [
  {
    title: "Why Invest in Paid Ads?",
    content:
      "Paid advertising helps businesses gain visibility, attract targeted customers, and maximize ROI faster than organic methods.",
    border: "border-blue-500",
  },
  {
    title: "Top Advertising Platforms",
    content: [
      "Google Ads – Best for search visibility & conversions",
      "Facebook & Instagram Ads – Ideal for social engagement",
      "YouTube Ads – Powerful video marketing",
      "LinkedIn Ads – Best for B2B advertising",
      "TikTok Ads – Great for viral reach",
    ],
    border: "border-green-500",
  },
  {
    title: "Winning Ad Strategies",
    content: [
      "Audience Targeting – Reach the right people at the right time",
      "A/B Testing – Optimize ad performance with experiments",
      "Retargeting – Convert visitors who didn’t purchase",
      "High-Quality Creatives – Use compelling visuals & copy",
      "Analytics & Scaling – Track data & maximize conversions",
    ],
    border: "border-yellow-500",
  },
];

const AdsComponent = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Section Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Paid Advertising & Growth Strategies
      </motion.h2>

      {/* Ads Sections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="space-y-16 max-w-5xl mx-auto"
      >
        {adSections.map((section, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className={`relative bg-black/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-l-8 ${section.border} hover:scale-105 transition-transform duration-500`}
          >
            <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
            {Array.isArray(section.content) ? (
              <ul className="text-gray-200 text-lg space-y-3 list-disc list-inside">
                {section.content.map((item, i) => (
                  <li key={i}>📌 {item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-200 text-lg">{section.content}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AdsComponent;
