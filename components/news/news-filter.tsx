"use client"

import { motion } from "framer-motion"

const newsCategories = [
  { id: "all", label: "All News", icon: "📰" },
  { id: "press-release", label: "Press Release", icon: "📢" },
  { id: "research", label: "Research", icon: "🔬" },
  { id: "clinical-trial", label: "Clinical Trial", icon: "🧪" },
  { id: "company", label: "Company News", icon: "🏢" },
  { id: "events", label: "Events", icon: "📅" },
]

export default function NewsFilter({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-4 mb-12 justify-center"
    >
      {newsCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
            selectedCategory === category.id
              ? "bg-accent text-accent-foreground shadow-lg scale-105"
              : "glass border border-border hover:border-accent/50"
          }`}
        >
          <span>{category.icon}</span>
          {category.label}
        </button>
      ))}
    </motion.div>
  )
}
