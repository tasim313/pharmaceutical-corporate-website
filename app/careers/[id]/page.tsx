"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type React from "react"

const jobListings: {
  [key: number]: {
    id: number
    title: string
    department: string
    location: string
    type: string
    salary: string
    experience: string
    description: string
    requirements: string[]
  }
} = {
  1: {
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
  2: {
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
  3: {
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
  4: {
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
}

export default function JobApplicationPage({ params }: { params: { id: string } }) {
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const jobId = Number.parseInt(params.id)
  const job = jobListings[jobId]

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", resume: "", coverLetter: "" })
      setSubmitted(false)
    }, 3000)
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl text-foreground/60">Job not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Back Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link href="/careers" className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
            <ArrowLeft size={20} />
            Back to Careers
          </Link>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-foreground/70">
            <span>{job.department}</span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.salary}</span>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-32 space-y-6">
                <div>
                  <h3 className="text-sm text-foreground/60 uppercase font-bold mb-2">Position</h3>
                  <p className="font-semibold">{job.title}</p>
                </div>
                <div>
                  <h3 className="text-sm text-foreground/60 uppercase font-bold mb-2">Department</h3>
                  <p className="font-semibold">{job.department}</p>
                </div>
                <div>
                  <h3 className="text-sm text-foreground/60 uppercase font-bold mb-2">Location</h3>
                  <p className="font-semibold">{job.location}</p>
                </div>
                <div>
                  <h3 className="text-sm text-foreground/60 uppercase font-bold mb-2">Experience</h3>
                  <p className="font-semibold">{job.experience}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm text-foreground/60 uppercase font-bold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 2).map((req, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-8">Apply Now</h2>

                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 animate-in fade-in">
                    ✓ Thank you for applying! We'll review your application and contact you soon.
                  </div>
                )}

                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Email
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Phone Number
                  </label>
                </div>

                {/* Resume */}
                <div className="relative">
                  <textarea
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    placeholder=" "
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer resize-none"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Resume/CV Summary
                  </label>
                </div>

                {/* Cover Letter */}
                <div className="relative">
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder=" "
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer resize-none"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Cover Letter
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ripple"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
