import React from "react";
import PageHero from "../components/PageHero";
import ServicesPage from "./_components/ServicesPage";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Construction Services in Ruwa, Zimbabwe | Trebo Construction",
  description:
    "Explore Trebo Construction’s professional services including residential building, plumbing installations, and deckpane rental solutions in Ruwa, Zimbabwe. Quality workmanship, reliable delivery, and cost-effective solutions you can trust.",

  keywords: [
    "construction services Zimbabwe",
    "builders in Ruwa",
    "plumbing services Ruwa",
    "deckpane rental Zimbabwe",
    "residential construction Zimbabwe",
    "Trebo Construction services",
    "home building services Ruwa",
  ],

  alternates: {
    canonical: "https://www.tinasoftnexus.co.zw/trebo/services",
  },

  openGraph: {
    title:
      "Trebo Construction Services | Building, Plumbing & Decking Solutions",
    description:
      "Discover our expert construction services in Zimbabwe — from housing projects to plumbing and deckpane solutions.",
    url: "https://www.tinasoftnexus.co.zw/trebo/services",
    images: [
      {
        url: "https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Trebo Construction Services Overview",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trebo Construction Services",
    description:
      "Reliable construction, plumbing, and building services in Zimbabwe with over 20 years of experience.",
    images: ["https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        image={"/about.jpg"}
        title={"Our Services"}
        subtitle={
          "Quality craftsmanship and dependable service — explore what we do best."
        }
      />
      <ServicesPage />
      <FAQ />
    </>
  );
}
