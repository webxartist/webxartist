"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Database, Globe, Cpu, Layers } from "lucide-react";

const icons = [Code2, Laptop, Database, Globe, Cpu, Layers];

const ServiceTechnologies = ({ service }) => {
  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
            Technologies
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Modern Technologies We Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
            We use the latest development technologies to create secure,
            scalable, and high-performance digital solutions for businesses.
          </p>
        </motion.div>

        {/* Technologies */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {service.technologies?.map((tech, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                  <Icon className="text-cyan-400" size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {tech}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Our experts use {tech} to build reliable, scalable, secure,
                  and high-performing digital solutions that help businesses
                  grow faster.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceTechnologies;
