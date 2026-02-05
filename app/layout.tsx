import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Tahmid Shahriar Bhuiyan | Full Stack Developer",
  description:
    "Portfolio of Tahmid Shahriar Bhuiyan - Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Tahmid Shahriar Bhuiyan",
  ],
  authors: [{ name: "Tahmid Shahriar Bhuiyan" }],
  openGraph: {
    title: "Tahmid Shahriar Bhuiyan | Full Stack Developer",
    description: "Portfolio of Tahmid Shahriar Bhuiyan - Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
