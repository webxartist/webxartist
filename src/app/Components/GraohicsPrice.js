"use client";
import { motion } from "framer-motion";

const whatsappNumber = "918169413149"; // Your WhatsApp number (no +)

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋%0A%0A
I am interested in your *${plan.title}* graphic design package.%0A%0A
💰 *Price Range:* ${plan.price}%0A%0A
🎨 *Package Includes:*%0A
${plan.features.map((f) => `• ${f}`).join("%0A")}%0A%0A
Please share:%0A
✔ Design process & timeline%0A
✔ Number of concepts & revisions%0A
✔ Portfolio / sample work%0A%0A
Looking forward to your response.`;

  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const pricingData = [
  {
    title: "Basic Design",
    price: "₹10,000 – ₹25,000",
    description:
      "Perfect for startups and personal projects. Simple yet effective designs.",
    features: [
      "Professional logo design concepts",
      "Social media post & banner designs",
      "Business card & basic branding assets",
      "Brand-aligned color & typography",
    ],
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Standard Branding",
    price: "₹30,000 – ₹70,000",
    description:
      "Complete branding solution with logo, stationery, and social media kit.",
    features: [
      "Custom logo & brand identity system",
      "Social media kit (posts, covers, highlights)",
      "Business stationery design",
      "Brand guidelines for consistency",
    ],
    color: "from-pink-500 to-yellow-500",
  },
  {
    title: "Premium Branding",
    price: "₹75,000+",
    description:
      "High-end branding with strategy, illustrations, and advanced UI/UX.",
    features: [
      "Complete brand strategy & positioning",
      "Custom illustrations & visual language",
      "UI/UX design for websites & apps",
      "Premium design support & consultation",
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
          Every brand is unique. These prices are indicative for the Thane
          market. Contact us for a personalized design quote.
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

                <ul className="text-gray-200 space-y-2 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-400 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Button */}
              <a
                href={getWhatsappLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 py-3 text-center rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:scale-105 transition-transform duration-300`}
              >
                Get Started on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Pricing depends on scope, complexity, and timelines. Every project is
          custom-quoted to ensure the best design outcome.
        </motion.p>
      </div>
    </section>
  );
}
