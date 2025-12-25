"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-16 overflow-hidden font-poppins">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-20 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-48 h-48 bg-pink-500/20 blur-3xl rounded-full animate-pulse"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl bg-black/20 backdrop-blur-md border-l-8 border-purple-500 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-black/10 transition-colors duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {faq.question}
                </h3>
                <motion.span
                  className="text-purple-400 text-2xl ml-4"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-black/10 text-white border-t border-purple-500"
                  >
                    <p>{faq.answer}</p>
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
