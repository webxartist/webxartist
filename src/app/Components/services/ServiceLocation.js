"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import locations from "@/data/locations";

export default function ServiceLocations({ service }) {
  /*
   * A location is displayed only when:
   *
   * 1. The service allows that location
   * 2. The location allows that service
   *
   * This keeps the service/location relationship consistent.
   */

  const availableLocations = locations.filter((location) => {
    const serviceAllowsLocation =
      !service.locations || service.locations.includes(location.slug);

    const locationAllowsService =
      !location.services || location.services.includes(service.slug);

    return serviceAllowsLocation && locationAllowsService;
  });

  if (availableLocations.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#0a0d28] py-24">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <FaMapMarkerAlt aria-hidden="true" />
            Areas We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            {service.name}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Across Multiple Cities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            WebXArtist provides{" "}
            <strong className="text-slate-300">
              {service.name.toLowerCase()}
            </strong>{" "}
            solutions for businesses across the locations we serve. Select your
            city to explore the dedicated local service page.
          </p>
        </motion.div>

        {/* Location Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableLocations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={`/services/${service.slug}/${location.slug}`}
                aria-label={`View ${service.name} services in ${location.city}`}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Card Header */}

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-xl text-[#080a20] shadow-lg shadow-cyan-500/10">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                    <FaArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* City */}

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {location.city}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-400">
                  {service.name.toLowerCase()} services for businesses in{" "}
                  <span className="text-slate-300">{location.city}</span>.
                </p>

                {/* Local Description */}

                {location.shortDescription && (
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {location.shortDescription}
                  </p>
                )}

                {/* CTA */}

                <div className="mt-7 flex items-center gap-2 font-semibold text-cyan-400">
                  Explore {location.city}
                  <FaArrowRight
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom Accent */}

                <div className="mt-6 h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-16" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Information */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Looking for {service.name.toLowerCase()} outside these locations?
            <span className="ml-1 text-slate-300">
              Contact WebXArtist to discuss your requirements.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
