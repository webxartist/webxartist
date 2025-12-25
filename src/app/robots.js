export default function robots() {
  const baseUrl = "https://saijagrutipatsansta.com";

  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
