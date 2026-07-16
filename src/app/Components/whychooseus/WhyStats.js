"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaProjectDiagram,
  FaUsers,
  FaSmile,
  FaAward,
  FaHeadset,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  {
    number: 150,
    suffix: "+",
    title: "Projects Delivered",
    description:
      "Successfully completed websites, branding & marketing projects.",
    icon: <FaProjectDiagram />,
  },
  {
    number: 100,
    suffix: "+",
    title: "Happy Clients",
    description: "Businesses across different industries trust WebXArtist.",
    icon: <FaUsers />,
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
    description:
      "Focused on quality, transparency, and long-term relationships.",
    icon: <FaSmile />,
  },
  {
    number: 5,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Experience in web development, branding, and digital marketing.",
    icon: <FaAward />,
  },
  {
    number: 24,
    suffix: "/7",
    title: "Customer Support",
    description: "Quick assistance whenever your business needs us.",
    icon: <FaHeadset />,
  },
  {
    number: 20,
    suffix: "+",
    title: "Technologies",
    description: "Modern tools and frameworks for scalable digital solutions.",
    icon: <FaLaptopCode />,
  },
];

export default function WhyStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#0b0f28] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[2px] text-slate-300">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Numbers That Reflect Our
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Commitment & Success
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Every project we deliver is built with quality, innovation, and
            measurable business growth in mind.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">
                {inView && <CountUp end={item.number} duration={2} />}

                {item.suffix}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-3 text-slate-400 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
