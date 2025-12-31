"use client"

import { TrendingUp, Beaker, Target } from "lucide-react"

export default function ResearchInnovation() {
  const initiatives = [
    {
      title: "Advanced Drug Discovery",
      description: "Utilizing AI and machine learning for drug discovery and development",
      icon: Beaker,
      stats: "50+ ongoing projects",
    },
    {
      title: "Clinical Research",
      description: "Phase I-IV clinical trials with international research institutions",
      icon: Target,
      stats: "25+ active trials",
    },
    {
      title: "R&D Investment",
      description: "15% of annual revenue invested in research and innovation",
      icon: TrendingUp,
      stats: "₹500 Crore annually",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Research & Innovation</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-foreground/70 mb-6">{initiative.description}</p>
                <div className="pt-6 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{initiative.stats}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
