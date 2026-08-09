"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceLocationFeatures({ service }) {
  return (
    <section className="py-24 bg-[#080a20]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Our Features
          </span>

          <h2 className="text-4xl font-bold mt-4">What's Included</h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Every project is built with modern technologies, performance
            optimization and business growth in mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/50 transition-all"
            >
              <FaCheckCircle className="text-cyan-400 text-2xl mb-5" />

              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
