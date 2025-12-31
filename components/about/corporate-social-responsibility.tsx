"use client"

import { motion } from "framer-motion"
import { Leaf, Users, Heart, Lightbulb } from "lucide-react"

const initiatives = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Free medical camps and healthcare programs for underprivileged communities",
  },
  {
    icon: Leaf,
    title: "Environmental Care",
    description: "Sustainable manufacturing practices and carbon-neutral operations",
  },
  {
    icon: Users,
    title: "Education",
    description: "Scholarships and training programs for aspiring healthcare professionals",
  },
  {
    icon: Lightbulb,
    title: "Innovation Access",
    description: "Affordable medicines program for developing nations",
  },
]

export default function CorporateSocialResponsibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Corporate Social Responsibility</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our commitment to creating positive social and environmental impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-border hover:border-accent/50 transition-all group"
              >
                <div className="p-4 bg-accent/20 rounded-lg w-fit mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-foreground/70">{initiative.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
