import { Section } from "@/components/layouts/section";
import { Cards } from "@/components/Cards";
import { getProjects } from "@/lib/api";

export async function WorksContent() {
  const projects = await getProjects()
  const featured = projects.filter((p) => p.IsFeatured)
  const rest = projects.filter((p) => !p.IsFeatured)

  return (
    <>
      {featured.length > 0 && (
        <Section title="featured-projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((project) => (
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
      )}

      {rest.length > 0 && (
        <Section title="other-projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project) => (
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
      )}
    </>
  );
}
