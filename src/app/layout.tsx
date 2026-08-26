import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/lib/query-client";

const GA_ID = "G-KYTQ57X90K";

const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://amitdhakal2025.com.np";
const siteTitle = "Amit Dhakal - Portfolio";
const siteDescription =
  "Portfolio of Amit Dhakal - Projects, Work, and Experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Amit Dhakal",
  },
  description: siteDescription,
  applicationName: "Amit Dhakal - Portfolio",
  authors: [{ name: "Amit Dhakal", url: siteUrl }],
  creator: "Amit Dhakal",
  keywords: ["Amit Dhakal", "portfolio", "developer", "projects"],
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: "Amit Dhakal - Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        firaSans.variable,
        firaCode.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
