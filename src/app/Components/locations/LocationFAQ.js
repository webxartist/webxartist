"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function LocationFAQ({ location }) {
  const faqs = [
    {
      question: `Do you provide website development services in ${location.city}?`,
      answer: `Yes. WebXArtist provides  website development services for businesses, startups, professionals, and organizations in ${location.city}.`,
    },
    {
      question: "How much does a business website cost?",
      answer:
        "The cost depends on the number of pages, features, design requirements, and functionality. Contact us for a free quotation tailored to your project.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we develop is fully responsive and optimized for mobile, tablet, laptop, and desktop devices.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes. We offer complete SEO services, including on-page optimization, technical SEO, local SEO, keyword research, and performance improvements.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We can redesign outdated websites with a modern UI, improved performance, better SEO, and enhanced user experience.",
    },
    {
      question: "Do you work with clients outside the city?",
      answer:
        "Yes. Although we serve local businesses, we also work remotely with clients across India and internationally.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 bg-[#0b1027] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Questions About Our Services in {location.city}
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Here are some of the most common questions our clients ask before
            starting a project.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-8">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
