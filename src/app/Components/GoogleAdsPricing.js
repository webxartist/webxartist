"use client";
import { motion } from "framer-motion";

const whatsappNumber = "918169413149"; // Your WhatsApp number (no +)

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋%0A%0A
I am interested in your *Google Ads – ${plan.title}* plan.%0A%0A
💰 *Monthly Management Fee:* ${plan.price}%0A%0A
📌 *Plan Includes:*%0A
${plan.features.map((f) => `• ${f}`).join("%0A")}%0A%0A
Please share:%0A
✔ Expected results & strategy%0A
✔ Ad budget recommendation%0A
✔ Timeline & onboarding process%0A%0A
Waiting for your guidance.`;

  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const pricingData = [
  {
    title: "Starter Google Ads",
    price: "₹8,000 – ₹12,000",
    description:
      "Ideal for small businesses starting with Google Ads to generate leads or calls.",
    features: [
      "Google Ads account setup",
      "Keyword research & competitor analysis",
      "Search Ads campaign (1–2 campaigns)",
      "Ad copy creation (high CTR focused)",
      "Conversion tracking setup",
      "Monthly performance report",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Growth Google Ads",
    price: "₹15,000 – ₹25,000",
    description:
      "Perfect for scaling businesses looking for consistent leads and better ROI.",
    features: [
      "Complete account audit & strategy",
      "Multiple search & display campaigns",
      "Advanced keyword & audience targeting",
      "Landing page optimization suggestions",
      "Conversion & remarketing setup",
      "Weekly optimization & reporting",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Performance / Enterprise Ads",
    price: "₹30,000+",
    description:
      "High-performance Google Ads management for aggressive growth and large budgets.",
    features: [
      "Full-funnel Google Ads strategy",
      "Search, Display, YouTube & Performance Max",
      "Advanced audience & remarketing funnels",
      "ROAS-focused bid optimization",
      "Daily monitoring & scaling",
      "Dedicated account manager & priority support",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function GoogleAdsPricing() {
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
          Google Ads Management Pricing
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          ROI-driven Google Ads strategies designed to generate high-quality
          leads and scalable growth.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300 flex flex-col"
            >
              {/* Popular Tag */}
              {index === 1 && (
                <div className="mb-4 w-fit mx-auto bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
                  Most Recommended
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
              <ul className="text-gray-200 space-y-2 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsappLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto py-3 w-full text-center rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:scale-105 transition-transform duration-300`}
              >
                Start Google Ads on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
