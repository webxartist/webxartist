"use client";

import { motion } from "framer-motion";

export default function ServiceLocationOverview({ service, location }) {
  return (
    <section className="py-24 bg-[#0c1028]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            About Our Service
          </span>

          <h2 className="mt-4 text-4xl font-bold max-w-3xl">
            Professional {service.name} Services in {location.city}
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-8">
            {service.description}
          </p>

          <p className="mt-6 text-slate-400 text-lg leading-8">
            Businesses across <strong>{location.city}</strong> trust WebXArtist
            for reliable, affordable and high-performing digital solutions.
            Whether you are a startup, local shop, clinic, restaurant, school,
            manufacturer or enterprise, we deliver modern solutions focused on
            business growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Why Businesses Choose Us
              </h3>

              <ul className="space-y-3 text-slate-400">
                <li>✔ SEO Optimized Development</li>

                <li>✔ Mobile Responsive Design</li>

                <li>✔ Fast Loading Performance</li>

                <li>✔ Affordable Pricing</li>

                <li>✔ Ongoing Support</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Serving {location.city}
              </h3>

              <p className="text-slate-400 leading-8">
                We proudly provide {service.name.toLowerCase()}
                services throughout {location.city}, helping businesses
                strengthen their online presence, attract more customers and
                increase revenue.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
