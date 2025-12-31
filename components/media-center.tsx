"use client"

import { useState } from "react"
import { Calendar, Newspaper, Filter } from "lucide-react"

const mediaItems = [
  { id: 1, type: "Press Release", title: "New Drug Approval", date: "2024-12-15", year: 2024 },
  { id: 2, type: "Article", title: "Innovation Award", date: "2024-11-20", year: 2024 },
  { id: 3, type: "Press Release", title: "Partnership Announcement", date: "2024-10-10", year: 2024 },
  { id: 4, type: "Article", title: "Research Milestone", date: "2023-12-05", year: 2023 },
  { id: 5, type: "Press Release", title: "Expansion News", date: "2023-09-15", year: 2023 },
  { id: 6, type: "Article", title: "Safety Report", date: "2023-08-20", year: 2023 },
]

export default function MediaCenter() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filtered = mediaItems.filter((item) => {
    if (selectedYear && item.year !== selectedYear) return false
    if (selectedType && item.type !== selectedType) return false
    return true
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Media Center</h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <div className="flex gap-2">
            <Filter size={20} className="text-muted-foreground" />
            <select
              onChange={(e) => setSelectedYear(e.target.value ? Number.parseInt(e.target.value) : null)}
              className="px-4 py-2 rounded-lg bg-muted border border-border hover:border-accent transition-colors duration-300"
            >
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <select
              onChange={(e) => setSelectedType(e.target.value || null)}
              className="px-4 py-2 rounded-lg bg-muted border border-border hover:border-accent transition-colors duration-300"
            >
              <option value="">All Types</option>
              <option value="Press Release">Press Release</option>
              <option value="Article">Article</option>
            </select>
          </div>
        </div>

        {/* Media items */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.type === "Press Release" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-foreground/60 flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <Newspaper className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
