"use client";

import { motion } from "framer-motion";

export default function MagicalSeparator() {
  const colors = ["bg-blue-500", "bg-green-500"]; // Removed the red line

  return (
    <div className="relative w-full bg-blue-100 overflow-x-hidden">
      {/* Separator Lines */}
      <motion.div
        className="w-full flex justify-center items-center space-y-1 flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={`h-1 w-full max-w-7xl mx-auto rounded-full shadow-lg ${color} transition-transform`}
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }} // Animating between 0%, 100%, and back to 0%
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            whileHover={{
              scaleX: 1.1,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }} // Optional hover effect
          />
        ))}
      </motion.div>

      {/* Sparkle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1 h-1 rounded-full bg-white opacity-30"
          animate={{
            scale: [1, 2, 1],
            translateY: [0, -20, 0],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
}
