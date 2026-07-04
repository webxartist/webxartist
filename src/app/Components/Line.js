"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  const particles = [
    { top: 30, left: 20, delay: 0 },
    { top: 60, left: 38, delay: 0.6 },
    { top: 25, left: 63, delay: 1.2 },
    { top: 55, left: 80, delay: 1.8 },
  ];

  return (
    <div className="relative w-full bg-transparent overflow-hidden py-14">
      <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-center">
        {/* Base gradient line */}
        <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/70 via-orange-400/70 to-amber-300/70" />

          {/* Light-sweep shimmer travelling across the line */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
            }}
            animate={{ x: ["-100%", "220%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.6,
            }}
          />
        </div>

        {/* Center signature mark */}
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#080a20] border border-white/10"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,178,56,0)",
                "0 0 16px rgba(255,178,56,0.45)",
                "0 0 0px rgba(255,178,56,0)",
              ],
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 font-bold text-sm">
              ✦
            </span>
          </motion.span>
        </motion.div>

        {/* Sparse floating particles, brand colors only */}
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full bg-gradient-to-r from-cyan-300 to-amber-300"
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
