export default function Education() {
  const education = [
    {
      degree: "B. Tech. Computer Science And Engineering",
      institution: "RCOEM, Nagpur",
      period: "2023 – 2027",
      highlight: "CGPA: 9.16",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Shree Ram Junior College, Kalmeshwar",
      period: "2021 – 2022",
      highlight: "88.67%",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Jindal Vidya Mandir, Kalmeshwar",
      period: "2019 - 2020",
      highlight: "93.40% | 3rd Rank",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-l-lg group-hover:w-1.5 transition-all duration-300"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span>{edu.period}</span>
                    <span className="text-cyan-300 font-semibold">{edu.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
