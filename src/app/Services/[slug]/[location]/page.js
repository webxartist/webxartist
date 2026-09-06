import { notFound } from "next/navigation";

import {
  getAllServiceLocationPages,
  getServiceLocation,
} from "@/lib/serviceLocation";

import Breadcrumb from "@/app/Components/common/Breadcrumb";

import ServiceLocationHero from "@/app/Components/serviceLocation/ServiceLocationHero";
import ServiceLocationOverview from "@/app/Components/serviceLocation/ServiceLocationOverview";
import ServiceLocationFeatures from "@/app/Components/serviceLocation/ServiceLocationFeature";
import ServiceLocationProcess from "@/app/Components/serviceLocation/ServiceLocationProcess";
import ServiceLocationBenefits from "@/app/Components/serviceLocation/ServiceLocationBenefits";
import ServiceLocationTechnologies from "@/app/Components/serviceLocation/ServiceLocationTechnologies";
import ServiceLocationFAQ from "@/app/Components/serviceLocation/ServiceLocationFAQ";
import RelatedLocations from "@/app/Components/serviceLocation/RelatedLocations";
import RelatedServices from "@/app/Components/serviceLocation/RelatedServices";

const baseUrl = "https://www.webxartist.com";
const siteName = "WebXArtist Institute & Agency";
const brandName = "WebXArtist";

/*
|--------------------------------------------------------------------------
| Service Areas
|--------------------------------------------------------------------------
|
| These are the locations WebXArtist currently serves.
| Keep this list synchronized with your service-location data.
|
*/

