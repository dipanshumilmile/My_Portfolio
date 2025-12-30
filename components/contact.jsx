import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/dipanshumilmile",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/dipanshu-milmile",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:dipanshumilmile07@gmail.com",
      color: "hover:text-red-400",
    },
    
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6"></div>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full glass border border-cyan-500/20 glow-hover transition-all hover:scale-110 ${contact.color}`}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>

        <a
          href="mailto:dipanshumilmile07@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all glow-hover shadow-lg hover:shadow-cyan-500/50 hover:scale-105 duration-300"
        >
          Send Me an Email
        </a>

        <div className="mt-12 pt-12 border-t border-cyan-500/20 text-gray-400 text-sm">
          <p>© 2025 Dipanshu Milmile. Built with React & Next.js</p>
        </div>
      </div>
    </section>
  )
}
