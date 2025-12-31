"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const products = [
  {
    id: "1",
    name: "CardioMax Pro",
    category: "cardiology",
    price: "$45.99",
    image: "/cardiology-medicine-pills.jpg",
    description: "Advanced heart disease treatment",
    rating: 4.8,
  },
  {
    id: "2",
    name: "OncoCare Elite",
    category: "oncology",
    price: "$125.50",
    image: "/oncology-cancer-treatment.jpg",
    description: "Cutting-edge cancer therapy",
    rating: 4.9,
  },
  {
    id: "3",
    name: "ImmunoShield",
    category: "immunology",
    price: "$38.75",
    image: "/immunology-immune-system.png",
    description: "Immune system booster",
    rating: 4.7,
  },
  {
    id: "4",
    name: "DiabetesControl",
    category: "diabetes",
    price: "$32.99",
    image: "/diabetes-insulin-treatment.jpg",
    description: "Blood sugar management solution",
    rating: 4.6,
  },
  {
    id: "5",
    name: "RespiCare Pro",
    category: "respiratory",
    price: "$29.50",
    image: "/respiratory-asthma-inhaler.jpg",
    description: "Respiratory health support",
    rating: 4.5,
  },
  {
    id: "6",
    name: "CardioHeal Plus",
    category: "cardiology",
    price: "$52.00",
    image: "/heart-medicine-treatment.jpg",
    description: "Comprehensive cardiac care",
    rating: 4.8,
  },
]

export default function ProductGrid({ selectedCategory }: { selectedCategory: string }) {
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <Link href={`/products/${product.id}`}>
            <div className="glass border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col">
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-1">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{product.rating}</span>
                  </span>
                </div>

                <button className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors ripple">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
