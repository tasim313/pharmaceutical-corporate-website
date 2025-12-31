"use client"

import { motion } from "framer-motion"
import { Zap, Users, Lightbulb, Target } from "lucide-react"

const programs = [
  {
    icon: Zap,
    title: "Excellence Awards",
    description: "Annual recognition for outstanding performance across all departments",
    benefits: ["Cash prize", "Recognition ceremony", "Promotion opportunities"],
  },
  {
    icon: Users,
    title: "Team Achievement Program",
    description: "Celebrate collective success and teamwork milestones",
    benefits: ["Team bonuses", "Team outings", "Public recognition"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenge",
    description: "Recognize and reward innovative ideas that transform the company",
    benefits: ["Funding for ideas", "Career development", "Patent recognition"],
  },
  {
    icon: Target,
    title: "Customer Care Champion",
    description: "Honor employees who exceed customer expectations",
    benefits: ["Awards & certificates", "Special privileges", "Leadership roles"],
  },
]

export default function RecognitionPrograms() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recognition Programs</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ongoing initiatives to recognize and celebrate employee achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-border hover:border-accent/50 transition-all group"
              >
                <div className="p-4 bg-accent/20 rounded-lg w-fit mb-6 group-hover:bg-accent/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-foreground/70 mb-6">{program.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">Key Benefits:</p>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
