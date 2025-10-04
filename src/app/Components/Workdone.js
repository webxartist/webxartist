// components/WorkDone.js
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WorkDone = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Counter Animation logic
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (counter1 < 200) setCounter1((prev) => prev + 1);
        if (counter2 < 350) setCounter2((prev) => prev + 1);
        if (counter3 < 3) setCounter3((prev) => prev + 0.1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView, counter1, counter2, counter3]);

  return (
    <div className="navbar relative w-full text-black flex items-center justify-center  py-10  font-poppins font-extrabold">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {/* Circle 1 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-full w-40 h-40 bg-gradient-to-r from-blue-100 to-gray-100 text-black shadow-lg transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-bold">{Math.floor(counter1)}+</span>
          <span className="text-lg">Websites Built</span>
        </motion.div>

        {/* Circle 2 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-full w-40 h-40 bg-gradient-to-r from-blue-100 to-gray-100 shadow-lg transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-bold">{Math.floor(counter2)}+</span>
          <span className="text-lg">Brand Identities</span>
        </motion.div>

        {/* Circle 3 */}
        <motion.div
          className="flex flex-col items-center justify-center rounded-full w-40 h-40 bg-gradient-to-r from-blue-100 to-gray-100 shadow-lg transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-bold text-center">
            {counter3.toFixed(1)}x
          </span>
          <span className="text-lg text-center">Your Startup Growth</span>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkDone;
