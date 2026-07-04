"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, BadgeCheck } from "lucide-react";

const feedbacks = [
  {
    username: "Abhisek",
    text: "Great service! The work was delivered on time and exceeded my expectations.",
    rating: 5,
  },
  {
    username: "Heena Pathaan",
    text: "Awesome design with high technology! My website is super fast and user-friendly.",
    rating: 4,
  },
  {
    username: "Jeet Singh",
    text: "Good communication throughout the project. Got my website at an affordable price!",
    rating: 4,
  },
  {
    username: "Dheeraj Yadav",
    text: "Highly recommend! The team is very professional and skilled in React.js & Next.js.",
    rating: 5,
  },
  {
    username: "Shivam Patel",
    text: "Very professional. They provide high-tech development services at great prices.",
    rating: 5,
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function FeedbackComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-amber-300 fill-amber-300" : "text-slate-700"
        }`}
      />
    ));

  return (
    <section className="relative w-full py-24 bg-[#080a20] font-poppins overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center mx-auto"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="absolute top-6 left-7 w-8 h-8 text-white/[0.06]" />

              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] font-bold text-lg mb-5">
                {getInitials(feedbacks[currentIndex].username)}
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <h3 className="font-bold text-white text-[16px]">
                  {feedbacks[currentIndex].username}
                </h3>
                <BadgeCheck className="w-4 h-4 text-cyan-400" />
              </div>

              <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed mb-6 max-w-lg">
                "{feedbacks[currentIndex].text}"
              </p>

              <div className="flex gap-1">
                {renderStars(feedbacks[currentIndex].rating)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-7 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300"
                  : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
