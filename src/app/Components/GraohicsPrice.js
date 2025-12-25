"use client";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Basic Design",
    price: "₹10,000 - ₹25,000",
    description:
      "Perfect for startups and personal projects. Simple yet effective designs.",
    features: ["Logo Design", "Social Media Graphics", "Business Card Design"],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Standard Branding",
    price: "₹30,000 - ₹70,000",
    description:
      "Complete branding with custom logo, stationery, and social media kit.",
    features: [
      "Custom Logo & Brand Identity",
      "Social Media Kit",
      "Stationery Design",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Premium Branding",
    price: "₹75,000+",
    description:
      "High-end branding with custom illustrations, UI/UX, and complete strategy.",
    features: [
      "Complete Brand Strategy",
      "Custom Illustrations",
      "UI/UX Design for Web & Apps",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function GraphicPricingOptimized() {
  return (
    <section className="relative w-full py-32 bg-gray-900 font-poppins overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-600 to-yellow-500 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Graphic Design Pricing
        </motion.h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-16 max-w-3xl mx-auto">
          Every project is unique. These prices are indicative for the Thane
          market. Contact us for a personalized quote.
        </p>

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
                <p className="text-gray-300 mb-6">{plan.description}</p>
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
          Prices vary depending on project complexity. We customize each quote
          to fit your design needs and budget.
        </motion.p>
      </div>
    </section>
  );
}
