import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title:
    "About Trebo Construction | Leading Construction Company in Ruwa, Zimbabwe",
  description:
    "Learn more about Trebo Construction, a trusted construction company in Ruwa, Zimbabwe with over 20 years of experience in residential building, plumbing installations, and deckpane solutions. We deliver quality, reliability, and cost-effective construction services.",

  keywords: [
    "Trebo Construction",
    "construction company Zimbabwe",
    "builders in Ruwa",
    "Mabvazuva Estate construction",
    "residential construction Zimbabwe",
    "plumbing services Ruwa",
    "deckpane rental Zimbabwe",
    "building contractors Zimbabwe",
    "home builders Ruwa",
    "deckpanes Harare",
  ],

  authors: [{ name: "Trebo Construction" }],
  creator: "Trebo Construction",
  publisher: "Trebo Construction",

  metadataBase: new URL("https://www.tinasoftnexus.co.zw"),

  alternates: {
    canonical: "/trebo/about",
  },

  openGraph: {
    title: "About Trebo Construction | Experience, Integrity & Quality",
    description:
      "Discover Trebo Construction’s journey, values, and expertise in delivering high-quality construction and plumbing services in Ruwa and across Zimbabwe.",
    url: "https://www.tinasoftnexus.co.zw/trebo/about",
    siteName: "Trebo Construction",
    images: [
      {
        url: "https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Trebo Construction Projects and Services",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trebo Construction | About Us",
    description:
      "Over 20 years of excellence in construction, plumbing, and housing solutions in Zimbabwe.",
    images: ["https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Trebo Construction",
              image: "https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg",
              "@id": "https://www.tinasoftnexus.co.zw/trebo",
              url: "https://www.tinasoftnexus.co.zw/trebo",
              telephone: "+263 71 247 1209",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 32416 Mabvazuva Estate",
                addressLocality: "Ruwa",
                addressRegion: "Harare",
                postalCode: "ZW",
                addressCountry: "ZW",
              },
              openingHours: "Mo-Fr 08:00-17:00",
              description:
                "Trebo Construction offers expert construction services in Ruwa and surrounding areas.",
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
