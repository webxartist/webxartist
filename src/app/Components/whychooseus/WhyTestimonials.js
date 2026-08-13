"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "RK Enterprises",
    review:
      "WebXArtist built a modern website for our business that helped us generate more enquiries. The team was , responsive, and delivered everything on time.",
  },
  {
    name: "Ayesha Khan",
    company: "AK Fashion Studio",
    review:
      "From logo design to website development, the complete branding process was smooth. We are extremely happy with the final result and ongoing support.",
  },
  {
    name: "Mohammed Ali",
    company: "MA Construction",
    review:
      "Their SEO-friendly website significantly improved our online presence. Highly recommended for businesses looking to grow digitally.",
  },
  {
    name: "Priya Patel",
    company: "PP Academy",
    review:
      "Excellent communication, premium design quality, and affordable pricing. WebXArtist exceeded our expectations in every aspect.",
  },
];

export default function WhyTestimonials() {
  return (
    <section className="relative bg-[#0b0f28] py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
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
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Trusted by
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Businesses Across India
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            Our clients trust us for quality, transparency, timely delivery, and
            long-term support. Their success is our biggest achievement.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
            >
              <FaQuoteLeft className="text-3xl text-cyan-400 mb-6 opacity-80" />

              <p className="text-slate-300 leading-8 text-[15px]">
                "{item.review}"
              </p>

              <div className="flex gap-1 mt-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-400 text-sm mt-1">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
