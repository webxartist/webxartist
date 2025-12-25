import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Letconnect from "./Components/Letconnect";
import { Poppins } from "next/font/google";

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

/* ------------------------------------------------------
   ⭐ FULL SITE-WIDE SEO — BEST SETTINGS FOR RANKING
------------------------------------------------------- */
export const metadata = {
  metadataBase: new URL("https://www.webxartist.com"),

  title: {
    default:
      "WebXArtist | Web Development, Branding & Digital Marketing Agency",
    template: "%s | WebXArtist",
  },

  description:
    "WebXArtist is a professional web development, branding, digital marketing, SEO, and graphic design agency delivering custom modern digital solutions worldwide.",

  keywords: [
    "WebXArtist",
    "website development",
    "branding services",
    "digital marketing",
    "SEO services",
    "logo design",
    "web design agency",
    "video editing",
    "React websites",
    "Next.js websites",
  ],

  robots: "index, follow",

  openGraph: {
    type: "website",
    title: "WebXArtist | Modern Web Development & Branding Agency",
    description:
      "We create high-performance websites, professional branding, SEO-friendly digital solutions, and marketing strategies.",
    siteName: "WebXArtist",
    locale: "en_US",
    url: "https://www.webxartist.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebXArtist - Web Development & Branding Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebXArtist | Leading Web Development & Branding Services",
    description:
      "Professional website development, digital marketing, branding, SEO and modern digital solutions.",
    images: ["/twitter-image.png"],
    creator: "@webxartist",
  },

  alternates: {
    canonical: "https://www.webxartist.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* ------------------------------------------------------
   ⭐ JSON-LD SCHEMA FOR GOOGLE SEO BOOST
------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebXArtist",
  url: "https://www.webxartist.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.webxartist.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* JSON-LD – Google will read this */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Letconnect />
        <Footer />
      </body>
    </html>
  );
}
