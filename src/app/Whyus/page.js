import React from "react";
import WhyChooseUs from "../Components/whychooseus";
import Workdone from "../Components/Workdone";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

// ✅ SEO METADATA (FIXED)
export const metadata = {
  title:
    "Why Choose WebXArtist | Affordable Website Developer in Mumbra, Thane & Mumbai",
  description:
    "Discover why WebXArtist Institute & Agency is a trusted and affordable website development and digital marketing company in Mumbra, Thane, Mumbai & Navi Mumbai.",

  alternates: {
    canonical: "https://webxartist.com/why-us",
  },

  openGraph: {
    title: "Why Choose WebXArtist | Website Development & Branding Experts",
    description:
      "High-quality website development, branding, SEO, and digital marketing services by WebXArtist Institute & Agency.",
    url: "https://webxartist.com/why-us",
    siteName: "WebXArtist Institute & Agency",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "Why Choose WebXArtist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  // ✅ COMBINED SCHEMA (BEST PRACTICE)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webxartist.com/#organization",
        name: "WebXArtist Institute & Agency",
        url: "https://webxartist.com",
        logo: "https://webxartist.com/logo.png",
        description:
          "WebXArtist Institute & Agency provides website development, branding, SEO, and digital marketing services across Mumbai, Thane, Mumbra, and India.",
        sameAs: [
          "https://www.instagram.com/webxartist",
          "https://www.facebook.com/webxartist",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbra",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://webxartist.com/why-us#webpage",
        url: "https://webxartist.com/why-us",
        name: "Why Choose WebXArtist",
        isPartOf: {
          "@id": "https://webxartist.com/#organization",
        },
        description:
          "Reasons to choose WebXArtist for website development, branding, SEO, and digital marketing services.",
      },
    ],
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="pt-16">
        <WhyChooseUs />
        <Workdone />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
