"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Why should I choose WebXArtist for my business?",
    answer:
      "WebXArtist provides complete digital solutions including website development, branding, SEO, social media management, and digital marketing. We focus on creating modern, fast, and conversion-driven solutions tailored to your business goals.",
  },
  {
    question: "Do you only work with businesses in Mumbai?",
    answer:
      "No. While we serve clients across Mumbai, Thane, Mumbra, and Navi Mumbai, we also work with businesses throughout India and international clients through online collaboration.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Most business websites are completed within 7–20 working days. Larger projects such as e-commerce stores or custom web applications may require additional time depending on the scope.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-ready?",
    answer:
      "Yes. Every website we develop is fully responsive, optimized for speed, and built following modern SEO best practices to improve search engine visibility.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Absolutely. We offer ongoing maintenance, technical support, website updates, security monitoring, and digital growth assistance even after your project goes live.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign outdated websites with a modern UI/UX, improved performance, better SEO, and enhanced functionality while preserving your business identity.",
  },
];

export default function WhyFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#080a20] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Have Questions?
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8 max-w-3xl mx-auto">
            Here are some of the most common questions businesses ask before
            starting a project with WebXArtist.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >
                <h3 className="text-lg font-semibold text-white pr-6">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
