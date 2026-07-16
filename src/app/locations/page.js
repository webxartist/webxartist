import Link from "next/link";
import locations from "@/data/locations";

export const metadata = {
  title: "Locations We Serve | WebXArtist",

  description:
    "Explore WebXArtist website development, branding, SEO and digital marketing services across Mumbai, Thane, Mumbra, Navi Mumbai and nearby cities.",

  alternates: {
    canonical: "https://webxartist.com/locations",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#080a20] text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            Our Service Locations
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Locations We Serve
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-8">
            WebXArtist provides professional website development, branding, SEO,
            graphic design and digital marketing services for businesses across
            Maharashtra and India.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold group-hover:text-cyan-400">
                {location.city}
              </h2>

              <p className="text-orange-400 mt-2">{location.service}</p>

              <p className="text-slate-400 mt-4">{location.shortDescription}</p>

              <span className="inline-block mt-6 font-semibold text-cyan-400">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
