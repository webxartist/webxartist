"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918169413149";

// Actual service page URL
const serviceHref = "/Services/social-media-management";

const getWhatsappLink = (plan) => {
  const message = [
    "Hello WebXArtist 👋",
    "",
    `I am interested in the *${plan.title}* Social Media Management plan.`,
    "",
    `💰 *Monthly Package:* ${plan.price}`,
    "",
    "📱 *Plan Includes:*",
    ...plan.features.map((feature) => `• ${feature}`),
    "",
    "Please share:",
    "✔ Content calendar & posting frequency",
    "✔ Content & engagement strategy",
    "✔ Reporting format & timeline",
    "✔ Onboarding process",
    "",
    "Looking forward to working together.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Starter Social Media",
    price: "₹8,000",
    description:
      "A professional social media management package for businesses building a consistent presence on key social platforms.",
    features: [
      "1 social media platform",
      "5 Reels, 4 posts & 2 Stories per month",
      "Basic branded creatives & captions",
      "Hashtag & content research",
      "Social profile optimization",
      "Monthly performance reporting",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Growth Social Media",
    price: "₹15,000",
    description:
      "A structured content and social media management plan for brands looking to improve consistency, engagement, and audience communication.",
    features: [
      "1 social media platform",
      "12 Reels, 4 posts & Stories per month",
      "Advanced branded creatives & captions",
      "Comment & DM management",
      "Content calendar & monthly strategy",
      "Bi-weekly performance reporting",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Premium Brand Authority",
    price: "₹30,000+",
    description:
      "Advanced social media management for established brands requiring broader platform coverage, richer content, and dedicated account support.",
    features: [
      "Multiple major social platforms",
      "20+ posts, Reels & Stories per month",
      "Advanced brand storytelling & visual content",
      "Community management & engagement strategy",
      "Trend-based content & Reels planning",
      "Dedicated manager & priority support",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function SocialMediaPricing() {
  return (
    <section
      id="social-media-pricing"
      aria-labelledby="social-media-pricing-title"
      className="relative w-full overflow-hidden bg-[#0a0d28] py-24 font-poppins"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
            Social Media Management
          </span>

          <h2
            id="social-media-pricing-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Social Media Management{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Professional social media management covering content planning,
            branded creatives, publishing, community engagement, and performance
            reporting.
          </p>

          {/* Internal SEO Link */}
          <Link
            href={serviceHref}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
            aria-label="Learn more about WebXArtist Social Media Management Services"
          >
            Explore Social Media Management Services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {pricingData.map((plan, index) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative flex flex-col rounded-2xl p-8 text-left transition-all duration-300 ${
                plan.popular
                  ? "border border-orange-400/30 bg-white/[0.06] shadow-[0_0_40px_rgba(255,106,26,0.12)] md:-translate-y-3"
                  : "border border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              {/* Accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${plan.accent}`}
                aria-hidden="true"
              />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide text-[#080a20] shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Title */}
              <h3 className="mb-3 mt-2 text-xl font-bold text-white">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="mb-1 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                {plan.price}
              </p>

              <p className="mb-4 text-xs text-slate-500">
                Monthly management package
              </p>

              {/* Description */}
              <p className="mb-7 text-[14px] leading-6 text-slate-400">
                {plan.description}
              </p>

              {/* Features */}
              <ul
                className="mb-8 flex-1 space-y-3"
                aria-label={`${plan.title} features`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20]"
                      aria-hidden="true"
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>

                    <span className="text-[13.5px] leading-5 text-slate-300">
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
                aria-label={`Get started with ${plan.title} on WhatsApp`}
                className="mt-auto flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-green-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0d28]"
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Start Social Media Management
              </a>
            </motion.article>
          ))}
        </div>

        {/* Supporting Content */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Social Media Management for Growing Brands
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Social media management pricing depends on the number of platforms,
            content volume, creative requirements, publishing frequency,
            community management, reporting, and strategy. WebXArtist provides
            structured social media management covering content planning,
            creative production, captions, publishing, engagement, trend
            research, and performance reporting.
          </p>

          {/* SEO Internal Link */}
          <Link
            href={serviceHref}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
            aria-label="View Social Media Management Services by WebXArtist"
          >
            View Social Media Management Services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
