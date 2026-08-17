import services from "@/data/services";

import Service from "../Components/Service";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

const baseUrl = "https://www.webxartist.com";

const servicesUrl = `${baseUrl}/Service`;

/*
|--------------------------------------------------------------------------
| SERVICE PAGE SEO METADATA
|--------------------------------------------------------------------------
*/

export const metadata = {
  title: "Website Development & Digital Marketing Services | WebXArtist",

  description:
    "WebXArtist Institute & Agency provides website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation, and website maintenance services for businesses across India.",

  keywords: [
    // -----------------------------------------------------------------------
    // Website Development
    // -----------------------------------------------------------------------

    "website development",
    "website development services",
    "website development company",
    "website development agency",
    "web development",
    "web development services",
    "web development company",
    "web development agency",
    "business website development",
    "custom website development",
    "responsive website development",

    // -----------------------------------------------------------------------
    // SEO
    // -----------------------------------------------------------------------

    "SEO services",
    "SEO company",
    "SEO agency",
    "search engine optimization",
    "local SEO services",
    "technical SEO",
    "on page SEO",

    // -----------------------------------------------------------------------
    // Digital Marketing
    // -----------------------------------------------------------------------

    "digital marketing",
    "digital marketing services",
    "digital marketing agency",
    "online marketing services",
    "digital marketing company",

    // -----------------------------------------------------------------------
    // Google Ads
    // -----------------------------------------------------------------------

    "Google Ads",
    "Google Ads management",
    "Google Ads agency",
    "Google Ads services",
    "Google search advertising",
    "Google Ads campaign management",

    // -----------------------------------------------------------------------
    // Meta Ads
    // -----------------------------------------------------------------------

    "Meta Ads",
    "Meta Ads management",
    "Facebook Ads",
    "Instagram Ads",
    "Facebook advertising",
    "Instagram advertising",
    "social media advertising",

    // -----------------------------------------------------------------------
    // Google Business Profile
    // -----------------------------------------------------------------------

    "Google Business Profile",
    "Google Business Profile optimization",
    "Google My Business",
    "Google My Business optimization",
    "local business SEO",
    "Google Maps business optimization",

    // -----------------------------------------------------------------------
    // Social Media
    // -----------------------------------------------------------------------

    "social media management",
    "social media marketing",
    "social media marketing services",
    "social media agency",
    "Facebook marketing",
    "Instagram marketing",

    // -----------------------------------------------------------------------
    // Content
    // -----------------------------------------------------------------------

    "content creation",
    "content creation services",
    "digital content creation",
    "social media content",

    // -----------------------------------------------------------------------
    // Website Support
    // -----------------------------------------------------------------------

    "website maintenance",
    "website maintenance services",
    "website support",
    "website management",
    "website security maintenance",

    // -----------------------------------------------------------------------
    // Technology
    // -----------------------------------------------------------------------

    "Next.js development",
    "MERN Stack development",
    "ecommerce website development",
    "custom web application development",

    // -----------------------------------------------------------------------
    // Brand
    // -----------------------------------------------------------------------

    "WebXArtist",
    "WebXArtist Institute & Agency",
  ],

  alternates: {
    canonical: servicesUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Explore website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services by WebXArtist.",

    url: servicesUrl,

    siteName: "WebXArtist Institute & Agency",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: `${baseUrl}/services-banner.png`,
        width: 1200,
        height: 630,
        alt: "WebXArtist Website Development and Digital Marketing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Website development, SEO, Google Ads, Meta Ads, Google Business Profile, social media management, content creation and website maintenance services by WebXArtist.",

    images: [`${baseUrl}/services-banner.png`],
  },
};

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default function Page() {
  /*
  |--------------------------------------------------------------------------
  | Organization Schema
  |--------------------------------------------------------------------------
  |
  | This establishes the main WebXArtist entity.
  |
  */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    name: "WebXArtist Institute & Agency",

    alternateName: "WebXArtist",

    url: baseUrl,

    logo: `${baseUrl}/logo.png`,

    founder: {
      "@type": "Person",
      name: "Zahid Khan",
    },

    foundingDate: "2024-01-20",

    description:
      "WebXArtist Institute & Agency provides website development, SEO, digital marketing, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services.",

    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },

      {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },

      {
        "@type": "City",
        name: "Mumbai",
      },

      {
        "@type": "City",
        name: "Thane",
      },

      {
        "@type": "City",
        name: "Mumbra",
      },

      {
        "@type": "City",
        name: "Navi Mumbai",
      },

      {
        "@type": "City",
        name: "Panvel",
      },

      {
        "@type": "City",
        name: "Pune",
      },
    ],
  };

  /*
  |--------------------------------------------------------------------------
  | Website Schema
  |--------------------------------------------------------------------------
  */

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${baseUrl}/#website`,

    name: "WebXArtist",

    alternateName: "WebXArtist Institute & Agency",

    url: baseUrl,

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: "en-IN",
  };

  /*
  |--------------------------------------------------------------------------
  | ItemList
  |--------------------------------------------------------------------------
  |
  | The Services page is a collection of your actual service pages.
  |
  | Each individual service has its own URL.
  |
  */

  const serviceListSchema = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    "@id": `${servicesUrl}#service-list`,

    name: "WebXArtist Services",

    description:
      "Website development, SEO, digital marketing, advertising, social media, content and website support services offered by WebXArtist.",

    numberOfItems: services.length,

    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: service.name,

      url: `${baseUrl}/services/${service.slug}`,
    })),
  };

  /*
  |--------------------------------------------------------------------------
  | Collection Page Schema
  |--------------------------------------------------------------------------
  */

  const collectionPageSchema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "@id": `${servicesUrl}#webpage`,

    url: servicesUrl,

    name: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Professional website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services by WebXArtist.",

    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    mainEntity: {
      "@id": `${servicesUrl}#service-list`,
    },

    inLanguage: "en-IN",
  };

  /*
  |--------------------------------------------------------------------------
  | Breadcrumb Schema
  |--------------------------------------------------------------------------
  */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": `${servicesUrl}#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: `${baseUrl}/`,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Services",

        item: servicesUrl,
      },
    ],
  };

  /*
  |--------------------------------------------------------------------------
  | Combine Structured Data
  |--------------------------------------------------------------------------
  */

  const structuredData = [
    organizationSchema,
    websiteSchema,
    serviceListSchema,
    collectionPageSchema,
    breadcrumbSchema,
  ];

  /*
  |--------------------------------------------------------------------------
  | PAGE OUTPUT
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {/* ================================================================
          STRUCTURED DATA
      ================================================================= */}

      {structuredData.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* ================================================================
          SERVICES PAGE
      ================================================================= */}

      <main
        className="pt-16"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        <Service />
      </main>

      {/* ================================================================
          CONTACT ACTIONS
      ================================================================= */}

      <Whatsapp />

      <Instagram />
    </>
  );
}
