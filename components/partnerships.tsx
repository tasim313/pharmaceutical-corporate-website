"use client"

import { Users, Building2, Globe } from "lucide-react"

export default function Partnerships() {
  const partnerCategories = [
    {
      title: "Healthcare Partners",
      count: "500+",
      icon: Users,
      description: "Hospitals, clinics, and medical centers worldwide",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Distribution Partners",
      count: "150+",
      icon: Building2,
      description: "Wholesalers and distributors across the globe",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "International Collaborations",
      count: "75+",
      icon: Globe,
      description: "Research and development partnerships globally",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Strategic Partnerships</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.count}</h3>
                <h4 className="text-lg font-bold mb-3">{category.title}</h4>
                <p className="text-foreground/70">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
