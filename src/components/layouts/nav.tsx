"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navlinks } from "@/data/navlinks";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/useIsMobile";
import Icon from "@/assets/logo.png";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const isMobile: boolean | undefined = useIsMobile();

  return (
    <nav className="flex py-4 justify-between items-center" aria-label="Main navigation">
      <Link href="/" className="text-xl font-bold">
        <Image
          src={Icon}
          height={40}
          width={40}
          className="w-9 h-9 mr-4 inline-block"
          alt="Amit Dhakal home"
        />
        Amit Dhakal
      </Link>

      {!isMobile && <DesktopLinks />}

      {isMobile && (
        <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
          <DrawerTrigger aria-label="Open menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect y="5" width="24" height="2" fill="#D9D9D9" />
              <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
            </svg>
          </DrawerTrigger>
          <DrawerContent className="h-full w-64 mt-0 rounded-none">
            <MobileLinks
              toggleOpen={() => setOpen((e) => !e)}
              onNavigate={() => setOpen(false)}
            />
          </DrawerContent>
        </Drawer>
      )}
    </nav>
  );
}

function DesktopLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex gap-3" role="list">
      {navlinks.map((elem) => {
        const href = `/${elem.link === "home" ? "" : elem.link}`;
        const isActive =
          elem.link === "home" ? pathname === "/" : pathname.startsWith(`/${elem.link}`);
        return (
          <li key={elem.label}>
            <Link
              href={href}
              className="flex gap-2 group/navlink"
              aria-current={isActive ? "page" : undefined}
            >
              <span className="ml-3 text-primary" aria-hidden="true">
                #
              </span>
              <span
                className={`transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground group-hover/navlink:text-foreground"
                }`}
              >
                {elem.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileLinks({
  toggleOpen,
  onNavigate,
}: {
  toggleOpen: () => void;
  onNavigate: () => void;
}) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-6 px-4 pt-8" role="list">
      <li className="text-end mb-8">
        <button onClick={toggleOpen} aria-label="Close menu">
          <svg
            width="24"
            height="24"
            className="ml-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              width="1"
              height="1"
              transform="matrix(1 0 0 -1 11 12)"
              fill="#D9D9D9"
            />
            <rect
              x="3"
              y="19.9706"
              width="24"
              height="2"
              transform="rotate(-45 3 19.9706)"
              fill="#D9D9D9"
            />
            <rect
              x="4"
              y="3"
              width="24"
              height="2"
              transform="rotate(45 4 3)"
              fill="#D9D9D9"
            />
          </svg>
        </button>
      </li>
      {navlinks.map((elem) => {
        const href = `/${elem.link === "home" ? "" : elem.link}`;
        const isActive =
          elem.link === "home" ? pathname === "/" : pathname.startsWith(`/${elem.link}`);
        return (
          <li key={elem.label}>
            <Link
              href={href}
              className="flex items-center font-bold gap-4 group/navlink text-2xl"
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="text-primary" aria-hidden="true">
                #
              </span>
              <span
                className={`transition-colors text-lg ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground group-hover/navlink:text-foreground"
                }`}
              >
                {elem.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
