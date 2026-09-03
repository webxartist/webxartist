import { notFound } from "next/navigation";
import services from "@/data/services";

import ServiceHero from "@/app/Components/services/ServicesHero";
import ServiceOverview from "@/app/Components/services/ServicesOverview";
import ServiceFeatures from "@/app/Components/services/ServicesFeatures";
import ServiceProcess from "@/app/Components/services/ServiceProcess";
import ServiceBenefits from "@/app/Components/services/ServiceBenefits";
import ServiceTechnologies from "@/app/Components/services/ServiceTechnologies";
import ServiceFAQ from "@/app/Components/services/ServiceFaq";
import RelatedServices from "@/app/Components/services/RelatedServices";
import ServiceCTA from "@/app/Components/services/ServiceCTA";
import ServiceLocations from "@/app/Components/services/ServiceLocation";

const baseUrl = "https://www.webxartist.com";
const siteName = "WebXArtist Institute & Agency";
const brandName = "WebXArtist";

/*
|--------------------------------------------------------------------------
| SERVICE AREAS
|--------------------------------------------------------------------------
|
| Keep this synchronized with your service-location data.
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

export const dynamicParams = false;

/*
|--------------------------------------------------------------------------
| STATIC PARAMS
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| METADATA
|--------------------------------------------------------------------------
*/

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  /*
  |--------------------------------------------------------------------------
  | SERVICE NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!service) {
    return {
      title: `Service Not Found | ${brandName}`,

      description: "The requested service could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  /*
  |--------------------------------------------------------------------------
  | SERVICE URL
  |--------------------------------------------------------------------------
  */

  const serviceUrl = `${baseUrl}/Services/${service.slug}`;

  /*
  |--------------------------------------------------------------------------
  | TITLE
  |--------------------------------------------------------------------------
  */

  const title = service.seo?.title || `${service.name} Services | ${brandName}`;

  /*
  |--------------------------------------------------------------------------
  | DESCRIPTION
  |--------------------------------------------------------------------------
  */

  const description =
    service.seo?.description ||
    service.shortDescription ||
    service.description ||
    `${service.name} services by ${siteName}.`;

  /*
  |--------------------------------------------------------------------------
  | IMAGE
  |--------------------------------------------------------------------------
  */

  const imageUrl = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${
          service.heroImage.startsWith("/") ? "" : "/"
        }${service.heroImage}`
    : `${baseUrl}/logo.png`;

  /*
  |--------------------------------------------------------------------------
  | KEYWORDS
  |--------------------------------------------------------------------------
  |
  | Keep the service page focused on the service itself.
  | Location-specific keywords are handled by the dynamic
  | service/location pages.
  |
  */

  const defaultKeywords = [
    service.name,
    `${service.name} services`,
    `${service.name} company`,
    `${service.name} agency`,
    `${service.name} India`,
    `${brandName}`,
    `${siteName}`,
  ];

  const keywords = Array.isArray(service.seo?.keywords)
    ? [...new Set([...service.seo.keywords, brandName, siteName])]
    : defaultKeywords;

  /*
  |--------------------------------------------------------------------------
  | RETURN METADATA
  |--------------------------------------------------------------------------
  */

  return {
    metadataBase: new URL(baseUrl),

    title,

    description,

    keywords,

    /*
    |--------------------------------------------------------------------------
    | CANONICAL
    |--------------------------------------------------------------------------
    */

    alternates: {
      canonical: serviceUrl,
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
      title,

      description,

      url: serviceUrl,

      siteName,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: imageUrl,

          width: 1200,

          height: 630,

          alt: `${service.name} Services | ${brandName}`,
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

      title,

      description,

      images: [imageUrl],
    },
  };
}

/*
|--------------------------------------------------------------------------
| SERVICE PAGE
|--------------------------------------------------------------------------
*/

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  /*
  |--------------------------------------------------------------------------
  | SERVICE NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!service) {
    notFound();
  }

  /*
  |--------------------------------------------------------------------------
  | SERVICE URL
  |--------------------------------------------------------------------------
  */

  const serviceUrl = `${baseUrl}/Services/${service.slug}`;

  /*
  |--------------------------------------------------------------------------
  | SERVICE IMAGE
  |--------------------------------------------------------------------------
  */

  const serviceImage = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${
          service.heroImage.startsWith("/") ? "" : "/"
        }${service.heroImage}`
    : `${baseUrl}/logo.png`;

  /*
  |--------------------------------------------------------------------------
  | SERVICE DESCRIPTION
  |--------------------------------------------------------------------------
  */

  const serviceDescription =
    service.description ||
    service.shortDescription ||
    `${service.name} services provided by ${siteName}.`;

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
  | SERVICE SCHEMA
  |--------------------------------------------------------------------------
  */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${serviceUrl}#service`,

    name: service.name,

    serviceType: service.name,

    description: serviceDescription,

    url: serviceUrl,

    image: serviceImage,

    provider: {
      "@id": `${baseUrl}/#organization`,
    },

    areaServed: serviceAreas,

    availableChannel: {
      "@type": "ServiceChannel",

      serviceUrl,

      availableLanguage: ["English", "Hindi"],
    },
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
  | WEBPAGE SCHEMA
  |--------------------------------------------------------------------------
  */

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${serviceUrl}#webpage`,

    url: serviceUrl,

    name: service.seo?.title || `${service.name} Services | ${siteName}`,

    description:
      service.seo?.description ||
      service.shortDescription ||
      service.description ||
      serviceDescription,

    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },

    about: {
      "@id": `${serviceUrl}#service`,
    },

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url: serviceImage,
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

    "@id": `${serviceUrl}#breadcrumb`,

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

        item: `${baseUrl}/Services`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: service.name,

        item: serviceUrl,
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
    serviceSchema,
    webPageSchema,
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
        className="overflow-hidden bg-[#080a20] text-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* HERO */}

        <ServiceHero service={service} />

        {/* OVERVIEW */}

        <ServiceOverview service={service} />

        {/* FEATURES */}

        <ServiceFeatures service={service} />

        {/* PROCESS */}

        <ServiceProcess service={service} />

        {/* BENEFITS */}

        <ServiceBenefits service={service} />

        {/* TECHNOLOGIES */}

        <ServiceTechnologies service={service} />

        {/* SERVICE LOCATIONS */}

        <ServiceLocations service={service} />

        {/* FAQ */}

        <ServiceFAQ service={service} />

        {/* RELATED SERVICES */}

        <RelatedServices
          currentSlug={service.slug}
          category={service.category}
        />

        {/* CTA */}

        <ServiceCTA service={service} />
      </main>
    </>
  );
}
