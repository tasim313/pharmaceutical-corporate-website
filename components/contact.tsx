"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get in Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 flex-shrink-0">
                <Phone className="w-full h-full text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary p-3 flex-shrink-0">
                <Mail className="w-full h-full text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-foreground/70">contact@pharmacorp.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary p-3 flex-shrink-0">
                <MapPin className="w-full h-full text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-foreground/70">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
              />
              <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-background px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
              />
              <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-background px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer"
              />
              <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-background px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary transition-colors duration-300 peer resize-none"
              />
              <label className="absolute left-4 -top-2.5 text-sm font-medium transition-all duration-300 pointer-events-none bg-background px-1 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-primary peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-foreground/60">
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
    </section>
  )
}
