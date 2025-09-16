import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ayaz - MERN Stack Developer",
  description:
    "Explore projects built by Ayaz using React, Next.js, Node.js, Express, MongoDB, and Tailwind. Showcasing MERN stack expertise and real-world solutions.",
  keywords: [
    "Ayaz Projects",
    "MERN Projects",
    "Full Stack Projects",
    "React Projects",
    "Next.js Projects",
    "Portfolio Projects",
  ],
  openGraph: {
    title: "Projects | Muhammad Ayaz - MERN Stack Developer",
    description:
      "Check out Ayaz’s portfolio of MERN stack projects, including full-stack applications, e-commerce, and management systems.",
    url: "https://muhammadayaz.vercel.app/projects",
    siteName: "Muhammad Ayaz Portfolio",
    images: [
      {
        url: "/Muhammad_Ayaz_ProfilePic.jpeg",
        width: 1200,
        height: 630,
        alt: "Projects by Muhammad Ayaz - MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
