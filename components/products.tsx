"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Pill, Activity, Heart, Brain, ArrowRight } from "lucide-react"

const productCategories = [
  {
    id: 1,
    name: "CardioMax Pro",
    category: "Cardiology",
    description: "Advanced cardiovascular therapy for heart health",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    categorySlug: "cardiology",
    image: "/cardiology-medicine-pills.jpg",
  },
  {
    id: 2,
    name: "NeuroGuard Plus",
    category: "Neurology",
    description: "Neural protection and cognitive recovery",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    categorySlug: "neurology",
    image: "/brain-neurology-treatment.jpg",
  },
  {
    id: 3,
    name: "OncoPrecision Elite",
    category: "Oncology",
    description: "Targeted precision cancer therapy solutions",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    categorySlug: "oncology",
    image: "/oncology-cancer-treatment.jpg",
  },
  {
    id: 4,
    name: "GlucoBalance Control",
    category: "Diabetes",
    description: "Advanced glucose management solution",
    icon: Pill,
    color: "from-amber-500 to-orange-500",
    categorySlug: "diabetes",
    image: "/diabetes-insulin-treatment.jpg",
  },
]

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-index]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Transforming lives with innovative pharmaceutical solutions across multiple therapeutic areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((product, index) => {
            const Icon = product.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={product.id}
                data-index={index}
                className={`group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link href={`/products?category=${product.categorySlug}`}>
                  <div className="glass rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Product Name and Category */}
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-accent font-semibold mb-3">{product.category}</p>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm flex-1 mb-4">{product.description}</p>

                      {/* View Details Button */}
                      <button className="w-full py-2 px-4 rounded-lg font-semibold text-sm bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        View Products
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/products">
            <button className="px-8 py-4 rounded-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl ripple">
              View All Products & Categories
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
