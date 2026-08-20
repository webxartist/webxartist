"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What digital marketing services do you provide?",
    answer:
      "We provide complete digital marketing solutions including SEO, Google Ads, Meta Ads, social media marketing, Google Business Profile optimization, content creation, and online presence management.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can help your business increase online visibility, reach the right audience, generate qualified leads, improve brand awareness, and grow sales through targeted online campaigns.",
  },
  {
    question: "Do you provide SEO services for websites?",
    answer:
      "Yes. We provide SEO services including keyword research, on-page SEO, technical SEO, local SEO, content optimization, and ongoing website optimization to improve search engine visibility.",
  },
  {
    question: "Do you manage Google Ads and Meta Ads campaigns?",
    answer:
      "Yes. We can plan, create, manage, monitor, and optimize Google Ads and Meta Ads campaigns based on your business goals, target audience, location, and budget.",
  },
  {
    question: "Do you provide Google Business Profile optimization?",
    answer:
      "Yes. We help businesses optimize their Google Business Profile to improve local visibility, strengthen their presence on Google Maps, and make it easier for potential customers to find and contact them.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Website development time depends on the type and complexity of the project. A basic business website can usually be completed faster than an e-commerce website or a custom web application.",
  },
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop business websites, service websites, portfolio websites, landing pages, e-commerce websites, custom web applications, and modern responsive websites using technologies such as Next.js and the MERN stack.",
  },
  {
    question: "Will my website work on mobile phones and tablets?",
    answer:
      "Yes. We build responsive websites that are designed to provide a smooth user experience across mobile phones, tablets, laptops, and desktop computers.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Yes. We can redesign existing websites to improve their visual appearance, performance, mobile responsiveness, user experience, SEO structure, security, and conversion potential.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes. We provide website maintenance and support services including content updates, technical fixes, performance improvements, security updates, backups, and ongoing website management.",
  },
  {
    question:
      "Can website development and digital marketing be handled together?",
    answer:
      "Yes. Combining website development with digital marketing can create a stronger online presence. We can build an SEO-friendly, conversion-focused website and support it with SEO, paid advertising, social media, and other digital marketing strategies.",
  },
  {
    question: "How do I get started with WebXArtist?",
    answer:
      "Simply contact us and share your business requirements, goals, target location, and the services you need. We can then discuss the right website development or digital marketing strategy for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#080a20] py-24 px-6 overflow-hidden font-poppins">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-16 right-16 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Digital Marketing & Websites
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Questions
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg mt-4">
            Have questions about website development or digital marketing? Find
            answers to the most common questions businesses ask before starting
            a project.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`relative rounded-xl border overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-cyan-400/30 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
              >
                <button
                  type="button"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-[11px] font-bold tabular-nums pt-1 shrink-0 ${
                        isOpen ? "text-cyan-400" : "text-slate-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[15px] md:text-[16px] font-semibold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.span
                    className={`flex items-center justify-center w-7 h-7 rounded-full border shrink-0 ${
                      isOpen
                        ? "border-transparent bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20]"
                        : "border-white/15 text-slate-400"
                    }`}
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-6 pb-6 pl-[3.1rem]">
                        <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
