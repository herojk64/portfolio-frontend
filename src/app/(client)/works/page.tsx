import type { Metadata } from "next";
import { PageHeader } from "@/components/layouts/page-header";
import { WorksContent } from "./_components/works-content";

const title = "Works";
const description =
  "Projects built by Amit Dhakal — from CLIs and web apps to hackathon entries.";
const url = "https://amitdhakal2025.com.np/works";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/works" },
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

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="works"
        subtitle="List of my projects"
        breadcrumb={[{ label: "Works", href: "/works" }]}
      />
      <WorksContent />
    </>
  );
}
