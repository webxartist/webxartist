"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const ServiceFAQ = ({ service }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0b1026] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">

            <HelpCircle size={15} />

            FAQ

          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">

            Frequently Asked Questions

          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-8">

            Find answers to the most common questions about our
            {` ${service.name}`} services.

          </p>

        </motion.div>

        {/* FAQ */}

        <div className="space-y-5">

          {service.faqs?.map((faq, index) => {

            const isOpen = active === index;

            return (

              <motion.div
                key={index}
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
                  delay: index * .07,
                }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >

                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-white">

                    {faq.question}

                  </h3>

                  {isOpen ? (

                    <Minus className="text-cyan-400" />

                  ) : (

                    <Plus className="text-cyan-400" />

                  )}

                </button>

                <AnimatePresence>

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
                        duration: .35,
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

      </div>

    </section>
  );
};

export default ServiceFAQ;