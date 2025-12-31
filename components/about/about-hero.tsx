"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-animated">About PharmaCorp</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Leading the pharmaceutical industry with innovation, integrity, and a commitment to improving lives
            worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
