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

const AdsComponent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
      className="w-full font-poppins bg-gradient-to-r from-blue-50 to-gray-100  text-white py-20 px-6 md:px-16 lg:px-32 relative"
    >
      {/* Section Header */}
      <motion.h2
        variants={fadeInVariants}
        className="text-5xl font-extrabold text-center mb-16 uppercase bg-clip-text text-black drop-shadow-xl"
      >
        Paid Advertising & Growth Strategies
      </motion.h2>

      {/* Ads Explanation Section */}
      <div className="space-y-16">
        {/** Why Paid Ads Matter */}
        <motion.div
          variants={fadeInVariants}
          className="navbar relative  shadow-lg p-8 rounded-2xl border-l-8 border-blue-500"
        >
          <h3 className="text-3xl font-bold mb-4">Why Invest in Paid Ads?</h3>
          <p className="text-gray-300 text-lg">
            Paid advertising helps businesses gain visibility, attract targeted
            customers, and maximize ROI faster than organic methods.
          </p>
        </motion.div>

        {/** Major Ad Platforms */}
        <motion.div
          variants={fadeInVariants}
          className="navbar relative  shadow-lg p-8 rounded-2xl border-l-8 border-green-500"
        >
          <h3 className="text-3xl font-bold mb-4">Top Advertising Platforms</h3>
          <ul className="text-gray-300 text-lg space-y-3">
            <li>✅ Google Ads – Best for search visibility & conversions</li>
            <li>✅ Facebook & Instagram Ads – Ideal for social engagement</li>
            <li>✅ YouTube Ads – Powerful video marketing</li>
            <li>✅ LinkedIn Ads – Best for B2B advertising</li>
            <li>✅ TikTok Ads – Great for viral reach</li>
          </ul>
        </motion.div>

        {/** Advertising Strategies */}
        <motion.div
          variants={fadeInVariants}
          className="navbar relative  shadow-lg p-8 rounded-2xl border-l-8 border-yellow-500"
        >
          <h3 className="text-3xl font-bold mb-4">Winning Ad Strategies</h3>
          <ul className="text-gray-300 text-lg space-y-3">
            <li>
              📌 Audience Targeting – Reach the right people at the right time
            </li>
            <li>📌 A/B Testing – Optimize ad performance with experiments</li>
            <li>📌 Retargeting – Convert visitors who didn’t purchase</li>
            <li>📌 High-Quality Creatives – Use compelling visuals & copy</li>
            <li>📌 Analytics & Scaling – Track data & maximize conversions</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdsComponent;
