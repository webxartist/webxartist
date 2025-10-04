"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGift, FaCrown, FaUserFriends } from "react-icons/fa";

const ReferAndEarn = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://webxartist.com/referral-code";

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-gray-100 text-white py-16 px-6 flex flex-col items-center text-center font-poppins">
      {/* Header with gradient text */}
      <motion.h1
        className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 leading-tight"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Refer & Earn with WebXArtist
      </motion.h1>

      <motion.p
        className="text-lg text-black font-bold max-w-3xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Invite your friends & earn **cash rewards**, **exclusive gifts**, and a
        **membership upgrade** with each successful referral!
      </motion.p>

      {/* Referral Rewards Section */}
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl w-full">
        {/* Level 1 */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable
          glareMaxOpacity={0.3}
        >
          <motion.div
            className="p-8 rounded-xl shadow-lg border border-purple-600 bg-white hover:scale-105 transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaUserFriends className="text-5xl text-purple-900 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-purple-600">
              Basic Referral
            </h3>
            <p className="text-2xl font-bold text-pink-500">$9.60 / Referral</p>
            <ul className="mt-4 text-black font-semibold space-y-2">
              <li>- $9.60 for each new customer</li>
              <li>- No referral limit</li>
            </ul>
          </motion.div>
        </Tilt>

        {/* Level 2 */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable
          glareMaxOpacity={0.3}
        >
          <motion.div
            className="p-8 rounded-xl shadow-lg border border-purple-600 bg-white hover:scale-105 transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaGift className="text-5xl text-purple-900 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-purple-600">
              Premium Referral
            </h3>
            <p className="text-2xl font-bold text-pink-500">$30 + Gifts</p>
            <ul className="mt-4 text-black font-semibold space-y-2">
              <li>- $30 after 5 referrals</li>
              <li>- Free premium membership</li>
              <li>- Exclusive gifts</li>
            </ul>
          </motion.div>
        </Tilt>

        {/* Level 3 */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable
          glareMaxOpacity={0.3}
        >
          <motion.div
            className="p-8 rounded-xl shadow-lg border border-purple-600 bg-white hover:scale-105 transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaCrown className="text-5xl text-purple-900 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-purple-600">
              Elite Referral
            </h3>
            <p className="text-2xl font-bold text-pink-500">$84 + VIP Perks</p>
            <ul className="mt-4 text-black font-semibold space-y-2">
              <li>- $84 for 10+ referrals</li>
              <li>- VIP lifetime access</li>
              <li>- Special discount codes</li>
            </ul>
          </motion.div>
        </Tilt>
      </div>

      {/* Referral Link */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-lg text-gray-700 font-semibold mb-4">
          Share your referral link:
        </p>
        <div className="bg-gray-800 p-4 rounded-lg inline-flex items-center space-x-4">
          <span className="text-pink-400 font-mono">{referralLink}</span>
          <button
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-500 transition"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.button
        className="mt-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition transform animate-bounce"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        Start Referring Now!
      </motion.button>
    </div>
  );
};

export default ReferAndEarn;
