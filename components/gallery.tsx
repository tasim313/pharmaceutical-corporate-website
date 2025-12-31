"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Advanced Lab Research",
    category: "Research",
    image: "/pharmaceutical-research-laboratory.jpg",
    description: "State-of-the-art research facilities",
  },
  {
    id: 2,
    title: "Drug Manufacturing",
    category: "Manufacturing",
    image: "/pharmaceutical-manufacturing.png",
    description: "Precision manufacturing processes",
  },
  {
    id: 3,
    title: "Clinical Trials",
    category: "Clinical",
    image: "/clinical-trial-healthcare-professionals.jpg",
    description: "Rigorous clinical testing",
  },
  {
    id: 4,
    title: "Global Distribution",
    category: "Distribution",
    image: "/pharmaceutical-distribution-logistics.jpg",
    description: "Worldwide supply chain",
  },
  {
    id: 5,
    title: "Patient Care",
    category: "Healthcare",
    image: "/doctor-patient-consultation-care.jpg",
    description: "Patient-focused solutions",
  },
  {
    id: 6,
    title: "Innovation Center",
    category: "Innovation",
    image: "/modern-research-innovation-center.jpg",
    description: "Future of medicine",
  },
]

export default function Gallery() {
  const [visibleIndex, setVisibleIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % galleryItems.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setVisibleIndex((prev) => (prev + 1) % galleryItems.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setVisibleIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 mt-2 gradient-text">Our World in Motion</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Discover our state-of-the-art facilities and commitment to pharmaceutical excellence
          </p>
        </div>

        {/* Featured Gallery with premium design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main featured image */}
          <div className="lg:col-span-2 fade-in-left">
            <div className="relative group overflow-hidden rounded-3xl h-96 lg:h-full">
              <img
                src={galleryItems[visibleIndex].image || "/placeholder.svg"}
                alt={galleryItems[visibleIndex].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <span className="text-accent text-sm font-bold mb-3 tracking-wider uppercase">
                  {galleryItems[visibleIndex].category}
                </span>
                <h3 className="text-4xl font-bold text-white mb-3">{galleryItems[visibleIndex].title}</h3>
                <p className="text-white/90 text-lg">{galleryItems[visibleIndex].description}</p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-110 group/nav"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} className="group-hover/nav:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-110 group/nav"
                aria-label="Next image"
              >
                <ChevronRight size={28} className="group-hover/nav:translate-x-1 transition-transform" />
              </button>

              {/* Play indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2 glass-strong px-4 py-2 rounded-full text-white text-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Auto-playing
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="space-y-4 fade-in-right">
            {galleryItems.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                onMouseEnter={() => {
                  setVisibleIndex(idx)
                  setIsAutoPlay(false)
                }}
                className={`relative h-28 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                  visibleIndex === idx
                    ? "ring-3 ring-accent scale-105 shadow-2xl shadow-accent/40"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300 flex items-center justify-center">
                  <Eye
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className="group fade-in-up card-glow rounded-2xl overflow-hidden h-56 slide-in-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative w-full h-full">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-accent text-xs font-bold mb-2 tracking-wider uppercase">{item.category}</p>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full gallery page */}
        <div className="text-center">
          <a
            href="/gallery"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Gallery →
          </a>
        </div>
      </div>
    </section>
  )
}
