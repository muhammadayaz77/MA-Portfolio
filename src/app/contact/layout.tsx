import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Muhammad Ayaz - MERN Stack Developer",
  description:
    "Get in touch with Ayaz for collaborations, freelance work, or opportunities. Connect via email or social platforms.",
  keywords: [
    "Contact Ayaz",
    "Hire Ayaz",
    "Contact MERN Developer",
    "Full Stack Developer Contact",
    "Portfolio Contact",
  ],
  openGraph: {
    title: "Contact | Muhammad Ayaz - MERN Stack Developer",
    description:
      "Reach out to Ayaz for project collaborations, freelance opportunities, or professional connections.",
    url: "https://muhammadayaz.vercel.app/contact",
    siteName: "Muhammad Ayaz Portfolio",
    images: [
      {
        url: "/Muhammad_Ayaz_Contact_Banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Muhammad Ayaz - MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
