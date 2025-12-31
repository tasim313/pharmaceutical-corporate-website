"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductHero from "@/components/products/product-hero"
import ProductFilter from "@/components/products/product-filter"
import ProductGrid from "@/components/products/product-grid"
import useAntiInspect from "@/hooks/useAntiInspect"
export default function ProductsPage() {
  useAntiInspect()
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
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
      <ProductHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProductFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ProductGrid selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </div>
  )
}
