"use client"

import { motion } from "framer-motion"

const directors = [
  { name: "Dr. James Wilson", title: "Chairman", expertise: "Strategic Leadership" },
  { name: "Prof. Maria Garcia", title: "Director - R&D", expertise: "Drug Development" },
  { name: "Mr. David Kumar", title: "Director - Operations", expertise: "Manufacturing & Quality" },
  { name: "Dr. Lisa Chen", title: "Director - Medical", expertise: "Clinical Affairs" },
  { name: "Mr. Ahmed Hassan", title: "Director - Commercial", expertise: "Market Strategy" },
  { name: "Ms. Jennifer Brown", title: "Director - Compliance", expertise: "Regulatory Affairs" },
]

export default function BoardOfDirectors() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Board of Directors</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experienced leaders guiding PharmaCorp towards excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{director.name}</h3>
              <p className="text-accent font-semibold mb-2">{director.title}</p>
              <p className="text-sm text-foreground/60">{director.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
