import type { Metadata } from "next";
import { PageHeader } from "@/components/layouts/page-header";
import { AboutContent } from "./_components/about-content";

const title = "About Me";
const description =
  "Learn about Amit Dhakal — a software developer building clean, reliable products.";
const url = "https://amitdhakal2025.com.np/aboutme";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/aboutme" },
  openGraph: {
    title: `${title} – Amit Dhakal`,
    description,
    url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} – Amit Dhakal`,
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="about-me"
        subtitle="Who am I?"
        breadcrumb={[{ label: "About Me", href: "/aboutme" }]}
      />
      <AboutContent />
    </>
  );
}
