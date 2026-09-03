import services from "@/data/services";

import Service from "../Components/Service";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

const baseUrl = "https://www.webxartist.com";
const servicesUrl = `${baseUrl}/Services`;
const siteName = "WebXArtist Institute & Agency";
const brandName = "WebXArtist";

/*
|--------------------------------------------------------------------------
| SERVICE AREAS
|--------------------------------------------------------------------------
|
| Keep this list synchronized with your service-location pages.
|
*/

const serviceAreas = [
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
    name: "Navi Mumbai",
  },

  {
    "@type": "City",
    name: "Mumbra",
  },

  {
    "@type": "City",
    name: "Panvel",
  },

  {
    "@type": "City",
    name: "Pune",
  },

  {
    "@type": "City",
    name: "Kalyan",
  },

  {
    "@type": "City",
    name: "Dombivli",
  },

  {
    "@type": "City",
    name: "Bhiwandi",
  },

  {
    "@type": "City",
    name: "Mira Road",
  },

  {
    "@type": "City",
    name: "Vasai",
  },

  {
    "@type": "City",
    name: "Virar",
  },
];

/*
|--------------------------------------------------------------------------
| METADATA
|--------------------------------------------------------------------------
*/

export const metadata = {
  title: "Website Development & Digital Marketing Services | WebXArtist",

  description:
    "WebXArtist Institute & Agency provides website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation, and website maintenance services for businesses across India.",

  /*
  |--------------------------------------------------------------------------
  | KEYWORDS
  |--------------------------------------------------------------------------
  |
  | Keep this focused on the main service categories.
  | Location-specific search intent is handled by the
  | individual service/location pages.
  |
  */

  keywords: [
    // Website Development
    "website development",
    "website development services",
    "website development company",
    "website development agency",
    "web development",
    "web development services",
    "business website development",
    "custom website development",
    "responsive website development",
    "ecommerce website development",
    "Next.js development",
    "MERN Stack development",
    "custom web application development",

    // SEO
    "SEO services",
    "SEO company",
    "SEO agency",
    "search engine optimization",
    "local SEO services",
    "technical SEO",
    "on page SEO",

    // Digital Marketing
    "digital marketing",
    "digital marketing services",
    "digital marketing agency",
    "online marketing services",
    "digital marketing company",

    // Google Ads
    "Google Ads",
    "Google Ads management",
    "Google Ads agency",
    "Google Ads services",

    // Meta Ads
    "Meta Ads",
    "Meta Ads management",
    "Facebook Ads",
    "Instagram Ads",
    "social media advertising",

    // Google Business Profile
    "Google Business Profile",
    "Google Business Profile optimization",
    "Google My Business",
    "Google Maps business optimization",

    // Social Media
    "social media management",
    "social media marketing",
    "social media marketing services",
    "social media agency",

    // Content
    "content creation",
    "content creation services",
    "digital content creation",

    // Website Support
    "website maintenance",
    "website maintenance services",
    "website support",
    "website management",

    // Brand
    brandName,
    siteName,
  ],

  /*
  |--------------------------------------------------------------------------
  | CANONICAL
  |--------------------------------------------------------------------------
  */

  alternates: {
    canonical: servicesUrl,
  },

  /*
  |--------------------------------------------------------------------------
  | ROBOTS
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | OPEN GRAPH
  |--------------------------------------------------------------------------
  */

  openGraph: {
    title: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Explore website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services by WebXArtist.",

    url: servicesUrl,

    siteName,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: `${baseUrl}/Services-banner.png`,

        width: 1200,

        height: 630,

        alt: "WebXArtist Website Development and Digital Marketing Services",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | TWITTER
  |--------------------------------------------------------------------------
  */

  twitter: {
    card: "summary_large_image",

    title: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Website development, SEO, Google Ads, Meta Ads, Google Business Profile, social media management, content creation and website maintenance services by WebXArtist.",

    images: [`${baseUrl}/Services-banner.png`],
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
  | ORGANIZATION SCHEMA
  |--------------------------------------------------------------------------
  */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    name: siteName,

    alternateName: brandName,

    url: baseUrl,

    logo: {
      "@type": "ImageObject",

      url: `${baseUrl}/logo.png`,
    },

    founder: {
      "@type": "Person",

      name: "Zahid Khan",
    },

    foundingDate: "2024-01-20",

    description:
      "WebXArtist Institute & Agency provides website development, SEO, digital marketing, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services.",

    areaServed: serviceAreas,
  };

  /*
  |--------------------------------------------------------------------------
  | WEBSITE SCHEMA
  |--------------------------------------------------------------------------
  */

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${baseUrl}/#website`,

    name: brandName,

    alternateName: siteName,

    url: baseUrl,

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: "en-IN",
  };

  /*
  |--------------------------------------------------------------------------
  | SERVICE LIST SCHEMA
  |--------------------------------------------------------------------------
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

      url: `${baseUrl}/Services/${service.slug}`,
    })),
  };

  /*
  |--------------------------------------------------------------------------
  | COLLECTION PAGE SCHEMA
  |--------------------------------------------------------------------------
  */

  const collectionPageSchema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "@id": `${servicesUrl}#webpage`,

    url: servicesUrl,

    name: "Website Development & Digital Marketing Services | WebXArtist",

    description:
      "Website development, SEO, Google Ads, Meta Ads, Google Business Profile optimization, social media management, content creation and website maintenance services by WebXArtist.",

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
  | BREADCRUMB SCHEMA
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
  | STRUCTURED DATA
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
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main
        className="pt-16"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        <Service />
      </main>

      <Whatsapp />

      <Instagram />
    </>
  );
}
