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
    `I am interested in the *${plan.title}* package.`,
    "",
    `💰 *Package Price:* ${plan.price}`,
    "",
    "📌 *Package Includes:*",
    ...plan.features.map((feature) => `• ${feature}`),
    "",
    "Please share:",
    "✔ Project timeline",
    "✔ Development process",
    "✔ Next steps",
    "✔ Portfolio / sample work",
    "",
    "Looking forward to your response.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Basic Website",
    price: "₹12,000",
    description:
      "A professional, responsive website for small businesses, professionals, startups, and personal brands.",
    features: [
      "Professional website layout",
      "4–5 responsive pages",
      "Mobile & tablet-friendly design",
      "Basic SEO & Google indexing",
      "Fast loading & optimized structure",
      "Contact form with WhatsApp integration",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Business Website",
    price: "₹25,000",
    description:
      "A custom business website with professional UI/UX, branding, performance optimization, and advanced SEO setup.",
    features: [
      "100% custom UI/UX design",
      "Brand-focused layout & color system",
      "10+ pages with blog/articles",
      "Advanced SEO & performance optimization",
      "Smooth animations & interactions",
      "Google Analytics & Search Console setup",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Premium eCommerce / Enterprise",
    price: "₹1,00,000+",
    description:
      "Scalable eCommerce and enterprise solutions with advanced functionality, integrations, security, and long-term support.",
    features: [
      "Custom MERN / Next.js architecture",
      "Advanced UI/UX and interactions",
      "Payment gateway & order management",
      "CRM & third-party integrations",
      "Scalable and secure backend",
      "Priority support & long-term scalability",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing-plans"
      aria-labelledby="pricing-plans-title"
      className="relative w-full overflow-hidden bg-[#0a0d28] py-24 font-poppins"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8">
        {/* Section Heading */}
        <motion.div
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
            Website Development Packages
          </span>

          <h2
            id="pricing-plans-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Website Development{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose a website development package based on your business goals,
            required features, design requirements, and growth plans.
            Transparent pricing makes it easier to select the right solution for
            your business.
          </p>
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
              <p className="mb-4 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                {plan.price}
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
                href="/services/website-development"
                className="group mb-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-3 text-[13px] font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                aria-label={`Learn more about ${plan.title} website development`}
              >
                View Website Development
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
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
                Get Started on WhatsApp
              </a>
            </motion.article>
          ))}
        </div>

        {/* Website Development Information */}
        <motion.div
          className="mx-auto mt-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Professional Website Development for Growing Businesses
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Website development cost depends on the number of pages, design
            requirements, functionality, integrations, content, SEO
            requirements, and technology used. WebXArtist creates professional
            websites for startups, local businesses, professionals, eCommerce
            brands, and growing companies.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
            We work with businesses in Mumbai, Thane, Mumbra and other locations
            across India, providing website design and development solutions
            based on specific business requirements.
          </p>

          {/* Main Internal Link */}
          <div className="mt-7">
            <Link
              href="/services/website-development"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.1] hover:text-cyan-200"
            >
              Explore Our Website Development Service
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </motion.div>

        {/* Pricing Note */}
        <motion.p
          className="mx-auto mt-8 max-w-3xl text-[13px] leading-6 text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          The displayed packages provide a clear starting point. Additional
          features, integrations, custom functionality, content creation, or
          third-party services may affect the final project scope and cost.
        </motion.p>
      </div>
    </section>
  );
}
