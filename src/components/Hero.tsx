"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Download, } from "lucide-react"
import { motion,AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  
  const [copied, setCopied] = useState(false);
  
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("m.ayaz.developer@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hide after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="">
    <main className="relative z-10 py-12 max-w-7xl mx-auto">
      {/* Top section with profile and sun icon */}
      <div className="flex items-start justify-between mb-16">
      <div
      className="flex items-center gap-4 relative"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => {
        setHovering(true);
        document.body.style.cursor = "none"; // hide default cursor
      }}
      onMouseLeave={() => {
        setHovering(false);
        document.body.style.cursor = "default"; // restore
      }}
      
    >
      {/* Rotating Profile Image */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-600">
        <Image
          src="/Muhammad_Ayaz_ProfilePic.jpeg"
          alt="Muhammad Ayaz"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Info */}
      <div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Muhammad Ayaz</h2>
      <p className="text-sm sm:text-base text-gray-400">Fullstack Developer</p>
      </div>

      {/* Hi Emoji Following Cursor */}
      {/* Hi Emoji Following Cursor */}
{/* Hi Emoji Following Cursor */}
<AnimatePresence>
  {hovering && (
    <motion.div
      className="fixed z-50 pointer-events-none flex items-center justify-center 
                 w-12 h-12 rounded-full bg-blue-600 shadow-lg text-2xl"
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        transform: "translate(-50%, -50%)", // 👈 centers emoji exactly at cursor
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      👋
    </motion.div>
  )}
</AnimatePresence>


    </div>

      </div>

      {/* Decorative green circle */}
      <div className="absolute left-1/2 top-[29%] w-4 h-4 bg-blue-500 rounded-full lg:block hidden"></div>

      {/* Main heading */}
      <div className="mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
          <span className="font-extralight text-gray-100">Crafting</span> <em className="font-light" style={{fontFamily:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>digital experiences</em>
          <br />
          <span className="font-extralight text-gray-100">that</span>{" "}
              matter.
          <span className="relative lg:block hidden">
              <svg
  className="absolute -top-17 -left-41 overflow-visible pointer-events-none text-blue-500"
  style={{ width: "850px", height: "100px" }}
  viewBox="0 0 150 50"
>
  <path d="M5 35 C35 30, 70 32, 95 32" fill="none" stroke="currentColor" strokeWidth="1" />
  <path d="M95 30 C70 34, 35 30, 5 32" fill="none" stroke="currentColor" strokeWidth="1" />
  <path d="M3 32 C30 35, 60 33, 93 30" fill="none" stroke="currentColor" strokeWidth="1" />
  <path d="M93 33 C65 31, 40 36, 3 30" fill="none" stroke="currentColor" strokeWidth="1" />
</svg>

            </span>
        </h1>
      </div>

      {/* Description paragraph */}
      <div className="sm:mb-12 mb-5  max-w-4xl">
      <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-extralight">

          As a <span className="text-white font-medium">Full Stack Developer</span>, I leverage modern tech
          stacks like <span className="text-white font-medium">React.js</span>,{" "}
          <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-white font-medium">Node.js</span> with{" "}
          <span className="text-white font-medium">TypeScript</span> to build scalable applications that users
          love. From intuitive <span className="text-white font-medium">Frontend</span> interfaces to robust{" "}
          <span className="text-white font-medium">Backend</span> systems, I turn ambitious ideas into
          production-ready solutions.
        </p>
      </div>

      {/* Social links and resume */}
      <div className="flex flex-wrap items-center gap-4 mb-8">   
      <motion.a
  className="bg-transparent border border-gray-600 text-sm sm:text-base text-white 
             hover:bg-gray-800 rounded-full px-4 sm:px-6 py-2 
             flex items-center gap-2 cursor-pointer transition"
>
  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
  Resume
</motion.a>
    <div className="relative flex gap-4">
    <button
  className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
>
  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
</button>

      {/* Popup / Tooltip */}
      {copied && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-white text-sm px-3 py-3 rounded-md shadow-lg w-10">
          Email copied!
        </div>
      )}
      
      <Link
        href="https://github.com/muhammadayaz77"
        target="_blank"
        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/-muhammadayaz/"
        target="_blank"
        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
      </Link>

      <Link
        href="https://twitter.com/your-username"
        target="_blank"
        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <Twitter className="w-5 h-5 text-gray-300" />
      </Link>
    </div>


      </div>
      {/* Scroll Down Indicator */}
<div className="absolute bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="w-5 h-8 border-2 border-gray-500 rounded-full flex items-start justify-center p-1"
  >
    <motion.div
      animate={{ y: [0, 16, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
    />
  </motion.div>
  {/* <span className="text-xs text-gray-400 mt-2">Scroll</span> */}
</div>

     
      
    </main>
    
  </div>
  );
}