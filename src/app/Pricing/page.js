// ⭐ SEO METADATA (FIXED)
export const metadata = {
  title:
    "Website Pricing & Packages | Affordable Web Design & Development – WebXArtist",
  description:
    "Affordable website pricing packages by WebXArtist for businesses in Mumbai, Thane, and Mumbra. Transparent pricing for web design, development, and eCommerce solutions.",

  alternates: {
    canonical: "https://webxartist.com/pricing",
  },

  openGraph: {
    title: "Website Pricing & Packages – WebXArtist",
    description:
      "Affordable and transparent website development pricing for startups and businesses.",
    url: "https://webxartist.com/pricing",
    siteName: "WebXArtist Institute & Agency",
    images: [
      {
        url: "/pricing-banner.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist Website Pricing Packages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import React from "react";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";
import Pricing from "../Components/Pricing";
import GraphicsPrice from "../Components/GraohicsPrice";
import VideoEditingPricing from "../Components/VideoEditingPricing";
import PricingHeader from "../Components/PricingHeader";
import ReferAndEarn from "../Components/ReferandEarn";
import Line from "../Components/Line";

export default function Page() {
  // ⭐ SERVICE SCHEMA (CORRECT FOR PRICING PAGE)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://webxartist.com/pricing#service",
    name: "Website Development Pricing & Packages",
    description:
      "Affordable website development, web design, and eCommerce pricing packages for startups and businesses.",
    provider: {
      "@type": "Organization",
      name: "WebXArtist Institute & Agency",
      url: "https://webxartist.com",
      logo: "https://webxartist.com/logo.png",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Mumbai, Thane, Mumbra, India",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "15000",
      highPrice: "100000",
      availability: "https://schema.org/InStock",
      url: "https://webxartist.com/pricing",
    },
  };

  return (
    <>
      {/* ✅ Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="pt-16">
        <PricingHeader />
        <Line />
        <Pricing />
        <GraphicsPrice />
        <VideoEditingPricing />
        <Line />
        <ReferAndEarn />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
