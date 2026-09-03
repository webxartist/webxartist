import Link from "next/link";

import { getServiceLocations } from "@/lib/serviceLocation";

export default function RelatedLocations({ service, currentLocation }) {
  if (!service?.slug) {
    return null;
  }

  const relatedLocations = getServiceLocations(service.slug)
    .filter((location) => location.slug !== currentLocation)
    .slice(0, 8);

  if (!relatedLocations.length) {
    return null;
  }

  return (
    <section
      className="bg-[#0c1028] py-24"
      aria-labelledby="related-locations-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-cyan-400">
            Other Locations
          </span>

          <h2
            id="related-locations-title"
            className="mt-4 text-4xl font-bold text-white md:text-5xl"
          >
            {service.name} in Other Locations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Explore {service.name.toLowerCase()} services available to
            businesses in other locations served by WebXArtist.
          </p>
        </div>

        {/* =========================================================
            LOCATION CARDS
        ========================================================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/Services/${service.slug}/${location.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              aria-label={`${service.name} services in ${location.city}`}
            >
              <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                {service.name} in {location.city}
              </h3>

              <p className="mt-3 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                Explore services in {location.city}
                <span
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
