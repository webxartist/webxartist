"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const ServiceFeatures = ({ service }) => {
  return (
    <section className="relative py-24 bg-[#0b1026] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">
            <Sparkles size={14} />
            Features
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            What's Included In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {service.name}
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-8">
            Every project is built with modern technologies, premium quality,
            and business-focused features to help you grow faster.
          </p>
        </motion.div>

        {/* Features Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                <CheckCircle2 size={28} className="text-cyan-400" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature}
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                We implement this feature using industry best practices,
                ensuring your business receives maximum performance, security,
                and long-term scalability.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
