import { Section } from "@/components/layouts/section";
import { Cards } from "@/components/Cards";
import { getProjects } from "@/lib/api";

export async function Projects() {
  const projects = await getProjects(true)

  return (
    <Section title="projects" link={{ href: "/works", label: "View all" }}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <Cards
            key={project.ID}
            title={project.Title}
            description={project.Description ?? undefined}
          >
            {project.LiveUrl && (
              <a
                href={project.LiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
                aria-label={`Live demo for ${project.Title}`}
              >
                Live ⇔
              </a>
            )}
            {project.RepoUrl && (
              <a
                href={project.RepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
                aria-label={`Source code for ${project.Title}`}
              >
                Github ⇔
              </a>
            )}
          </Cards>
        ))}
      </div>
    </Section>
  );
}
