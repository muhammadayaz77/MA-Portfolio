"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-gray-300">
      {/* Top divider with small centered pill */}
      <div className="relative flex justify-center">
        <div className="absolute -top-[3.9px] h-[8px] w-10 rounded-full bg-white"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-24">
        {/* Logo + Name */}
        <div className="space-y-2">
        <Link href='/'>
        <Image
  src="/logo.png"
  alt="Footer"
  width={70}
  height={90}
  className="transition-transform duration-300 hover:scale-110 rounded-lg"
/>
</Link>

          <p className="text-sm text-gray-400 mt-2">
            <Link
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Muhammad Ayaz
            </Link>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="font-semibold text-white mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            {["Projects", "Skills", "About"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h2 className="font-semibold text-white mb-3">Socials</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://github.com/muhammadayaz77/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/-muhammadayaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/muhammadayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                X
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="font-semibold text-white mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
