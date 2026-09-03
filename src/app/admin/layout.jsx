"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  MapPin,
  FileText,
  Newspaper,
  Users,
  Image,
  Search,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Services",
    href: "/admin/dashboard/services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Locations",
    href: "/admin/dashboard/locations",
    icon: MapPin,
  },
  {
    name: "Service Locations",
    href: "/admin/service-locations",
    icon: MapPin,
  },
  {
    name: "Pages",
    href: "/admin/pages",
    icon: FileText,
  },
  {
    name: "Blog",
    href: "/admin/blog",
    icon: Newspaper,
  },
  {
    name: "Leads",
    href: "/admin/leads",
    icon: Users,
  },
  {
    name: "Media",
    href: "/admin/media",
    icon: Image,
  },
  {
    name: "SEO",
    href: "/admin/seo",
    icon: Search,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Don't show the admin shell on login page
  if (pathname === "/admin/login") {
    return children;
  }

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <Link href="/admin/dashboard" className="text-lg font-bold">
          WebXArtist
        </Link>

        <div className="w-10" />
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r bg-white transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b px-5">
          <Link href="/admin/dashboard" className="text-xl font-bold">
            WebXArtist
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Management
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                (item.href !== "/admin/dashboard" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <Icon size={19} />

                  <span>{item.name}</span>

                  {isActive && <ChevronRight size={16} className="ml-auto" />}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t p-4">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
          >
            <LogOut size={19} />

            <span>{loggingOut ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        {/* Desktop Topbar */}
        <header className="hidden h-16 items-center justify-between border-b bg-white px-8 lg:flex">
          <div>
            <p className="text-sm text-gray-500">WebXArtist Admin Panel</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              W
            </div>

            <div>
              <p className="text-sm font-semibold">WebXArtist Admin</p>

              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </header>

        {/* Mobile spacing */}
        <main className="min-h-screen pt-16 lg:pt-0">{children}</main>
      </div>
    </div>
  );
}
