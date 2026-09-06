"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918169413149";

// Actual Graphic Design service page
const serviceHref = "/contactus";

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋

I am interested in the *${plan.title}* graphic design package.

💰 *Package Price:* ${plan.price}

🎨 *What I will get:*
${plan.features.map((feature) => `• ${feature}`).join("\n")}

Please share:
✔ Design process & timeline
✔ Revision details
✔ Portfolio / sample work
✔ Next steps

Looking forward to your response.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Basic Design",
    price: "₹10,000",
    billing: "One-time package",
    description:
      "A professional design package for startups, small businesses, and individuals who need essential brand creatives.",
    features: [
      "2 logo concepts",
      "2 logo revision rounds",
      "5 social media post designs",
      "1 social media banner / cover",
      "Business card design",
      "Brand color palette",
      "Typography selection",
      "Print-ready & digital files",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Standard Branding",
    price: "₹35,000",
    billing: "One-time package",
    description:
      "A complete branding package for businesses that want a consistent and professional visual identity across platforms.",
    features: [
      "3 logo concepts",
      "3 logo revision rounds",
      "Complete logo variations",
      "10 social media post designs",
      "Social media profile & cover designs",
      "Business card & letterhead",
      "Brand color palette",
      "Typography system",
      "Brand guidelines document",
      "Print-ready & digital files",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Premium Brand Identity",
    price: "₹75,000",
    billing: "One-time package",
    description:
      "A premium brand identity solution for growing companies that need strategic branding and a complete visual system.",
    features: [
      "Complete brand strategy",
      "4 logo concepts",
      "Unlimited minor revisions",
      "Complete logo variation system",
      "15 social media creatives",
      "Business card & stationery",
      "Brand color system",
      "Typography system",
      "Custom brand elements",
      "Brand guidelines document",
      "Professional presentation",
      "Digital & print-ready files",
      "Brand consultation",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function GraphicPricingOptimized() {
  return (
    <section
      id="graphic-design-pricing"
      aria-labelledby="graphic-pricing-heading"
      className="relative w-full overflow-hidden bg-[#0a0d28] py-24 font-poppins"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.header
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
            Brand &amp; Visual Identity
          </span>

          <h2
            id="graphic-pricing-heading"
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Graphic Design{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Transparent graphic design packages with clear deliverables, fixed
            pricing, and professional-quality brand assets.
          </p>

          {/* Internal SEO Link */}
          <Link
            href={serviceHref}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
            aria-label="Explore WebXArtist Graphic Design Services"
          >
            Explore Graphic Design Services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
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
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-7 text-left transition-all duration-300 sm:p-8 ${
                plan.popular
                  ? "border border-orange-400/30 bg-white/[0.06] shadow-[0_0_40px_rgba(255,106,26,0.12)] md:-translate-y-3"
                  : "border border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${plan.accent}`}
                aria-hidden="true"
              />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#080a20] shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Package Content */}
              <div className={plan.popular ? "pt-10" : "pt-2"}>
                {/* Package Name */}
                <h3 className="mb-3 text-xl font-bold text-white">
                  {plan.title}
                </h3>

                {/* Fixed Price */}
                <div className="mb-1">
                  <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                    {plan.price}
                  </span>
                </div>

                {/* Billing */}
                <p className="mb-5 text-xs font-medium text-slate-500">
                  {plan.billing}
                </p>

                {/* Description */}
                <p className="mb-7 min-h-[72px] text-[14px] leading-relaxed text-slate-400">
                  {plan.description}
                </p>

                {/* Included Label */}
                <div className="mb-4 border-b border-white/10 pb-3">
                  <p className="text-sm font-semibold text-white">
                    What you get
                  </p>
                </div>

                {/* Features */}
                <ul
                  className="mb-8 space-y-3"
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

                      <span className="text-[13.5px] leading-relaxed text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsappLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get started with ${plan.title}`}
                className="mt-auto flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-green-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0d28]"
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Get Started on WhatsApp
              </a>
            </motion.article>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          className="mx-auto mt-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[13px] leading-relaxed text-slate-500 sm:text-[14px]">
            All packages include professional design and final delivery in
            suitable digital and print-ready formats. Additional requirements,
            urgent delivery, or work outside the listed scope may be quoted
            separately.
          </p>
        </motion.div>

        {/* Custom Requirement */}
        <motion.div
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-base font-bold text-white sm:text-lg">
            Need a custom design package?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Tell us what you need and we can create a custom package based on
            your business requirements.
          </p>

          {/* WhatsApp Custom Package */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello WebXArtist 👋\n\nI need a custom graphic design package for my business. Please share the available options and pricing.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/20"
          >
            <FaWhatsapp className="text-lg" aria-hidden="true" />
            Discuss Custom Package
          </a>

          {/* Secondary Internal SEO Link */}
          <div className="mt-5">
            <Link
              href={serviceHref}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-orange-400"
              aria-label="View WebXArtist Graphic Design Services"
            >
              View Graphic Design Services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
