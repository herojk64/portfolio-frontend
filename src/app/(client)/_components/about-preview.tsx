import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layouts/section";
import { getProfile } from "@/lib/api";
import HeroImage from "@/assets/hero.png";

export async function AboutPreview() {
  const profile = await getProfile()

  return (
    <Section title="about-me">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <div className="space-y-4 max-w-xl">
          <p className="text-foreground font-bold">Hello, I&apos;m {profile?.name ?? "Amit"}!</p>
          {profile?.description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {profile.description}
            </p>
          )}
          <Link href="/aboutme" className="btn-primary text-xs inline-block mt-4">
            Read more →
          </Link>
        </div>
        <div className="hidden md:block shrink-0">
          <Image
            src={HeroImage}
            alt={profile?.name ?? "Amit Dhakal"}
            width={260}
            height={350}
            className="object-cover border border-muted-foreground/20"
          />
        </div>
      </div>
    </Section>
  );
}
