"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918169413149";

const getWhatsappLink = (plan) => {
  const message = `Hello WebXArtist 👋

I am interested in your *${plan.title}* video editing package.

💰 *Package Price:* ${plan.price}

🎬 *Package Includes:*
${plan.features.map((feature) => `• ${feature}`).join("\n")}

Please share:
✔ Project timeline
✔ Editing process
✔ Sample work / portfolio
✔ Next steps

Looking forward to working with WebXArtist.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const pricingData = [
  {
    title: "Basic Video Editing",
    price: "₹7,500",
    description:
      "Ideal for short-form content, social media videos, YouTube Shorts, and simple promotional videos.",
    features: [
      "Up to 5 minutes final video",
      "Professional cuts & trimming",
      "Smooth transitions",
      "Basic color correction",
      "Background music integration",
      "Basic text & captions",
      "1 revision round",
      "Delivery within 3–5 working days",
    ],
    accent: "from-cyan-400 to-blue-400",
    popular: false,
  },
  {
    title: "Professional Video Editing",
    price: "₹18,000",
    description:
      "Best for businesses, creators, YouTube videos, reels, and professional marketing content.",
    features: [
      "Up to 15 minutes final video",
      "Advanced cuts & transitions",
      "Professional color grading",
      "Motion graphics & animated text",
      "Background music & sound design",
      "Subtitles / captions",
      "Branding elements & logo animation",
      "2 revision rounds",
      "Delivery within 5–7 working days",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
  },
  {
    title: "Premium Video Production",
    price: "₹35,000",
    description:
      "For premium brands, campaigns, YouTube channels, corporate videos, and high-end marketing content.",
    features: [
      "Up to 30 minutes final video",
      "Advanced professional editing",
      "Premium color grading",
      "Advanced motion graphics",
      "Custom animations",
      "Professional sound design",
      "Advanced subtitles & captions",
      "Logo & brand animation",
      "Thumbnail design",
      "3 revision rounds",
      "Priority delivery & support",
    ],
    accent: "from-amber-300 to-cyan-400",
    popular: false,
  },
];

export default function VideoEditingPricingOptimized() {
  return (
    <section
      id="video-editing-pricing"
      aria-labelledby="video-editing-pricing-title"
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
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
            Video Editing Services
          </span>

          <h2
            id="video-editing-pricing-title"
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Professional Video Editing{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Choose a fixed video editing package based on your content,
            business, or marketing requirements. Transparent pricing with
            clearly defined deliverables.
          </p>
        </motion.header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
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
              className={`relative flex h-full flex-col rounded-2xl p-8 text-left transition-all duration-300 ${
                plan.popular
                  ? "border border-orange-400/30 bg-white/[0.06] shadow-[0_0_40px_rgba(255,106,26,0.12)] md:-translate-y-3"
                  : "border border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${plan.accent}`}
              />

              {/* Recommended Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide text-[#080a20] shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex flex-1 flex-col">
                {/* Package Title */}
                <h3 className="mt-2 mb-2 text-xl font-bold text-white">
                  {plan.title}
                </h3>

                {/* Fixed Price */}
                <div className="mb-4">
                  <p className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-3xl font-extrabold text-transparent">
                    {plan.price}
                  </p>

                  <p className="mt-1 text-[12px] font-medium text-slate-500">
                    Fixed package price
                  </p>
                </div>

                {/* Description */}
                <p className="mb-6 text-[14px] leading-relaxed text-slate-400">
                  {plan.description}
                </p>

                {/* Included Label */}
                <div className="mb-4">
                  <p className="text-[12px] font-bold uppercase tracking-[1.5px] text-slate-300">
                    What you get
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20]">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>

                      <span className="text-[13.5px] leading-relaxed text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsappLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get started with ${plan.title}`}
                  className="mt-auto flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 py-3.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:from-emerald-400 hover:to-green-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)]"
                >
                  <FaWhatsapp className="text-lg" />
                  Get Started on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[13px] leading-relaxed text-slate-400 sm:text-[14px]">
            <span className="font-semibold text-slate-300">
              Need something different?
            </span>{" "}
            These packages cover standard requirements. Large campaigns, complex
            animations, extensive footage, or ongoing monthly editing can be
            quoted separately based on scope.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
