import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Letconnect from "./Components/Letconnect";
import { Poppins } from "next/font/google";

// Load Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100"],
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

// ✅ Define metadata for SEO (using Metadata API)
export const metadata = {
  title: "Webxartist | Leading Web Development & Design Agency",
  description:
    "Webxartist provides expert website development, graphic design, video editing, and logo design services. Our premium solutions help businesses achieve their digital goals. We provide Brand Identity and much more.",
  keywords:
    "webxartist, website development, logo design, graphic design, video editing, digital marketing, branding services, custom websites, digital transformation, SEO services, Brand Identity, Best software Agency, Best Websites, Web Service, Webdevelopment, Affordable Price, Website Creation",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.webxartist.com",
    title: "Webxartist | Leading Web Development & Design Agency",
    description:
      "Webxartist provides expert website development, graphic design, video editing, and logo design services. Our premium solutions help businesses achieve their digital goals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webxartist - Professional Web Development and Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webxartist | Leading Web Development & Design Agency",
    description:
      "Expert website development, logo design, graphic design & digital branding services.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://www.webxartist.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Letconnect />
        <Footer />
      </body>
    </html>
  );
}
