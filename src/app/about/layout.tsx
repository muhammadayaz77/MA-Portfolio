
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Muhammad Ayaz - MERN Stack Developer",
  description:
    "Learn more about Ayaz, a dedicated MERN stack developer skilled in React, Next.js, Node.js, Express, MongoDB, Tailwind, and DevOps.",
  keywords: [
    "Ayaz",
    "About Ayaz",
    "MERN Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "About Me | Muhammad Ayaz - MERN Stack Developer",
    description:
      "Discover Ayaz's journey, skills, and passion for building scalable MERN stack applications and modern web solutions.",
    url: "https://muhammadayaz.vercel.app/about",
    siteName: "Muhammad Ayaz Portfolio",
    images: [
      {
        url: "/Muhammad_Ayaz_ProfilePic.jpeg", // put your banner in /public
        width: 1200,
        height: 630,
        alt: "About Muhammad Ayaz - MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  }
};


export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main> 
        {children}
    </main>
  );
}
