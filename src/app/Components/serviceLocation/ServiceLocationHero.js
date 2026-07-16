"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function ServiceLocationHero({ service, location }) {
  return (
    <section className="relative overflow-hidden bg-[#080a20] pt-20 pb-24">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Location Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <FaMapMarkerAlt />
            {location.city}
          </span>

          {/* Heading */}
          <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            {service.name} in {location.city}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Looking for professional {service.name.toLowerCase()} services in{" "}
            {location.city}? WebXArtist helps startups, local businesses,
            companies, restaurants, schools, clinics, and enterprises grow with
            modern digital solutions that deliver real business results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/Contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 px-8 py-4 font-semibold text-[#080a20] transition hover:scale-105"
            >
              Get Free Quote
            </Link>

            <Link
              href={`/services/${service.slug}`}
              className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 transition hover:border-cyan-400"
            >
              View Service
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
