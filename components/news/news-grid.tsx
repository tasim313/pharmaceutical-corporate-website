"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: "1",
    title: "PharmaCorp Receives FDA Approval for Revolutionary Cancer Treatment",
    category: "press-release",
    image: "/cancer-treatment-fda.jpg",
    excerpt: "A breakthrough drug that shows 89% efficacy rate in clinical trials has been approved by the FDA.",
    author: "Dr. Sarah Johnson",
    date: "Dec 28, 2024",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Global Research Collaboration on Alzheimer's Disease Treatment",
    category: "research",
    image: "/alzheimers-research.png",
    excerpt: "PharmaCorp partners with leading universities for groundbreaking neurological research.",
    author: "Prof. Michael Chen",
    date: "Dec 25, 2024",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Phase 3 Clinical Trial Shows Positive Results for Diabetes Drug",
    category: "clinical-trial",
    image: "/diabetes-clinical-trial.jpg",
    excerpt: "New insulin therapy demonstrates superior blood sugar control with fewer side effects.",
    author: "Dr. Emily Rodriguez",
    date: "Dec 20, 2024",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "PharmaCorp Opens New State-of-the-art Research Center",
    category: "company",
    image: "/pharmaceutical-research-facility.jpg",
    excerpt: "Investment of $500 million in cutting-edge biotechnology research infrastructure.",
    author: "Robert Mitchell",
    date: "Dec 18, 2024",
    readTime: "4 min read",
  },
  {
    id: "5",
    title: "Annual Pharmaceutical Innovation Summit - Save the Date",
    category: "events",
    image: "/conference-summit.jpg",
    excerpt: "Join industry leaders for discussions on the future of pharmaceutical innovation.",
    author: "Events Team",
    date: "Dec 15, 2024",
    readTime: "3 min read",
  },
  {
    id: "6",
    title: "Sustainability Report: 50% Reduction in Carbon Emissions",
    category: "company",
    image: "/sustainability-green-energy.png",
    excerpt: "PharmaCorp achieves major environmental goals ahead of schedule.",
    author: "Sarah Williams",
    date: "Dec 10, 2024",
    readTime: "5 min read",
  },
]

export default function NewsGrid({ selectedCategory }: { selectedCategory: string }) {
  const filteredNews =
    selectedCategory === "all" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredNews.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glass border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl group cursor-pointer"
        >
          {/* Image */}
          <div className="h-48 overflow-hidden bg-muted relative">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              {item.category.replace("-", " ").toUpperCase()}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {item.title}
            </h3>

            <p className="text-foreground/70 text-sm mb-4 flex-1 line-clamp-2">{item.excerpt}</p>

            {/* Meta */}
            <div className="space-y-3 mb-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <User size={14} />
                <span>{item.author}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <span>{item.readTime}</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2 text-accent font-semibold group-hover:gap-3 transition-all">
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
