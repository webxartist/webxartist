"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import locations from "@/data/locations";

export default function ServiceLocations({ service }) {
  const availableLocations = locations.filter((location) =>
    service.locations?.includes(location.slug),
  );

  if (availableLocations.length === 0) return null;

  return (
    <section className="relative py-24 bg-[#0a0d28] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Areas We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            {service.name}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Available In
            </span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            WebXArtist provides professional {service.name.toLowerCase()} across
            multiple cities. Choose your location to explore our local services.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {availableLocations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}/${location.slug}`}
                className="group block rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20] text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <FaArrowRight className="text-slate-500 group-hover:text-cyan-400 transition-all group-hover:translate-x-1" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {location.city}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  Professional {service.name.toLowerCase()} services in{" "}
                  {location.city}.
                </p>

                <span className="inline-block mt-6 text-cyan-400 font-semibold">
                  Explore {location.city} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
