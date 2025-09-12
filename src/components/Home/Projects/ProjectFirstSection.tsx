import {
  // Frontend
  siReact,
  siTailwindcss,
  siShadcnui,
  // Backend
  siNodedotjs,
  siExpress,
  siMongodb,
  siRedux,
} from "simple-icons/icons";

export default function ProjectFirstSection() {
  return (
    <main className="bg-background">
      <section className="container max-w-7xl mx-auto py-6 sm:py-10">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-6 items-stretch">
          {/* Left side - Image */}
          <div className="lg:col-span-8 col-span-12">
            <div className="w-full h-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 p-2 relative">
              <img
                src="/gem-stone.PNG"
                alt="ICMS Project"
                className="w-full h-full object-contain rounded-xl 
                           bg-gray-900 shadow-lg shadow-blue-500/20 opacity-90"
              />
              {/* Black overlay */}
              <div className="lg:absolute relative inset-0 bg-black/40 rounded-xl pointer-events-none" />
            </div>
          </div>

          {/* Right side - Description */}
          <div className="lg:col-span-4 col-span-12">
            <div className="lg:sticky block lg:top-32">
              {/* Title */}
              <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                GemStone
              </h2>

              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
                A smart platform for managing and showcasing gemstones with ease
                and clarity
              </p>

              {/* Tech buttons */}
             
              <div className="flex flex-wrap gap-3 mt-3">

      {/* React */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-cyan-500/30 backdrop-blur-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
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
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-green-600/30 backdrop-blur-lg hover:bg-green-600/30 hover:border-green-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${siNodedotjs.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
          width="20"
          height="20"
          dangerouslySetInnerHTML={{ __html: siNodedotjs.svg }}
          fill={`#${siNodedotjs.hex}`}
        />
        Node.js
      </button>

      {/* Express.js */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-gray-500/30 backdrop-blur-lg hover:bg-gray-500/30 hover:border-gray-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${siExpress.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
          width="20"
          height="20"
          dangerouslySetInnerHTML={{ __html: siExpress.svg }}
          fill="white"
        />
        Express.js
      </button>

      {/* MongoDB */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-green-500/30 backdrop-blur-lg hover:bg-green-500/30 hover:border-green-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${siMongodb.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
          width="20"
          height="20"
          dangerouslySetInnerHTML={{ __html: siMongodb.svg }}
          fill={`#${siMongodb.hex}`}
        />
        MongoDB
      </button>


      {/* Tailwind */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-cyan-400/30 backdrop-blur-lg hover:bg-cyan-400/30 hover:border-cyan-300/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${siTailwindcss.svg.match(/viewBox="([^"]+)"/)?.[1]}`}
          width="20"
          height="20"
          dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
          fill={`#${siTailwindcss.hex}`}
        />
        Tailwind
      </button>

      {/* Shadcn */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-indigo-500/30 backdrop-blur-lg hover:bg-indigo-500/30 hover:border-indigo-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        {/* No official icon in simple-icons yet, fallback circle */}
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
 
      {/* Redux */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-purple-500/30 backdrop-blur-lg hover:bg-purple-500/30 hover:border-purple-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
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
      {/* JWT */}
      <button className="relative flex gap-2 items-center rounded-full font-medium text-white text-xs sm:text-sm md:text-base 
                         bg-orange-500/30 backdrop-blur-lg hover:bg-orange-500/30 hover:border-orange-400/50 
                         transition-all duration-300 px-3 py-2 md:px-4 md:py-2.5 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="#FF9900"
        >
          <path d="m6.314 1.326-.691.403.201.345L9.65 8.641l.069.117a4 4 0 0 0-.992.988L6.379 8.391l-.338-.194-.4.692.338.195 2.355 1.36a4 4 0 0 0-.312 1.198H.4l-.4.001v.8h8.021a4 4 0 0 0 .313 1.2l-2.356 1.359-.337.195.4.692.338-.193 2.347-1.358a4 4 0 0 0 .834.873l-.086.148-3.826 6.567-.2.346.69.402.202-.344 3.826-6.568.074-.127a4 4 0 0 0 1.36.387v3.021h.8v-3.021a4 4 0 0 0 1.409-.413l.066.114 3.826 6.568.201.346.692-.405-.201-.345-3.827-6.567-.084-.142a4 4 0 0 0 .791-.84l2.348 1.357.338.194.4-.692-.337-.195-2.356-1.36a4 4 0 0 0 .313-1.198H24v-.801h-8.021a4 4 0 0 0-.313-1.2l2.356-1.359.337-.195-.4-.692-.338.194-2.348 1.355a4 4 0 0 0-1.015-1.004l.058-.101 3.827-6.567.2-.345-.69-.403-.202.344-3.826 6.568-.068.12a4 4 0 0 0-1.157-.294V5.043h-.8v3.021a4 4 0 0 0-1.182.305l-.076-.13L6.516 1.67ZM12 3.043a.6.6 0 0 0-.6.6.6.6 0 0 0 .6.6.6.6 0 0 0 .6-.6.6.6 0 0 0-.6-.6m-7.2 4.2a.6.6 0 0 0-.601.6.6.6 0 0 0 .602.6.6.6 0 0 0 .6-.6.6.6 0 0 0-.6-.6m14.398 0a.6.6 0 0 0-.6.6.6.6 0 0 0 .6.6.6.6 0 0 0 .602-.6.6.6 0 0 0-.602-.6M12 8.888a3.153 3.153 0 1 1 0 6.307 3.153 3.153 0 1 1 0-6.307m0 2.555a.6.6 0 0 0-.599.6.6.6 0 0 0 .6.599.6.6 0 0 0 .6-.6.6.6 0 0 0-.6-.6m-7.2 4.2a.6.6 0 0 0-.601.6.6.6 0 0 0 .602.601.6.6 0 0 0 .6-.602.6.6 0 0 0-.6-.6m14.398 0a.6.6 0 0 0-.6.6.6.6 0 0 0 .6.602.6.6 0 0 0 .602-.602.6.6 0 0 0-.602-.6M12 19.845a.6.6 0 0 0-.599.6.6.6 0 0 0 .6.6.6.6 0 0 0 .6-.6.6.6 0 0 0-.6-.6" />
        </svg>
        JWT Token
      </button>
    </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
