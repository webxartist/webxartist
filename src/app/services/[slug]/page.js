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

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | WebXArtist",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.seo?.title || `${service.name} | WebXArtist`,
    description: service.seo?.description || service.shortDescription,

    keywords: service.seo?.keywords || [],

    alternates: {
      canonical: `https://webxartist.com/services/${service.slug}`,
    },

    openGraph: {
      title: service.seo?.title,
      description: service.seo?.description,
      url: `https://webxartist.com/services/${service.slug}`,
      siteName: "WebXArtist",
      type: "website",
      locale: "en_IN",

      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.seo?.title,
      description: service.seo?.description,
      images: [service.heroImage],
    },
  };
}

export default function ServicePage({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: service.name,

    name: service.name,

    description: service.description,

    image: service.heroImage,

    provider: {
      "@type": "Organization",
      name: "WebXArtist",
      url: "https://webxartist.com",
      logo: "https://webxartist.com/logo.png",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="bg-[#080a20] text-white overflow-hidden">
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
