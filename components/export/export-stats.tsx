"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "150+", label: "Countries Served", icon: "🌍" },
  { number: "500M+", label: "Patients Treated", icon: "👥" },
  { number: "$50B", label: "Export Revenue", icon: "💰" },
  { number: "10,000+", label: "Distribution Partners", icon: "🤝" },
]

export default function ExportStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl border border-border text-center hover:border-accent/50 transition-all"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
