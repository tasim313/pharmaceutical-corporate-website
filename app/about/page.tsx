"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import MissionVision from "@/components/about/mission-vision"
import FounderProfiles from "@/components/about/founder-profiles"
import BoardOfDirectors from "@/components/about/board-of-directors"
import Milestones from "@/components/about/milestones"
import SisterConcerns from "@/components/about/sister-concerns"
import CorporateSocialResponsibility from "@/components/about/corporate-social-responsibility"
import DirectorsConduct from "@/components/about/directors-conduct"

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <AboutHero />
      <MissionVision />
      <FounderProfiles />
      <BoardOfDirectors />
      <Milestones />
      <SisterConcerns />
      <CorporateSocialResponsibility />
      <DirectorsConduct />
      <Footer />
    </div>
  )
}
