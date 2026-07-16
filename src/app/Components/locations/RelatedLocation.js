"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import locations from "@/data/locations";

export default function RelatedLocations({ currentSlug }) {
  const related = locations
    .filter((location) => location.slug !== currentSlug)
    .slice(0, 6);

  return (
    <section className="relative py-24 bg-[#080a20] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Explore More Locations
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            We Also Serve Nearby Locations
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            WebXArtist helps businesses across multiple cities with website
            development, branding, SEO, and digital marketing services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group block rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20] text-xl mb-6">
                  <FaMapMarkerAlt />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {location.city}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {location.shortDescription}
                </p>

                <span className="inline-flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                  View Location
                  <FaArrowRight />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
