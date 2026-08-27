"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";

const ServiceProcess = ({ service }) => {
  if (!service) return null;

  const process = Array.isArray(service.process) ? service.process : [];

  return (
    <section className="relative overflow-hidden bg-[#080a20] py-20 md:py-24">
      {/* ================================================================
          BACKGROUND EFFECTS
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute bottom-10 right-[-120px] h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.025] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        {/* ================================================================
            HEADER
        ================================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          {/* Label */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-cyan-300">
            <Workflow size={14} />
            Our Process
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            A Clear Process for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Better Results
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            We follow a structured and transparent process to deliver your{" "}
            {service.name.toLowerCase()} project with quality, consistency, and
            measurable business value.
          </p>
        </motion.div>

        {/* ================================================================
            PROCESS
        ================================================================= */}

        {process.length > 0 ? (
          <div className="relative">
            {/* ============================================================
                DESKTOP TIMELINE LINE
            ============================================================= */}

            <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-cyan-400/70 via-orange-400/60 to-cyan-400/20 md:block" />

            {/* ============================================================
                PROCESS ITEMS
            ============================================================= */}

            <div className="space-y-6 md:space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={`${step.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.07, 0.4),
                    ease: "easeOut",
                  }}
                  className="group relative flex items-start gap-4 md:gap-7"
                >
                  {/* ======================================================
                      STEP NUMBER
                  ====================================================== */}

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#0b1026] text-sm font-bold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}

                    {/* Timeline Dot */}

                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#080a20] bg-gradient-to-r from-cyan-400 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* ======================================================
                      CONTENT CARD
                  ====================================================== */}

                  <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/25 group-hover:bg-white/[0.055] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-7 md:p-8">
                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Step Label */}

                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-cyan-400">
                          Step {index + 1}
                        </span>

                        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-orange-400 opacity-50" />
                      </div>

                      {/* Title */}

                      <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                        {step.title}
                      </h3>

                      {/* Description */}

                      {step.description && (
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-[15px]">
                          {step.description}
                        </p>
                      )}

                      {/* Bottom Accent */}

                      <div className="mt-5 h-px w-10 bg-gradient-to-r from-cyan-400 to-orange-400 opacity-40 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* ================================================================
              EMPTY STATE
          ================================================================= */

          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
            <Workflow size={32} className="mx-auto text-cyan-400" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Our {service.name} Process
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              We follow a structured process based on your business
              requirements, project goals, and expected outcomes.
            </p>
          </div>
        )}

        {/* ================================================================
            BOTTOM CTA
        ================================================================= */}

        {process.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-12 text-center md:mt-16"
          >
            <p className="mb-4 text-sm text-slate-500">
              Ready to start your project?
            </p>

            <a
              href="/ContactUs"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
            >
              Let's Work Together
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceProcess;
