"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Their innovative approach to drug development has revolutionized our treatment options.",
    author: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    company: "Global Health Alliance",
    avatar: "/professional-doctor.png",
  },
  {
    id: 2,
    text: "We trust PharmaCorp's commitment to quality and patient safety above all else.",
    author: "James Chen",
    role: "Healthcare Director",
    company: "International Medical Center",
    avatar: "/healthcare-professional.png",
  },
  {
    id: 3,
    text: "The impact of their research on patient outcomes has been nothing short of remarkable.",
    author: "Prof. Elena Rodriguez",
    role: "Research Lead",
    company: "Advanced Therapeutics Institute",
    avatar: "/woman-professional-scientist.jpg",
  },
  {
    id: 4,
    text: "Their dedication to innovation and excellence sets them apart in the pharmaceutical industry.",
    author: "Marcus Williams",
    role: "Senior Physician",
    company: "Premier Hospital Network",
    avatar: "/man-doctor-professional.jpg",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-foreground/60 text-lg">
            Healthcare professionals and institutions worldwide rely on our solutions
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative fade-in-up">
          <div className="glass rounded-2xl p-8 md:p-12 min-h-64">
            <Quote className="text-accent mb-6 w-8 h-8" />

            <div className="relative overflow-hidden min-h-48 flex flex-col justify-center">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 absolute inset-0 flex flex-col justify-center ${
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed text-foreground/90">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/40"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      <p className="text-xs text-accent">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx)
                    setIsAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
