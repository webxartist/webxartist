import Link from "next/link";
import services from "@/data/services";

export default function RelatedServices({ location, currentService }) {
  const related = services
    .filter(
      (service) =>
        service.slug !== currentService &&
        service.locations?.includes(location.slug),
    )
    .slice(0, 8);

  if (!related.length) return null;

  return (
    <section className="py-24 bg-[#080a20]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            More Services
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Other Services in {location.city}
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            Explore our complete range of digital services available in{" "}
            {location.city}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/Services/${service.slug}/${location.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 transition"
            >
              <h3 className="font-semibold text-lg">{service.name}</h3>

              <p className="mt-3 text-slate-400 text-sm">{location.city}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
