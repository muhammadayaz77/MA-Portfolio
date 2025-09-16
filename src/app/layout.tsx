import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial"], // 👈 custom fallback
});




export const metadata: Metadata = {
  title: "Muhammad Ayaz | MERN Stack Developer",
  description: "Welcome to Ayaz's portfolio. A passionate MERN stack developer skilled in React, Next.js, Node.js, Express.js, PostgreSQL and MongoDB.",
  keywords: ["Muhammad Ayaz", "MERN Developer", "Full Stack Developer", "React", "Next.js", "Portfolio","PostgreSQL"],
  openGraph: {
    title: "Muhammad Ayaz | MERN Stack Developer",
    description: "Explore Ayaz's portfolio — MERN stack developer skilled in React, Next.js, Node.js, PostgreSQL, and MongoDB.",
    url: "https://muhammadayaz.vercel.app",
    siteName: "Muhammad Ayaz Portfolio",
    images: [
      {
        url: "/Muhammad_Ayaz_ProfilePic.jpeg", // add in /public
        width: 1200,
        height: 630,
        alt: "Muhammad Ayaz Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
