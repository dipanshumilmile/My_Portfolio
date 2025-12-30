"use client"

export default function Stats() {
  const stats = [
    {
      value: "200+",
      label: "LeetCode Problems",
      icon: "🎯",
    },
    {
      value: "9.16",
      label: "Current CGPA",
      icon: "📚",
    },
    {
      value: "3rd Rank ",
      label: "HSC & SSC",
      icon: "💼",
    },
    {
      value: "4+",
      label: "Certifications",
      icon: "🏆",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Achivements
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`glass glow-hover p-6 rounded-lg border border-cyan-500/20 text-center transition-all duration-300 hover:border-cyan-500/50 group hover:scale-105 stagger-item-${idx + 1}`}
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-125 group-hover:animate-blob transition-transform duration-300 inline-block">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
