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

/*
|--------------------------------------------------------------------------
| Static Service + Location Pages
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
| SEO Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const { slug, location: locationSlug } = resolvedParams;

  const page = getServiceLocation(slug, locationSlug);

  if (!page) {
    return {
      title: "Page Not Found | WebXArtist",
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

  /*
  |--------------------------------------------------------------------------
  | Canonical URL
  |--------------------------------------------------------------------------
  */

  const canonicalUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

  /*
  |--------------------------------------------------------------------------
  | SEO Title
  |--------------------------------------------------------------------------
  */

  const title = `${serviceName} in ${cityName} | WebXArtist`;

  /*
  |--------------------------------------------------------------------------
  | SEO Description
  |--------------------------------------------------------------------------
  |
  | The description is generated from the service + location.
  | This prevents all location pages from having the same metadata.
  |
  */

  const description =
    `${serviceName.toLowerCase()} services in ${cityName}. ` +
    `Get customized digital solutions designed to help businesses improve their online presence, visibility, and growth.`;

  /*
  |--------------------------------------------------------------------------
  | SEO Keywords
  |--------------------------------------------------------------------------
  */

  const keywords = [
    `${serviceName} in ${cityName}`,
    `${serviceName} ${cityName}`,
    `${serviceName} services in ${cityName}`,
    `${serviceName.toLowerCase()} company in ${cityName}`,
    `${serviceName.toLowerCase()} agency in ${cityName}`,
    `${serviceName.toLowerCase()} services ${cityName}`,
    `WebXArtist ${serviceName} ${cityName}`,
  ];

  return {
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

      siteName: "WebXArtist",

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: service.heroImage || "/about.png",
          width: 1200,
          height: 630,
          alt: `${serviceName} in ${cityName} | WebXArtist`,
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

      images: [service.heroImage || "/about.png"],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function Page({ params }) {
  const resolvedParams = await params;

  const { slug, location: locationSlug } = resolvedParams;

  const page = getServiceLocation(slug, locationSlug);

  /*
  |--------------------------------------------------------------------------
  | Invalid Service / Location
  |--------------------------------------------------------------------------
  */

  if (!page) {
    notFound();
  }

  const { service, location } = page;

  const serviceName = service.name;

  const cityName = location.city;

  /*
  |--------------------------------------------------------------------------
  | Page URL
  |--------------------------------------------------------------------------
  */

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
      href: "/Service",
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
  | Service Schema
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  |
  | Location description is used first.
  | If location.description doesn't exist,
  | service.description is used.
  |
  |--------------------------------------------------------------------------
  */

  const serviceDescription =
    location.description ||
    service.description ||
    `${serviceName} services provided by WebXArtist for businesses in ${cityName}, Maharashtra.`;

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

      name: "WebXArtist Institute & Agency",

      alternateName: "WebXArtist",

      url: baseUrl,

      logo: `${baseUrl}/logo.png`,
    },

    areaServed: {
      "@type": "City",

      name: cityName,

      containedInPlace: {
        "@type": "State",

        name: "Maharashtra",

        containedInPlace: {
          "@type": "Country",

          name: "India",
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
    `Professional ${serviceName.toLowerCase()} services in ${cityName} provided by WebXArtist.`;

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: `${serviceName} in ${cityName} | WebXArtist`,

    description: webPageDescription,

    isPartOf: {
      "@type": "WebSite",

      "@id": `${baseUrl}/#website`,

      name: "WebXArtist",

      url: baseUrl,
    },

    about: {
      "@id": `${pageUrl}#service`,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    inLanguage: "en-IN",
  };

  /*
  |--------------------------------------------------------------------------
  | Organization Schema
  |--------------------------------------------------------------------------
  |
  | Same organization identity throughout the website.
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
  |
  | Only create FAQ schema when actual FAQ data exists.
  |
  */

  const faqItems = Array.isArray(location.faqs)
    ? location.faqs
    : Array.isArray(service.faqs)
      ? service.faqs
      : [];

  const validFaqItems = faqItems.filter(
    (faq) =>
      faq && typeof faq.question === "string" && typeof faq.answer === "string",
  );

  const faqSchema =
    validFaqItems.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          mainEntity: validFaqItems.map((faq) => ({
            "@type": "Question",

            name: faq.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: faq.answer,
            },
          })),
        }
      : null;

  /*
  |--------------------------------------------------------------------------
  | Render Page
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {/* ------------------------------------------------------------
          Breadcrumb Schema
      ------------------------------------------------------------- */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ------------------------------------------------------------
          Service Schema
      ------------------------------------------------------------- */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* ------------------------------------------------------------
          WebPage Schema
      ------------------------------------------------------------- */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* ------------------------------------------------------------
          Organization Schema
      ------------------------------------------------------------- */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* ------------------------------------------------------------
          FAQ Schema
      ------------------------------------------------------------- */}

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* ------------------------------------------------------------
          PAGE
      ------------------------------------------------------------- */}

      <main className="overflow-hidden bg-[#080a20] text-white">
        {/* ----------------------------------------------------------
            Breadcrumb
        ----------------------------------------------------------- */}

        <div className="mx-auto max-w-7xl px-6 pt-32">
          <Breadcrumb items={breadcrumb} />
        </div>

        {/* ----------------------------------------------------------
            Hero
        ----------------------------------------------------------- */}

        <ServiceLocationHero service={service} location={location} />

        {/* ----------------------------------------------------------
            Overview
        ----------------------------------------------------------- */}

        <ServiceLocationOverview service={service} location={location} />

        {/* ----------------------------------------------------------
            Features
        ----------------------------------------------------------- */}

        <ServiceLocationFeatures service={service} location={location} />

        {/* ----------------------------------------------------------
            Process
        ----------------------------------------------------------- */}

        <ServiceLocationProcess service={service} location={location} />

        {/* ----------------------------------------------------------
            Benefits
        ----------------------------------------------------------- */}

        <ServiceLocationBenefits service={service} location={location} />

        {/* ----------------------------------------------------------
            Technologies
        ----------------------------------------------------------- */}

        <ServiceLocationTechnologies service={service} location={location} />

        {/* ----------------------------------------------------------
            FAQ
        ----------------------------------------------------------- */}

        <ServiceLocationFAQ service={service} location={location} />

        {/* ----------------------------------------------------------
            Related Locations
        ----------------------------------------------------------- */}

        <RelatedLocations service={service} currentLocation={location.slug} />

        {/* ----------------------------------------------------------
            Related Services
        ----------------------------------------------------------- */}

        <RelatedServices location={location} currentService={service.slug} />
      </main>
    </>
  );
}
