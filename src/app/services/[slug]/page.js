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

/* -------------------------------------------------------------------------- */
/* SERVICE AREAS                                                              */
/* -------------------------------------------------------------------------- */

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
];

/* -------------------------------------------------------------------------- */
/* STATIC PARAMS                                                             */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* DYNAMIC METADATA                                                           */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: `Service Not Found | ${siteName}`,
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = service.seo?.title || `${service.name} Services | ${siteName}`;

  const description =
    service.seo?.description ||
    service.shortDescription ||
    service.description ||
    `Professional ${service.name.toLowerCase()} services by ${siteName}.`;

  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const imageUrl = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${service.heroImage}`
    : `${baseUrl}/logo.png`;

  const keywords = service.seo?.keywords || [
    service.name,
    `${service.name} services`,
    `${service.name} company`,
    `${service.name} agency`,
    `${service.name} India`,
    `${service.name} Mumbai`,
    `${service.name} Thane`,
    `${service.name} Mumbra`,
    `${service.name} Navi Mumbai`,
    `${service.name} Panvel`,
    `${service.name} Pune`,
    "WebXArtist",
    siteName,
  ];

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: serviceUrl,
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
      url: serviceUrl,
      siteName,
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.name} Services - WebXArtist`,
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

/* -------------------------------------------------------------------------- */
/* SERVICE PAGE                                                              */
/* -------------------------------------------------------------------------- */

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const serviceImage = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${service.heroImage}`
    : `${baseUrl}/logo.png`;

  const serviceDescription =
    service.description ||
    service.shortDescription ||
    `${service.name} services provided by ${siteName}.`;

  /* ------------------------------------------------------------------------ */
  /* ORGANIZATION SCHEMA                                                     */
  /* ------------------------------------------------------------------------ */

  const organizationSchema = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    alternateName: "WebXArtist",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
    },
  };

  /* ------------------------------------------------------------------------ */
  /* SERVICE SCHEMA                                                          */
  /* ------------------------------------------------------------------------ */

  const serviceSchema = {
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
      serviceUrl: serviceUrl,
      availableLanguage: ["English", "Hindi"],
    },
  };

  /* ------------------------------------------------------------------------ */
  /* WEBSITE SCHEMA                                                          */
  /* ------------------------------------------------------------------------ */

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,

    name: "WebXArtist",
    alternateName: siteName,

    url: baseUrl,

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: "en-IN",
  };

  /* ------------------------------------------------------------------------ */
  /* WEBPAGE SCHEMA                                                          */
  /* ------------------------------------------------------------------------ */

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${serviceUrl}#webpage`,

    url: serviceUrl,

    name: service.seo?.title || `${service.name} Services | ${siteName}`,

    description:
      service.seo?.description ||
      service.shortDescription ||
      service.description,

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

  /* ------------------------------------------------------------------------ */
  /* BREADCRUMB SCHEMA                                                       */
  /* ------------------------------------------------------------------------ */

  const breadcrumbSchema = {
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
        item: `${baseUrl}/Service`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: serviceUrl,
      },
    ],
  };

  /* ------------------------------------------------------------------------ */
  /* STRUCTURED DATA                                                         */
  /* ------------------------------------------------------------------------ */

  const structuredData = [
    {
      "@context": "https://schema.org",
      ...organizationSchema,
    },

    {
      "@context": "https://schema.org",
      ...websiteSchema,
    },

    {
      "@context": "https://schema.org",
      ...serviceSchema,
    },

    {
      "@context": "https://schema.org",
      ...webPageSchema,
    },

    {
      "@context": "https://schema.org",
      ...breadcrumbSchema,
    },
  ];

  /* ------------------------------------------------------------------------ */
  /* PAGE                                                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <>
      {/* Structured Data */}

      {structuredData.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* Service Page */}

      <main
        className="overflow-hidden bg-[#080a20] text-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* Hero */}

        <ServiceHero service={service} />

        {/* Overview */}

        <ServiceOverview service={service} />

        {/* Features */}

        <ServiceFeatures service={service} />

        {/* Process */}

        <ServiceProcess service={service} />

        {/* Benefits */}

        <ServiceBenefits service={service} />

        {/* Technologies */}

        <ServiceTechnologies service={service} />

        {/* Locations */}

        <ServiceLocations service={service} />

        {/* FAQ */}

        <ServiceFAQ service={service} />

        {/* Related Services */}

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
