export function SkillRightSection() {
  const education = [
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "City College",
      year: "2020 - 2022",
      description:
        "Studied Computer Science with a focus on developing strong fundamentals in programming, computer skills, networking, databases, and mathematics, which built the foundation for my journey into software development.",
    },
    {
      degree: "Bachelor of Science in Computer Science(BSCS)",
      institution: "Islamia College University",
      year: "2022 - present",
      description:
        "Pursuing a Bachelor’s in Computer Science, learning core concepts including Programming Fundamentals I & II, Object-Oriented Programming with C++ and Java, Data Structures & Algorithms, Artificial Intelligence, and various professional development topics.",
    },
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Softech Square Software Solutions Pvt Ltd",
      period: "July/2025 - Present",
      description:
        "I am currently working as a MERN Stack Developer at Softech Square, where I design and build full-stack web applications using MongoDB, Express.js, React.js, Next.js and Node.js. I collaborate with frontend teams, QA engineers, and project managers to deliver reliable solutions while writing clean, efficient code.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Full-Stack Developer - Internship",
      company: "PreciseTec",
      period: "Jan/2025 - Mar/2023",
      description:
        "At PreciseTec, I worked on building and maintaining web applications using the MERN stack. I collaborated with senior developers on live projects to improve backend and frontend performance, optimize user interfaces, and troubleshoot issues.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <div className="col-span-12 md:col-span-6 bg-black border-t border-b border-r border-l lg:border-l-0 border-gray-500 border-dashed mt-5 lg:mt-0">
      <div>
        {/* Section Header */}
        <div className="p-4 sm:p-5 md:p-6 border-b border-gray-500 border-dashed">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            Professional Journey
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            My work experience and educational background
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-5 md:p-6 gap-6 sm:gap-8 h-[70vh] sm:h-[80vh] lg:h-screen overflow-y-auto custom-scrollbar">
          {/* Core Competencies */}
          <div className="mb-6 sm:mb-8">
            <div className="rounded-lg shadow-lg border border-gray-800 bg-gray-900/60">
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  Core Competencies
                </h3>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Team Leadership",
                    "Agile Development",
                    "System Design",
                    "Code Review",
                    "Mentoring",
                  ].map((competency, index) => (
                    <span
                      key={index}
                      className="bg-blue-900 text-blue-200 text-[10px] sm:text-xs md:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border border-blue-700"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <div className="rounded-lg shadow-lg border border-gray-800 bg-gray-900/60">
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-700">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-6 sm:h-8 bg-amber-500 rounded-full"></div>
                  Professional Experience
                </h2>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <div className="relative">
                  {/* Timeline line (only on lg+) */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600 hidden lg:block"></div>

                  <div className="space-y-6 sm:space-y-8">
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className="relative flex items-start lg:gap-6"
                      >
                        {/* Marker */}
                        <div className="relative z-10 flex-shrink-0 hidden lg:block">
                          <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-gray-900 shadow-md"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 lg:pb-8">
                          <div className="border border-gray-800 bg-gray-900/60 rounded-lg p-3 sm:p-4 md:p-5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                              <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg">
                                {exp.title}
                              </h3>
                              <span className="bg-gray-700 text-gray-200 text-[10px] sm:text-xs md:text-sm font-medium px-2.5 py-0.5 rounded">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-blue-400 font-medium mb-2 text-xs sm:text-sm md:text-base">
                              {exp.company}
                            </p>
                            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="bg-blue-900 text-blue-200 text-[10px] sm:text-xs md:text-sm font-medium px-2 py-1 rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-lg shadow-lg border border-gray-800 bg-gray-900/60">
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white flex items-center gap-2">
                  <div className="w-1.5 h-5 sm:h-6 bg-blue-500 rounded-full"></div>
                  Education
                </h3>
              </div>
              <div className="p-4 sm:p-5 md:p-6 space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 bg-gray-900/60 rounded-lg p-3 sm:p-4 md:p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">
                        {edu.degree}
                      </h4>
                      <span className="bg-blue-600 text-white text-[10px] sm:text-xs md:text-sm font-medium px-2.5 py-0.5 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2 text-xs sm:text-sm md:text-base">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-lg shadow-lg border border-gray-800 bg-gray-900/60">
              <div className="p-4 sm:p-5 md:p-6 border-b border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Certifications
                </h3>
              </div>
              <div className="p-3 sm:p-4 md:p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-gray-800 bg-gray-900/60">
                  <span className="font-medium text-white text-xs sm:text-sm md:text-base">
                    Web And Mobile App Development
                  </span>
                  <span className="sm:bg-gray-700 text-gray-200 text-[10px] sm:text-xs md:text-sm font-medium sm:px-2.5 py-0.5 rounded">
                    2024
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-gray-800 bg-gray-900/60">
                  <span className="font-medium text-white text-xs sm:text-sm md:text-base">
                    Machine Learning Specialization
                  </span>
                  <span className="sm:bg-gray-700 text-gray-200 text-[10px] sm:text-xs md:text-sm font-medium sm:px-2.5 py-0.5 rounded ">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
