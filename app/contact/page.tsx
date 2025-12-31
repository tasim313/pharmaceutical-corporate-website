"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import useAntiInspect from "@/hooks/useAntiInspect"

export default function ContactPage() {
  useAntiInspect()
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-full h-full text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                  <p className="text-foreground/70">+1 (555) 987-6543</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-secondary p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-full h-full text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <p className="text-foreground/70">contact@pharmacorp.com</p>
                  <p className="text-foreground/70">support@pharmacorp.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-primary p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-full h-full text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Headquarters</h3>
                  <p className="text-foreground/70">
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-full h-full text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Business Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-foreground/70">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-foreground/70">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 animate-in fade-in">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder=" "
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
                    />
                    <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                      Phone (Optional)
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder=" "
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
                    />
                    <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                      Subject
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer resize-none"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-card px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ripple"
                >
                  Send Message
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
