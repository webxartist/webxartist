"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";

const Hero = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardImages = [
    "/hero-1.png",
    "/hero-2.png",
    "/hero-3.png",
    "/hero-4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins pt-28 pb-20 px-6 sm:px-10 lg:px-20">
      {/* Glowing background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[350px] h-[350px] bg-pink-500/20 blur-3xl rounded-full -top-10 -left-10 animate-spin-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full -bottom-10 -right-10 animate-spin-slower"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT SECTION */}
        <motion.div
          className="md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-6xl font-extrabold text-pink-400 drop-shadow-xl"
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            &lt;/&gt;
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Build a Brand That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500">
              {" "}
              People Trust
            </span>
            <br />
            With <span className="text-white">WebXArtist</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Premium Websites • Branding • Social Media • Growth
            <br />
            We transform ideas into powerful digital presence that attracts
            customers & builds trust.
          </motion.p>

          {/* TRUST BADGES */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-6 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/20">
              <ShieldCheck className="text-green-400 w-5 h-5" />
              <span className="text-sm">Trusted Agency</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/20">
              <Star className="text-yellow-400 w-5 h-5" />
              <span className="text-sm">5-Star Work</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/20">
              <Users className="text-blue-400 w-5 h-5" />
              <span className="text-sm">300+ Clients</span>
            </div>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="https://www.instagram.com/webxartist2024/"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 rounded-2xl text-lg font-semibold shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_45px_rgba(236,72,153,0.6)] transition-all duration-300"
            >
              Connect On Instagram
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - CARD SLIDER */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-[300px] h-[280px] sm:w-[380px] sm:h-[360px] md:w-[450px] md:h-[420px] lg:w-[520px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentCard}
                src={cardImages[currentCard]}
                alt="WebXArtist Hero"
                initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Floating Glow */}
          <motion.div
            className="absolute -z-10 w-64 h-64 bg-pink-500/30 blur-2xl rounded-full"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, 20, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
