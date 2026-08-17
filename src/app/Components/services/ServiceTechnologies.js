"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Database, Globe, Cpu, Layers } from "lucide-react";

const icons = [Code2, Laptop, Database, Globe, Cpu, Layers];

const ServiceTechnologies = ({ service }) => {
  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
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

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Modern Technologies We Use
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            We use modern technologies to create secure, scalable, fast, and
            high-performance digital solutions for businesses.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        {service.technologies?.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {service.technologies.map((tech, index) => {
              const Icon = icons[index % icons.length];

              // Supports both:
              // { title, description }
              // and simple strings
              const title =
                typeof tech === "string" ? tech : tech?.title || "Technology";

              const description =
                typeof tech === "string"
                  ? `Professional ${tech} technology used to build reliable digital solutions.`
                  : tech?.description || "";

              return (
                <motion.div
                  key={`${title}-${index}`}
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
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                    <Icon
                      size={30}
                      className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Technology Name */}
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {title}
                  </h3>

                  {/* Description */}
                  {description && (
                    <p className="mt-3 leading-7 text-slate-400">
                      {description}
                    </p>
                  )}

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px w-10 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-20" />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
            <p className="text-slate-400">
              Technologies information will be available soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceTechnologies;
