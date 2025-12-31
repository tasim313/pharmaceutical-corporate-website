"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import useAntiInspect from "@/hooks/useAntiInspect"
export default function Sitemap() {
  useAntiInspect()
  const [isDark, setIsDark] = useState(false)

  const sitemapStructure = [
    {
      category: "Main Pages",
      icon: "🏠",
      links: [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      category: "Products & Services",
      icon: "💊",
      links: [
        { title: "Products", href: "/products" },
        { title: "Product Categories", href: "/products" },
        { title: "Product Details", href: "/products" },
        { title: "Therapeutic Areas", href: "/" },
        { title: "Export Markets", href: "/export-markets" },
      ],
    },
    {
      category: "Company Information",
      icon: "🏢",
      links: [
        { title: "Mission & Vision", href: "/about" },
        { title: "Founder Profiles", href: "/about" },
        { title: "Board of Directors", href: "/about" },
        { title: "Milestones of Excellence", href: "/about" },
        { title: "Sister Concerns", href: "/about" },
        { title: "Code of Conduct", href: "/about" },
      ],
    },
    {
      category: "Sales & Operations",
      icon: "📊",
      links: [
        { title: "Sales & Distribution", href: "/sales-distribution" },
        { title: "Investor Relations", href: "/" },
        { title: "Sustainability", href: "/" },
        { title: "Innovation", href: "/" },
      ],
    },
    {
      category: "News & Media",
      icon: "📰",
      links: [
        { title: "News & Blog", href: "/news" },
        { title: "Media Center", href: "/" },
        { title: "Press Releases", href: "/news" },
        { title: "Events", href: "/news" },
      ],
    },
    {
      category: "Human Resources",
      icon: "👥",
      links: [
        { title: "Careers", href: "/careers" },
        { title: "Employee Awards", href: "/awards" },
        { title: "Recognition Programs", href: "/awards" },
        { title: "Company Culture", href: "/careers" },
      ],
    },
    {
      category: "Community & CSR",
      icon: "🌍",
      links: [
        { title: "Corporate Social Responsibility", href: "/about" },
        { title: "Environmental Initiatives", href: "/" },
        { title: "Community Outreach", href: "/" },
        { title: "Healthcare Initiatives", href: "/about" },
      ],
    },
    {
      category: "Gallery & Resources",
      icon: "🖼️",
      links: [
        { title: "Gallery", href: "/gallery" },
        { title: "Photo Library", href: "/gallery" },
        { title: "Video Resources", href: "/" },
        { title: "Downloads", href: "/" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-lg text-foreground/70">
            Complete navigation guide to all sections and pages of our pharmaceutical website
          </p>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapStructure.map((section, index) => (
              <div
                key={index}
                className="group relative p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-lg font-bold">{section.category}</h3>
                </div>

                <nav className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200 group/link"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-background border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Technical Sitemap</h2>
            <p className="text-foreground/70 mb-6">Our XML sitemap for search engine crawlers is available at:</p>
            <div className="p-4 bg-muted rounded-lg font-mono text-sm text-primary hover:text-accent transition-colors cursor-pointer">
              /sitemap.xml
            </div>
            <p className="text-sm text-foreground/70 mt-4">
              This helps search engines discover and index all pages on our website more efficiently.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
