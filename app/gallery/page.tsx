"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Maximize2 } from "lucide-react"
import useAntiInspect from "@/hooks/useAntiInspect"

const allGalleryItems = [
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
  {
    id: 7,
    title: "Research Lab 2",
    category: "Research",
    image: "/pharmaceutical-research-laboratory.jpg",
    description: "Advanced research equipment",
  },
  {
    id: 8,
    title: "Quality Control",
    category: "Manufacturing",
    image: "/pharmaceutical-manufacturing.png",
    description: "Quality assurance process",
  },
  {
    id: 9,
    title: "Healthcare Innovation",
    category: "Healthcare",
    image: "/doctor-patient-consultation-care.jpg",
    description: "Modern healthcare solutions",
  },
  {
    id: 10,
    title: "Research Collaboration",
    category: "Research",
    image: "/clinical-trial-healthcare-professionals.jpg",
    description: "Global research partnerships",
  },
  {
    id: 11,
    title: "Distribution Network",
    category: "Distribution",
    image: "/pharmaceutical-distribution-logistics.jpg",
    description: "Efficient logistics",
  },
  {
    id: 12,
    title: "Future Innovation",
    category: "Innovation",
    image: "/modern-research-innovation-center.jpg",
    description: "Cutting-edge technology",
  },
]

const categories = ["All", "Research", "Manufacturing", "Clinical", "Healthcare", "Distribution", "Innovation"]

export default function GalleryPage() {
  useAntiInspect()
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof allGalleryItems)[0] | null>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const filteredItems =
    selectedCategory === "All" ? allGalleryItems : allGalleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Gallery</h1>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
            Explore our facilities, research centers, and commitment to pharmaceutical excellence
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group fade-in-up card-glow rounded-2xl overflow-hidden h-72 cursor-pointer slide-in-scale"
                style={{ animationDelay: `${idx * 50}ms` }}
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

                  {/* Maximize icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative animate-in fade-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-6 text-white">
              <p className="text-accent text-sm font-bold tracking-wider uppercase mb-2">{selectedImage.category}</p>
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 text-lg">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
