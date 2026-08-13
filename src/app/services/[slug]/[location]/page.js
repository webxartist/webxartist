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
  const page = getServiceLocation(params.slug, params.location);

  if (!page) {
    return {
      title: "Page Not Found | WebXArtist",
      description: "The requested page could not be found.",
    };
  }

  const { service, location } = page;

  // Canonical URL
  const canonicalUrl = `https://www.webxartist.com/services/${service.slug}/${location.slug}`;

  // Location-specific SEO data
  const title =
    location.seo?.title || `${service.name} in ${location.city} | WebXArtist`;

  const description =
    location.seo?.description ||
    ` ${service.name.toLowerCase()} services in ${location.city} by WebXArtist. Modern, affordable and results-focused digital solutions for businesses.`;

  const keywords = [
    `${service.name} ${location.city}`,
    `${service.name} in ${location.city}`,
    `${service.name} services in ${location.city}`,
    `${service.name.toLowerCase()} agency ${location.city}`,
    `WebXArtist ${location.city}`,
  ];

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "WebXArtist",
      type: "website",
      locale: "en_IN",

      images: [
        {
          url: service.heroImage || "/about.png",
          width: 1200,
          height: 630,
          alt: `${service.name} in ${location.city} | WebXArtist`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.heroImage || "/about.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function Page({ params }) {
  const page = getServiceLocation(params.slug, params.location);

  /*
   * Invalid service/location combination
   * will return a proper 404 page.
   */

  if (!page) {
    notFound();
  }

  const { service, location } = page;

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
      label: location.city,
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

    itemListElement: breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.webxartist.com${item.href}`,
    })),
  };

  /*
  |--------------------------------------------------------------------------
  | Service Schema
  |--------------------------------------------------------------------------
  */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: `${service.name} in ${location.city}`,

    serviceType: service.name,

    description:
      location.description ||
      location.description ||
      `${service.name.toLowerCase()} services in ${location.city} provided by WebXArtist.`,

    provider: {
      "@type": "Organization",
      name: "WebXArtist",
      url: "https://www.webxartist.com",
      logo: "https://www.webxartist.com/logo.png",
    },

    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },

    url: `https://www.webxartist.com/services/${service.slug}/${location.slug}`,
  };

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

      <main className="overflow-hidden bg-[#080a20] text-white">
        {/* Breadcrumb */}

        <div className="mx-auto max-w-7xl px-6 pt-32">
          <Breadcrumb items={breadcrumb} />
        </div>

        {/* Hero */}

        <ServiceLocationHero service={service} location={location} />

        {/* Overview */}

        <ServiceLocationOverview service={service} location={location} />

        {/* Features */}

        <ServiceLocationFeatures service={service} location={location} />

        {/* Process */}

        <ServiceLocationProcess service={service} location={location} />

        {/* Benefits */}

        <ServiceLocationBenefits service={service} location={location} />

        {/* Technologies */}

        <ServiceLocationTechnologies service={service} location={location} />

        {/* FAQ */}

        <ServiceLocationFAQ service={service} location={location} />

        {/* Related Locations */}

        <RelatedLocations service={service} currentLocation={location.slug} />

        {/* Related Services */}

        <RelatedServices location={location} currentService={service.slug} />
      </main>
    </>
  );
}
