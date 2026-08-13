"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function WhyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24 px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-10 md:p-16 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            Let's Build Something Amazing
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Grow Your
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Business Online?
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
            Whether you need a website, complete branding, SEO, digital
            marketing, or a full business growth strategy, WebXArtist is your
            trusted digital partner.
          </p>

          {/* Highlights */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Free Consultation",
              "Affordable Pricing",
              "Fast Delivery",
              "Premium Quality",
              "SEO Optimized",
              "Long-Term Support",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-300"
              >
                ✓ {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-8 py-4 font-semibold text-[#080a20] hover:scale-105 transition duration-300"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <a
              href="tel:+918169413149"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 text-white hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/918169413149"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-green-500/40 px-8 py-4 text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>

          {/* Bottom */}

          <p className="mt-10 text-sm text-slate-500">
            Trusted by startups, local businesses, and growing brands across
            India.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
