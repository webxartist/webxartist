import services from "@/data/services";
import { getAllServiceLocationPages } from "@/lib/serviceLocation";

const baseUrl = "https://www.webxartist.com";

export default function sitemap() {
  // Automatically uses the current date whenever sitemap is generated
  const today = new Date();

  // =====================================================
  // STATIC PAGES
  // =====================================================

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}about`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/pricing`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/whyus`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contactus`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  // =====================================================
  // MAIN SERVICE PAGES
  // =====================================================

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: today,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // =====================================================
  // SERVICE + LOCATION PAGES
  // =====================================================

  const serviceLocationPages = getAllServiceLocationPages().map(
    ({ service, location }) => ({
      url: `${baseUrl}/services/${service.slug}/${location.slug}`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.8,
    }),
  );

  // =====================================================
  // COMPLETE SITEMAP
  // =====================================================

  return [...staticPages, ...servicePages, ...serviceLocationPages];
}
