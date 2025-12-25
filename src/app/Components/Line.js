"use client";

import { motion } from "framer-motion";

export default function MagicalSeparator() {
  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500"];
  const sparkles = Array.from({ length: 8 });

  return (
    <div className="relative w-full bg-blue-100 overflow-hidden py-6">
      {/* Animated Lines */}
      <motion.div
        className="w-full flex flex-col justify-center items-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={`h-1 w-full max-w-6xl mx-auto rounded-full shadow-lg ${color}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            whileHover={{
              scaleX: 1.1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
            }}
            style={{ transformOrigin: "left" }}
          />
        ))}
      </motion.div>

      {/* Sparkle Effects */}
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-50"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            translateY: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
