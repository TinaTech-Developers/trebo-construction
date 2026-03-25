import React from "react";
import PageHero from "../components/PageHero";
import AboutPage from "./_components/AboutPage";
import AboutUs from "./_components/AboutUs";

export const metadata = {
  title: "About Trebo Construction | Trusted Builders in Ruwa, Zimbabwe",
  description:
    "Discover Trebo Construction, a leading construction company in Ruwa with over 20 years of experience in residential building, plumbing installations, and deckpane solutions. We are committed to quality, integrity, and customer satisfaction.",

  keywords: [
    "Trebo Construction",
    "About Trebo Construction",
    "construction company Ruwa",
    "builders Zimbabwe",
    "Mabvazuva Estate construction",
    "home builders Zimbabwe",
    "plumbing experts Ruwa",
    "deckpane hiring",
  ],

  alternates: {
    canonical: "https://www.tinasoftnexus.co.zw/trebo/about",
  },

  openGraph: {
    title: "About Trebo Construction | Experience & Excellence",
    description:
      "Learn about Trebo Construction’s 20+ years of delivering high-quality construction and plumbing services in Zimbabwe.",
    url: "https://www.tinasoftnexus.co.zw/trebo/about",
    images: [
      {
        url: "https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Trebo Construction Team and Projects",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trebo Construction | About Us",
    description:
      "Over 20 years of trusted construction services in Zimbabwe. Quality you can rely on.",
    images: ["https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        image={"/about.jpg"}
        title={"About Us"}
        subtitle={"Experience. Integrity. Commitment to Quality."}
      />
      <AboutUs />
      <AboutPage />
    </div>
  );
}
