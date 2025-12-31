"use client"

import { motion } from "framer-motion"
import { Star, Medal, Heart } from "lucide-react"

const awards = [
  {
    name: "Dr. Priya Sharma",
    award: "Innovation Excellence Award 2024",
    achievement: "Led groundbreaking research in gene therapy",
    icon: Star,
    image: "/professional-woman-diverse.png",
  },
  {
    name: "Michael Johnson",
    award: "Leadership Excellence Award",
    achievement: "Outstanding team management and mentorship",
    icon: Medal,
    image: "/professional-man.jpg",
  },
  {
    name: "Amelia Chen",
    award: "Patient Care Hero Award",
    achievement: "Exceptional dedication to patient safety",
    icon: Heart,
    image: "/healthcare-professional.png",
  },
  {
    name: "Dr. Hassan Al-Rashid",
    award: "Scientific Excellence Award",
    achievement: "Contributed to 15+ published research papers",
    icon: Star,
    image: "/scientist-researcher.png",
  },
  {
    name: "Sofia Rodriguez",
    award: "Teamwork & Collaboration Award",
    achievement: "Bridged departments for seamless integration",
    icon: Medal,
    image: "/confident-business-woman.png",
  },
  {
    name: "James Wilson",
    award: "Sustainability Champion Award",
    achievement: "Implemented eco-friendly manufacturing practices",
    icon: Heart,
    image: "/environmental-leader.jpg",
  },
]

export default function AwardsGrid() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Award Recipients 2024</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our outstanding team members recognized for their exceptional contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all group"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden bg-muted relative">
                  <img
                    src={award.image || "/placeholder.svg"}
                    alt={award.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg">{award.name}</h3>
                  </div>

                  <p className="text-accent font-semibold text-sm mb-3">{award.award}</p>
                  <p className="text-foreground/70 text-sm">{award.achievement}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
