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
          })
        );
      }, 25);
    }
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="relative w-full py-28 bg-gradient-to-tr from-blue-50 to-purple-50 overflow-hidden font-poppins">
      {/* Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-300 to-purple-300 opacity-20 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-20 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
      >
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
          >
            <span className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {stat.symbol === "x"
                ? counters[i].toFixed(1)
                : Math.floor(counters[i])}
              {stat.symbol}
            </span>
            <span className="mt-3 text-lg md:text-xl font-semibold text-gray-800 text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkDone;
