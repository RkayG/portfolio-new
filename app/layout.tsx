import type { Metadata } from "next";
import { Space_Grotesk, Kalam, Caveat, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { FloatingWizardButton } from "@/components/FloatingWizardButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const kalam = Kalam({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rufusgladness.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rufus Gladness - Lead Software Developer & Architect",
    template: "%s | Rufus Gladness",
  },
  description: "Lead Software Developer & Architect specializing in building scalable systems from zero to one. Expert in Next.js, Python, Solidity, and technical strategy.",
  keywords: [
    "Rufus Gladness",
    "Software Developer",
    "Technical Architect",
    "Full Stack Developer",
    "Next.js Expert",
    "Python Developer",
    "Solidity Developer",
    "Blockchain Engineer",
    "SaaS Architect",
    "CTO for hire",
  ],
  authors: [{ name: "Rufus Gladness" }],
  creator: "Rufus Gladness",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Rufus Gladness Portfolio",
    title: "Rufus Gladness - Lead Software Developer & Architect",
    description: "Architecting scalable systems and transforming ambitious ideas into production-ready platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rufus Gladness Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rufus Gladness - Lead Software Developer & Architect",
    description: "Architecting scalable systems and transforming ambitious ideas into production-ready platforms.",
    creator: "@rufusgladness", // Placeholder, user should update
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

import { JsonLd } from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${kalam.variable} ${caveat.variable} ${inter.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        <JsonLd />
        <ThemeProvider>
          {children}
          <MobileBottomNav />
          <FloatingWizardButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
