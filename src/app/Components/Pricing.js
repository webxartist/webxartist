"use client";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Basic Website",
    price: "₹15,000 - ₹20,000",
    description:
      "A clean, responsive website perfect for small businesses or personal projects.",
    features: [
      "Pre-designed layouts with minimal customization",
      "3-5 pages",
      "Basic SEO setup",
      "Fast delivery",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Professional Business Website",
    price: "₹25,000 - ₹50,000",
    description:
      "Custom-coded, modern websites with professional branding, smooth animations, and SEO optimization.",
    features: [
      "Custom design tailored to brand identity",
      "Responsive & optimized for performance",
      "5-10 pages with blog/articles",
      "Analytics and SEO integration",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Premium eCommerce / Enterprise",
    price: "₹1,00,000+",
    description:
      "High-end, fully customized eCommerce or enterprise solutions with advanced functionality and premium support.",
    features: [
      "Custom MERN/Next.js stack",
      "Advanced animations & interactions",
      "Multiple integrations: payment, tracking, CRM",
      "Unlimited pages and premium support",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-24 bg-gray-900 font-poppins">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Premium Web Solutions Pricing
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Choose a plan that suits your business. These plans are crafted for
          real market needs.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300"
            >
              {/* Popular Tag */}
              {index === 1 && (
                <div className="mb-4 w-fit mx-auto bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-4">
                {plan.price}
              </p>

              {/* Description */}
              <p className="text-gray-300 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="text-gray-200 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-auto py-3 w-full rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:scale-105 transition-transform duration-300`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
