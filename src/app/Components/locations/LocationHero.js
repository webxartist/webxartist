"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function LocationHero({ location }) {
  return (
    <section className="relative overflow-hidden bg-[#080a20] pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            <FaMapMarkerAlt />
            Serving {location.city}
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {location.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {location.heroSubtitle}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/Contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-8 py-4 font-semibold text-[#080a20]"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/Service"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-cyan-400"
            >
              View Services
              <FaArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Info */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Local Expertise
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                We understand businesses in {location.city} and build websites
                that attract local customers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Complete Digital Solutions
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Website development, branding, SEO and digital marketing under
                one roof.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Trusted Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                From planning to launch and beyond, our team is here to help
                your business grow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
