"use client"
import { Award, Shield, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      description: "International standard for quality management systems",
      year: "2015",
      icon: Award,
    },
    {
      name: "ISO 14001:2015",
      category: "Environmental Management",
      description: "Environmental management system certification",
      year: "2016",
      icon: Award,
    },
    {
      name: "GMP Certified",
      category: "Pharmaceutical Manufacturing",
      description: "Good Manufacturing Practice certification",
      year: "2018",
      icon: Shield,
    },
    {
      name: "WHO Prequalification",
      category: "International Standard",
      description: "WHO prequalified products for global distribution",
      year: "2019",
      icon: CheckCircle,
    },
    {
      name: "OHSAS 18001",
      category: "Occupational Health & Safety",
      description: "Health and safety management system",
      year: "2017",
      icon: Shield,
    },
    {
      name: "ISO 13485:2016",
      category: "Medical Devices",
      description: "Quality management for medical device manufacturing",
      year: "2020",
      icon: Award,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Certifications & Compliance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="group relative p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{cert.category}</p>
                <p className="text-sm text-foreground/70 mb-4">{cert.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-foreground/50">Certified: {cert.year}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
