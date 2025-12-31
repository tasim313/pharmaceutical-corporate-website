"use client"

import { motion } from "framer-motion"

const categories = [
  { id: "all", label: "All Products", icon: "💊" },
  { id: "cardiology", label: "Cardiology", icon: "❤️" },
  { id: "oncology", label: "Oncology", icon: "🔬" },
  { id: "immunology", label: "Immunology", icon: "🛡️" },
  { id: "diabetes", label: "Diabetes", icon: "🩺" },
  { id: "respiratory", label: "Respiratory", icon: "💨" },
]

export default function ProductFilter({
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
      {categories.map((category) => (
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
