"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/image.png" alt="Developer workspace" className="w-full h-full object-cover" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Additional gradient overlay for neon effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-left flex-1">
        <div className="space-y-6 mb-8 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight animate-slide-in-left">
              Dipanshu Milmile
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse-glow"></div>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold animate-slide-in-right">
              Computer Science Student & Full-Stack Developer
            </p>
          </div>

          <p
            className="text-gray-300 text-lg max-w-2xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            Building AI-driven solutions and scalable web applications. Passionate about clean code, problem-solving,
            and crafting exceptional user experiences.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 glow-hover shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 active:scale-95"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
