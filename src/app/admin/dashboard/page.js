import { BriefcaseBusiness, MapPin, FileText, Users } from "lucide-react";
import ServicesImportButton from "./ServicesImportButton";

const stats = [
  {
    title: "Services",
    value: "0",
    icon: BriefcaseBusiness,
  },
  {
    title: "Locations",
    value: "0",
    icon: MapPin,
  },
  {
    title: "Pages",
    value: "0",
    icon: FileText,
  },
  {
    title: "New Leads",
    value: "0",
    icon: Users,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your WebXArtist website from one place.
            </p>
          </div>

          {/* Import Services */}
          <ServicesImportButton />
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>

                    <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  </div>

                  <div className="rounded-lg bg-gray-100 p-3">
                    <Icon size={22} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Welcome */}
        <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Welcome to WebXArtist Admin</h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            From here you will be able to manage services, locations,
            service-location pages, blog posts, leads, media, and SEO settings.
          </p>
        </div>
      </div>
    </div>
  );
}
