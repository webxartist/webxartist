"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import services from "@/data/services";

const icons = {
  "website-development": <FaLaptopCode />,
  "graphic-design": <FaPaintBrush />,
  "logo-design": <FaPaintBrush />,
  "video-editing": <FaBullhorn />,
  "seo-services": <FaSearch />,
  "social-media-management": <FaBullhorn />,
  "content-creation": <FaPaintBrush />,
  "email-marketing": <FaEnvelope />,
};

export default function LocationServices({ location }) {
  const availableServices = services.filter((service) =>
    location.services?.includes(service.slug),
  );

  if (!availableServices.length) return null;

  return (
    <section className="relative py-24 bg-[#0a0d28] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
            Services Available in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {location.city}
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            We provide complete digital solutions to businesses in{" "}
            {location.city}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {availableServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}/${location.slug}`}
                className="group block rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20] text-xl mb-6">
                  {icons[service.slug]}
                </div>

                <h3 className="text-xl font-bold text-white">{service.name}</h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {service.shortDescription}
                </p>

                <div className="flex items-center mt-6 text-cyan-400 font-semibold gap-2">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
