/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      // Contact Us
      {
        source: "/ContactUs",
        destination: "/contactus",
        permanent: true,
      },

      // Why Us
      {
        source: "/Whyus",
        destination: "/whyus",
        permanent: true,
      },

      {
        source: "/About",
        destination: "/about",
        permanent: true,
      },
      // Services
      {
        source: "/Services",
        destination: "/services",
        permanent: true,
      },

      // All old uppercase Services URLs
      // Includes /Services/[slug]/[location]
      {
        source: "/Services/:path*",
        destination: "/services/:path*",
        permanent: true,
      },

      // Pricing
      {
        source: "/Pricing",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
