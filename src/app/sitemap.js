import services from "@/data/services";
import { getAllServiceLocationPages } from "@/lib/serviceLocation";

const baseUrl = "https://www.webxartist.com";

export default function sitemap() {
  // =====================================================
  // STATIC PAGES
  // =====================================================

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-08-16",
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/About`,
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/Service`,
      lastModified: "2026-08-16",
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/Pricing`,
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/Whyus`,
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/ContactUs`,
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // =====================================================
  // MAIN SERVICE PAGES
  // =====================================================

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: "2026-08-16",
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // =====================================================
  // SERVICE + LOCATION PAGES
  // =====================================================

  const serviceLocationPages = getAllServiceLocationPages().map(
    ({ service, location }) => ({
      url: `${baseUrl}/services/${service.slug}/${location.slug}`,
      lastModified: "2026-08-16",
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  // =====================================================
  // COMPLETE SITEMAP
  // =====================================================

  return [...staticPages, ...servicePages, ...serviceLocationPages];
}
