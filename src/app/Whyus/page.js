import WhyHero from "@/app/Components/whychooseus/WhyHero";
import WhyStats from "@/app/Components/whychooseus/WhyStats";
import WhyFeatures from "@/app/Components/whychooseus/WhyFeatures";

import WhyTechnology from "@/app/Components/whychooseus/WhyTechnology";
import WhyProjects from "@/app/Components/whychooseus/WhyProjects";
import WhyTestimonials from "@/app/Components/whychooseus/WhyTestimonials";
import WhyFAQ from "@/app/Components/whychooseus/WhyFaq";
import WhyCTA from "@/app/Components/whychooseus/WhyCTA";

import Whatsapp from "@/app/Components/WhatsApp";
import Instagram from "@/app/Components/Instgram";

// ✅ SEO Metadata
export const metadata = {
  title:
    "Why Choose WebXArtist | Website Development, Branding & Digital Marketing Company",

  description:
    "Discover why businesses across India trust WebXArtist for website development, branding, SEO, digital marketing, graphic design, and complete business growth solutions.",

  alternates: {
    canonical: "https://webxartist.com/Whyus",
  },

  openGraph: {
    title: "Why Choose WebXArtist",

    description:
      "Professional website development, branding, SEO, graphic design and digital marketing services for startups and businesses.",

    url: "https://webxartist.com/Whyus",

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
          "Professional website development, branding, SEO, social media marketing and digital marketing services across India.",

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

        "@id": "https://webxartist.com/Whyus#webpage",

        url: "https://webxartist.com/Whyus",

        name: "Why Choose WebXArtist",

        description:
          "Learn why WebXArtist is trusted for website development, branding, SEO, digital marketing and complete business growth solutions.",

        isPartOf: {
          "@id": "https://webxartist.com/#organization",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="pt-16">
        <WhyHero />

        <WhyStats />

        <WhyFeatures />

        <WhyTechnology />

        <WhyProjects />

        <WhyTestimonials />

        <WhyFAQ />

        <WhyCTA />
      </div>

      <Whatsapp />

      <Instagram />
    </>
  );
}
