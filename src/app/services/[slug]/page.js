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

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

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
    `${service.name.toLowerCase()} services by ${siteName}.`;

  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const imageUrl = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${service.heroImage.startsWith("/") ? "" : "/"}${service.heroImage}`
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
      : `${baseUrl}${service.heroImage.startsWith("/") ? "" : "/"}${service.heroImage}`
    : `${baseUrl}/logo.png`;

  const serviceDescription =
    service.description ||
    service.shortDescription ||
    `${service.name} services provided by ${siteName}.`;

  const organizationSchema = {
    "@context": "https://schema.org",
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

  const websiteSchema = {
    "@context": "https://schema.org",
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

  const webPageSchema = {
    "@context": "https://schema.org",
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
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: serviceUrl,
      },
    ],
  };

  const structuredData = [
    organizationSchema,
    websiteSchema,
    serviceSchema,
    webPageSchema,
    breadcrumbSchema,
  ];

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
        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <ServiceFeatures service={service} />

        <ServiceProcess service={service} />

        <ServiceBenefits service={service} />

        <ServiceTechnologies service={service} />

        <ServiceLocations service={service} />

        <ServiceFAQ service={service} />

        <RelatedServices
          currentSlug={service.slug}
          category={service.category}
        />

        <ServiceCTA service={service} />
      </main>
    </>
  );
}
