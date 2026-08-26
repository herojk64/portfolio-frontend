import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/nav";
import { MediaSidebar } from "@/components/layouts/media-sidebar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border"
      >
        Skip to content
      </a>
      <MediaSidebar />
      <div className="grid grid-rows-[auto_1fr] bg-background-100 px-3 md:px-0 md:mx-[6.5rem] xl:mx-[10.5rem]">
        <NavBar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
