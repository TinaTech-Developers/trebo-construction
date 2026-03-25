import React from "react";
import PageHero from "../components/PageHero";
import ProjectsPage from "./_components/ProjectsPage";
import TestimonialsSlider from "../components/Testimonials";

export const metadata = {
  title: "Our Projects | Trebo Construction Portfolio in Zimbabwe",
  description:
    "Explore Trebo Construction’s completed projects in Ruwa and across Zimbabwe. From residential homes to plumbing and structural solutions, our portfolio showcases quality workmanship, reliability, and over 20 years of experience.",

  keywords: [
    "construction projects Zimbabwe",
    "Trebo Construction portfolio",
    "building projects Ruwa",
    "residential construction projects",
    "plumbing projects Zimbabwe",
    "construction company portfolio Zimbabwe",
    "completed building projects Ruwa",
  ],

  alternates: {
    canonical: "https://www.tinasoftnexus.co.zw/trebo/projects",
  },

  openGraph: {
    title: "Trebo Construction Projects | Our Work & Portfolio",
    description:
      "View our portfolio of completed construction projects in Zimbabwe, showcasing expertise in residential building and plumbing solutions.",
    url: "https://www.tinasoftnexus.co.zw/trebo/projects",
    images: [
      {
        url: "https://www.tinasoftnexus.co.zw/images/trebo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Trebo Construction Completed Projects",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trebo Construction Portfolio",
    description:
      "Take a look at our completed construction projects across Zimbabwe. الجودة, reliability, and excellence.",
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
        image={"/work.jpg"}
        title={"Our Work"}
        subtitle={"A glimpse into the projects that define our expertise."}
      />
      <ProjectsPage />
      <TestimonialsSlider />
    </>
  );
}
