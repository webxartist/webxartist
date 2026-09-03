"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918169413149";

const getWhatsappLink = (plan) => {
  const message = [
    "Hello WebXArtist 👋",
    "",
    `I am interested in the *${plan.title}* Google Ads management plan.`,
    "",
    `💰 *Management Fee:* ${plan.price}`,
    "",
    "📌 *Plan Includes:*",
    ...plan.features.map((feature) => `• ${feature}`),
    "",
    "Please share:",
    "✔ Recommended advertising strategy",
    "✔ Suggested ad budget",
    "✔ Timeline & onboarding process",
    "✔ Reporting process",
    "",
    "Looking forward to your guidance.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Starter Google Ads",
    price: "₹8,000",
    description:
      "A focused Google Ads management package for small businesses starting with Search campaigns and lead generation.",
    features: [
      "Google Ads account & campaign setup",
      "Keyword research & competitor analysis",
      "1–2 Search campaigns",
      "Search ad copy creation",
      "Conversion tracking setup",
      "Monthly performance reporting",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Growth Google Ads",
    price: "₹15,000",
    description:
      "Ongoing Google Ads management for businesses that want to expand campaigns, improve targeting, and generate more qualified enquiries.",
    features: [
      "Account audit & campaign strategy",
      "Multiple Search & Display campaigns",
      "Advanced keyword & audience targeting",
      "Landing page optimization recommendations",
      "Conversion tracking & remarketing setup",
      "Weekly optimization & reporting",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Performance Google Ads",
    price: "₹30,000",
    description:
      "Advanced Google Ads management for businesses requiring multi-channel campaigns, continuous optimization, and scalable account management.",
    features: [
      "Full-funnel Google Ads strategy",
      "Search, Display, YouTube & Performance Max",
      "Advanced audience & remarketing strategy",
      "Bid & budget optimization",
      "Frequent monitoring & campaign scaling",
      "Dedicated account management & priority support",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function GoogleAdsPricing() {
  return (
    <section
      id="google-ads-pricing"
      aria-labelledby="google-ads-pricing-title"
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
            Paid Search & PPC Management
          </span>

          <h2
            id="google-ads-pricing-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Google Ads Management{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose a Google Ads management package based on your campaign goals,
            advertising requirements, account complexity, and required level of
            optimization.
          </p>

          {/* SEO Internal Link */}
          <Link
            href="/Services/google-ads"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
          >
            Explore Google Ads Services
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

              {/* Price */}
              <p className="mb-1 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                {plan.price}
              </p>

              {/* Billing */}
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                Monthly Management Fee
              </p>

              {/* Important Pricing Note */}
              <p className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-5 text-slate-400">
                Advertising spend paid directly to Google is separate from the
                management fee.
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

              {/* Internal Service Link */}
              <Link
                href="/Services/google-ads"
                className="group mb-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-3 text-[13px] font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
              >
                View Google Ads Service
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
                Start Google Ads
              </a>
            </motion.article>
          ))}
        </div>

        {/* Supporting SEO Content */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Google Ads Management & PPC Campaigns
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            WebXArtist provides Google Ads management for businesses looking to
            generate leads, enquiries, calls, website traffic, and measurable
            conversions. Our Google Ads services include keyword research,
            campaign setup, ad copywriting, conversion tracking, audience
            targeting, campaign optimization, remarketing, and performance
            reporting.
          </p>

          {/* Bottom Internal Link */}
          <Link
            href="/Services/google-ads"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-400/[0.06] hover:text-orange-400"
          >
            Learn More About Google Ads Management
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
