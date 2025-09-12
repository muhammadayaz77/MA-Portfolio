import { Cloud, CloudLightning, Laptop, Server } from "lucide-react";
import {
  siTypescript,
  siJavascript,
  siPython,
  siCplusplus,
  // Frontend
  siReact,
  siNextdotjs,
  siTailwindcss,
  siBootstrap,
  siGreensock,
  siFramer,
  siChartdotjs,
  // Backend
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siMysql,
  // Cloud
  siVercel,
  siFirebase,
} from "simple-icons/icons";
import { Database, Braces, Code2 } from "lucide-react";

export default function SkillLeftSection() {
  return (
    <div className="col-span-12 md:col-span-6 border border-t border-l border-b border-gray-500 border-dashed ">
      <div className="p-6 border-b border-gray-500 border-dashed">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Technical Skills</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          My expertise in various technologies and tools
        </p>
      </div>
      <div className="p-6 h-screen overflow-y-auto custom-scrollbar">
        <div className="flex lg:items-center gap-2">
          <Laptop className="text-xs sm:text-sm md:text-base text-gray-400" />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Programming Languages</h2>
        </div>
        {/* Programming Languages */}
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-5 mt-8">
          <div className="col-span-6 flex items-center justify-between border-gray-800 py-2">
            {/* Left: Logo + Text */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${
                  siTypescript.svg.match(/viewBox="([^"]+)"/)?.[1]
                }`}
                width="20"
                height="20"
                dangerouslySetInnerHTML={{ __html: siTypescript.svg }}
                fill={`#${siTypescript.hex}`}
              />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                TypeScript
              </p>
            </div>

            {/* Right: Level */}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
            </div>
          </div>
          <div className="col-span-6 flex items-center justify-between border-b-1 border-gray-800 py-3">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${
                  siJavascript.svg.match(/viewBox="([^"]+)"/)?.[1]
                }`}
                width="20"
                height="20"
                dangerouslySetInnerHTML={{ __html: siJavascript.svg }}
                fill={`#${siJavascript.hex}`}
              />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                JavaScript
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
            </div>
          </div>
          {/* Python */}
          <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${siPython.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                width="20"
                height="20"
                dangerouslySetInnerHTML={{ __html: siPython.svg }}
                fill={`#${siPython.hex}`}
              />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">Python</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
            </div>
          </div>

          {/* C++ */}
          <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${
                  siCplusplus.svg.match(/viewBox="([^"]+)"/)?.[1]
                }`}
                width="20"
                height="20"
                dangerouslySetInnerHTML={{ __html: siCplusplus.svg }}
                fill={`#${siCplusplus.hex}`}
              />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">C++</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
            </div>
          </div>
          {/* Java */}
          <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
            <div className="flex items-center gap-2">
              {/* Java Icon (using a generic coding symbol) */}
              <Braces size={20} className="text-orange-500" />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">Java</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
            </div>
          </div>
          {/* SQL */}
          <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
            <div className="flex items-center gap-2">
              {/* Database / Storage Icon */}
              <Database size={20} className="text-blue-400" />
              <p className="font-medium text-sm sm:text-base md:text-lg text-white">SQL</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
            </div>
          </div>
        </div>
        {/* Frontend */}
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <Code2 size={24} className="text-xs sm:text-sm md:text-base text-gray-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">Frontend</h2>
          </div>
          <div className="grid grid-cols-6 lg:grid-cols-12 mt-3 gap-5">
            {/* React */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siReact.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siReact.svg }}
                  fill={`#${siReact.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  React.js
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siNextdotjs.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  className="text-xs sm:text-sm md:text-base text-gray-400" // 👈 Tailwind controls color now
                  fill="currentColor"
                  dangerouslySetInnerHTML={{ __html: siNextdotjs.svg }}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">Next.js</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>
            {/* Tailwind CSS */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
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
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Tailwind CSS
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>
            {/* shadcn */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="text-xs sm:text-sm md:text-base text-gray-400"
                  fill="currentColor"
                >
                  <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
                </svg>
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">ShadCN</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>
            {/* Bootstrap */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siBootstrap.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siBootstrap.svg }}
                  fill={`#${siBootstrap.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Bootstrap
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* GSAP */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siGreensock.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siGreensock.svg }}
                  fill={`#${siGreensock.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">GSAP</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
              </div>
            </div>

            {/* Framer Motion */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siFramer.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siFramer.svg }}
                  fill={`#${siFramer.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Framer Motion
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
              </div>
            </div>

            {/* Chart.js */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siChartdotjs.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siChartdotjs.svg }}
                  fill={`#${siChartdotjs.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Chart.js
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="mt-8">
          {/* Backend Section */}
          <div className="flex items-center gap-2">
            {/* Changed icon to Database for backend */}
            <Server size={24} className="text-xs sm:text-sm md:text-base text-gray-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">Backend</h2>
          </div>

          <div className="grid grid-cols-6 lg:grid-cols-12 mt-3 gap-5">
            {/* Node.js */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
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
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">Node.js</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* Express.js */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siExpress.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  className="text-xs sm:text-sm md:text-base text-gray-400"
                  fill="currentColor"
                  dangerouslySetInnerHTML={{ __html: siExpress.svg }}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Express.js
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* MongoDB */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
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
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">MongoDB</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siPostgresql.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siPostgresql.svg }}
                  fill={`#${siPostgresql.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  PostgreSQL
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* MySQL */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${siMysql.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siMysql.svg }}
                  fill={`#${siMysql.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">MySQL</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        {/* Cloud */}
        <div className="mt-8">
          {/* Cloud Section */}
          <div className="flex items-center gap-2">
            {/* Cloud Icon for title */}
            <Cloud size={24} className="text-xs sm:text-sm md:text-base text-gray-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">Cloud</h2>
          </div>

          <div className="grid grid-cols-6 lg:grid-cols-12 mt-3 gap-5">
            {/* Vercel */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siVercel.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siVercel.svg }}
                  className="text-gray-300" // ✅ Tailwind class
                  fill="currentColor" // ✅ Uses the class color
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">Vercel</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Advanced</p>
              </div>
            </div>

            {/* Firebase */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={`0 0 ${
                    siFirebase.svg.match(/viewBox="([^"]+)"/)?.[1]
                  }`}
                  width="20"
                  height="20"
                  dangerouslySetInnerHTML={{ __html: siFirebase.svg }}
                  fill={`#${siFirebase.hex}`}
                />
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">
                  Firebase
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Intermediate</p>
              </div>
            </div>

            {/* AWS */}
            <div className="col-span-6 flex items-center justify-between border-b border-gray-800 py-2">
              <div className="flex items-center gap-2">
                <CloudLightning size={20} className="text-orange-400" />
                {/* ✅ Lucide icon (you can change color/class) */}
                <p className="font-medium text-sm sm:text-base md:text-lg text-white">AWS</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}