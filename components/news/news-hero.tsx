"use client"

import { motion } from "framer-motion"

export default function NewsHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-animated">Latest News & Insights</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest developments, breakthroughs, and industry insights from PharmaCorp.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
