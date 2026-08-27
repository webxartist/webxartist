// app/pricing/page.jsx

// ============================================================
// SEO METADATA
// ============================================================

export const metadata = {
  title: "Digital Marketing & Website Development Pricing | WebXArtist",

  description:
    "Explore WebXArtist pricing for website development, eCommerce, SEO, Google Ads, Meta Ads, social media management, branding, graphic design and video editing services for businesses across India, including Mumbai, Thane and Mumbra.",

  keywords: [
    "website development pricing",
    "website development packages",
    "web design pricing",
    "website development cost",
    "ecommerce website pricing",
    "digital marketing pricing",
    "SEO pricing",
    "Google Ads pricing",
    "Meta Ads pricing",
    "social media management pricing",
    "graphic design pricing",
    "video editing pricing",
    "WebXArtist pricing",
  ],

  alternates: {
    canonical: "https://www.webxartist.com/Pricing",
  },

  openGraph: {
    title: "Digital Marketing & Website Development Pricing | WebXArtist",

    description:
      "Explore transparent pricing for website development, eCommerce, SEO, Google Ads, Meta Ads, social media management, branding and creative services by WebXArtist.",

    url: "https://www.webxartist.com/Pricing",

    siteName: "WebXArtist Institute & Agency",

    images: [
      {
        url: "/pricing-banner.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist Digital Services Pricing and Packages",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing & Website Development Pricing | WebXArtist",

    description:
      "Explore WebXArtist pricing for website development, digital marketing, advertising, branding and creative services across India.",

    images: ["/pricing-banner.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ============================================================
// IMPORTS
// ============================================================

import React from "react";

import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

import Pricing from "../Components/Pricing";
import GraphicsPrice from "../Components/GraohicsPrice";
import VideoEditingPricing from "../Components/VideoEditingPricing";

import PricingHeader from "../Components/PricingHeader";

import Line from "../Components/Line";

import GoogleAdsPricing from "../Components/GoogleAdsPricing";
import MetaAdsPricing from "../Components/MetaAdsPricing";
import SocialMediaPricing from "../Components/SocialPricing";
import GMBPricing from "../Components/Gmb";

// IMPORTANT:
// Change this filename only if you saved the component
// with a different filename.
import ReferandEarn from "@/app/Components/ReferandEarn";

// ============================================================
// PAGE
// ============================================================

export default function Page() {
  // ==========================================================
  // ORGANIZATION / SERVICE SCHEMA
  // ==========================================================

  const schemaData = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": "https://www.webxartist.com/Pricing#services",

    name: "WebXArtist Digital Services",

    description:
      "Website development, eCommerce development, SEO, Google Ads, Meta Ads, social media management, graphic design, video editing and Google Business Profile services for businesses across India.",

    url: "https://www.webxartist.com/Pricing",

    provider: {
      "@type": "Organization",

      name: "WebXArtist Institute & Agency",

      url: "https://www.webxartist.com",

      logo: {
        "@type": "ImageObject",
        url: "https://www.webxartist.com/logo.png",
      },
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    serviceType: [
      "Website Development",
      "Web Design",
      "eCommerce Website Development",
      "SEO Services",
      "Google Ads Management",
      "Meta Ads Management",
      "Social Media Management",
      "Graphic Design",
      "Branding",
      "Video Editing",
      "Google Business Profile Management",
    ],
  };

  return (
    <>
      {/* ======================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="pt-16">
        {/* ====================================================
            PRICING HEADER
        ==================================================== */}

        <PricingHeader />

        {/* ====================================================
            SEO INTRODUCTION
        ==================================================== */}

        <section
          aria-labelledby="pricing-introduction"
          className="relative bg-[#080a20] px-6 py-12 sm:py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1
              id="pricing-introduction"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            >
              Digital Services Pricing &amp; Packages
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
              Explore transparent pricing for website development, eCommerce,
              Google Business Profile management, Google Ads, Meta Ads, SEO,
              social media management, graphic design, branding and video
              editing. WebXArtist works with startups, local businesses,
              professionals and growing companies across India, including
              businesses in Mumbai, Thane and Mumbra.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500">
              Choose a package based on your business requirements and budget.
              Every project can be customized according to scope, technology,
              campaign objectives, content requirements and long-term growth
              goals.
            </p>
          </div>
        </section>

        <Line />

        {/* ====================================================
            WEBSITE DEVELOPMENT
        ==================================================== */}

        <section
          id="website-development-pricing"
          aria-labelledby="website-development-pricing-title"
        >
          <Pricing />
        </section>

        {/* ====================================================
            GOOGLE BUSINESS PROFILE / LOCAL SEO
        ==================================================== */}

        <section
          id="google-business-profile-pricing"
          aria-labelledby="google-business-profile-pricing-title"
        >
          <GMBPricing />
        </section>

        {/* ====================================================
            GOOGLE ADS
        ==================================================== */}

        <section
          id="google-ads-pricing"
          aria-labelledby="google-ads-pricing-title"
        >
          <GoogleAdsPricing />
        </section>

        {/* ====================================================
            META ADS
        ==================================================== */}

        <section id="meta-ads-pricing" aria-labelledby="meta-ads-pricing-title">
          <MetaAdsPricing />
        </section>

        {/* ====================================================
            SOCIAL MEDIA MANAGEMENT
        ==================================================== */}

        <section
          id="social-media-management-pricing"
          aria-labelledby="social-media-management-pricing-title"
        >
          <SocialMediaPricing />
        </section>

        {/* ====================================================
            GRAPHIC DESIGN & BRANDING
        ==================================================== */}

        <section
          id="graphic-design-pricing"
          aria-labelledby="graphic-design-pricing-title"
        >
          <GraphicsPrice />
        </section>

        {/* ====================================================
            VIDEO EDITING
        ==================================================== */}

        <section
          id="video-editing-pricing"
          aria-labelledby="video-editing-pricing-title"
        >
          <VideoEditingPricing />
        </section>

        <Line />

        {/* ====================================================
            PARTNERSHIP / REFERRAL / CAREER
        ==================================================== */}

        <ReferandEarn />
      </main>

      {/* ======================================================
          FLOATING CONTACT ACTIONS
      ====================================================== */}

      <Whatsapp />

      <Instagram />
    </>
  );
}
