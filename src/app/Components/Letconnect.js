"use client";

import { FaWhatsapp } from "react-icons/fa";
import { event } from "@/lib/analytics";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock } from "lucide-react";

const trustPoints = [
  { icon: Clock, label: "Replies in minutes" },
  { icon: Zap, label: "Free consultation" },
  { icon: ShieldCheck, label: "No obligation" },
];

export default function LetStart() {
  return (
    <section className="relative w-full py-24 px-6 bg-[#080a20] overflow-hidden font-poppins">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl p-10 sm:p-14 bg-white/[0.04] border border-white/10 rounded-3xl text-center flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* top gradient hairline, consistent with navbar/ticker */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300" />

        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-6">
          Ready to Start?
        </span>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Start Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Your Brand
          </span>
        </motion.h2>

        <motion.p
          className="text-slate-400 text-base sm:text-lg max-w-xl mt-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help you build a strong, , and memorable brand identity that stands
          out in today's competitive market.
        </motion.p>

        {/* WhatsApp CTA with pulsing live-connect ring */}
        <motion.div
          className="relative mt-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-emerald-400/40"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          />
          <a
            href="https://wa.me/8169413149"
            onClick={() =>
              event("whatsapp_click", {
                location: "website",
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold rounded-full text-[15px] sm:text-lg shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:rotate-[8deg]" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* live status line */}
        <motion.div
          className="flex items-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[13px] text-slate-400">
            Usually replies within minutes
          </span>
        </motion.div>

        {/* Trust row */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-9 pt-8 border-t border-white/10 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {trustPoints.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[12.5px] font-medium text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
