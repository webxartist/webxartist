"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import services from "@/data/services";

export default function LocationServices({ location }) {
  return (
    <section className="relative bg-[#0b1027] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Digital Services Available in {location.city}
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-6">
            WebXArtist provides complete digital solutions for startups,
            professionals and businesses in {location.city}. Explore our
            services below.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/Services/${service.slug}`}
                className="group block h-full rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={40}
                    height={40}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.name}
                </h3>

                <p className="text-slate-400 leading-7">
                  {service.shortDescription}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                  Learn More
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
