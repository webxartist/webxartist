"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function ServiceLocationHero({ service, location }) {
  const serviceName = service.name;
  const locationName = location.city;

  const heroDescription =
    location.heroSubtitle ||
    `${serviceName.toLowerCase()} services for businesses in ${locationName}.`;

  return (
    <section className="relative overflow-hidden bg-[#080a20] pt-20 pb-24">
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Additional subtle glow */}

      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Location Badge */}

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <FaMapMarkerAlt aria-hidden="true" />

            <span>
              {serviceName} in {locationName}
            </span>
          </span>

          {/* Heading */}

          <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {serviceName} in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {locationName}
            </span>
          </h1>

          {/* Location-Specific Description */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            {serviceName} services in {locationName} to help businesses improve
            their online visibility, reach more customers, and grow their
            business.
          </p>

          {/* Supporting Description */}

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500">
            WebXArtist provides {serviceName.toLowerCase()} solutions for
            startups, local businesses, services, and growing companies across{" "}
            {locationName}.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/Contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 px-8 py-4 font-semibold text-[#080a20] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Get Free Quote
            </Link>

            <Link
              href={`/services/${service.slug}`}
              className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/5"
            >
              View Service
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Local Context */}

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>
              <strong className="text-slate-300">{locationName}</strong>{" "}
              businesses
            </span>

            <span className="hidden sm:inline text-slate-700">•</span>

            <span>
              {" "}
              <strong className="text-slate-300">
                {serviceName.toLowerCase()}
              </strong>
            </span>

            <span className="hidden sm:inline text-slate-700">•</span>

            <span>Business-focused solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
