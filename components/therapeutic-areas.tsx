"use client"

import { useState } from "react"
import { Heart, Zap, Shield, TrendingUp } from "lucide-react"

const therapeuticAreas = [
  { name: "Cardiology", icon: Heart, color: "bg-red-500/20 text-red-500" },
  { name: "Oncology", icon: Zap, color: "bg-yellow-500/20 text-yellow-500" },
  { name: "Immunology", icon: Shield, color: "bg-blue-500/20 text-blue-500" },
  { name: "Metabolic", icon: TrendingUp, color: "bg-green-500/20 text-green-500" },
]

export default function TherapeuticAreas() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Therapeutic Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapeuticAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.name}
                onClick={() => setExpandedArea(expandedArea === area.name ? null : area.name)}
                className={`group cursor-pointer p-6 rounded-xl border-2 border-transparent bg-card hover:border-accent transition-all duration-300 ${
                  expandedArea === area.name ? "ring-2 ring-accent" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-lg ${area.color} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.name}</h3>
                {expandedArea === area.name && (
                  <div className="slide-up text-sm text-foreground/70">
                    <p>Advanced research and clinical trials in {area.name.toLowerCase()}.</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
