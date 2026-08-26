import Icon from "@/assets/logo.png";
import Image from "next/image";
import { SocialIcon } from "@/components/SocialIcon";
import { getProfile, getSocial } from "@/lib/api";

export default async function Footer() {
  const [profile, social] = await Promise.all([getProfile(), getSocial()])

  return (
    <footer className="border-t-muted-foreground/50 border-t">
      <div className="bg-background-100 px-3 md:px-2 md:mx-[6.5rem] xl:mx-[10.5rem]">
        <div className="flex justify-between items-center">
          <section>
            <header className="text-xl font-bold">
              <Image
                src={Icon}
                width={40}
                height={40}
                className="w-9 h-9 inline-block mr-3"
                alt="logo"
              />
              <h2 className="inline-block text-xl">{profile?.name ?? "Amit Dhakal"}</h2>
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block ml-5 text-muted-foreground text-lg"
                >
                  <span className="text-primary text-xl inline-block mr-2">#</span>
                  {profile.email}
                </a>
              )}
            </header>
            <p className="text-muted-foreground mt-4">{profile?.role ?? "Software Developer"}</p>
          </section>

          {social.length > 0 && (
            <section>
              <header className="text-xl font-bold">Media</header>
              <ul className="flex gap-3 items-center mt-4">
                {social.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.title}
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      <SocialIcon title={link.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        <div className="text-sm text-muted-foreground mt-12 text-center">
          &copy; Copyright {new Date().getFullYear()}. Made by {profile?.name ?? "Amit Dhakal"}
        </div>
      </div>
    </footer>
  );
}
