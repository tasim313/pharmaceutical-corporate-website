"use client"

import { useEffect, useState } from "react"
import { Leaf, Droplet, Zap, Users } from "lucide-react"

const sustainabilityGoals = [
  {
    icon: Leaf,
    title: "Carbon Neutral",
    target: "2030",
    progress: 65,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    target: "-50%",
    progress: 42,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Renewable Energy",
    target: "100%",
    progress: 78,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Social Impact",
    target: "2030",
    progress: 85,
    color: "from-pink-500 to-rose-500",
  },
]

export default function Sustainability() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    sustainabilityGoals.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 150)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Sustainability & ESG</h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Committed to responsible innovation and environmental stewardship
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityGoals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <div
                key={goal.title}
                className={`rounded-xl bg-card border border-border p-6 transition-all duration-500 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${goal.color} p-3 mb-4`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">Target: {goal.target}</p>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${goal.color} transition-all duration-1000`}
                    style={{
                      width: visibleCards.includes(index) ? `${goal.progress}%` : "0%",
                    }}
                  />
                </div>
                <p className="text-xs text-foreground/60 mt-2">{goal.progress}% progress</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
