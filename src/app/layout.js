import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Letconnect from "./Components/Letconnect";
import { Poppins } from "next/font/google";
import Script from "next/script";
import CursorSwitcher from "./Components/Cursor";
import ContactPopup from "./Components/ContactPopup";

// ------------------------------------------------------
// ⭐ POPPINS FONT
// ------------------------------------------------------
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// ------------------------------------------------------
// ⭐ LOCAL GEIST SANS FONT
// ------------------------------------------------------
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

// ------------------------------------------------------
// ⭐ LOCAL GEIST MONO FONT
// ------------------------------------------------------
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// ------------------------------------------------------
// ⭐ VIEWPORT
// ------------------------------------------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a20",
  colorScheme: "dark",
};

// ------------------------------------------------------
// ⭐ SITE-WIDE SEO METADATA
// ------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://www.webxartist.com"),

  // ----------------------------------------------------
  // GOOGLE SEARCH CONSOLE VERIFICATION
  // ----------------------------------------------------
  verification: {
    google: "xyvHPQW3Gi3HzvFtrTwRk5s3SG_VZvbE1o3z5C_Ag6I",
  },

  // ----------------------------------------------------
  // PAGE TITLE
  // ----------------------------------------------------
  title: {
    default: "Web Development & Digital Marketing Agency | WebXArtist",
    template: "%s | WebXArtist",
  },

  // ----------------------------------------------------
  // META DESCRIPTION
  // ----------------------------------------------------
  description:
    "WebXArtist is a web development and digital marketing agency offering Next.js, MERN, SEO, Google Ads, Meta Ads, branding and e-commerce solutions for growing businesses.",

  // ----------------------------------------------------
  // KEYWORDS
  // ----------------------------------------------------
  keywords: [
    "web development",
    "website development",
    "web design",
    "digital marketing",
    "SEO services",
    "graphic design",
    "branding",
    "e-commerce development",
    "Next.js development",
    "MERN Stack development",
    "Google Ads",
    "Meta Ads",
    "social media marketing",
    "WebXArtist",
    "web development Mumbra",
    "digital marketing Mumbra",
  ],

  // ----------------------------------------------------
  // CANONICAL
  // ----------------------------------------------------
  alternates: {
    canonical: "/",
  },

  // ----------------------------------------------------
  // ROBOTS
  // ----------------------------------------------------
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // ----------------------------------------------------
  // OPEN GRAPH
  // ----------------------------------------------------
  openGraph: {
    title: "Web Development & Digital Marketing Agency | WebXArtist",

    description:
      "WebXArtist provides website development, Next.js, MERN, SEO, Google Ads, Meta Ads, branding and e-commerce solutions for growing businesses.",

    url: "https://www.webxartist.com/",

    siteName: "WebXArtist",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist - Web Development & Digital Marketing Agency",
      },
    ],
  },

  // ----------------------------------------------------
  // TWITTER / X
  // ----------------------------------------------------
  twitter: {
    card: "summary_large_image",

    title: "Web Development & Digital Marketing Agency | WebXArtist",

    description:
      "Website development, Next.js, MERN, SEO, Google Ads, Meta Ads, branding and e-commerce solutions by WebXArtist.",

    images: ["/og-image.png"],
  },

  // ----------------------------------------------------
  // FAVICONS
  // ----------------------------------------------------
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ------------------------------------------------------
// ⭐ JSON-LD STRUCTURED DATA
// ------------------------------------------------------
const schema = [
  {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": "https://www.webxartist.com/#organization",

    name: "WebXArtist",

    url: "https://www.webxartist.com",

    foundingDate: "2024-01-20",

    founder: {
      "@type": "Person",
      name: "Zahid Khan",
    },

    description:
      "WebXArtist is a web development and digital marketing agency providing website development, Next.js, MERN, SEO, Google Ads, Meta Ads, branding, graphic design and e-commerce solutions.",

    logo: {
      "@type": "ImageObject",
      url: "https://www.webxartist.com/logo.png",
    },

    image: "https://www.webxartist.com/logo.png",

    email: "webxartist@gmail.com",

    telephone: "+91-8169413149",

    sameAs: [
      "https://www.instagram.com/webxartist2024",
      "https://www.facebook.com/webxartist",
      "https://www.linkedin.com/company/webxartist",
      "https://www.youtube.com/@webxartist",
    ],

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Shop No. 1, Baugh-E-Meher Apartment, A Wing, Shibli Nagar",

      addressLocality: "Mumbra",

      addressRegion: "Maharashtra",

      postalCode: "400612",

      addressCountry: "IN",
    },
  },

  {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": "https://www.webxartist.com/#website",

    url: "https://www.webxartist.com",

    name: "WebXArtist",

    description:
      "WebXArtist official website for web development, digital marketing, SEO, branding, graphic design and e-commerce solutions.",

    publisher: {
      "@id": "https://www.webxartist.com/#organization",
    },

    inLanguage: "en-IN",
  },
];

// ------------------------------------------------------
// ⭐ ROOT LAYOUT
// ------------------------------------------------------
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ----------------------------------------------
            JSON-LD STRUCTURED DATA
        ---------------------------------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {/* ----------------------------------------------
            GOOGLE ANALYTICS
        ---------------------------------------------- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-29NBKJ07ZZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-29NBKJ07ZZ');
          `}
        </Script>
      </head>

      <body className="bg-white text-black">
        <Navbar />

        {children}

        <ContactPopup />

        <CursorSwitcher />

        <Footer />
      </body>
    </html>
  );
}
