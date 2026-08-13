"use client";

import { motion } from "framer-motion";

export default function ServiceLocationOverview({ service, location }) {
  const serviceName = service.name;
  const locationName = location.city;

  return (
    <section className="py-24 bg-[#0c1028]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}

          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            {serviceName} in {locationName}
          </span>

          {/* Heading */}

          <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl text-white">
            {serviceName} Services in {locationName}
          </h2>

          {/* Location Introduction */}

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-4xl">
            {location.shortDescription ||
              `WebXArtist provides  ${serviceName.toLowerCase()} services
              for businesses in ${locationName}.`}
          </p>

          {/* Location Description */}

          <p className="mt-6 text-slate-400 text-lg leading-8 max-w-4xl">
            {location.description ||
              `Businesses in ${locationName} can use our ${serviceName.toLowerCase()}
              services to strengthen their online presence, reach more customers,
              and build a stronger digital presence.`}
          </p>

          {/* Service Context */}

          <p className="mt-6 text-slate-400 text-lg leading-8 max-w-4xl">
            Our {serviceName.toLowerCase()} solutions are designed for
            businesses across {locationName}, including startups, local
            businesses, clinics, restaurants, schools, manufacturers, services,
            and growing companies.
          </p>

          {/* Information Cards */}

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Why Choose Us */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Why Choose WebXArtist
              </h3>

              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span> and business-focused solutions</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Mobile-friendly and modern implementation</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>SEO-friendly digital structure</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Transparent and practical approach</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Ongoing support and assistance</span>
                </li>
              </ul>
            </div>

            {/* Local Service */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {serviceName} for Businesses in {locationName}
              </h3>

              <p className="text-slate-400 leading-8">
                WebXArtist provides {serviceName.toLowerCase()} services for
                businesses looking to grow their digital presence in{" "}
                <strong className="text-white">{locationName}</strong>. Our
                approach combines execution, modern technology, and
                business-focused strategies to help create a stronger online
                presence.
              </p>
            </div>
          </div>

          {/* Location Highlight */}

          <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 to-orange-400/5 p-8">
            <p className="text-slate-300 text-lg leading-8">
              Looking for{" "}
              <strong className="text-white">
                {serviceName.toLowerCase()} in {locationName}
              </strong>
              ? WebXArtist can help you plan and implement a digital solution
              suited to your business goals and target audience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
