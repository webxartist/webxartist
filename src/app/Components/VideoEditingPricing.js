"use client";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Basic Editing",
    price: "₹5,000 - ₹15,000",
    features: [
      "Up to 5 minutes of footage",
      "Basic cuts and transitions",
      "1 round of revisions",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Standard Editing",
    price: "₹18,000 - ₹35,000",
    features: [
      "Up to 15 minutes of footage",
      "Advanced effects and transitions",
      "2 rounds of revisions",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Premium Editing",
    price: "₹45,000+",
    features: [
      "Up to 30 minutes of footage",
      "Complete editing with animations",
      "Unlimited revisions & additional features",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function VideoEditingPricingOptimized() {
  return (
    <section className="relative w-full py-32 bg-gray-900 font-poppins overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-600 to-yellow-500 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Every Video Tells a Story
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg sm:text-xl mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Video editing pricing varies based on complexity and requirements.
          These are average prices. We'll create a custom package tailored to
          your project and budget.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transform transition-all hover:-translate-y-2"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-4">
                  {plan.price}
                </p>
                <ul className="text-gray-200 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-400 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:scale-105 transition-transform duration-300`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Prices depend on project complexity and requirements. We always
          customize quotes to fit your needs and ensure premium results.
        </motion.p>
      </div>
    </section>
  );
}
