"use client";

import { motion } from "framer-motion";

const serviceContext = {
  "website-development": {
    intro:
      "WebXArtist develops fast, responsive and SEO-friendly websites designed around business goals, customer experience and long-term online growth.",
    approach:
      "Our website development approach combines modern UI/UX, responsive development, technical SEO foundations, performance optimization and conversion-focused structure.",
    idealFor:
      "local businesses, startups, professional services, clinics, educational institutes, restaurants, manufacturers and growing companies.",
    benefits: [
      "Responsive website development",
      "Modern UI/UX implementation",
      "SEO-friendly technical structure",
      "Fast-loading and performance-focused pages",
      "Mobile-first development",
      "Business-focused conversion structure",
    ],
  },

  "google-ads": {
    intro:
      "WebXArtist helps businesses use targeted Google Ads campaigns to reach customers actively searching for relevant products and services.",
    approach:
      "Our Google Ads approach focuses on campaign structure, keyword targeting, relevant landing pages, conversion tracking and continuous campaign optimization.",
    idealFor:
      "local businesses, service providers, ecommerce businesses, professional firms and companies looking to generate qualified search leads.",
    benefits: [
      "Search campaign setup",
      "Keyword and search-intent targeting",
      "Conversion-focused landing pages",
      "Campaign optimization",
      "Performance monitoring",
      "Lead generation strategy",
    ],
  },

  "meta-ads": {
    intro:
      "WebXArtist helps businesses use Meta advertising to reach relevant audiences across Facebook and Instagram through strategically designed campaigns and creative assets.",
    approach:
      "Our Meta Ads strategy combines audience targeting, campaign structure, creative testing, retargeting and conversion-focused advertising.",
    idealFor:
      "local businesses, ecommerce brands, service companies, institutes, startups and businesses looking to expand their social media reach.",
    benefits: [
      "Facebook and Instagram advertising",
      "Audience targeting",
      "Creative-focused campaigns",
      "Lead generation campaigns",
      "Retargeting strategies",
      "Campaign performance optimization",
    ],
  },

  "google-my-business": {
    intro:
      "WebXArtist helps businesses improve their local online presence through Google Business Profile optimization, local SEO signals and customer-focused business information.",
    approach:
      "Our local visibility approach focuses on business information, services, categories, local relevance, website connections and ongoing profile optimization.",
    idealFor:
      "shops, clinics, restaurants, institutes, agencies, professional services and other businesses serving customers locally.",
    benefits: [
      "Google Business Profile optimization",
      "Local SEO structure",
      "Service optimization",
      "Business information optimization",
      "Local visibility improvement",
      "Website and profile alignment",
    ],
  },

  "seo-services": {
    intro:
      "WebXArtist provides SEO services designed to improve organic search visibility, attract relevant visitors and build a stronger long-term search presence for businesses.",
    approach:
      "Our SEO approach combines on-page optimization, technical SEO, content structure, internal linking, local SEO and search-intent-focused optimization.",
    idealFor:
      "local businesses, startups, service providers, ecommerce businesses, professional firms and organizations targeting organic search traffic.",
    benefits: [
      "On-page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword and search-intent optimization",
      "Internal linking strategy",
      "SEO content structure",
    ],
  },

  "social-media-management": {
    intro:
      "WebXArtist helps businesses maintain a consistent and professional social media presence through content planning, creative direction, publishing and audience-focused strategy.",
    approach:
      "Our social media management approach combines content planning, visual consistency, platform-specific content and performance-oriented social strategies.",
    idealFor:
      "local businesses, startups, service providers, personal brands, institutes, ecommerce businesses and growing companies.",
    benefits: [
      "Social media content planning",
      "Creative content strategy",
      "Brand consistency",
      "Platform-specific content",
      "Content publishing support",
      "Social media growth strategy",
    ],
  },

  "content-creation": {
    intro:
      "WebXArtist creates business-focused digital content designed to communicate products, services, expertise and brand messages clearly across online platforms.",
    approach:
      "Our content approach focuses on audience intent, brand positioning, useful information, engaging formats and content that supports marketing objectives.",
    idealFor:
      "businesses, startups, service providers, institutes, ecommerce brands, professionals and organizations.",
    benefits: [
      "Business content creation",
      "Social media content",
      "Marketing content",
      "Website content",
      "Brand-focused messaging",
      "Content strategy",
    ],
  },

  "email-marketing": {
    intro:
      "WebXArtist helps businesses use email marketing to communicate with customers, nurture leads and maintain long-term relationships through structured campaigns.",
    approach:
      "Our email marketing approach focuses on audience segmentation, campaign planning, persuasive messaging, calls to action and performance tracking.",
    idealFor:
      "service businesses, ecommerce brands, startups, professional companies, institutes and organizations with an existing or growing customer base.",
    benefits: [
      "Email campaign planning",
      "Lead nurturing",
      "Promotional campaigns",
      "Customer communication",
      "Email content strategy",
      "Campaign performance analysis",
    ],
  },
};

