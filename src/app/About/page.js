import React from "react";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";
import Technology from "../Components/Technology";
import MetaAds from "../Components/MetaAds";

// ⭐ SEO META TAGS FOR ABOUT PAGE
export const metadata = {
  title: "About Us | WebXArtist Institute & Agency",
  description:
    "Learn about WebXArtist Institute & Agency – Experts in Website Development, Branding, Digital Marketing, Meta Ads, SEO, and IT Training. We help businesses grow online.",
  keywords: [
    "WebXArtist",
    "About WebXArtist",
    "Website Development Agency",
    "Digital Marketing",
    "Meta Ads Expert",
    "Web Development Institute",
    "Branding Agency",
  ],
  openGraph: {
    title: "About WebXArtist Institute & Agency",
    description:
      "Professional Website Development, Branding, SEO, and Digital Marketing services. Also providing top-quality IT training in WebXArtist Institute.",
    url: "https://webxartist.com/About",
    siteName: "WebXArtist Institute & Agency",
    images: [
      {
        url: "/about-og.jpg", // optional, you can upload your own OG image
        width: 1200,
        height: 630,
        alt: "WebXArtist Institute & Agency About Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://webxartist/About",
  },
};

const page = () => {
  return (
    <>
      <div className="pt-16">
        <About />
        <Technology />
        <MetaAds />
        <Portfolio />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
