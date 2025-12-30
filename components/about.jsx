"use client"

export default function About() {
  const attributes = [
    {
      title: "Problem Solver",
      description: "200+ DSA problems solved with strong algorithmic thinking",
      icon: "🎯",
    },
    {
      title: "Lifelong Learner",
      description: "Continuously exploring new technologies and frameworks",
      icon: "📚",
    },
    {
      title: "Team Player",
      description: "Collaborative approach to building impactful solutions",
      icon: "🤝",
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-12 animate-pulse-glow"></div>

        <div className="mb-16">
          <p
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            I'm a Computer Science student at RCOEM (CGPA: 9.16) with hands-on experience in building full-stack web
            applications. My journey spans from competitive programming to developing AI-driven platforms. I believe in
            writing clean, maintainable code and creating solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {attributes.map((attr, idx) => (
            <div
              key={idx}
              className={`glass glow-hover p-6 rounded-lg border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500/60 group stagger-item-${idx + 1}`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                {attr.icon}
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{attr.title}</h3>
              <p className="text-gray-400">{attr.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
