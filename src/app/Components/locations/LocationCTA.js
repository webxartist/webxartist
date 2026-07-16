"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function LocationCTA({ location }) {
  return (
    <section className="relative py-24 bg-[#0b1027] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Let's Build Your Business Online
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 leading-tight">
            Need Website Development in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {location.city}
            </span>
            ?
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">
            Whether you're starting a new business, redesigning your existing
            website, or looking to grow online, WebXArtist is here to help. From
            website development and branding to SEO and digital marketing, we
            provide complete digital solutions tailored to your goals.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-8 py-4 font-semibold text-[#080a20] hover:scale-105 transition-transform"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/918169413149"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold text-white hover:border-cyan-400 transition-all"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
              <p className="text-slate-400 mt-2">Projects Delivered</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-orange-400">50+</h3>
              <p className="text-slate-400 mt-2">Happy Clients</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-amber-300">24/7</h3>
              <p className="text-slate-400 mt-2">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