export default function ServiceLocationOverview({ service, location }) {
  const serviceName = service.name;
  const locationName = location.city;

  const context = serviceContext[service.slug] || {
    intro: `WebXArtist provides professional ${serviceName.toLowerCase()} solutions for businesses in ${locationName}.`,

    approach: `Our ${serviceName.toLowerCase()} approach combines practical execution, modern technology and business-focused strategies.`,

    idealFor:
      "startups, local businesses, professional services, organizations and growing companies.",

    benefits: [
      "Business-focused solutions",
      "Modern implementation",
      "SEO-friendly structure",
      "Responsive experience",
      "Transparent approach",
      "Ongoing support",
    ],
  };

  /*
   * Location data from locations.js
   */

  const localContext =
    location.localContext ||
    `${locationName} is a growing business area with companies, professionals and organizations across multiple industries.`;

  const locationDescription =
    location.locationDescription ||
    `WebXArtist provides ${serviceName.toLowerCase()} solutions for businesses and organizations in ${locationName}.`;

  const relatedTopics = Array.isArray(location.relatedTopics)
    ? location.relatedTopics
    : [];

  return (
    <section className="bg-[#0c1028] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* =========================================================
              SEO LABEL
          ========================================================= */}

          <span className="font-semibold uppercase tracking-widest text-cyan-400">
            {serviceName} in {locationName}
          </span>

          {/* =========================================================
              MAIN HEADING
          ========================================================= */}

          <h2 className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-5xl">
            {serviceName} Services in {locationName}
          </h2>

          {/* =========================================================
              SERVICE INTRODUCTION
          ========================================================= */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            {context.intro}
          </p>

          {/* =========================================================
              LOCATION DESCRIPTION
          ========================================================= */}

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            {locationDescription}
          </p>

          {/* =========================================================
              LOCAL BUSINESS CONTEXT
          ========================================================= */}

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Local Business Context
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              {serviceName} for Businesses in {locationName}
            </h3>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              {localContext}
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
              Businesses in{" "}
              <strong className="text-white">{locationName}</strong> can use{" "}
              {serviceName.toLowerCase()} to improve their online presence,
              reach relevant customers and create a stronger digital experience
              for their audience.
            </p>
          </div>

          {/* =========================================================
              SERVICE APPROACH
          ========================================================= */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            {context.approach}
          </p>

          {/* =========================================================
              IDEAL FOR
          ========================================================= */}

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Our {serviceName.toLowerCase()} solutions can support{" "}
            {context.idealFor}
          </p>

          {/* =========================================================
              INFORMATION CARDS
          ========================================================= */}

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* -------------------------------------------------------
                WHY WEBXARTIST
            ------------------------------------------------------- */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-400/30">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Why Choose WebXArtist for {serviceName}?
              </h3>

              <ul className="space-y-4 text-slate-400">
                {context.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-cyan-400" aria-hidden="true">
                      ✓
                    </span>

                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* -------------------------------------------------------
                LOCAL SERVICE
            ------------------------------------------------------- */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-orange-400/30">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {serviceName} for Businesses in {locationName}
              </h3>

              <p className="leading-8 text-slate-400">
                WebXArtist provides {serviceName.toLowerCase()} services for
                businesses looking to reach their target audience in{" "}
                <strong className="text-white">{locationName}</strong>. We focus
                on practical implementation, clear communication, modern
                technology and solutions aligned with business objectives.
              </p>
            </div>
          </div>

          {/* =========================================================
              RELATED TOPICS
          ========================================================= */}

          {relatedTopics.length > 0 && (
            <div className="mt-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                Related Digital Solutions
              </span>

              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Digital Services Relevant to Businesses in {locationName}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {relatedTopics.map((topic, index) => (
                  <span
                    key={`${topic}-${index}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:text-white"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================
              LOCAL SEO / AEO SECTION
          ========================================================= */}

          <div className="mt-12 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 to-orange-400/5 p-8">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Looking for {serviceName} in {locationName}?
            </h3>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              WebXArtist helps businesses in{" "}
              <strong className="text-white">{locationName}</strong> plan and
              implement {serviceName.toLowerCase()} solutions based on their
              business goals, target customers and online growth requirements.
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              Whether you are a startup, local business, professional service,
              institute, retailer or growing company, our approach is focused on
              creating practical digital solutions that support your business
              objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
