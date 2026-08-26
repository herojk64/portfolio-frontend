import Link from "next/link";
import { Section } from "@/components/layouts/section";
import { getExperiences, formatDate } from "@/lib/api";

export async function ExperiencePreview() {
  const experiences = await getExperiences();
  const preview = experiences.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <Section
      title="experience"
      link={{ href: "/experience", label: "see all" }}
    >
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {preview.map((exp) => (
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
              <p className="font-bold text-sm">{exp.Role}</p>
              <p className="text-primary text-xs mt-0.5">{exp.Company}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6">
        <Link href="/experience" className="btn-primary text-xs inline-block">
          View full history →
        </Link>
      </div>
    </Section>
  );
}
