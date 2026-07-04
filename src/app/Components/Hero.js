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

  const trustBadges = [
    { icon: ShieldCheck, label: "Trusted Agency" },
    { icon: Star, label: "5-Star Work" },
    { icon: Users, label: "300+ Clients" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#080a20] text-white font-poppins pt-32 pb-24 px-6 sm:px-10 lg:px-20">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[380px] h-[380px] bg-cyan-500/10 blur-[110px] rounded-full -top-16 -left-16" />
        <div className="absolute w-[420px] h-[420px] bg-orange-500/10 blur-[120px] rounded-full -bottom-20 -right-16" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* LEFT SECTION */}
        <motion.div
          className="md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 font-bold">
              &lt;/&gt;
            </span>
            Web Design &amp; Digital Growth Agency
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Build a Brand That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              People Trust
            </span>
            <br />
            With WebXArtist
          </motion.h1>

          <motion.p
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Premium websites, branding, social media and growth strategy — we
            turn ideas into a digital presence that attracts customers and earns
            their trust.
          </motion.p>

          {/* TRUST BADGES */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/[0.04] px-4 py-2 rounded-lg border border-white/10"
              >
                <Icon className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                <span className="text-[13px] font-medium text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <Link
              href="/Contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_24px_rgba(26,143,227,0.3)] hover:shadow-[0_0_32px_rgba(255,106,26,0.4)] transition-shadow duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://www.instagram.com/webxartist2024/"
              target="_blank"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-slate-200 border border-white/15 hover:border-cyan-400/50 hover:text-white transition-colors duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - CARD SLIDER */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative w-[300px] h-[280px] sm:w-[380px] sm:h-[360px] md:w-[440px] md:h-[410px] lg:w-[500px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(26,143,227,0.12), rgba(255,106,26,0.08))",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentCard}
                src={cardImages[currentCard]}
                alt="WebXArtist Work"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* subtle bottom gradient bar echoing brand */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300" />
          </div>

          {/* Slide indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {cardImages.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentCard
                    ? "w-6 bg-gradient-to-r from-cyan-400 to-orange-400"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
