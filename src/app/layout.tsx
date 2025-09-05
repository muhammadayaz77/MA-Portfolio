import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial"], // 👈 custom fallback
});



export const metadata: Metadata = {
  title: "Muhammad Ayaz",
  description: "Introductions and skills of Muhammad Ayaz",
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
        {children}
      </body>
    </html>
  );
}
