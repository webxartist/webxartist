"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WorkDone = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statsData = [
    { label: "Websites Built", target: 250, symbol: "+" },
    { label: "Brand Identities", target: 180, symbol: "+" },
    { label: "Startup Growth", target: 4, symbol: "x" },
    { label: "Projects Delivered", target: 500, symbol: "+" },
  ];

  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    let interval;
    if (isInView) {
      interval = setInterval(() => {
        setCounters((prev) =>
          prev.map((val, i) => {
            if (val < statsData[i].target) {
              const increment =
                statsData[i].symbol === "x"
                  ? 0.02
                  : Math.ceil(statsData[i].target / 100);
              return Math.min(val + increment, statsData[i].target);
            }
            return val;
          }),
        );
      }, 25);
    }
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative w-full py-28 bg-[#080a20] overflow-hidden font-poppins">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* top/bottom hairlines, consistent with navbar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
          >
            <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              {stat.symbol === "x"
                ? counters[i].toFixed(1)
                : Math.floor(counters[i])}
              {stat.symbol}
            </span>
            <span className="mt-3 text-[14px] font-semibold text-slate-400 text-center tracking-wide">
              {stat.label}
            </span>

            {/* accent underline on hover */}
            <div className="w-8 h-[2px] mt-4 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-400" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkDone;
