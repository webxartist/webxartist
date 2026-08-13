"use client";

import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaUsers,
  FaStar,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const reasons = [
  {
    title: "Affordable Price",
    description:
      "We provide the best value for your money without compromising quality.",
    icon: <FaDollarSign />,
    accent: "from-cyan-400 to-blue-400",
  },
  {
    title: "Personal Connection",
    description:
      "We prioritize building relationships with our clients to understand their needs.",
    icon: <FaUsers />,
    accent: "from-blue-400 to-orange-400",
  },
  {
    title: "Industry Standard",
    description:
      "Our services meet the highest industry standards and best practices.",
    icon: <FaStar />,
    accent: "from-orange-400 to-amber-300",
  },
  {
    title: "100% Trust",
    description:
      "We are committed to transparency and integrity in all our dealings.",
    icon: <FaShieldAlt />,
    accent: "from-amber-300 to-cyan-400",
  },
];

const locations = [
  "Mumbai",
  "Thane",
  "Mumbra",
  "Navi Mumbai",
  "Pune",
  "Pan India (Online + Offline Projects)",
];

const WhyChooseUs = () => {
  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 font-poppins text-white overflow-hidden bg-[#080a20]">
        {/* Ambient background glow — brand palette */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[110px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Section Header */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            The WebXArtist Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Choose Us
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 pt-9 flex flex-col overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Ghost number watermark */}
              <span className="absolute -top-3 right-3 text-[64px] font-extrabold text-white/[0.04] leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon tile */}
              <div
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${reason.accent} text-[#080a20] text-lg mb-6 shadow-lg`}
              >
                {reason.icon}
              </div>

              <h3 className="relative z-10 text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>

              <p className="relative z-10 text-[14px] text-slate-400 leading-relaxed">
                {reason.description}
              </p>

              {/* Accent underline on hover */}
              <div
                className={`relative z-10 w-8 h-[2px] mt-5 rounded-full bg-gradient-to-r ${reason.accent} opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-400`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="relative px-6 py-24 font-poppins bg-[#0a0d28] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.06] blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Best Affordable Website Development Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Mumbai, Thane &amp; Mumbra
            </span>
          </motion.h2>

          <div className="space-y-5 text-slate-400 text-[15px] sm:text-base leading-relaxed">
            <p>
              WebXArtist is a trusted and affordable website development agency
              serving clients across Mumbai, Thane, Mumbra, and all over India.
              We specialize in custom React websites, full branding, SEO
              optimization, and digital marketing services designed to help your
              business grow online.
            </p>

            <p>
              Whether you&apos;re searching for{" "}
              <strong className="text-slate-200 font-semibold">
                "affordable website developer Mumbai"
              </strong>
              ,{" "}
              <strong className="text-slate-200 font-semibold">
                "best website design company Thane"
              </strong>
              , or{" "}
              <strong className="text-slate-200 font-semibold">
                "trusted web agency in Mumbra"
              </strong>
              , WebXArtist delivers premium quality at an unmatched price.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Locations We Serve
          </h3>

          <ul className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <li
                key={loc}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-300"
              >
                <FaMapMarkerAlt className="text-cyan-400 text-xs" />
                {loc}
              </li>
            ))}
          </ul>

          <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed mt-8">
            Whether you&apos;re a startup, business owner, or brand, our team
            ensures high-quality website development at an affordable
            price—without compromising on design, functionality, or SEO.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
