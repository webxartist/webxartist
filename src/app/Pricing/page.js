// ⭐ SEO Metadata
export const metadata = {
  title: "Website Pricing | Web Design & Development Packages – WebXArtist",
  description:
    "Affordable website pricing packages for businesses in Mumbai, Thane, Mumbra & India. Choose from Basic, Professional, and Premium eCommerce solutions.",
  keywords: [
    "Affordable web Development Agency",
    "Affordable branding agency",
    "Affordable digital marketing agency",
    "webiste price",
    "WebXArtist packages",
  ],
  alternates: {
    canonical: "https://webxartist.com/Pricing",
  },
  openGraph: {
    title: "Website Pricing – WebXArtist",
    description:
      "Transparent and affordable website development pricing crafted for every business type.",
    url: "https://webxartist.com/Pricing",
    siteName: "WebXArtist",
    images: [
      {
        url: "/pricing-banner.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist Pricing Banner",
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
  // ⭐ JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Website Development Pricing",
    brand: "WebXArtist",
    description:
      "Website development and eCommerce pricing plans for small businesses and enterprises.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "15000",
      highPrice: "100000",
      priceValidUntil: "2026-01-01",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* Inject Schema / Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ⭐ YOUR ORIGINAL CODE (NO CHANGES MADE) */}
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
