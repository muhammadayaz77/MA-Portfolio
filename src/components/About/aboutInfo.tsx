import Image from "next/image";

export default function AboutInfo() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-28 text-gray-100 gap-10 lg:gap-16">
      {/* Left Side - Text */}
      <div className=" space-y-6 w-full lg:w-1/2">
        <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold">
          I&apos;m Ayaz
          <span className="absolute left-0 -bottom-[5px] w-1/2 h-[3px] bg-blue-500 rounded-md"></span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          I’m a 22-year-old developer based in Peshawar, Pakistan, with a strong passion
          for building projects, exploring new technologies, and engaging with the tech
          community.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          I enjoy learning new frameworks and programming languages while continuously
          improving my skills as a developer.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          I’m always eager to take on challenging opportunities that push me to grow and
          contribute meaningfully to innovative projects.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-3xl overflow-hidden border-2 border-gray-800">
          <Image
            src="/setup.jpg"
            alt="Setup Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
