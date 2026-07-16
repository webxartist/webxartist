"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaSearch,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Website Development",
    description:
      "Modern, responsive websites built specifically for your business goals using the latest technologies.",
  },
  {
    icon: <FaSearch />,
    title: "SEO-Ready Websites",
    description:
      "Every website is built with technical SEO best practices to improve Google visibility and organic traffic.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-First Experience",
    description:
      "Optimized for mobile, tablet, and desktop to deliver a seamless experience across every device.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    description:
      "Lightweight, optimized websites with fast loading speeds for better user experience and search rankings.",
  },
  {
    icon: <FaPalette />,
    title: "Complete Branding",
    description:
      "From logo design to brand identity and marketing creatives, we help your business stand out professionally.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth Focus",
    description:
      "Our strategy is designed to generate leads, improve conversions, and support long-term business growth.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable & Secure",
    description:
      "We build secure, scalable websites with transparent processes and long-term reliability.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Even after launch, we provide ongoing maintenance, updates, and technical assistance whenever needed.",
  },
];

export default function WhyFeatures() {
  return (
    <section className="relative bg-[#080a20] py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            Why Businesses Trust Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Everything You Need To
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Grow Your Business Online
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            We provide complete digital solutions—from website development and
            branding to SEO and digital marketing—helping businesses establish,
            grow, and succeed online.
          </p>
        </motion.div>

        {/* Feature Grid */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 overflow-hidden hover:border-cyan-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-5xl font-bold text-white/[0.04]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-2xl text-[#080a20]">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-[3px] w-10 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
