"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

const sisters = [
  {
    name: "PharmaTech Diagnostics",
    description: "Advanced laboratory testing and diagnostic services",
    focus: "Diagnostic Solutions",
  },
  {
    name: "HealthCare Logistics",
    description: "Supply chain and pharmaceutical distribution",
    focus: "Distribution & Logistics",
  },
  {
    name: "Biotech Research Labs",
    description: "Cutting-edge biotechnology research facility",
    focus: "Biotech Research",
  },
  {
    name: "Wellness Foundation",
    description: "Community health and wellness programs",
    focus: "Public Health",
  },
]

export default function SisterConcerns() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sister Concerns</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Our network of affiliated organizations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sisters.map((sister, index) => (
            <motion.div
              key={sister.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl border border-border hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Building2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm font-semibold text-accent">{sister.focus}</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">{sister.name}</h3>
              <p className="text-foreground/70">{sister.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
