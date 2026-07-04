"use client";

import { motion } from "framer-motion";
import {
  Target,
  FlaskConical,
  Repeat2,
  Image as ImageIcon,
  BarChart3,
  Rocket,
} from "lucide-react";
import {
  FaGoogle,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const platforms = [
  {
    name: "Google Ads",
    desc: "Best for search visibility & conversions",
    icon: FaGoogle,
  },
  {
    name: "Facebook & Instagram Ads",
    desc: "Ideal for social engagement",
    icon: FaFacebook,
  },
  {
    name: "YouTube Ads",
    desc: "Powerful video marketing",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn Ads",
    desc: "Best for B2B advertising",
    icon: FaLinkedin,
  },
  {
    name: "TikTok Ads",
    desc: "Great for viral reach",
    icon: FaTiktok,
  },
];

const strategies = [
  {
    name: "Audience Targeting",
    desc: "Reach the right people at the right time",
    icon: Target,
  },
  {
    name: "A/B Testing",
    desc: "Optimize ad performance with experiments",
    icon: FlaskConical,
  },
  {
    name: "Retargeting",
    desc: "Convert visitors who didn't purchase",
    icon: Repeat2,
  },
  {
    name: "High-Quality Creatives",
    desc: "Use compelling visuals & copy",
    icon: ImageIcon,
  },
  {
    name: "Analytics & Scaling",
    desc: "Track data & maximize conversions",
    icon: BarChart3,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const AdsComponent = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#080a20] text-white font-poppins overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-14 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          Performance Marketing
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Paid Advertising &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Growth Strategies
          </span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Why Invest — intro panel */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-5 bg-white/[0.04] border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Why Invest in Paid Ads?
            </h3>
            <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed">
              Paid advertising helps businesses gain visibility, attract
              targeted customers, and maximize ROI faster than organic methods.
            </p>
          </div>
        </motion.div>

        {/* Platforms */}
        <div>
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Top Advertising Platforms
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {platforms.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="group flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-lg shrink-0 group-hover:text-orange-400 transition-colors duration-300">
                  <p.icon />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-white">{p.name}</h4>
                  <p className="text-[13px] text-slate-400 mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Strategies */}
        <div>
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Winning Ad Strategies
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {strategies.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                className="group flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-orange-400 text-lg shrink-0 group-hover:text-cyan-400 transition-colors duration-300">
                  <s.icon className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-white">{s.name}</h4>
                  <p className="text-[13px] text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdsComponent;
