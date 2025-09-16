"use client";
import { Code, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  siTypescript,
  siJavascript,
  siPython,
  siCplusplus,
  // Frontend
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  // Backend
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siMysql,
  siJsonwebtokens,
  siRedux,
  // Cloud
  siVercel,
  siFirebase,
} from "simple-icons/icons";

export default function ProjectThirdSection() {
  return (
    <div className=" bg-black text-white max-w-7xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* First Card */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-black/40 overflow-hidden transition hover:scale-[1.02]">
          {/* Image section */}
          <div className="h-40 bg-gray-800 flex items-center justify-center">
          <Image
              src="/job-portal.png"
              alt="Job Portal System"
              width={500}
              height={200}
              className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4 flex-grow">
            <h2 className="text-lg font-semibold">Job Portal System</h2>
            <p className="text-sm text-gray-400">
              A streamlined job portal connecting employers and job seekers with
              seamless applications and postings.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {/* React */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-500/30 backdrop-blur-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siReact.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siReact.svg }}
                  fill={`#${siReact.hex}`}
                />
                React.js
              </button>

              {/* Node.js */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-green-600/30 backdrop-blur-lg hover:bg-green-600/30 hover:border-green-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siNodedotjs.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siNodedotjs.svg }}
                  fill={`#${siNodedotjs.hex}`}
                />
                Node.js
              </button>

              {/* Express.js */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-gray-500/30 backdrop-blur-lg hover:bg-gray-500/30 hover:border-gray-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siExpress.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siExpress.svg }}
                  fill="white"
                />
                Express.js
              </button>

              {/* MongoDB */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-green-500/30 backdrop-blur-lg hover:bg-green-500/30 hover:border-green-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siMongodb.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siMongodb.svg }}
                  fill={`#${siMongodb.hex}`}
                />
                MongoDB
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-800">
            <Link
              href="https://github.com/muhammadayaz77/deploy_mern_app_02"
              target="_blank"
              className="flex items-center gap-1 text-xs font-medium bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              Code
            </Link>
          </div>
        </div>
        {/* Second Card */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-black/40 overflow-hidden transition hover:scale-[1.02]">
          {/* Image section */}
          <div className="h-40 bg-gray-800 flex items-center justify-center">
            <Image
              src="/saylani.png"
              alt="Saylani Foundation"
              width={500}
              height={200}
              className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4 flex-grow">
            <h2 className="text-lg font-semibold">
              Saylani Foundation Management System
            </h2>
            <p className="text-sm text-gray-400">
              A digital platform to streamline welfare services, donations, and
              community support.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {/* React */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-500/30 backdrop-blur-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siReact.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siReact.svg }}
                  fill={`#${siReact.hex}`}
                />
                React.js
              </button>

              {/* Tailwind */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-400/30 backdrop-blur-lg hover:bg-cyan-400/30 hover:border-cyan-300/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siTailwindcss.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
                  fill={`#${siTailwindcss.hex}`}
                />
                Tailwind
              </button>

              {/* Redux */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-purple-500/30 backdrop-blur-lg hover:bg-purple-500/30 hover:border-purple-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siRedux.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siRedux.svg }}
                  fill={`#${siRedux.hex}`}
                />
                Redux
              </button>

              {/* Shadcn */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-indigo-500/30 backdrop-blur-lg hover:bg-indigo-500/30 hover:border-indigo-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                 <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" // default viewBox for simple-icons
                                     width="20"
                                       height="20"
                                     fill={`#${siShadcnui.hex}`} // brand color
                                     dangerouslySetInnerHTML={{ __html: siShadcnui.svg }}
                                   />
                Shadcn
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-800">
            <Link
              href="https://github.com/muhammadayaz77/Saylani-Trust-Welfare"
              target="_blank"
              className="flex items-center gap-1 text-xs font-medium bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              Code
            </Link>
          </div>
        </div>
        {/* Third Card */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-black/40 overflow-hidden transition hover:scale-[1.02]">
          {/* Image section */}
          <div className="h-40 bg-gray-800 flex items-center justify-center">
          <Image
              src="/health-care.png"
              alt="Health Care"
              width={500}
              height={200}
              className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4 flex-grow">
            <h2 className="text-lg font-semibold">Health Center</h2>
            <p className="text-sm text-gray-400">
              A digital platform to manage health records, appointments, and
              patient care seamlessly.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {/* React */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-500/30 backdrop-blur-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siReact.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siReact.svg }}
                  fill={`#${siReact.hex}`}
                />
                React.js
              </button>

              {/* Tailwind */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-400/30 backdrop-blur-lg hover:bg-cyan-400/30 hover:border-cyan-300/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siTailwindcss.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
                  fill={`#${siTailwindcss.hex}`}
                />
                Tailwind
              </button>

              {/* Redux */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-purple-500/30 backdrop-blur-lg hover:bg-purple-500/30 hover:border-purple-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siRedux.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siRedux.svg }}
                  fill={`#${siRedux.hex}`}
                />
                Redux
              </button>

              {/* Shadcn */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-indigo-500/30 backdrop-blur-lg hover:bg-indigo-500/30 hover:border-indigo-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" // default viewBox for simple-icons
                     width="20"
                       height="20"
                     fill={`#${siShadcnui.hex}`} // brand color
                     dangerouslySetInnerHTML={{ __html: siShadcnui.svg }}
                   />
                Shadcn
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-800">
            <Link
              href="https://github.com/muhammadayaz77/Health-Center"
              target="_blank"
              className="flex items-center gap-1 text-xs font-medium bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              Code
            </Link>
          </div>
        </div>
        {/* Forth Card */}
        <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-black/40 overflow-hidden transition hover:scale-[1.02]">
          {/* Image section */}
          <div className="h-40 bg-gray-800 flex items-center justify-center">
            <Image
              src="/saylaniform.png"
              alt="Saylani Form Project"
              width={500}
              height={200}
              className="h-full w-full object-cover opacity-80 hover:opacity-100 transition"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4 flex-grow">
            <h2 className="text-lg font-semibold">Saylani Foundation Portal</h2>
            <p className="text-sm text-gray-400">
              A simple platform to submit forms and check results online with
              ease.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {/* React */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-500/30 backdrop-blur-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siReact.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siReact.svg }}
                  fill={`#${siReact.hex}`}
                />
                React.js
              </button>

              {/* Tailwind */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-cyan-400/30 backdrop-blur-lg hover:bg-cyan-400/30 hover:border-cyan-300/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siTailwindcss.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
                  fill={`#${siTailwindcss.hex}`}
                />
                Tailwind
              </button>

              {/* Redux */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-purple-500/30 backdrop-blur-lg hover:bg-purple-500/30 hover:border-purple-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siRedux.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siRedux.svg }}
                  fill={`#${siRedux.hex}`}
                />
                Redux
              </button>

              {/* Shadcn */}
              <button
                className="relative flex gap-2 items-center rounded-full font-medium text-white text-[13px]
                         bg-indigo-500/30 backdrop-blur-lg hover:bg-indigo-500/30 hover:border-indigo-400/50 
                         transition-all duration-300 px-3 py-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]"
              >
                 <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" // default viewBox for simple-icons
                     width="20"
                       height="20"
                     fill={`#${siShadcnui.hex}`} // brand color
                     dangerouslySetInnerHTML={{ __html: siShadcnui.svg }}
                   />
                Shadcn
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-800">
            <Link
              href="https://github.com/muhammadayaz77/Saylani-Test?tab=readme-ov-file"
              target="_blank"
              className="flex items-center gap-1 text-xs font-medium bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
