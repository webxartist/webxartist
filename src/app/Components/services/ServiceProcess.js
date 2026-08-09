"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const ServiceProcess = ({ service }) => {
  return (
    <section className="relative py-24 bg-[#080a20] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">
            <Workflow size={14} />
            Our Process
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            How We Deliver{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Quality Results
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-8">
            Our proven development process ensures every project is delivered
            with quality, transparency, and on-time execution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-orange-400 to-cyan-400 hidden md:block" />

          <div className="space-y-12">
            {service.process?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="relative flex items-start gap-8"
              >
                {/* Step Number */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 text-[#080a20] font-bold text-lg shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-400 leading-7">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
