import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StarryBackground from "@/components/StarryBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peem — Back-End Developer Portfolio",
  description:
    "Personal portfolio showcasing projects, skills, and experiences of Peem — a passionate back-end developer building modern web applications.",
  keywords: [
    "developer",
    "portfolio",
    "back-end",
    "react",
    "next.js",
    "typescript",
  ],
  openGraph: {
    title: "Peem — Back-End Developer Portfolio",
    description:
      "Explore the work and skills of Peem, a modern back-end developer.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">
        <StarryBackground />
        {children}
      </body>
    </html>
  );
}

