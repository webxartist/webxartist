"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const whatsappNumber = "918169413149";

// ⭐ Internal Service Page
const metaAdsServiceUrl = "/services/meta-ads";

const getWhatsappLink = (plan) => {
  const message = [
    "Hello WebXArtist 👋",
    "",
    `I am interested in the *${plan.title}* Meta Ads management plan.`,
    "",
    `💰 *Management Fee:* ${plan.price}`,
    "",
    "📢 *Plan Includes:*",
    ...plan.features.map((feature) => `• ${feature}`),
    "",
    "Please share:",
    "✔ Recommended advertising strategy",
    "✔ Suggested ad budget",
    "✔ Timeline & onboarding process",
    "✔ Reporting & optimization process",
    "",
    "Looking forward to your guidance.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Starter Meta Ads",
    price: "₹8,000 – ₹12,000",
    description:
      "A focused Meta Ads management package for businesses starting with Facebook and Instagram advertising.",
    features: [
      "Facebook & Instagram Ads account setup",
      "Audience research & targeting strategy",
      "1–2 Lead, Traffic or Engagement campaigns",
      "Ad copy & creative recommendations",
      "Meta Pixel & basic conversion tracking",
      "Monthly performance reporting",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Growth Meta Ads",
    price: "₹15,000 – ₹25,000",
    description:
      "Ongoing Meta Ads management for businesses looking to expand campaigns, improve targeting, and build structured retargeting funnels.",
    features: [
      "Full-funnel Meta Ads strategy",
      "Multiple campaigns & ad sets",
      "Custom audience & lookalike strategies",
      "Creative & copy A/B testing",
      "Advanced retargeting setup",
      "Weekly optimization & reporting",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Performance / Enterprise Meta Ads",
    price: "₹30,000+",
    description:
      "Advanced Meta Ads management for larger campaigns requiring detailed funnel planning, conversion optimization, and continuous account management.",
    features: [
      "Advanced campaign architecture",
      "Sales, catalog & conversion campaigns",
      "Full-funnel remarketing strategy",
      "Frequent campaign monitoring",
      "Budget & performance optimization",
      "Dedicated account management & priority support",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function MetaAdsPricing() {
  return (
    <section
      id="meta-ads-pricing"
      aria-labelledby="meta-ads-pricing-title"
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
            Social Media Advertising
          </span>

          <h2
            id="meta-ads-pricing-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Meta Ads Management{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Professional Facebook and Instagram advertising management designed
            around your business goals, audience, campaign structure, and
            advertising budget.
          </p>

          {/* ⭐ SEO Internal Link */}
          <Link
            href={metaAdsServiceUrl}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
            aria-label="Learn more about Meta Ads management services"
          >
            Learn more about our Meta Ads management services
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
                  Most Recommended
                </div>
              )}

              {/* Plan Title */}
              <h3 className="mb-3 mt-2 text-xl font-bold text-white">
                {plan.title}
              </h3>

              {/* Management Fee */}
              <p className="mb-1 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                {plan.price}
              </p>

              <p className="mb-4 text-xs text-slate-500">
                Monthly management fee
              </p>

              {/* Ad Spend Notice */}
              <p className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-5 text-slate-400">
                Advertising spend paid to Meta is separate from the management
                fee.
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

              {/* ⭐ Internal Service Link */}
              <Link
                href={metaAdsServiceUrl}
                aria-label={`Learn more about ${plan.title} Meta Ads services`}
                className="group mb-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-3 text-[13px] font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
              >
                View Meta Ads Service
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsappLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get started with ${plan.title} on WhatsApp`}
                className="mt-auto flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-green-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0d28]"
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Start Meta Ads
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
            Facebook & Instagram Advertising Management
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Meta Ads management costs depend on campaign objectives, audience
            size, creative requirements, number of campaigns, tracking setup,
            funnel complexity, reporting requirements, and advertising spend.
            WebXArtist manages Facebook and Instagram advertising with
            structured campaign planning, audience research, creative testing,
            conversion tracking, retargeting, optimization, and performance
            reporting.
          </p>

          {/* ⭐ SEO Internal Link */}
          <Link
            href={metaAdsServiceUrl}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
            aria-label="Explore Meta Ads advertising services"
          >
            Explore Meta Ads advertising services
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
