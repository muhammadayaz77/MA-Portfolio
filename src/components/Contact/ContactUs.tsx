"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import {motion,AnimatePresence} from 'framer-motion'
import { useState } from "react";

export default function ContactUs() {
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
    <section className="min-h-screen flex items-center justify-center px-6 py-16 text-gray-100">
      <div className="max-w-3xl w-full rounded-xl border border-gray-800 p-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
  <h2 className="text-2xl md:text-3xl font-bold">Let's Start a Conversation</h2>
  <p className="text-gray-400 mt-2">Reach out to me directly</p>

  {/* Social Links */}
  <div className="flex justify-center gap-6 mt-4">
    <Link 
      href="https://github.com/muhammadayaz77"
      target="_blank"
    >
      <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
    </Link>

    <Link 
      href="https://www.linkedin.com/in/-muhammadayaz/" 
      target="_blank"
    >
      <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
    </Link>

    {/* Mail Icon with same style */}
    <div className="relative">
      <button onClick={handleCopy}>
        <Mail className="w-6 h-6 hover:text-blue-400 transition-colors cursor-pointer" />
      </button>

      {/* Popup / Tooltip */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 
                       bg-blue-600 text-white text-xs sm:text-sm 
                       px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            ✅ Email copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</div>


        {/* Contact Form */}
        <div className=" border border-gray-800 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-md  border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 rounded-md  border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="What is this regarding?"
              className="w-full px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Your message here..."
              className="w-full px-3 py-2 rounded-md  border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 font-medium rounded-md hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
