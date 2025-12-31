"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart, Share2, CheckCircle2 } from "lucide-react"

const productDetails: Record<string, any> = {
  "1": {
    name: "CardioMax Pro",
    price: "$45.99",
    rating: 4.8,
    image: "/cardiology-medicine.jpg",
    description: "Advanced heart disease treatment with proven clinical efficacy",
    category: "Cardiology",
    dosage: "10mg, 20mg, 30mg tablets",
    uses: ["Hypertension management", "Angina prevention", "Heart attack prevention", "Atrial fibrillation treatment"],
    sideEffects: ["Dizziness (mild)", "Headache (occasional)", "Fatigue (rare)"],
    dosageInfo: "Take 1 tablet daily with or without food",
    ingredients: ["Active: Amlodipine Besylate", "Inactive: Microcrystalline cellulose, Lactose monohydrate"],
    precautions: ["Not for pregnant women", "Consult doctor if allergic", "May interact with certain drugs"],
  },
  "2": {
    name: "OncoCare Elite",
    price: "$125.50",
    rating: 4.9,
    image: "/oncology-cancer-treatment.jpg",
    description: "Cutting-edge cancer therapy with advanced targeted mechanism",
    category: "Oncology",
    dosage: "500mg injection",
    uses: ["Breast cancer", "Lung cancer", "Colorectal cancer", "Metastatic disease"],
    sideEffects: ["Nausea (treatable)", "Hair loss (temporary)", "Fatigue"],
    dosageInfo: "IV infusion every 3 weeks under medical supervision",
    ingredients: ["Active: Pembrolizumab", "Excipients: Sodium chloride, Potassium phosphate"],
    precautions: ["Requires oncologist supervision", "Regular blood tests needed", "Fertility impact possible"],
  },
  "3": {
    name: "ImmunoShield",
    price: "$38.75",
    rating: 4.7,
    image: "/immunology-immune.jpg",
    description: "Immune system booster for enhanced protection",
    category: "Immunology",
    dosage: "1000mg capsules",
    uses: ["Immune support", "Cold prevention", "Infection resistance", "Wellness maintenance"],
    sideEffects: ["Minimal side effects", "Rare: Gastrointestinal upset"],
    dosageInfo: "Take 1-2 capsules daily with meals",
    ingredients: ["Vitamin C", "Zinc", "Echinacea", "Elderberry extract"],
    precautions: ["Safe for most ages", "Consult doctor if on immunosuppressants"],
  },
}

export default function ProductDetails({ productId }: { productId: string }) {
  const product = productDetails[productId] || productDetails["1"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-full h-96 rounded-2xl overflow-hidden glass border border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold">{product.category}</span>
            <h1 className="text-4xl font-bold mb-4 mt-2">{product.name}</h1>
            <p className="text-xl text-foreground/70 mb-6">{product.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-3xl font-bold text-accent">{product.price}</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-xl font-bold">{product.rating}</span>
                <span className="text-foreground/60">(2,543 reviews)</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-semibold mb-2">Dosage:</p>
                <p className="text-foreground/70">{product.dosage}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Administration:</p>
                <p className="text-foreground/70">{product.dosageInfo}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 ripple">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="p-3 glass border border-border rounded-lg hover:border-accent/50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-3 glass border border-border rounded-lg hover:border-accent/50 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Detailed Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Uses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Uses & Benefits</h3>
            <ul className="space-y-3">
              {product.uses.map((use: string) => (
                <li key={use} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{use}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Side Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Possible Side Effects</h3>
            <ul className="space-y-3">
              {product.sideEffects.map((effect: string) => (
                <li key={effect} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-accent/20 rounded-full flex-shrink-0 text-xs">
                    •
                  </span>
                  <span className="text-foreground/80">{effect}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Active Ingredients</h3>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient: string) => (
                <li key={ingredient} className="text-foreground/80">
                  {ingredient}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Precautions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Precautions</h3>
            <ul className="space-y-3">
              {product.precautions.map((precaution: string) => (
                <li key={precaution} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">⚠️</span>
                  <span className="text-foreground/80">{precaution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
