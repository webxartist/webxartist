"use client";

import { motion } from "framer-motion";
import { CircleCheckBig, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceOverview = ({ service }) => {
  return (
    <section className="relative bg-[#080a20] py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">
            Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Complete{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {service.name}
            </span>{" "}
            Solutions
          </h2>

          <p className="mt-6 text-slate-400 leading-8">{service.description}</p>

          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-6 py-3 font-semibold text-[#080a20]"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-8">
            Why Choose WebXArtist?
          </h3>

          <div className="grid gap-5">
            {service.benefits?.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                  <CircleCheckBig size={20} className="text-cyan-400" />
                </div>

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
