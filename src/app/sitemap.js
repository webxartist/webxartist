import services from "@/data/services";
import { getAllServiceLocationPages } from "@/lib/serviceLocation";

const baseUrl = "https://www.webxartist.com";

export default function sitemap() {
  // --------------------------------
  // Static Pages
  // --------------------------------

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/Service`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/Pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/Whyus`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // --------------------------------
  // Main Service Pages
  // --------------------------------

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // --------------------------------
  // Service + Location Pages
  // --------------------------------

  const serviceLocationPages = getAllServiceLocationPages().map(
    ({ service, location }) => ({
      url: `${baseUrl}/services/${service.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  // --------------------------------
  // Return Complete Sitemap
  // --------------------------------

  return [...staticPages, ...servicePages, ...serviceLocationPages];
}
