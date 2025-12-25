"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  {
    username: "Abhisek",
    text: "Great service! The work was delivered on time and exceeded my expectations.",
    rating: 5,
    dp: "😊",
  },
  {
    username: "Heena Pathaan",
    text: "Awesome design with high technology! My website is super fast and user-friendly.",
    rating: 4,
    dp: "👍",
  },
  {
    username: "Jeet Singh",
    text: "Good communication throughout the project. Got my website at an affordable price!",
    rating: 4,
    dp: "💬",
  },
  {
    username: "Dheeraj Yadav",
    text: "Highly recommend! The team is very professional and skilled in React.js & Next.js.",
    rating: 5,
    dp: "🔥",
  },
  {
    username: "Shivam Patel",
    text: "Very professional. They provide high-tech development services at great prices.",
    rating: 5,
    dp: "✨",
  },
];

export default function FeedbackComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));

  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-blue-50 to-gray-100 font-poppins overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 drop-shadow-lg">
          What Our Clients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center mx-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl mb-4">{feedbacks[currentIndex].dp}</div>
              <h3 className="font-bold text-purple-900 text-xl mb-2">
                {feedbacks[currentIndex].username}
              </h3>
              <p className="text-gray-800 mb-4 font-semibold text-lg">
                {feedbacks[currentIndex].text}
              </p>
              <div className="flex space-x-1">
                {renderStars(feedbacks[currentIndex].rating)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {feedbacks.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-purple-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
