"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import Products from "@/components/products"
import Testimonials from "@/components/testimonials"
import TherapeuticAreas from "@/components/therapeutic-areas"
import Innovation from "@/components/innovation"
import ResearchInnovation from "@/components/research-innovation"
import Partnerships from "@/components/partnerships"
import Certifications from "@/components/certifications"
import InvestorDashboard from "@/components/investor-dashboard"
import Sustainability from "@/components/sustainability"
import Careers from "@/components/careers"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(dark)
    if (dark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Gallery />
      <Products />
      <Testimonials />
      <TherapeuticAreas />
      <Innovation />
      <ResearchInnovation />
      <Partnerships />
      <Certifications />
      <InvestorDashboard />
      <Sustainability />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}