const serviceAreas = [
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
| Static Params
|--------------------------------------------------------------------------
*/

export async function generateStaticParams() {
  return getAllServiceLocationPages().map(({ service, location }) => ({
    slug: service.slug,
    location: location.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({ params }) {
  const { slug, location: locationSlug } = await params;

  const page = getServiceLocation(slug, locationSlug);

  if (!page) {
    return {
      title: `Page Not Found | ${brandName}`,

      description: "The requested page could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { service, location } = page;

  const serviceName = service.name;
  const cityName = location.city;
  const stateName = location.state || "Maharashtra";

  const canonicalUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

  /*
  |--------------------------------------------------------------------------
  | SEO Title
  |--------------------------------------------------------------------------
  */

  const title = `${serviceName} in ${cityName} | ${brandName}`;

  /*
  |--------------------------------------------------------------------------
  | SEO Description
  |--------------------------------------------------------------------------
  */

  const description =
    location.serviceDescription ||
    location.description ||
    `${serviceName} services in ${cityName}, ${stateName} by ${brandName}, helping businesses improve their online presence and digital growth.`;

  /*
  |--------------------------------------------------------------------------
  | Keywords
  |--------------------------------------------------------------------------
  |
  | Keep keywords focused on the actual service + location.
  | Avoid large keyword lists and unnecessary repetition.
  |
  */

  const locationKeywords = [
    `${serviceName} in ${cityName}`,
    `${serviceName} services in ${cityName}`,
    `${serviceName} ${cityName}`,
    `${serviceName.toLowerCase()} company in ${cityName}`,
    `${serviceName.toLowerCase()} agency in ${cityName}`,
    `${serviceName} in ${cityName}, ${stateName}`,
    `${brandName} ${serviceName} ${cityName}`,
  ];

  const serviceKeywords = Array.isArray(service.seo?.keywords)
    ? service.seo.keywords
    : [];

  const locationTopics = Array.isArray(location.relatedTopics)
    ? location.relatedTopics
    : [];

  const keywords = [
    ...new Set([...locationKeywords, ...serviceKeywords, ...locationTopics]),
  ];

  /*
  |--------------------------------------------------------------------------
  | Social Image
  |--------------------------------------------------------------------------
  */

  const imageUrl = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${
          service.heroImage.startsWith("/") ? "" : "/"
        }${service.heroImage}`
    : `${baseUrl}/about.png`;

  /*
  |--------------------------------------------------------------------------
  | Metadata
  |--------------------------------------------------------------------------
  */

  return {
    metadataBase: new URL(baseUrl),

    title,

    description,

    keywords,

    alternates: {
      canonical: canonicalUrl,
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
      title,

      description,

      url: canonicalUrl,

      siteName,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: imageUrl,

          width: 1200,

          height: 630,

          alt: `${serviceName} in ${cityName} | ${brandName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [imageUrl],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function Page({ params }) {
  const { slug, location: locationSlug } = await params;

  const page = getServiceLocation(slug, locationSlug);

  if (!page) {
    notFound();
  }

  const { service, location } = page;

  const serviceName = service.name;

  const cityName = location.city;

  const stateName = location.state || "Maharashtra";

  const countryName = location.country || "India";

  const pageUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

  /*
  |--------------------------------------------------------------------------
  | Breadcrumb
  |--------------------------------------------------------------------------
  */

  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Services",
      href: "/services",
    },

    {
      label: service.name,
      href: `/services/${service.slug}`,
    },

    {
      label: cityName,
      href: `/services/${service.slug}/${location.slug}`,
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Breadcrumb Schema
  |--------------------------------------------------------------------------
  */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": `${pageUrl}#breadcrumb`,

    itemListElement: breadcrumb.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.label,

      item: `${baseUrl}${item.href}`,
    })),
  };

  /*
  |--------------------------------------------------------------------------
  | Service Description
  |--------------------------------------------------------------------------
  */

  const serviceDescription =
    location.serviceDescription ||
    location.description ||
    service.description ||
    `${serviceName} services provided by ${brandName} for businesses in ${cityName}, ${stateName}.`;

  /*
  |--------------------------------------------------------------------------
  | Service Schema
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  | This schema describes THIS service in THIS location.
  |
  | Example:
  | Google Ads + Mira Road
  |
  | It does not claim that this particular Service entity is
  | located in all 12 service areas.
  |
  */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${pageUrl}#service`,

    name: `${serviceName} in ${cityName}`,

    serviceType: serviceName,

    description: serviceDescription,

    url: pageUrl,

    provider: {
      "@type": "Organization",

      "@id": `${baseUrl}/#organization`,

      name: siteName,

      url: baseUrl,
    },

    areaServed: {
      "@type": "City",

      name: cityName,

      containedInPlace: {
        "@type": "State",

        name: stateName,

        containedInPlace: {
          "@type": "Country",

          name: countryName,
        },
      },
    },
  };

  /*
  |--------------------------------------------------------------------------
  | WebPage Schema
  |--------------------------------------------------------------------------
  */

  const webPageDescription =
    location.description ||
    service.description ||
    `${serviceName} services in ${cityName} provided by ${brandName}.`;

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: `${serviceName} in ${cityName} | ${brandName}`,

    description: webPageDescription,

    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}#service`,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    mainEntity: {
      "@id": `${pageUrl}#service`,
    },

    inLanguage: "en-IN",
  };

  /*
  |--------------------------------------------------------------------------
  | Organization Schema
  |--------------------------------------------------------------------------
  |
  | This represents the company and its overall service areas.
  |
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

    address: {
      "@type": "PostalAddress",

      addressLocality: "Mumbra",

      addressRegion: "Maharashtra",

      addressCountry: "IN",
    },

    areaServed: serviceAreas,
  };

  /*
  |--------------------------------------------------------------------------
  | WebSite Schema
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
  | FAQ Schema
  |--------------------------------------------------------------------------
  */

  const faqItems = Array.isArray(location.faqs)
    ? location.faqs
    : Array.isArray(service.faqs)
      ? service.faqs
      : [];

  const validFaqItems = faqItems.filter(
    (faq) =>
      faq &&
      typeof faq.question === "string" &&
      faq.question.trim() !== "" &&
      typeof faq.answer === "string" &&
      faq.answer.trim() !== "",
  );

  const faqSchema =
    validFaqItems.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          "@id": `${pageUrl}#faq`,

          mainEntity: validFaqItems.map((faq) => ({
            "@type": "Question",

            name: faq.question.trim(),

            acceptedAnswer: {
              "@type": "Answer",

              text: faq.answer.trim(),
            },
          })),
        }
      : null;

  /*
  |--------------------------------------------------------------------------
  | Structured Data
  |--------------------------------------------------------------------------
  */

  const structuredData = [
    breadcrumbSchema,
    serviceSchema,
    webPageSchema,
    organizationSchema,
    websiteSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="overflow-hidden bg-[#080a20] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-32">
          <Breadcrumb items={breadcrumb} />
        </div>

        <ServiceLocationHero service={service} location={location} />

        <ServiceLocationOverview service={service} location={location} />

        <ServiceLocationFeatures service={service} location={location} />

        <ServiceLocationProcess service={service} location={location} />

        <ServiceLocationBenefits service={service} location={location} />

        <ServiceLocationTechnologies service={service} location={location} />

        <ServiceLocationFAQ service={service} location={location} />

        <RelatedLocations service={service} currentLocation={location.slug} />

        <RelatedServices location={location} currentService={service.slug} />
      </main>
    </>
  );
}
