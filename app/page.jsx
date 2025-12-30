"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Stats from "@/components/stats"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import StarBackground from "@/components/star-background"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDark(saved === "dark")
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div className={isDark ? "dark" : ""}>
      <StarBackground />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
