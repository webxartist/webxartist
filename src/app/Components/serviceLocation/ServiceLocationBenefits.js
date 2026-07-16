"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceLocationBenefits({ service }) {
  return (
    <section className="py-24 bg-[#080a20]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Benefits
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Why Your Business Needs {service.name}
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            Our solutions are built to help businesses grow faster, attract more
            customers and improve their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.benefits?.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 transition"
            >
              <FaCheckCircle className="text-cyan-400 text-3xl mb-5" />

              <h3 className="text-xl font-semibold">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
