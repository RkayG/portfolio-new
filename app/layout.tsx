import type { Metadata } from "next";
import { Space_Grotesk, Kalam } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Rufus Gladness - Portfolio",
  description: "Portfolio website of Rufus Gladness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${spaceGrotesk.variable} ${kalam.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
