"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Tools",
      skills: ["IntelliJ", "Google Colab", "GitHub", "VS Code"],
    },
    {
      category: "Core Concepts",
      skills: ["OOP", "DBMS", "DSA", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-12 animate-pulse-glow"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`glass p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group hover:glow-hover stagger-item-${idx + 1}`}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 rounded-full text-sm font-medium hover:bg-cyan-500/30 hover:border-cyan-500/60 hover:scale-110 transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
