"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to design a website logo?",
    answer:
      "The design process can take anywhere from a few days to a few weeks, depending on the complexity and feedback required.",
  },
  {
    question: "What types of graphics do you create?",
    answer:
      "We create various graphics, including logos, social media posts, infographics, and more tailored to your needs.",
  },
  {
    question: "Can you edit videos for social media?",
    answer:
      "Yes, we offer video editing services specifically optimized for social media platforms.",
  },
  {
    question: "Do you provide revisions on designs?",
    answer:
      "Yes, we offer multiple revisions based on the package you choose to ensure your satisfaction.",
  },
  {
    question: "What file formats do you deliver graphics in?",
    answer:
      "We deliver graphics in multiple formats, including PNG, JPG, SVG, and PDF.",
  },
  {
    question: "What is the starting price for a website logo design?",
    answer:
      "Our logo design services start at $200, depending on the complexity and specific requirements.",
  },
  {
    question: "Do you offer package deals for multiple services?",
    answer:
      "Yes, we provide discounted packages for clients who choose multiple services, such as logo design and graphics.",
  },
  {
    question: "How do you handle payment?",
    answer:
      "Payments can be made via credit card, PayPal, or bank transfer. A deposit is required to start the project.",
  },
  {
    question: "Are there any additional costs?",
    answer:
      "Additional costs may arise for extra revisions, rush orders, or specific file format requests.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Refunds are handled on a case-by-case basis, depending on the project's status and specific circumstances.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#080a20] py-24 px-6 overflow-hidden font-poppins">
      {/* Ambient background glow — brand palette */}
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
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mt-4">
            Everything clients usually ask before starting a project. Don't see
            yours? Reach out and we'll answer directly.
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAnswer(index)}
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
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
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
