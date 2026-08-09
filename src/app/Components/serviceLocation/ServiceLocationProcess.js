"use client";

import { motion } from "framer-motion";

export default function ServiceLocationProcess({ service }) {
  return (
    <section className="py-24 bg-[#0c1028]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="text-4xl font-bold mt-4">How We Work</h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            A simple, transparent process that keeps your project on track from
            planning to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process?.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="text-5xl font-bold text-cyan-400/20 absolute top-5 right-6">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold mt-10">{step.title}</h3>

              <p className="mt-4 text-slate-400 leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
