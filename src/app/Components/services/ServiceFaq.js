"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const ServiceFAQ = ({ service }) => {
  const [active, setActive] = useState(0);

  const faqs = service?.faqs || [];

  return (
    <section className="relative overflow-hidden bg-[#0b1026] py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
            <HelpCircle size={15} />
            FAQ
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Find answers to the most common questions about our{" "}
            {service?.name || "services"}.
          </p>
        </motion.div>

        {/* FAQ List */}
        {faqs.length > 0 ? (
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={`${faq.question}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                  }}
                  className={`overflow-hidden rounded-2xl border bg-white/[0.04] transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/30 bg-white/[0.06]"
                      : "border-white/10 hover:border-cyan-400/20"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <h3 className="text-lg font-semibold leading-7 text-white">
                      {faq.question}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                      {isOpen ? (
                        <Minus size={18} className="text-cyan-400" />
                      ) : (
                        <Plus size={18} className="text-cyan-400" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="border-t border-white/10 px-7 py-6">
                          <p className="leading-8 text-slate-400">
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
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
            <p className="text-slate-400">
              Frequently asked questions will be available soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFAQ;
