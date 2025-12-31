"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Senior Research Scientist",
    department: "R&D",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    experience: "5+ years",
    description:
      "Lead innovative pharmaceutical research projects. We're seeking an experienced Senior Research Scientist to drive our drug development initiatives.",
    requirements: [
      "PhD in Chemistry, Biology, or related field",
      "5+ years pharmaceutical research experience",
      "Published research in peer-reviewed journals",
      "Strong leadership and communication skills",
    ],
  },
  {
    id: 2,
    title: "Clinical Trial Manager",
    department: "Clinical Operations",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    experience: "3+ years",
    description:
      "Oversee clinical trial operations and regulatory compliance. Manage patient recruitment and monitor trial progress.",
    requirements: [
      "Master's degree in Clinical Research or related field",
      "3+ years clinical trial management experience",
      "Knowledge of FDA regulations and GCP guidelines",
      "Excellent project management skills",
    ],
  },
  {
    id: 3,
    title: "Medical Affairs Specialist",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    experience: "2+ years",
    description:
      "Develop medical education programs and manage physician relationships. Support clinical evidence strategy.",
    requirements: [
      "Bachelor's degree in Health Sciences or related field",
      "2+ years medical affairs experience",
      "Strong presentation and writing skills",
      "Knowledge of pharmaceutical products",
    ],
  },
  {
    id: 4,
    title: "Quality Assurance Engineer",
    department: "Manufacturing",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    experience: "3+ years",
    description:
      "Ensure pharmaceutical products meet quality standards. Develop and implement QA procedures and testing protocols.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years pharmaceutical QA experience",
      "Knowledge of GMP and ISO standards",
      "Problem-solving and analytical skills",
    ],
  },
]

export default function CareersPage() {
  const [isDark, setIsDark] = useState(false)
  const [selectedJob, setSelectedJob] = useState<(typeof jobListings)[0] | null>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Join Our Team</h1>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
            Build your career with a global leader in pharmaceutical innovation and healthcare solutions
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1 space-y-4">
              {jobListings.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                    selectedJob?.id === job.id
                      ? "bg-primary/10 border-primary shadow-lg"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{job.department}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </button>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                <div className="bg-card border-2 border-border rounded-2xl p-8 fade-in">
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold mb-4">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-lg">
                        <Briefcase size={18} className="text-primary" />
                        <span className="font-semibold">{selectedJob.department}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-lg">
                        <MapPin size={18} className="text-accent" />
                        <span className="font-semibold">{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-lg">
                        <Clock size={18} className="text-secondary" />
                        <span className="font-semibold">{selectedJob.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-2xl font-bold text-accent">
                      <DollarSign size={28} />
                      {selectedJob.salary}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Position Overview</h3>
                      <p className="text-foreground/80 leading-relaxed">{selectedJob.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-primary font-bold mt-1">✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <Link
                        href={`/careers/${selectedJob.id}`}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card border-2 border-border rounded-2xl p-12 text-center">
                  <p className="text-lg text-foreground/60">Select a job to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
