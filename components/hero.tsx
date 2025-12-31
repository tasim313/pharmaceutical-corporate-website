"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Play, Sparkles, TrendingUp } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gradient-to-l from-primary/15 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-gradient-to-t from-accent/10 rounded-full blur-3xl" />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top animated badge */}
        <div className={`fade-in-up stagger-1 mb-8 inline-block`}>
          <div className="glass-strong px-6 py-3 rounded-full text-sm font-bold text-accent flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
            <Sparkles size={16} className="group-hover:rotate-180 transition-transform duration-500" />
            Next Generation Pharmaceuticals
          </div>
        </div>

        {/* Main heading with animation */}
        <div className={`fade-in-up stagger-2 mb-6`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="gradient-text">Innovating</span> for a{" "}
            <span className="text-gradient-animated">Healthier Tomorrow</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className={`fade-in-up stagger-3 mb-12`}>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through cutting-edge pharmaceutical solutions, groundbreaking research, and a commitment
            to excellence in every treatment we develop.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`fade-in-up stagger-4 flex flex-col sm:flex-row gap-6 justify-center mb-16`}>
          <button className="px-8 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold ripple group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 inline-flex items-center justify-center">
            Explore Products
            <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} />
          </button>
          <button className="px-8 py-5 border-2 border-primary/40 text-primary rounded-xl font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-accent/60 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-3 group hover:scale-105">
            <Play size={20} className="group-hover:scale-125 transition-transform duration-300" />
            Watch Demo
          </button>
        </div>

        {/* Enhanced Stats with animation */}
        <div className={`fade-in-up stagger-5 grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 px-4`}>
          <div className="text-center p-6 rounded-xl glass hover:glass-strong transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl font-bold gradient-text mb-2 flex items-center justify-center gap-2">
              <TrendingUp size={28} className="text-accent" />
              500M+
            </div>
            <p className="text-sm text-foreground/60 font-medium">Lives Impacted</p>
          </div>
          <div className="text-center p-6 rounded-xl glass hover:glass-strong transition-all duration-300 hover:-translate-y-2 delay-100">
            <div className="text-4xl font-bold gradient-text mb-2">180+</div>
            <p className="text-sm text-foreground/60 font-medium">Countries Served</p>
          </div>
          <div className="text-center p-6 rounded-xl glass hover:glass-strong transition-all duration-300 hover:-translate-y-2 delay-200">
            <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
            <p className="text-sm text-foreground/60 font-medium">Employees</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-2 bg-gradient-to-b from-accent to-accent/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
