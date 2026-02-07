"use client";
import { motion } from "framer-motion";

const whatsappNumber = "918169413149"; // Your WhatsApp number (no +)

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋%0A%0A
I am interested in your *Social Media Management – ${plan.title}* plan.%0A%0A
💰 *Monthly Package:* ${plan.price}%0A%0A
📱 *Plan Includes:*%0A
${plan.features.map((f) => `• ${f}`).join("%0A")}%0A%0A
Please share:%0A
✔ Content calendar & posting frequency%0A
✔ Growth & engagement strategy%0A
✔ Reporting format & timeline%0A%0A
Looking forward to working together.`;

  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const pricingData = [
  {
    title: "Starter Social Media",
    price: "₹8,000 – ₹12,000",
    description:
      "Ideal for small businesses starting their social media presence.",
    features: [
      "2 platforms (Instagram / Facebook)",
      "8–10 posts per month",
      "Basic creatives & captions",
      "Hashtag research",
      "Profile optimization",
      "Monthly performance report",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Growth Social Media",
    price: "₹15,000 – ₹25,000",
    description:
      "Best for brands looking to grow followers, reach, and engagement.",
    features: [
      "Up to 3 platforms",
      "12–16 posts + stories per month",
      "Advanced creatives & branded captions",
      "Engagement management (comments & DMs)",
      "Content calendar & strategy",
      "Bi-weekly reporting",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Premium / Brand Authority",
    price: "₹30,000+",
    description:
      "High-end social media management for scaling brands and influencers.",
    features: [
      "All major platforms (IG, FB, LinkedIn, etc.)",
      "20+ posts, reels & stories per month",
      "Advanced brand storytelling & visuals",
      "Community management & growth strategy",
      "Trend-based content & reels strategy",
      "Dedicated manager & priority support",
    ],
    color: "from-purple-600 to-pink-500",
  },
];

export default function SocialMediaPricing() {
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
          Social Media Management Pricing
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Strategic content, consistent posting, and real engagement to grow
          your brand on social media.
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
                Start Social Media Management
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
