import { notFound } from "next/navigation";

import locations from "@/data/locations";

import LocationHero from "@/app/Components/locations/LocationHero";
import LocationOverview from "@/app/Components/locations/LocationOverview";
import LocationBenefits from "@/app/Components/locations/LocationBenefits";
import LocationServices from "@/app/Components/locations/LocationServices";
import LocationProcess from "@/app/Components/locations/LocationProcess";
import LocationFAQ from "@/app/Components/locations/LocationFAQ";
import RelatedLocations from "@/app/Components/locations/RelatedLocation";
import LocationCTA from "@/app/Components/locations/LocationCTA";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const location = locations.find((item) => item.slug === params.slug);

  if (!location) {
    return {
      title: "Location Not Found | WebXArtist",
    };
  }

  return {
    title: location.seo?.title || location.title,

    description: location.seo?.description || location.shortDescription,

    alternates: {
      canonical: `https://www.webxartist.com/locations/${location.slug}`,
    },

    openGraph: {
      title: location.seo?.title || location.title,

      description: location.seo?.description || location.shortDescription,

      url: `https://www.webxartist.com/locations/${location.slug}`,

      siteName: "WebXArtist",

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: "/Services-banner.png",
          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],
    },
  };
}

export default function LocationPage({ params }) {
  const location = locations.find((item) => item.slug === params.slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="bg-[#080a20] text-white overflow-hidden">
      {/* Hero */}
      <LocationHero location={location} />

      {/* Overview */}
      <LocationOverview location={location} />

      {/* Benefits */}
      <LocationBenefits location={location} />

      {/* Services */}
      <LocationServices location={location} />

      {/* Process */}
      <LocationProcess location={location} />

      {/* FAQ */}
      <LocationFAQ location={location} />

      {/* Related Locations */}
      <RelatedLocations currentSlug={location.slug} />

      {/* CTA */}
      <LocationCTA location={location} />
    </main>
  );
}
