import React from "react";
import Service from "../Components/Service";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

// ⭐ SEO METADATA (FIXED)
export const metadata = {
  title:
    "Our Services | Web Development, Branding & Digital Marketing in Mumbra – WebXArtist",
  description:
    "WebXArtist Institute & Agency offers professional website development, branding, SEO, digital marketing, graphic design, SMM, and video editing services in Mumbai, Thane, and Mumbra.",

  alternates: {
    canonical: "https://webxartist.com/service",
  },

  openGraph: {
    title: "WebXArtist Services – Web Development & Digital Marketing",
    description:
      "Explore web development, branding, SEO, social media marketing, graphic design, and video editing services by WebXArtist.",
    url: "https://webxartist.com/service",
    siteName: "WebXArtist Institute & Agency",
    images: [
      {
        url: "/services-banner.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  // ⭐ SERVICE SCHEMA (CORRECT)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://webxartist.com/service#service",
    name: "Web Development & Digital Marketing Services",
    description:
      "Professional web development, branding, SEO, digital marketing, graphic design, and social media services for businesses.",
    provider: {
      "@type": "Organization",
      name: "WebXArtist Institute & Agency",
      url: "https://webxartist.com",
      logo: "https://webxartist.com/logo.png",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Mumbai, Thane, Mumbra, Navi Mumbai, India",
    },
    serviceType:
      "Website development, branding, SEO, graphic design, social media marketing, video editing",
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="pt-16">
        <Service />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
