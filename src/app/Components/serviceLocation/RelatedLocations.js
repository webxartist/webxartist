import Link from "next/link";
import locations from "@/data/locations";

export default function RelatedLocations({ service, currentLocation }) {
  const related = locations
    .filter(
      (location) =>
        location.slug !== currentLocation &&
        location.services?.includes(service.slug),
    )
    .slice(0, 8);

  if (!related.length) return null;

  return (
    <section className="py-24 bg-[#0c1028]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Other Locations
          </span>

          <h2 className="text-4xl font-bold mt-4">
            {service.name} in Nearby Cities
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Explore our {service.name.toLowerCase()} services across different
            cities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((location) => (
            <Link
              key={location.slug}
              href={`/services/${service.slug}/${location.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 transition"
            >
              <h3 className="font-semibold text-lg">
                {service.name} in {location.city}
              </h3>

              <p className="text-slate-400 mt-3 text-sm">Learn more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
