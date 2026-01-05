import React from "react";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";
import Technology from "../Components/Technology";
import MetaAds from "../Components/MetaAds";

// ✅ SEO METADATA (FIXED)
export const metadata = {
  title:
    "About WebXArtist Institute & Agency | Digital Marketing & Web Development in Mumbra",
  description:
    "WebXArtist Institute & Agency is a professional digital marketing and website development company in Mumbra, Thane. We specialize in Meta Ads, SEO, branding, web development, and IT training.",

  openGraph: {
    title: "About WebXArtist Institute & Agency",
    description:
      "Website Development, Digital Marketing, Meta Ads, SEO & IT Training in Mumbra, Thane.",
    url: "https://webxartist.com/about",
    siteName: "WebXArtist Institute & Agency",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "WebXArtist Institute & Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://webxartist.com/about",
  },
};

export default function Page() {
  // ✅ ORGANIZATION SCHEMA (ABOUT PAGE)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://webxartist.com/#organization",
    name: "WebXArtist Institute & Agency",
    url: "https://webxartist.com",
    logo: "https://webxartist.com/logo.png",
    description:
      "WebXArtist Institute & Agency provides website development, digital marketing, Meta Ads, SEO, branding, and IT training services in Mumbra, Thane.",
    sameAs: [
      "https://www.instagram.com/webxartist",
      "https://www.facebook.com/webxartist",
      "https://www.linkedin.com/company/webxartist",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbra",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <>
      {/* ✅ SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="pt-16">
        <About />
        <Technology />
        <MetaAds />
        <Portfolio />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
