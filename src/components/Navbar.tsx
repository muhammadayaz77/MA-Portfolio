"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function   Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ width: "100%", marginTop: 0, height: 70 }}
        animate={{
          width: scrolled ? "70%" : "100%", // ✅ responsive width
          marginTop: scrolled ? 16 : 0,
          height: scrolled ? 50 : 70,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between 
          rounded-4xl w-full max-w-7xl mx-auto px-3
         
          ${scrolled ? "backdrop-blur-xl shadow-lg" : "bg-transparent"}
        `}
      >
        {/* Left - Logo */}
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <Link href="/" passHref>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Logo Image"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </Link>
        </motion.div>

        {/* Middle - Nav Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white text-sm font-medium">
          {["About", "Projects", "Skills"].map((item) => (
            <li key={item} className="relative cursor-pointer py-2 group">
              <span className="transition-colors duration-300 group-hover:text-blue-300 font-medium text-[14px] md:text-[15px] text-gray-100">
                {item}
              </span>
              <span
                className="
                  pointer-events-none
                  absolute left-0 -bottom-0.5 h-0.5 w-full
                  origin-left scale-x-0
                  rounded-full bg-blue-400
                  transition-transform duration-300 ease-out
                  group-hover:scale-x-100
                "
              />
            </li>
          ))}
        </ul>

        {/* Right - Contact Button */}
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
          <button
            className="relative bg-gradient-to-b from-blue-500 to-blue-700 
              text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 
              text-xs sm:text-sm md:text-base rounded-4xl
              shadow-md shadow-blue-900/40 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 rounded-lg shadow-inner shadow-white/50 pointer-events-none " />
            <span className="relative z-10 px-1 sm:px-2">Contact</span>
          </button>
        </motion.div>
      </motion.nav>
    </div>
  );
}
