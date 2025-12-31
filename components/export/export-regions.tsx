"use client"

import { motion } from "framer-motion"

const regions = [
  {
    name: "North America",
    countries: "USA, Canada, Mexico",
    products: 45,
    revenue: "$12B",
    icon: "🇺🇸",
  },
  {
    name: "Europe",
    countries: "UK, Germany, France, Italy, Spain",
    products: 52,
    revenue: "$15B",
    icon: "🇪🇺",
  },
  {
    name: "Asia-Pacific",
    countries: "China, India, Japan, Singapore, Australia",
    products: 48,
    revenue: "$14B",
    icon: "🌏",
  },
  {
    name: "Middle East & Africa",
    countries: "UAE, Saudi Arabia, South Africa, Egypt",
    products: 35,
    revenue: "$8B",
    icon: "🌍",
  },
  {
    name: "Latin America",
    countries: "Brazil, Argentina, Colombia, Chile",
    products: 38,
    revenue: "$7B",
    icon: "🌎",
  },
  {
    name: "Emerging Markets",
    countries: "Vietnam, Thailand, Philippines, Pakistan",
    products: 42,
    revenue: "$4B",
    icon: "📈",
  },
]

export default function ExportRegions() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Market Presence</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our products are distributed across all major continents and regions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl border border-border hover:border-accent/50 transition-all group"
            >
              <div className="text-5xl mb-4">{region.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{region.name}</h3>
              <p className="text-sm text-foreground/70 mb-4">{region.countries}</p>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Active Products:</span>
                  <span className="text-accent font-bold">{region.products}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Annual Revenue:</span>
                  <span className="text-accent font-bold">{region.revenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
