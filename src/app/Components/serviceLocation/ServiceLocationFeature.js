"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceLocationFeatures({ service, location }) {
  const serviceName = service.name;
  const locationName = location.city;

  const features = service.features || [];

  return (
    <section className="py-24 bg-[#080a20]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            {serviceName} Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            What's Included in Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {serviceName}
            </span>{" "}
            Service
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-8">
            Our {serviceName.toLowerCase()} solutions for businesses in{" "}
            <strong className="text-slate-300">{locationName}</strong> are
            designed with performance, usability, scalability, and business
            growth in mind.
          </p>
        </motion.div>

        {/* Features */}

        {features.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const featureTitle =
                typeof feature === "string" ? feature : feature.title;

              return (
                <motion.div
                  key={`${featureTitle}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  {/* Icon */}

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <FaCheckCircle className="text-cyan-400 text-xl" />
                  </div>

                  {/* Feature */}

                  <h3 className="text-lg font-semibold text-white leading-7">
                    {featureTitle}
                  </h3>

                  {/* Bottom Accent */}

                  <div className="mt-5 h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 group-hover:w-16" />
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Fallback */

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-slate-400">
              Our {serviceName.toLowerCase()} solutions are customized for
              businesses in {locationName}.
            </p>
          </div>
        )}

        {/* Local CTA Message */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/5 to-orange-400/5 p-8 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Need {serviceName} in {locationName}?
          </h3>

          <p className="mt-3 text-slate-400 leading-7 max-w-2xl mx-auto">
            We can customize the scope and features according to your business
            requirements, target audience, and growth objectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
