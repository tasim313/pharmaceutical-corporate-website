"use client"

import { motion } from "framer-motion"

const founders = [
  {
    name: "Dr. Robert Mitchell",
    title: "Founder & Executive Chairman",
    bio: "Pioneer in pharmaceutical innovation with 40+ years in the industry",
    image: "/professional-scientist.png",
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Co-Founder & Chief Scientific Officer",
    bio: "Renowned biochemist and leader in drug discovery research",
    image: "/professional-woman-scientist.png",
  },
]

export default function FounderProfiles() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Founder Profiles</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Meet the visionary leaders who founded PharmaCorp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-accent font-semibold mb-3">{founder.title}</p>
              <p className="text-foreground/70">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
