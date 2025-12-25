import React from "react";
import WhyChooseUs from "../Components/whychooseus";
import Workdone from "../Components/Workdone";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

// ✅ PAGE METADATA (SEO)
export const metadata = {
  title:
    "Why Choose WebXArtist | Affordable Website Developer Mumbai, Thane, Mumbra",
  description:
    "Discover why WebXArtist is the most trusted and affordable website developer in Mumbai, Thane, Mumbra & Navi Mumbai. High-quality websites, branding, SEO & digital marketing.",
  keywords: [
    "website developer Mumbai",
    "web designer Thane",
    "best web agency Mumbra",
    "affordable website development India",
    "WebXArtist",
    "React website designer Mumbai",
  ],
  alternates: {
    canonical: "https://webxartist.com/Whyus",
  },
  openGraph: {
    title: "Why Choose WebXArtist | Best Website & Branding Agency",
    description:
      "High-quality website development, branding, and SEO services. Affordable & trusted agency in Mumbai, Thane and Mumbra.",
    url: "https://webxartist.com/Whyus",
    siteName: "WebXArtist",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist - Why Choose Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  // ✅ ORGANIZATION SCHEMA FOR GOOGLE
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebXArtist",
    url: "https://webxartist.com",
    logo: "https://yourdomain.com/logo.png",
    description:
      "WebXArtist provides website development, branding, SEO, and marketing services across Mumbai, Thane, Mumbra and all over India.",
    areaServed: ["Mumbai", "Thane", "Mumbra", "Navi Mumbai", "India"],
    sameAs: [
      "https://instagram.com/webxartist",
      "https://facebook.com/webxartist",
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Page Layout */}
      <div className="pt-16">
        <WhyChooseUs />
        <Workdone />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
