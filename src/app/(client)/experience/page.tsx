import type { Metadata } from "next";
import { PageHeader } from "@/components/layouts/page-header";
import { Section } from "@/components/layouts/section";
import { getExperiences, formatDate } from "@/lib/api";

const title = "Experience";
const description =
  "Amit Dhakal's professional work history — roles, companies, and what was built.";
const url = "https://amitdhakal2025.com.np/experience";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
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

export default async function ExperiencePage() {
  const experiences = await getExperiences();

  return (
    <>
      <PageHeader
        title="experience"
        subtitle="Work history"
        breadcrumb={[{ label: "Experience", href: "/experience" }]}
      />

      <Section title="all roles">
        {experiences.length === 0 ? (
          <p className="text-muted-foreground text-sm">No experience listed yet.</p>
        ) : (
          <ol className="grid sm:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <li
                key={exp.ID}
                className="border border-border p-5 space-y-3 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(exp.StartDate)}
                    {" – "}
                    {exp.EndDate ? (
                      formatDate(exp.EndDate)
                    ) : (
                      <span className="text-primary font-medium">Present</span>
                    )}
                  </span>
                  {exp.Location && (
                    <span className="text-xs text-muted-foreground">
                      {exp.Location}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="font-bold text-sm">{exp.Role}</h2>
                  <p className="text-primary text-xs mt-0.5">{exp.Company}</p>
                </div>

                {exp.Description && (
                  <ul className="space-y-1 mt-auto pt-2 border-t border-border">
                    {exp.Description.split("\n").map((line, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary shrink-0" aria-hidden="true">
                          –
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </Section>
    </>
  );
}
