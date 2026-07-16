"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  ShieldCheck,
  Smartphone,
  Zap,
  BadgeCheck,
} from "lucide-react";

const icons = [TrendingUp, Target, ShieldCheck, Smartphone, Zap, BadgeCheck];

const ServiceBenefits = ({ service }) => {
  return (
    <section className="relative py-24 bg-[#0b1026] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
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
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
            Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Why Your Business Needs{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {service.name}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
            Our solutions are designed to help businesses build trust, attract
            more customers, improve online visibility, and increase long-term
            growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {service.benefits?.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                  <Icon className="text-cyan-400" size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {benefit}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  We focus on delivering measurable business value, helping your
                  company stand out, build credibility, and achieve sustainable
                  digital growth.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
