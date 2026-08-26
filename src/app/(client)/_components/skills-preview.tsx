import { Section } from "@/components/layouts/section";
import { getSkillsGrouped } from "@/lib/api";

export async function SkillsPreview() {
  const groups = await getSkillsGrouped();

  return (
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
  );
}
