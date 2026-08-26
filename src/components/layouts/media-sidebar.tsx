import { SocialIcon } from "@/components/SocialIcon";
import { getSocial } from "@/lib/api";

export async function MediaSidebar() {
  const social = await getSocial()

  return (
    <aside
      aria-label="Social links"
      className="fixed left-4 top-16 hidden lg:flex flex-col items-center gap-3 z-20"
    >
      <ul className="flex flex-col gap-4">
        {social.map((link) => (
          <li key={link.title}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.title} profile`}
              className="text-muted-foreground hover:text-primary transition-colors block"
            >
              <SocialIcon title={link.title} />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-16 bg-muted-foreground/50 mt-1" aria-hidden="true" />
    </aside>
  );
}
