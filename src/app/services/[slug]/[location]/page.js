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
  const countryName = location.country || "India";

  const canonicalUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

  /*
  |--------------------------------------------------------------------------
  | SEO Title
  |--------------------------------------------------------------------------
  |
  | Keep the primary service + location combination near the beginning.
  |
  */

  const title = `${serviceName} in ${cityName} | ${brandName}`;

  /*
  |--------------------------------------------------------------------------
  | SEO Description
  |--------------------------------------------------------------------------
  |
  | Prefer service-specific location content when available.
  | This avoids making every location page use the same generic description.
  |
  */

  const description =
    location.serviceDescription ||
    location.description ||
    `${serviceName} services in ${cityName}, ${stateName} by ${brandName}, helping businesses with digital solutions, online visibility and growth.`;

  /*
  |--------------------------------------------------------------------------
  | Keywords
  |--------------------------------------------------------------------------
  |
  | Keywords are supporting metadata only.
  | Avoid excessive keyword repetition.
  |
  */

  const locationKeywords = [
    `${serviceName} in ${cityName}`,
    `${serviceName} ${cityName}`,
    `${serviceName} services in ${cityName}`,
    `${serviceName.toLowerCase()} company in ${cityName}`,
    `${serviceName.toLowerCase()} agency in ${cityName}`,
    `${serviceName.toLowerCase()} services ${cityName}`,
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

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,
    keywords,

    /*
    |--------------------------------------------------------------------------
    | Canonical
    |--------------------------------------------------------------------------
    */

    alternates: {
      canonical: canonicalUrl,
    },

    /*
    |--------------------------------------------------------------------------
    | Robots
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
    | Open Graph
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Twitter
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

    areaServed: [
      {
        "@type": "City",
        name: "Mumbra",
      },

      {
        "@type": "City",
        name: "Thane",
      },

      {
        "@type": "City",
        name: "Mumbai",
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

      {
        "@type": "Country",
        name: "India",
      },
    ],
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
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {/* Breadcrumb Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Service Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* WebPage Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Organization Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* FAQ Schema */}

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

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
