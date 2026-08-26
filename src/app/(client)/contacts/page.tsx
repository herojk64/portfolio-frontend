import type { Metadata } from "next";
import { PageHeader } from "@/components/layouts/page-header";
import { getProfile, getSocial } from "@/lib/api";

const title = "Contact";
const description = "Get in touch with Amit Dhakal for freelance work or collaboration.";
const url = "https://amitdhakal2025.com.np/contacts";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contacts" },
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

export default async function ContactsPage() {
  const [profile, social] = await Promise.all([getProfile(), getSocial()]);

  return (
    <>
      <PageHeader
        title="contacts"
        subtitle="Get in touch"
        breadcrumb={[{ label: "Contact", href: "/contacts" }]}
      />

      <section
        className="grid md:grid-cols-2 gap-12 mb-16"
        aria-label="Contact information"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            I&apos;m interested in freelance opportunities — building products,
            fixing hard bugs, or consulting on architecture. If you have another
            request or question, don&apos;t hesitate to reach out.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-border p-4 space-y-3 inline-block w-full max-w-xs">
            <p className="font-bold text-sm">Message me here</p>
            <ul className="space-y-2">
              {profile?.email && (
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"
                    aria-label="Send email to Amit"
                  >
                    <span aria-hidden="true">✉</span>
                    {profile.email}
                  </a>
                </li>
              )}
              {social.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"
                    aria-label={link.title}
                  >
                    <span aria-hidden="true">↗</span>
                    {link.url.replace("https://", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
