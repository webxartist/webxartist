import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Letconnect from "./Components/Letconnect";
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ ADD THIS
import CursorSwitcher from "./Components/Cursor";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Load custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a20",
  colorScheme: "dark",
};
/* ------------------------------------------------------
   ⭐ FULL SITE-WIDE SEO — BEST SETTINGS FOR RANKING
------------------------------------------------------ */
export const metadata = {
  metadataBase: new URL("https://webxartist.com"),

  verification: {
    google: "xyvHPQW3Gi3HzvFtrTwRk5s3SG_VZvbE1o3z5C_Ag6I",
  },

  title: {
    default:
      "WebXArtist | Website Development, Branding & Digital Marketing Agency",
    template: "%s | WebXArtist",
  },

  description:
    "WebXArtist is a professional website development, branding, SEO, digital marketing, graphic design and software development agency serving businesses across India.",

  keywords: [
    "Website Development",
    "Web Design",
    "SEO",
    "Digital Marketing",
    "Graphic Design",
    "Logo Design",
    "Social Media Marketing",
    "WebXArtist",
    "Mumbai",
    "Thane",
    "Mumbra",
    "Pune",
    "Navi Mumbai",
  ],

  alternates: {
    canonical: "/",
  },

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

  openGraph: {
    title:
      "WebXArtist | Website Development, Branding & Digital Marketing Agency",

    description:
      "Professional Website Development, Branding, SEO, Digital Marketing and Graphic Design Services.",

    url: "https://webxartist.com",

    siteName: "WebXArtist",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "WebXArtist",

    description:
      "Website Development, Branding, SEO and Digital Marketing Agency.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

/* ------------------------------------------------------
   ⭐ JSON-LD SCHEMA FOR GOOGLE SEO BOOST
------------------------------------------------------- */
const schema = [
  {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": "https://webxartist.com/#organization",

    name: "WebXArtist",

    url: "https://webxartist.com",

    logo: "https://webxartist.com/logo.png",

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

    "@id": "https://webxartist.com/#website",

    url: "https://webxartist.com",

    name: "WebXArtist",

    publisher: {
      "@id": "https://webxartist.com/#organization",
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-29NBKJ07ZZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-29NBKJ07ZZ');
    `}
        </Script>
      </head>

      <body className="bg-white text-black">
        <Navbar />
        {children}
        <CursorSwitcher />
        <Footer />
      </body>
    </html>
  );
}
