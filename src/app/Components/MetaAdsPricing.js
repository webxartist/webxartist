"use client";
import { motion } from "framer-motion";

const whatsappNumber = "918169413149"; // Your WhatsApp number (no +)

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋%0A%0A
I am interested in your *Meta Ads – ${plan.title}* plan (Facebook & Instagram).%0A%0A
💰 *Monthly Management Fee:* ${plan.price}%0A%0A
📢 *Plan Includes:*%0A
${plan.features.map((f) => `• ${f}`).join("%0A")}%0A%0A
Please share:%0A
✔ Recommended ad budget%0A
✔ Expected leads/sales strategy%0A
✔ Timeline & onboarding steps%0A%0A
Looking forward to your guidance.`;

  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const pricingData = [
  {
    title: "Starter Meta Ads",
    price: "₹8,000 – ₹12,000",
    description:
      "Best for local businesses and startups looking to generate leads or engagement.",
    features: [
      "Facebook & Instagram Ads account setup",
      "Audience research & targeting",
      "1–2 campaigns (Lead / Traffic / Engagement)",
      "Ad creative guidance (copy + visuals)",
      "Pixel & basic conversion tracking",
      "Monthly performance report",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Growth Meta Ads",
    price: "₹15,000 – ₹25,000",
    description:
      "Ideal for scaling brands focused on consistent leads, sales, and retargeting.",
    features: [
      "Full-funnel Meta Ads strategy",
      "Multiple campaigns & ad sets",
      "Custom audience & lookalike targeting",
      "A/B testing for creatives & copies",
      "Advanced retargeting setup",
      "Weekly optimization & reporting",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Performance / Enterprise Meta Ads",
    price: "₹30,000+",
    description:
      "Aggressive growth-focused Meta Ads management for high budgets and ROAS.",
    features: [
      "High-budget campaign structuring",
      "Sales, catalog & conversion ads",
      "Advanced funnel & remarketing system",
      "Daily monitoring & scaling",
      "ROAS-focused optimization strategy",
      "Dedicated account manager & priority support",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function MetaAdsPricing() {
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
          Meta Ads (Facebook & Instagram) Pricing
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Data-driven Facebook & Instagram ad strategies designed to scale
          leads, sales, and brand visibility.
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
                Start Meta Ads on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
