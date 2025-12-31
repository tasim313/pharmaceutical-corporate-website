"use client"

import { motion } from "framer-motion"
import { Heart, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To discover, develop, and deliver innovative medicines that transform the lives of patients suffering from
              serious diseases. We are dedicated to advancing pharmaceutical science and making healthcare accessible to
              all.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To be the world's most trusted pharmaceutical company, recognized for our scientific excellence, ethical
              practices, and positive impact on global health and society.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
