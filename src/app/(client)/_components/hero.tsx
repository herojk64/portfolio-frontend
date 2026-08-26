import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/hero.png";
import DotsSvg from "@/assets/Dots.svg";
import PaternSvg from "@/assets/patern.svg";
import { getProfile } from "@/lib/api";

export async function Hero() {
  const profile = await getProfile();

  return (
    <div className="py-8 space-y-14">
      <section
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-4 items-start"
        aria-labelledby="hero-heading"
      >
        <div className="space-y-6 max-w-lg">
          <h1 id="hero-heading" className="text-3xl font-bold leading-snug">
            <span className="text-primary">Engineering software</span> beyond
            just writing <span className="text-primary">code</span>.
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I enjoy turning complex ideas into simple, reliable products through
            clean architecture and thoughtful engineering.
          </p>
          <Link href="/contacts" className="btn-primary text-sm">
            Contact me !!
          </Link>
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="relative">
            <PaternSvg
              aria-hidden="true"
              className="absolute top-0 left-0 z-0 opacity-60"
            />
            <Image
              width={457}
              height={386}
              src={HeroImage}
              alt="Amit Dhakal, Software Developer"
              className="relative z-10 md:w-[26rem] md:h-auto"
              sizes="(max-width: 768px) 100vw, 26rem"
              priority
              fetchPriority="high"
            />
            <DotsSvg
              aria-hidden="true"
              className="absolute bottom-6 right-0 z-10"
            />
          </div>
          <p className="border border-muted-foreground/40 px-3 py-1.5 text-xs flex items-center gap-2">
            <span
              className={`inline-block w-2.5 h-2.5 shrink-0 ${
                profile?.available_for_work ? "bg-primary" : "bg-muted-foreground"
              }`}
              aria-hidden="true"
            />
            {profile?.available_for_work
              ? "Available for work"
              : "Currently not available"}
          </p>
        </div>
      </section>

      <section aria-label="Quote" className="flex justify-center">
        <figure className="max-w-xl w-full">
          <blockquote>
            <div className="relative border border-muted-foreground/40 px-8 py-6">
              <span
                className="absolute -top-4 left-4 text-foreground/50 font-bold text-5xl leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-foreground text-sm text-center">
                With great power comes great responsibility — and a lot of
                debugging.
              </p>
            </div>
          </blockquote>
          <figcaption className="border border-t-0 border-muted-foreground/40 px-4 py-2 ml-auto w-fit text-sm font-bold">
            <span aria-hidden="true">— </span>
            Every Developer Ever
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
