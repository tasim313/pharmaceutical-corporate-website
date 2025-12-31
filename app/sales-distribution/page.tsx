"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Globe, Warehouse, TrendingUp, Users, Target } from "lucide-react"
import useAntiInspect from "@/hooks/useAntiInspect"
export default function SalesDistribution() {
  useAntiInspect()
  const [isDark, setIsDark] = useState(false)

  const distributionChannels = [
    {
      id: 1,
      name: "Hospital & Healthcare Facilities",
      description: "Direct supply to major hospitals, clinics, and medical centers",
      icon: Users,
      coverage: "500+ facilities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Retail Pharmacy Chains",
      description: "Partnership with leading pharmacy networks nationwide",
      icon: Warehouse,
      coverage: "2500+ retail points",
      color: "from-teal-500 to-green-500",
    },
    {
      id: 3,
      name: "Wholesale & Distributors",
      description: "Bulk distribution to authorized wholesale dealers",
      icon: Globe,
      coverage: "150+ distributors",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Online Pharmacy Platforms",
      description: "E-commerce integration with digital health marketplaces",
      icon: Target,
      coverage: "50+ online partners",
      color: "from-orange-500 to-red-500",
    },
  ]

  const regions = [
    { region: "North Asia", coverage: "40%", countries: "China, Japan, South Korea, Taiwan" },
    { region: "South Asia", coverage: "25%", countries: "India, Pakistan, Bangladesh, Sri Lanka" },
    { region: "Southeast Asia", coverage: "20%", countries: "Thailand, Vietnam, Indonesia, Malaysia" },
    { region: "Middle East & Africa", coverage: "10%", countries: "UAE, Saudi Arabia, Egypt, Nigeria" },
    { region: "Europe", coverage: "5%", countries: "UK, Germany, France, Spain" },
  ]

  const metrics = [
    { label: "Distribution Centers", value: "15", icon: Warehouse },
    { label: "Sales Representatives", value: "200+", icon: Users },
    { label: "Daily Deliveries", value: "5000+", icon: TrendingUp },
    { label: "Market Reach", value: "150+ Countries", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sales & Distribution Network
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive distribution infrastructure ensuring our products reach healthcare professionals and
              patients across 150+ countries
            </p>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={index}
                  className="relative group p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-foreground/70">{metric.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Distribution Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div
                  key={channel.id}
                  className="group relative overflow-hidden rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{channel.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{channel.description}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-primary">{channel.coverage}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Global Regional Distribution</h2>
          <div className="space-y-4">
            {regions.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{item.region}</h3>
                    <p className="text-sm text-foreground/70">{item.countries}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">{item.coverage}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/50"
                    style={{ width: item.coverage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Transparency */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Supply Chain Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Tracking",
                description: "GPS-enabled tracking for all shipments with customer visibility",
                icon: "📍",
              },
              {
                title: "Cold Chain Management",
                description: "Specialized temperature-controlled storage and transport",
                icon: "❄️",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks at every distribution point",
                icon: "✅",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
