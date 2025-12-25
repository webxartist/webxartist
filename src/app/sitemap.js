export default function sitemap() {
  const baseUrl = "https://webxartist.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Service`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Whyus`,
      lastModified: new Date(),
    },

    // New Pages Added ↓↓↓
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
    },
  ];
}
