"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, Newspaper, Filter, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const mediaItems = [
  {
    id: 1,
    type: "Press Release",
    title: "FDA Approves New Cardiology Drug",
    date: "2024-12-15",
    year: 2024,
    excerpt:
      "PharmaCorp receives FDA approval for breakthrough cardiology treatment, marking a major milestone in heart disease management.",
    image: "/heart-medicine-treatment.jpg",
  },
  {
    id: 2,
    type: "Article",
    title: "PharmaCorp Wins Innovation Award",
    date: "2024-11-20",
    year: 2024,
    excerpt: "Recognized globally for excellence in pharmaceutical innovation and research advancement.",
    image: "/pharmaceutical-research-facility.jpg",
  },
  {
    id: 3,
    type: "Press Release",
    title: "Strategic Partnership with Global Health Organization",
    date: "2024-10-10",
    year: 2024,
    excerpt: "PharmaCorp announces strategic partnership to expand healthcare access in developing nations.",
    image: "/doctor-patient-consultation-care.jpg",
  },
  {
    id: 4,
    type: "Article",
    title: "Major Research Milestone in Cancer Treatment",
    date: "2024-09-05",
    year: 2024,
    excerpt: "Clinical trials show promising results for new oncology treatment, bringing hope to millions.",
    image: "/oncology-cancer-treatment.jpg",
  },
  {
    id: 5,
    type: "Press Release",
    title: "PharmaCorp Expands Manufacturing Capacity",
    date: "2024-08-15",
    year: 2024,
    excerpt: "New state-of-the-art facility enhances production capabilities and job creation.",
    image: "/pharmaceutical-manufacturing.png",
  },
  {
    id: 6,
    type: "Article",
    title: "Diabetes Research Shows Breakthrough Results",
    date: "2023-12-20",
    year: 2023,
    excerpt: "Advanced diabetes management therapy proves effective in early clinical trials.",
    image: "/diabetes-insulin-treatment.jpg",
  },
  {
    id: 7,
    type: "Press Release",
    title: "Sustainability Initiative Achievement",
    date: "2023-11-10",
    year: 2023,
    excerpt: "PharmaCorp achieves carbon-neutral operations, setting industry benchmark.",
    image: "/sustainability-green-energy.png",
  },
  {
    id: 8,
    type: "Article",
    title: "Global Medical Conference Participation",
    date: "2023-10-05",
    year: 2023,
    excerpt: "PharmaCorp researchers present groundbreaking findings at international medical summit.",
    image: "/conference-summit.jpg",
  },
]

export default function MediaCenterPage() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filtered = mediaItems.filter((item) => {
    if (selectedYear && item.year !== selectedYear) return false
    if (selectedType && item.type !== selectedType) return false
    return true
  })

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Media Center
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest news, press releases, and articles from PharmaCorp
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <div className="flex gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <select
                onChange={(e) => setSelectedYear(e.target.value ? Number.parseInt(e.target.value) : null)}
                className="px-4 py-2 rounded-lg bg-muted border border-border hover:border-accent transition-colors duration-300"
              >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <select
                onChange={(e) => setSelectedType(e.target.value || null)}
                className="px-4 py-2 rounded-lg bg-muted border border-border hover:border-accent transition-colors duration-300"
              >
                <option value="">All Types</option>
                <option value="Press Release">Press Release</option>
                <option value="Article">Article</option>
              </select>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <Link key={item.id} href={`/media-center/${item.id}`} className="group cursor-pointer">
                <div className="h-96 rounded-lg overflow-hidden mb-4 bg-muted border border-border hover:border-accent transition-all duration-300">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.type === "Press Release" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-foreground/60 flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-semibold">Read More</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Newspaper size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-foreground/70">No media items found for selected filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
