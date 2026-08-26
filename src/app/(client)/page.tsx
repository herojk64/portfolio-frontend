import type { Metadata } from "next";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { SkillsPreview } from "./_components/skills-preview";
import { AboutPreview } from "./_components/about-preview";
import { ExperiencePreview } from "./_components/experience-preview";
import { ContactTeaser } from "./_components/contact-teaser";
import { getProfile, getSocial } from "@/lib/api";

const BASE_URL = "https://amitdhakal2025.com.np";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();
  const name = profile?.name ?? "Amit Dhakal";
  const role = profile?.role ?? "Software Developer";
  const description =
    profile?.description ??
    "Personal portfolio of Amit Dhakal, Software Developer.";

  return {
    title: `${name} – ${role}`,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: `${name} – ${role}`,
      description,
      url: BASE_URL,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} – ${role}`,
      description,
    },
  };
}

export default async function Home() {
  const [profile, social] = await Promise.all([getProfile(), getSocial()]);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile?.name ?? "Amit Dhakal",
    jobTitle: profile?.role ?? "Software Developer",
    email: profile?.email,
    url: BASE_URL,
    sameAs: social.map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Projects />
      <SkillsPreview />
      <ExperiencePreview />
      <AboutPreview />
      <ContactTeaser />
    </>
  );
}
