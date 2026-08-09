"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import services from "@/data/services";

const Service = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#080a20] text-white font-poppins px-6 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-orange-500/10 blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          What We Offer
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Services
          </span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
          From websites and branding to SEO and digital marketing, we provide
          complete digital solutions to help your business grow online.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {services.map((service, index) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-[11px] font-semibold text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-cyan-400/40">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.shortDescription}
              </p>

              {/* Learn More */}
              <div className="mt-6">
                <span className="font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-orange-400">
                  Learn More →
                </span>
              </div>

              {/* Bottom Accent */}
              <div className="mx-auto mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Service;
