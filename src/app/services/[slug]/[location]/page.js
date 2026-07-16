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

export async function generateStaticParams() {
  return getAllServiceLocationPages().map(({ service, location }) => ({
    slug: service.slug,
    location: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const page = getServiceLocation(params.slug, params.location);

  if (!page) {
    return {
      title: "Page Not Found | WebXArtist",
    };
  }

  const { service, location } = page;

  return {
    title: `${service.name} in ${location.city} | WebXArtist`,
    description: `Professional ${service.name.toLowerCase()} services in ${
      location.city
    }. Affordable, SEO-friendly and modern digital solutions by WebXArtist.`,

    alternates: {
      canonical: `https://webxartist.com/services/${service.slug}/${location.slug}`,
    },

    openGraph: {
      title: `${service.name} in ${location.city} | WebXArtist`,
      description: `Professional ${service.name.toLowerCase()} services in ${location.city}.`,
      url: `https://webxartist.com/services/${service.slug}/${location.slug}`,
      siteName: "WebXArtist",
      type: "website",
      images: [
        {
          url: service.heroImage || "/about.png",
          width: 1200,
          height: 630,
          alt: `${service.name} in ${location.city}`,
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const page = getServiceLocation(params.slug, params.location);

  if (!page) {
    notFound();
  }

  const { service, location } = page;

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://webxartist.com${item.href}`,
    })),
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

      <main className="bg-[#080a20] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <Breadcrumb items={breadcrumb} />
        </div>

        <ServiceLocationHero service={service} location={location} />

        <ServiceLocationOverview service={service} location={location} />

        <ServiceLocationFeatures service={service} />

        <ServiceLocationProcess service={service} />

        <ServiceLocationBenefits service={service} />

        <ServiceLocationTechnologies service={service} />

        <ServiceLocationFAQ service={service} location={location} />

        <RelatedLocations service={service} currentLocation={location.slug} />

        <RelatedServices location={location} currentService={service.slug} />
      </main>
    </>
  );
}
