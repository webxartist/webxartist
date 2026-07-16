"use client";

import { motion } from "framer-motion";

export default function ServiceLocationTechnologies({ service }) {
  return (
    <section className="py-24 bg-[#0c1028]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Technologies
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Modern Technologies We Use
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            We build secure, scalable and future-ready solutions using modern
            technologies trusted by businesses worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {service.technologies?.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-cyan-300 font-medium hover:bg-cyan-500 hover:text-white transition"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
