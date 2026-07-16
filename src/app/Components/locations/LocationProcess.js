"use client";

import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    icon: <FaComments />,
    title: "Consultation",
    description:
      "We understand your business goals, target audience, and project requirements.",
  },
  {
    icon: <FaClipboardList />,
    title: "Planning",
    description:
      "Our team prepares a strategic roadmap, timeline, and development plan.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description:
      "We create modern, attractive, and user-friendly designs that reflect your brand.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description:
      "Using modern technologies, we build a fast, responsive, and secure website.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Testing",
    description:
      "Every page, feature, and device is thoroughly tested before launch.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "After deployment, we provide continuous maintenance, updates, and technical support.",
  },
];

export default function LocationProcess({ location }) {
  return (
    <section className="relative py-24 bg-[#080a20] overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Our Working Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
            How We Work With Businesses in {location.city}
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Our proven workflow ensures every project is delivered on time,
            meets business objectives, and exceeds client expectations.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20] text-2xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-7">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}

        <motion.div
          className="mt-20 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            A Transparent Development Process
          </h3>

          <p className="text-lg text-slate-400 leading-8">
            Every project at WebXArtist follows a structured process—from the
            initial consultation to launch and ongoing support. Whether you're
            in <strong>{location.city}</strong> or anywhere in India, you'll
            receive regular updates, transparent communication, and a website
            built to help your business grow online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
