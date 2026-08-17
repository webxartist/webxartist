"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const ServiceFeatures = ({ service }) => {
  if (!service) return null;

  const features = Array.isArray(service.features) ? service.features : [];

  return (
    <section className="relative overflow-hidden bg-[#0b1026] py-20 md:py-24">
      {/* ================================================================
          BACKGROUND EFFECTS
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute bottom-20 right-[-120px] h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================================================================
            SECTION HEADER
        ================================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          {/* Label */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-cyan-300">
            <Sparkles size={14} />
            What's Included
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {service.name}
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Our {service.name.toLowerCase()} solutions are designed with
            performance, quality, scalability, and real business growth in mind.
          </p>
        </motion.div>

        {/* ================================================================
            FEATURES GRID
        ================================================================= */}

        {features.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={`${feature.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.06, 0.4),
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-7"
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}

                <div className="absolute right-5 top-5 text-xs font-semibold tracking-[2px] text-white/10 transition-colors duration-300 group-hover:text-cyan-400/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/15 to-orange-400/10 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:from-cyan-400/20 group-hover:to-orange-400/15">
                    <CheckCircle2
                      size={27}
                      strokeWidth={1.8}
                      className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 pr-8 text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-xl">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  {feature.description && (
                    <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-[15px]">
                      {feature.description}
                    </p>
                  )}

                  {/* Bottom Accent */}

                  <div className="mt-6 h-px w-10 bg-gradient-to-r from-cyan-400 to-orange-400 opacity-50 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ================================================================
              EMPTY STATE
          ================================================================= */

          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <Sparkles size={30} className="mx-auto text-cyan-400" />

            <h3 className="mt-4 text-xl font-semibold text-white">
              Professional {service.name} Solutions
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Our team provides customized {service.name.toLowerCase()}{" "}
              solutions based on your business requirements and goals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFeatures;
