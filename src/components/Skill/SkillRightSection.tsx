export default function SkillRightSection() {
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
        "I am currently working as a MERN Stack Developer at Softech Square, where I design and build full-stack web applications using MongoDB, Express.js, React.js, Next.js and Node.js. I collaborate with frontend teams, QA engineers, and project managers to deliver reliable solutions while writing clean, efficient code. My role helps me strengthen problem-solving, analytical, and teamwork skills while staying updated with the latest web development trends.",
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
        "At PreciseTec, I worked on building and maintaining web applications using the MERN stack. I collaborated with senior developers on live projects to improve backend and frontend performance, optimize user interfaces, and troubleshoot issues. I also contributed to debugging, code reviews, and team discussions, which strengthened my understanding of front-end and back-end integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <div className="col-span-6 min-h-screen bg-black border-t border-b border-r border-gray-500 border-dashed">
      <div className="">
        <div className="p-6 border-b border-gray-500 border-dashed">
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <p className="text-sm sm:text-base text-gray-400">
            My work experience and educational background
          </p>
        </div>

        <div className="p-6 gap-8">
          {/* Left Section - Skills */}
          <div className="mb-8">
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">
                  Core Competencies
                </h3>
              </div>
              <div className="p-6">
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
                      className="bg-blue-900 text-blue-200 text-sm font-medium px-3 py-1 rounded-full border border-blue-700"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Experience and Education */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                  Professional Experience
                </h2>
              </div>
              <div className="p-6">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600"></div>

                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className="relative flex items-start gap-6"
                      >
                        {/* Timeline marker */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-gray-900 shadow-md"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-white">
                                {exp.title}
                              </h3>
                              <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-blue-400 font-medium mb-3">
                              {exp.company}
                            </p>
                            <p className="text-sm text-gray-300 mb-3">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-blue-900 text-blue-200 text-xs font-medium px-2 py-1 rounded"
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

            {/* Education Timeline */}
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                  Education
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">
                  Certifications
                </h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <span className="font-medium text-white">
                    Web And Mobile App Development{" "}
                  </span>
                  <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    2024
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <span className="font-medium text-white">
                    Machine Learning Specialization
                  </span>
                  <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
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
