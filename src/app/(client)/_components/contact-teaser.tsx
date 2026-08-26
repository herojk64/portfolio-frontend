import { Section } from "@/components/layouts/section";
import { getProfile, getSocial } from "@/lib/api";

export async function ContactTeaser() {
  const [profile, social] = await Promise.all([getProfile(), getSocial()])
  const linkedin = social.find((s) => s.title.toLowerCase() === "linkedin")

  return (
    <Section title="contacts">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
          I&apos;m interested in freelance opportunities. However, if you have
          another request or question, don&apos;t hesitate to contact me.
        </p>
        <div className="border border-border p-4 space-y-3 w-fit">
          <p className="font-bold text-sm">Message me here</p>
          <ul className="space-y-2">
            {profile?.email && (
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"
                  aria-label="Send email"
                >
                  <span aria-hidden="true">✉</span>
                  {profile.email}
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <span aria-hidden="true">↗</span>
                  {linkedin.url.replace("https://", "")}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Section>
  );
}
