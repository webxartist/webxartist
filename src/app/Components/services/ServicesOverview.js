"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import Link from "next/link";

const ServiceOverview = ({ service }) => {
  if (!service) return null;

  const overviewText =
    service.overviewdescription ||
    service.description ||
    service.shortDescription ||
    `Professional ${service.name} solutions designed to help your business grow.`;

  const benefits = Array.isArray(service.benefits) ? service.benefits : [];

  return (
    <section className="relative overflow-hidden bg-[#080a20] py-20 md:py-24">
      {/* ================================================================
          BACKGROUND EFFECTS
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-[-100px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[100px]" />
      </div>

      {/* ================================================================
          CONTENT
      ================================================================= */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* ================================================================
            LEFT — OVERVIEW
        ================================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Label */}

          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-cyan-300">
            Service Overview
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Powerful{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {service.name}
            </span>{" "}
            Solutions for Your Business
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {overviewText}
          </p>

          {/* Short Description */}

          {service.shortDescription && (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              {service.shortDescription}
            </p>
          )}

          {/* CTA */}

          <Link
            href="/contactus"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-6 py-3.5 font-semibold text-[#080a20] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)]"
          >
            Start Your Project
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* ================================================================
            RIGHT — BENEFITS
        ================================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Card */}

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            {/* Card Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-400/10 blur-[80px]" />

            <div className="relative z-10">
              {/* Card Header */}

              <div className="mb-8">
                <span className="text-sm font-medium uppercase tracking-[2px] text-cyan-400">
                  Why Choose This Service
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  What You Get
                </h3>
              </div>

              {/* Benefits */}

              {benefits.length > 0 ? (
                <div className="grid gap-4">
                  {benefits.map((item, index) => (
                    <motion.div
                      key={`${item}-${index}`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
                    >
                      {/* Icon */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 transition-all duration-300 group-hover:bg-cyan-400/15">
                        <CircleCheckBig size={20} className="text-cyan-400" />
                      </div>

                      {/* Text */}

                      <span className="pt-1 text-sm font-medium leading-6 text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-base">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-400">
                  We provide professional {service.name.toLowerCase()} solutions
                  tailored to your business requirements.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
