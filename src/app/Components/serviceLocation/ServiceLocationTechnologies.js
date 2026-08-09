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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.technologies?.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {tech.title}
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
