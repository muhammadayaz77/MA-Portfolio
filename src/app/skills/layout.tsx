import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Muhammad Ayaz - MERN Stack Developer",
  description:
    "Discover Ayaz’s technical skills including React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, DevOps, and more.",
  keywords: [
    "Ayaz Skills",
    "MERN Skills",
    "Full Stack Developer Skills",
    "React Skills",
    "Next.js Skills",
    "Portfolio Skills",
  ],
  openGraph: {
    title: "Skills | Muhammad Ayaz - MERN Stack Developer",
    description:
      "A showcase of Ayaz’s MERN stack and related development skills, from frontend to backend and deployment.",
    url: "https://muhammadayaz.vercel.app/skills",
    siteName: "Muhammad Ayaz Portfolio",
    images: [
      {
        url: "/Muhammad_Ayaz_ProfilePic.jpeg",
        width: 1200,
        height: 630,
        alt: "Skills of Muhammad Ayaz - MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

export default function SkillsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
