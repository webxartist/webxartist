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

export async function generateStaticParams() {
  return getAllServiceLocationPages().map(({ service, location }) => ({
    slug: service.slug,
    location: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, location: locationSlug } = await params;

  const page = getServiceLocation(slug, locationSlug);

  if (!page) {
    return {
      title: `Page Not Found | ${siteName}`,
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

  const canonicalUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

  const title = `${serviceName} in ${cityName} | WebXArtist`;

  const description =
    `${serviceName.toLowerCase()} services in ${cityName}. ` +
    `Get customized digital solutions designed to help businesses improve their online presence, visibility, and growth.`;

  const keywords = [
    `${serviceName} in ${cityName}`,
    `${serviceName} ${cityName}`,
    `${serviceName} services in ${cityName}`,
    `${serviceName.toLowerCase()} company in ${cityName}`,
    `${serviceName.toLowerCase()} agency in ${cityName}`,
    `${serviceName.toLowerCase()} services ${cityName}`,
    `WebXArtist ${serviceName} ${cityName}`,
  ];

  const imageUrl = service.heroImage
    ? service.heroImage.startsWith("http")
      ? service.heroImage
      : `${baseUrl}${service.heroImage.startsWith("/") ? "" : "/"}${service.heroImage}`
    : `${baseUrl}/about.png`;

  return {
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
          alt: title,
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

export default async function Page({ params }) {
  const { slug, location: locationSlug } = await params;

  const page = getServiceLocation(slug, locationSlug);

  if (!page) {
    notFound();
  }

  const { service, location } = page;

  const serviceName = service.name;
  const cityName = location.city;

  const pageUrl = `${baseUrl}/services/${service.slug}/${location.slug}`;

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
      "@id": `${baseUrl}/#organization`,
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
      "@id": `${baseUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}#service`,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    inLanguage: "en-IN",
  };

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    name: siteName,

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

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
