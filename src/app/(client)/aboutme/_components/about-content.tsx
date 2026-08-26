import { Section } from "@/components/layouts/section";
import { getProfile, getSkillsGrouped, getExperiences, formatDate } from "@/lib/api";
import HeroImage from "@/assets/hero.png";
import Image from "next/image";

export async function AboutContent() {
  const [profile, groups, experiences] = await Promise.all([
    getProfile(),
    getSkillsGrouped(),
    getExperiences(),
  ]);

  return (
    <>
      <section
        className="grid md:grid-cols-[1fr_auto] gap-12 mb-4"
        aria-label="About me"
      >
        <div className="space-y-4 max-w-xl">
          <p className="text-foreground font-bold">
            Hello, I&apos;m {profile?.name ?? "Amit"}!
          </p>
          {profile?.description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {profile.description}
            </p>
          )}
        </div>
        <div className="hidden md:block shrink-0">
          <Image
            src={HeroImage}
            alt={profile?.name ?? "Amit Dhakal"}
            width={280}
            height={380}
            className="object-cover border border-muted-foreground/20"
          />
        </div>
      </section>

      <Section title="skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {Array.from(groups.entries()).map(([category, skills]) => (
            <div key={category} className="border border-border p-4">
              <h3 className="font-bold text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s.ID}
                    className="text-xs border border-border px-2 py-0.5 text-muted-foreground"
                  >
                    {s.Name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {experiences.length > 0 && (
        <Section title="experience">
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
                    {exp.EndDate ? formatDate(exp.EndDate) : (
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
                  <h3 className="font-bold text-sm">{exp.Role}</h3>
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
        </Section>
      )}
    </>
  );
}
