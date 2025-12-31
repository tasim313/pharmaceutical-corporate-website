"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export default function ExportHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent/20 rounded-2xl">
              <Globe className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-animated">Export Markets</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            PharmaCorp's pharmaceutical products are trusted by millions of patients across 150+ countries worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
