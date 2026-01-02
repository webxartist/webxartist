import React from "react";
import Service from "../Components/Service";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

// ⭐ SEO Metadata
export const metadata = {
  title:
    "Our Services | Web Development, Branding & Digital Marketing – WebXArtist",
  description:
    "WebXArtist provides website development, graphic design, SEO, digital marketing, SMM, video editing, and branding services across Mumbai, Thane, Mumbra & India.",
  keywords: [
    "web design services near me",
    "website development in mumbai",
    "branding agency mumbai",
    "digital marketing services",
    "graphic design services",
    "website development",
  ],
  alternates: {
    canonical: "https://webxartist/Service",
  },
  openGraph: {
    title: "WebXArtist Services – Web Development & Branding Agency",
    description:
      "Explore premium services like web design, development, branding, SMM, SEO, and more from WebXArtist.",
    url: "https://webxartist/Service",
    siteName: "WebXArtist",
    images: [
      {
        url: "/services-banner.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist Services Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  // ⭐ JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development & Branding Services",
    provider: {
      "@type": "Organization",
      name: "WebXArtist",
      url: "https://webxartist.com",
      logo: "https://webxartist.com/logo.png",
    },
    serviceType:
      "Website design, development, branding, SEO, graphic design, social media management.",
    areaServed: ["Mumbai", "Thane", "Mumbra", "Navi Mumbai", "India"],
  };

  return (
    <>
      {/* ⭐ Inject Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ⭐ Actual Layout */}
      <div className="pt-16">
        <Service />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
}
