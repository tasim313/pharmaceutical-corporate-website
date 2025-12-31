"use client"

import { useEffect, useState } from "react"

interface TimelineItem {
  year: number
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  { year: 2024, title: "Breakthrough Discovery", description: "New molecular compound identified" },
  { year: 2023, title: "Clinical Trials", description: "Phase 3 trials completed successfully" },
  { year: 2022, title: "Research Initiative", description: "Major research facility established" },
  { year: 2021, title: "Innovation Hub", description: "Global innovation center launched" },
]

export default function Innovation() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    timeline.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 200)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Research & Innovation</h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`flex gap-6 transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {item.year % 100}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent mt-2" />
                )}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
