"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGift, FaCrown, FaUserFriends } from "react-icons/fa";

const referralData = [
  {
    title: "Basic Referral",
    icon: <FaUserFriends className="text-6xl text-purple-700 mx-auto mb-4" />,
    reward: "₹800 / Referral",
    features: ["₹800 for each new customer", "No referral limit"],
    delay: 0.2,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Premium Referral",
    icon: <FaGift className="text-6xl text-purple-700 mx-auto mb-4" />,
    reward: "₹2,500 + Gifts",
    features: [
      "₹2,500 after 5 referrals",
      "Free premium membership",
      "Exclusive gifts",
    ],
    delay: 0.4,
    gradient: "from-pink-500 to-yellow-500",
  },
  {
    title: "Elite Referral",
    icon: <FaCrown className="text-6xl text-purple-700 mx-auto mb-4" />,
    reward: "₹7,000 + VIP Perks",
    features: [
      "₹7,000 for 10+ referrals",
      "VIP lifetime access",
      "Special discount codes",
    ],
    delay: 0.6,
    gradient: "from-purple-600 to-pink-500",
  },
];

const ReferAndEarn = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://webxartist.com/referral-code";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white py-20 px-6 overflow-hidden font-poppins">
      {/* Decorative background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-600 to-yellow-500 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Refer & Earn with WebXArtist
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Invite friends and earn{" "}
          <span className="text-yellow-400 font-bold">cash rewards</span>,{" "}
          <span className="text-pink-400 font-bold">exclusive gifts</span>, and{" "}
          <span className="text-purple-400 font-bold">VIP perks</span> for each
          successful referral.
        </motion.p>

        {/* Referral Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {referralData.map((item, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              glareEnable
              glareMaxOpacity={0.25}
            >
              <motion.div
                className={`p-8 rounded-3xl shadow-2xl bg-gradient-to-r ${item.gradient} text-white hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                {item.icon}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-2xl font-extrabold mb-4">{item.reward}</p>
                <ul className="text-white font-semibold space-y-2">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-300 font-bold">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Referral Link Section */}
        <motion.div
          className="mt-12 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-300 font-semibold">
            Share your referral link:
          </p>
          <div className="bg-gray-800 p-4 rounded-xl flex items-center space-x-4 max-w-lg w-full">
            <span className="text-pink-400 font-mono truncate">
              {referralLink}
            </span>
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-500 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="mt-12 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl hover:scale-105 transition transform animate-bounce"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Start Referring Now!
        </motion.button>
      </div>
    </section>
  );
};

export default ReferAndEarn;
