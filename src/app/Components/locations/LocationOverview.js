"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

export default function LocationOverview({ location }) {
  const services = [
    " Website Development",
    "Responsive Website Design",
    "SEO Friendly Website",
    "Brand Identity & Logo Design",
    "Social Media Marketing",
    "Google Business Profile Setup",
    "Search Engine Optimization",
    "Website Maintenance & Support",
  ];

  return (
    <section className="relative bg-[#0b1027] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            About Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            {location.title}
          </h2>

          <p className="mt-6 text-slate-400 leading-8 text-lg">
            {location.description}
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Helping Businesses Grow in {location.city}
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              At WebXArtist, we help startups, local businesses and growing
              companies in <strong>{location.city}</strong> establish a online
              presence through modern websites, branding and digital marketing.
            </p>

            <p className="text-slate-400 leading-8 mb-6">
              Our websites are designed to load fast, rank on Google, look
              amazing on mobile devices and convert visitors into customers.
            </p>

            <p className="text-slate-400 leading-8">
              Whether you need a company website, eCommerce store, portfolio
              website or complete digital marketing, our experienced team can
              help your business grow.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-8">
                Our Services in {location.city}
              </h3>

              <div className="space-y-5">
                {services.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20]">
                      <FaCheckCircle />
                    </div>

                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <FaLaptopCode className="text-3xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold mb-3">Modern Development</h3>

            <p className="text-slate-400">
              We build responsive websites using modern technologies like React
              and Next.js.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <FaSearch className="text-3xl text-orange-400 mb-5" />

            <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>

            <p className="text-slate-400">
              Every website is optimized for better visibility on Google Search.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <FaBullhorn className="text-3xl text-amber-300 mb-5" />

            <h3 className="text-xl font-bold mb-3">Complete Marketing</h3>

            <p className="text-slate-400">
              From branding to digital marketing, we help businesses generate
              more leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
