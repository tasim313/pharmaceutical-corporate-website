"use client"

import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

const values = [
  "Integrity and ethical conduct in all business dealings",
  "Transparency in decision-making and communication",
  "Compliance with all regulatory requirements",
  "Respect for human rights and dignity",
  "Confidentiality and data protection",
  "Conflict of interest disclosure",
  "Anti-corruption and anti-bribery practices",
  "Accountability for business performance",
]

export default function DirectorsConduct() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Code of Conduct</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Guiding principles for our leadership and all stakeholders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 glass rounded-lg border border-border hover:border-accent/50 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/80">{value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-accent/10 border border-accent/30 rounded-xl p-8 flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">Whistleblower Protection</h3>
            <p className="text-foreground/70">
              PharmaCorp maintains a confidential reporting mechanism for any violations of the code of conduct. All
              reports are treated with utmost confidentiality and investigated thoroughly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
