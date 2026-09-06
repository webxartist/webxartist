"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  BadgeCheck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function WhyHero() {
  return (
    <section className="relative overflow-hidden bg-[#080a20] text-white pt-36 pb-24 px-6">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            <Sparkles size={14} />
            Trusted Digital Growth Partner
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Why Businesses
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Choose WebXArtist
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-400 leading-8 max-w-3xl mx-auto">
            We don't just build websites. We create complete digital solutions
            that help businesses attract customers, build trust, strengthen
            their brand, and grow online with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 hover:scale-105 transition"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+918169413149"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 hover:border-cyan-400 transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Trust Badges */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-24"
        >
          {[
            "Premium Quality",
            "Affordable Pricing",
            "Transparent Process",
            "Dedicated Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20]">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3 className="font-semibold">{item}</h3>

                <p className="text-sm text-slate-400 mt-1">
                  Trusted by businesses across India.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
