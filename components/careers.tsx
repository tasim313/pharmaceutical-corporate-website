"use client"

import { useState } from "react"
import { Briefcase, MapPin } from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Senior Research Scientist",
    department: "R&D",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Clinical Trial Manager",
    department: "Clinical Operations",
    location: "Boston, MA",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Medical Affairs Specialist",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Quality Assurance Engineer",
    department: "Manufacturing",
    location: "Chicago, IL",
    type: "Full-time",
  },
]

export default function Careers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="careers" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Build your career with a global leader in pharmaceutical innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              onMouseEnter={() => setHoveredId(job.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="card-hover rounded-xl bg-card border border-border p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-2">
                  <Briefcase className="w-full h-full text-primary-foreground" />
                </div>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{job.type}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{job.department}</p>
              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                <MapPin size={16} />
                {job.location}
              </div>
              <Link
                href={`/careers/${job.id}`}
                className={`inline-block w-full text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  hoveredId === job.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary/20"
                }`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/careers"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Positions →
          </Link>
        </div>
      </div>
    </section>
  )
}
