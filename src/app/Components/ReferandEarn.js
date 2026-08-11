"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGift, FaCrown, FaUserFriends } from "react-icons/fa";
import { Copy, Check } from "lucide-react";

const referralData = [
  {
    title: "Basic Referral",
    icon: FaUserFriends,
    reward: "₹800 / Referral",
    features: ["₹800 for each new customer", "No referral limit"],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Premium Referral",
    icon: FaGift,
    reward: "₹2,500 + Gifts",
    features: [
      "₹2,500 after 5 referrals",
      "Free premium membership",
      "Exclusive gifts",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Elite Referral",
    icon: FaCrown,
    reward: "₹7,000 + VIP Perks",
    features: [
      "₹7,000 for 10+ referrals",
      "VIP lifetime access",
      "Special discount codes",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

const ReferAndEarn = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://www.webxartist.com/referral-code";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  return (
    <section className="relative w-full min-h-screen bg-[#080a20] text-white py-24 px-6 overflow-hidden font-poppins">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-orange-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Referral Program
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Refer &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Earn
            </span>{" "}
            with WebXArtist
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Invite friends and earn{" "}
            <span className="text-amber-300 font-semibold">cash rewards</span>,{" "}
            <span className="text-orange-400 font-semibold">
              exclusive gifts
            </span>
            , and <span className="text-cyan-400 font-semibold">VIP perks</span>{" "}
            for each successful referral.
          </p>
        </motion.div>

        {/* Referral Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referralData.map((item, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable
              glareMaxOpacity={0.08}
              glareColor="#ffffff"
              className="h-full"
            >
              <motion.div
                className={`relative h-full p-8 rounded-2xl text-left flex flex-col justify-between transition-all duration-300 ${
                  item.popular
                    ? "bg-white/[0.06] border border-orange-400/30 shadow-[0_0_40px_rgba(255,106,26,0.12)]"
                    : "bg-white/[0.04] border border-white/10 hover:border-white/20"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${item.accent}`}
                />

                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] font-bold px-4 py-1.5 rounded-full text-[12px] uppercase tracking-wide shadow-lg">
                    Best Value
                  </div>
                )}

                <div>
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} text-[#080a20] mb-6 mt-2`}
                  >
                    <item.icon className="text-xl" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 mb-5">
                    {item.reward}
                  </p>

                  <ul className="space-y-3">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-slate-300 text-[14px]">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Referral Link Section */}
        <motion.div
          className="mt-16 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[2px] text-slate-400">
            Share Your Referral Link
          </p>
          <div className="bg-white/[0.04] border border-white/10 p-3 rounded-xl flex items-center gap-3 max-w-lg w-full">
            <span className="flex-1 text-slate-300 font-mono text-[13px] sm:text-sm truncate text-left px-2">
              {referralLink}
            </span>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] font-bold py-2.5 px-4 rounded-lg text-[13px] shadow-md hover:shadow-lg transition-shadow duration-300 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Copy
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <button className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-[14px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_24px_rgba(26,143,227,0.3)] hover:shadow-[0_0_32px_rgba(255,106,26,0.45)] transition-shadow duration-300">
            Start Referring Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferAndEarn;
