"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const milestones = [
  { year: "1995", title: "Company Founded", description: "PharmaCorp established with focus on research" },
  { year: "2000", title: "First Product Launch", description: "Revolutionary cardiology drug approved" },
  { year: "2005", title: "Global Expansion", description: "Presence in 50+ countries worldwide" },
  { year: "2010", title: "R&D Excellence", description: "Investment of $500M in research centers" },
  { year: "2015", title: "ISO Certification", description: "Achieved highest quality standards globally" },
  { year: "2020", title: "Digital Transformation", description: "Launched AI-powered drug discovery platform" },
  { year: "2023", title: "Biotech Integration", description: "Acquisition of leading biotech startup" },
  { year: "2024", title: "Market Leadership", description: "Ranked #1 in innovation and patient care" },
]

export default function Milestones() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Milestones of Excellence</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Three decades of innovation and growth</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>

          <div className="grid gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 lg:flex-none lg:w-1/2">
                  <div className="glass p-6 rounded-xl border border-border hover:border-accent/50 transition-all">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-2xl font-bold text-accent mb-1">{milestone.year}</p>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
