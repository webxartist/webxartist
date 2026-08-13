"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

export default function LocationBenefits({ location }) {
  const benefits = [
    {
      icon: <FaRocket />,
      title: "Fast Loading Websites",
      description:
        "Optimized websites that load quickly, improve user experience, and help increase conversions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      description:
        "Your website will look and perform perfectly across mobile, tablet, laptop, and desktop devices.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Ready",
      description:
        "Built with SEO best practices to improve Google rankings and generate organic traffic.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Development",
      description:
        "Modern coding standards, SSL support, and secure development practices for business websites.",
    },
    {
      icon: <FaHeadset />,
      title: "Lifetime Support",
      description:
        "We provide ongoing guidance, maintenance, and technical support whenever you need assistance.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      description:
        " websites designed to generate leads, improve credibility, and grow your business.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#080a20] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute right-0 bottom-10 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Why Businesses Choose WebXArtist
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
            Benefits of Working with Us in {location.city}
          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            We combine creativity, technology, and digital marketing strategies
            to help businesses establish a strong online presence and achieve
            measurable growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 flex items-center justify-center text-[#080a20] text-2xl mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>

              <p className="text-slate-400 leading-7">{benefit.description}</p>
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
            Trusted Digital Partner in {location.city}
          </h3>

          <p className="text-slate-400 leading-8 text-lg">
            Whether you're launching a new startup, growing a local business, or
            expanding an established brand, WebXArtist provides complete website
            development, branding, SEO, and digital marketing services tailored
            to your business goals. Our mission is to deliver high-quality
            digital solutions that help businesses in{" "}
            <strong>{location.city}</strong> build credibility, attract more
            customers, and achieve long-term success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
