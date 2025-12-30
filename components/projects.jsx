"use client"

import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "NiveshSathi",
      description: "AI-Driven Mutual Fund Recommendation Platform with interactive fund-specific chat functionality",
      tech: ["React", "Next.js", "Spring Boot", "PostgreSQL", "AI/ML"],
      github: "#",
      live: "https://niveshsathi.vercel.app/",
      status: "Deployed",
    },
    {
      title: "Unsolved.in",
      description:
        "Community-Driven Problem-Solving Platform enabling users to browse, post, and track real-world problems",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "#",
      live: "#",
      status: "Active",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-12 animate-pulse-glow"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`glass glow-hover p-6 rounded-lg border border-cyan-500/20 transition-all duration-300 flex flex-col hover:border-cyan-500/60 group hover:scale-105 stagger-item-${idx + 1}`}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full font-medium group-hover:bg-cyan-500/40 group-hover:animate-pulse transition-all duration-300">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6 flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded hover:bg-purple-500/40 hover:border-purple-500/60 hover:scale-110 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-cyan-500/10">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 duration-200 group/link"
                >
                  <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-200" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 duration-200 group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:scale-125 transition-transform duration-200" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
