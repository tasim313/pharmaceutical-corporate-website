"use client"

import { useEffect, useState } from "react"
import { TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react"

interface MetricCard {
  label: string
  value: string
  change: string
  icon: any
  color: string
}

const metrics: MetricCard[] = [
  {
    label: "Revenue",
    value: "$2.8B",
    change: "+12.5%",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Growth Rate",
    value: "18.2%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Market Cap",
    value: "$45.2B",
    change: "+8.1%",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "R&D Investment",
    value: "$420M",
    change: "+15%",
    icon: PieChart,
    color: "from-orange-500 to-red-500",
  },
]

export default function InvestorDashboard() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    metrics.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 150)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Investor Snapshot</h2>
        <p className="text-foreground/60 text-center mb-16 max-w-2xl mx-auto">
          Strong financial performance and continued investment in innovation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className={`card-hover rounded-xl bg-card border border-border p-6 transition-all duration-500 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} p-3 mb-4`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <p className="text-sm text-foreground/60 mb-2">{metric.label}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 counter">{metric.value}</h3>
                <p className="text-sm text-green-500">{metric.change} YoY</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
