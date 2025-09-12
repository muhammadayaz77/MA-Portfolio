// components/GithubHistory.tsx
"use client";

import Link from "next/link";

export default function GithubHistory() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10">
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-2">My GitHub History</h2>
      <Link
        href="https://github.com/muhammadayaz77"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src="https://ghchart.rshah.org/111111/muhammadayaz77" 
          alt="GitHub Contribution History"
          width={800}
          height={200}
          className="rounded-lg shadow-lg border  border-gray-800 bg-gray-900/60 p-10"
        />
      </Link>
      <p className="text-white">Click to see profile</p>
    </section>
  );
}
