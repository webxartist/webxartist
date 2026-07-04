"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
    accent: "from-cyan-400 to-blue-400",
    popular: false,
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
    accent: "from-orange-400 to-amber-300",
    popular: true,
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
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function GoogleAdsPricing() {
  return (
    <section className="relative w-full py-24 bg-[#0a0d28] font-poppins overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/[0.06] blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/[0.06] blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Paid Search Management
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Google Ads Management{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Pricing
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            ROI-driven Google Ads strategies designed to generate high-quality
            leads and scalable growth.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col text-left transition-all duration-300 ${
                plan.popular
                  ? "bg-white/[0.06] border border-orange-400/30 md:-translate-y-3 shadow-[0_0_40px_rgba(255,106,26,0.12)]"
                  : "bg-white/[0.04] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${plan.accent}`}
              />

              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] font-bold px-4 py-1.5 rounded-full text-[12px] uppercase tracking-wide shadow-lg">
                  Most Recommended
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 mt-2">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 mb-1">
                {plan.price}
              </p>
              <p className="text-[12px] text-slate-500 mb-4">
                per month + ad spend
              </p>

              {/* Description */}
              <p className="text-slate-400 text-[14px] leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-slate-300 text-[13.5px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsappLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex items-center justify-center gap-2.5 py-3.5 w-full rounded-full font-bold text-white text-[14px] bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Start Google Ads on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
