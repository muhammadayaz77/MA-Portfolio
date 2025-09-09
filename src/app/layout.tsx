import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial"], // 👈 custom fallback
});



export const metadata: Metadata = {
  title: "Muhammad Ayaz",
  description: "Portfolio of Muhammad Ayaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black`}
      >
      <head>
        <ThemeModeScript />
      </head>
        {children}
      </body>
    </html>
  );
}
