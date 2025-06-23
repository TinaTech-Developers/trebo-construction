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
  title: "Trebo Construction | Reliable Building Experts in Ruwa",
  description:
    "Trebo Construction offers professional and reliable construction services in Mabvazuva Estate, Ruwa.",
  // ...rest remains the same
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
