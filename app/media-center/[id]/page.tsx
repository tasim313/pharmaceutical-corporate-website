"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ChevronLeft, Share2, Printer as Print } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

const mediaItems = [
  {
    id: 1,
    type: "Press Release",
    title: "FDA Approves New Cardiology Drug",
    date: "2024-12-15",
    year: 2024,
    excerpt:
      "PharmaCorp receives FDA approval for breakthrough cardiology treatment, marking a major milestone in heart disease management.",
    image: "/heart-medicine-treatment.jpg",
    content: `PharmaCorp is proud to announce that the FDA has granted approval for our groundbreaking new cardiology drug, CardioAdvance-X. This approval represents years of rigorous clinical trials and research dedicated to improving cardiovascular health outcomes.

CardioAdvance-X has demonstrated remarkable efficacy in reducing heart attack risk and improving overall cardiac function. The drug works by targeting specific pathways in the cardiovascular system, providing both immediate relief and long-term protection against heart disease.

Key Benefits:
• 45% reduction in heart attack risk compared to existing treatments
• Improved ejection fraction in heart failure patients
• Minimal side effects with excellent patient tolerance
• Suitable for both acute and chronic cardiovascular conditions

Clinical Trial Results:
Our Phase III clinical trials involved 5,000+ patients across 50 medical centers worldwide. The results were remarkable:
- 89% of patients showed significant improvement in symptoms
- 76% achieved complete symptom resolution
- Safety profile superior to competing drugs
- Well-tolerated across diverse patient populations

Availability:
CardioAdvance-X will be available in pharmacies starting January 2025. We are working with healthcare providers to ensure accessibility and affordability for all patients who need this life-saving medication.

This approval reaffirms PharmaCorp's commitment to innovation and excellence in cardiovascular medicine. We are grateful to the thousands of patients and healthcare professionals who participated in bringing this important drug to market.`,
    author: "Dr. Sarah Johnson, Chief Medical Officer",
    relatedArticles: [2, 4],
  },
  {
    id: 2,
    type: "Article",
    title: "PharmaCorp Wins Innovation Award",
    date: "2024-11-20",
    year: 2024,
    excerpt: "Recognized globally for excellence in pharmaceutical innovation and research advancement.",
    image: "/pharmaceutical-research-facility.jpg",
    content: `PharmaCorp has been honored with the prestigious Global Pharmaceutical Innovation Award, recognizing our outstanding contributions to drug development and healthcare advancement.

This prestigious award, presented by the International Pharmaceutical Association, acknowledges our commitment to innovation, research excellence, and commitment to improving patient outcomes worldwide.

Award Recognition:
The award committee specifically highlighted:
• Breakthrough drug discoveries in cardiovascular and oncology fields
• Investment in cutting-edge research and development
• Collaborative partnerships with leading medical institutions
• Commitment to affordable healthcare solutions

Our Research Pipeline:
PharmaCorp maintains one of the most robust drug pipelines in the industry, with 45 drugs in various stages of clinical development. Our research focuses on:
- Rare diseases with high unmet medical needs
- Cancer treatment innovations
- Cardiovascular disease management
- Diabetes and metabolic disorders

Investment in Future:
We continue to invest heavily in R&D, allocating 18% of our annual revenue to research and development. This commitment ensures that we remain at the forefront of pharmaceutical innovation.

Our Team:
This achievement is made possible by our dedicated team of over 2,000 researchers, scientists, and healthcare professionals working tirelessly to develop solutions that save lives and improve patient outcomes.`,
    author: "Dr. Michael Chen, Director of Research",
    relatedArticles: [1, 3],
  },
  {
    id: 3,
    type: "Press Release",
    title: "Strategic Partnership with Global Health Organization",
    date: "2024-10-10",
    year: 2024,
    excerpt: "PharmaCorp announces strategic partnership to expand healthcare access in developing nations.",
    image: "/doctor-patient-consultation-care.jpg",
    content: `PharmaCorp is excited to announce a strategic partnership with the World Health Foundation to expand access to essential medications in developing countries.

This partnership represents our commitment to addressing global health disparities and ensuring that life-saving medications reach patients regardless of economic circumstances.

Partnership Goals:
• Provide affordable medications to 50 million people in low-income countries
• Establish 100 new medical clinics across Africa and Southeast Asia
• Train 5,000 healthcare workers in underserved communities
• Reduce medication costs by up to 70% in partner countries

Implementation Plan:
Year 1: Infrastructure development and clinic establishment
Year 2-3: Medication distribution and healthcare worker training
Year 4-5: Expansion to additional regions and sustainability planning

Expected Impact:
This partnership is projected to:
- Reduce preventable deaths from cardiovascular disease by 30%
- Improve diabetes management in 2 million patients
- Provide cancer treatment to previously underserved populations
- Create sustainable healthcare systems in partner countries

Financial Commitment:
PharmaCorp is committing $500 million over 10 years to this initiative, demonstrating our serious commitment to global health equity.`,
    author: "Ms. Lisa Rodriguez, Director of Corporate Social Responsibility",
    relatedArticles: [2, 5],
  },
  {
    id: 4,
    type: "Article",
    title: "Major Research Milestone in Cancer Treatment",
    date: "2024-09-05",
    year: 2024,
    excerpt: "Clinical trials show promising results for new oncology treatment, bringing hope to millions.",
    image: "/oncology-cancer-treatment.jpg",
    content: `PharmaCorp researchers have achieved a major breakthrough in cancer treatment, with promising results from Phase II clinical trials of OncoGuard-Pro, our novel immunotherapy drug.

The trial results demonstrate unprecedented efficacy in treating multiple cancer types, offering hope to millions of cancer patients worldwide.

Clinical Trial Highlights:
- 68% complete remission rate in advanced cancers
- Average survival improvement of 3+ years
- Well-tolerated with manageable side effects
- Effective across 12 different cancer types

Mechanism of Action:
OncoGuard-Pro works by:
1. Identifying and marking cancer cells
2. Activating the immune system to attack cancer
3. Preventing cancer recurrence through immune memory
4. Minimizing damage to healthy cells

Patient Testimonials:
Patients in the trial reported:
- Significant improvement in quality of life
- Reduced pain and symptoms
- Return to normal daily activities
- Hope for long-term survival

Next Steps:
Phase III trials are now underway across 100 medical centers globally. We anticipate FDA submission by late 2025 and potential approval in 2026.`,
    author: "Dr. James Mitchell, Head of Oncology Research",
    relatedArticles: [1, 6],
  },
  {
    id: 5,
    type: "Press Release",
    title: "PharmaCorp Expands Manufacturing Capacity",
    date: "2024-08-15",
    year: 2024,
    excerpt: "New state-of-the-art facility enhances production capabilities and job creation.",
    image: "/pharmaceutical-manufacturing.png",
    content: `PharmaCorp is investing $300 million in a new state-of-the-art manufacturing facility to increase production capacity and create 2,000 new jobs.

The new facility will employ cutting-edge technology and sustainable manufacturing practices while significantly increasing our ability to serve patients worldwide.

Facility Specifications:
- Location: Advanced Pharma City, [Region]
- Investment: $300 million
- Size: 500,000 square meters
- Production Capacity: 500 million units annually
- Jobs Created: 2,000

Advanced Technology:
The facility will feature:
- AI-powered quality control systems
- Robotic manufacturing lines
- Zero-waste production processes
- Real-time supply chain management
- Green energy systems

Environmental Commitment:
- 100% renewable energy powered
- Zero liquid discharge
- Carbon-neutral operations
- Biodiversity conservation initiatives

Economic Impact:
- Direct employment: 2,000 jobs
- Indirect employment: 5,000+ jobs
- Local supplier relationships
- Community development programs

Timeline:
Construction began Q3 2024
Expected completion: Q4 2026
Full operational capacity: 2027`,
    author: "Mr. Robert Williams, Chief Operating Officer",
    relatedArticles: [3, 7],
  },
  {
    id: 6,
    type: "Article",
    title: "Diabetes Research Shows Breakthrough Results",
    date: "2023-12-20",
    year: 2023,
    excerpt: "Advanced diabetes management therapy proves effective in early clinical trials.",
    image: "/diabetes-insulin-treatment.jpg",
    content: `PharmaCorp's revolutionary diabetes management therapy has shown breakthrough results in clinical trials, offering new hope to the 400 million people worldwide living with diabetes.

DiabetesCare-Advanced represents a paradigm shift in how we approach diabetes treatment and management.

Key Results:
- 92% of patients achieved target blood sugar levels
- 85% reduction in complications
- Improved quality of life for 95% of patients
- Minimal hypoglycemic episodes

How It Works:
The therapy combines:
1. Novel insulin formulation for stable glucose control
2. Smart monitoring system with AI analytics
3. Personalized treatment adjustments
4. Comprehensive patient support program

Patient Benefits:
- Once-daily administration
- Fewer finger pricks needed
- Better prediction of blood sugar changes
- Integration with mobile health apps
- Improved overall health outcomes

Clinical Application:
Currently approved for Type 2 diabetes management with plans to expand to Type 1 diabetes by 2025.`,
    author: "Dr. Patricia Anderson, Director of Diabetes Research",
    relatedArticles: [4, 8],
  },
  {
    id: 7,
    type: "Press Release",
    title: "Sustainability Initiative Achievement",
    date: "2023-11-10",
    year: 2023,
    excerpt: "PharmaCorp achieves carbon-neutral operations, setting industry benchmark.",
    image: "/sustainability-green-energy.png",
    content: `PharmaCorp has successfully achieved carbon-neutral operations across all facilities worldwide, setting a new benchmark for sustainability in the pharmaceutical industry.

This milestone reflects our commitment to environmental responsibility and sustainable business practices.

Achievements:
- 60% reduction in carbon emissions since 2020
- 100% renewable energy in all facilities
- Zero waste to landfill in 80% of operations
- Water usage reduced by 45%

Sustainability Initiatives:
1. Renewable Energy Transition
   - Solar panels on all facilities
   - Wind energy partnerships
   - Hydroelectric power sourcing

2. Waste Management
   - Circular economy principles
   - Advanced recycling systems
   - Biodegradable packaging

3. Water Conservation
   - Advanced treatment systems
   - Rainwater harvesting
   - Recycled water usage

Impact:
- Prevented 500,000 tons of CO2 emissions
- Saved 2 billion liters of water
- Created 1,000 green jobs
- Industry recognition and awards

Future Goals:
- Carbon negative by 2030
- 100% renewable energy by 2025
- Zero waste by 2030
- Circular business model by 2035`,
    author: "Ms. Emma Thompson, Chief Sustainability Officer",
    relatedArticles: [5, 3],
  },
  {
    id: 8,
    type: "Article",
    title: "Global Medical Conference Participation",
    date: "2023-10-05",
    year: 2023,
    excerpt: "PharmaCorp researchers present groundbreaking findings at international medical summit.",
    image: "/conference-summit.jpg",
    content: `PharmaCorp researchers presented groundbreaking findings at the International Medical Conference 2023, showcasing our commitment to advancing global healthcare knowledge.

Our presentations covered innovations spanning multiple therapeutic areas and received standing ovations from the global medical community.

Presentations Delivered:
1. "Artificial Intelligence in Drug Discovery" - Dr. Robert Smith
2. "Personalized Medicine Approaches" - Dr. Susan Lee
3. "Global Health Initiatives" - Ms. Angela Martinez
4. "Future of Immunotherapy" - Dr. David Kumar

Key Findings Shared:
- AI reduces drug discovery time by 40%
- Personalized medicine improves outcomes by 50%
- Our global health programs reach 100 million people
- Next-generation immunotherapies show 80% efficacy

Industry Recognition:
Our presentations were highlighted as "Most Innovative" and "Best Research" by conference organizers. Over 5,000 healthcare professionals attended our sessions.

Collaboration Opportunities:
The conference facilitated partnerships with:
- 50+ research institutions
- 20+ healthcare organizations
- 15+ government health agencies
- Leading universities globally

Future Conferences:
PharmaCorp will continue participating in major medical conferences to share knowledge and collaborate with the global healthcare community.`,
    author: "Dr. Thomas Green, VP of Global Research",
    relatedArticles: [2, 6],
  },
]

export default function MediaDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  const item = mediaItems.find((m) => m.id === id)
  const relatedItems = item ? mediaItems.filter((m) => item.relatedArticles?.includes(m.id)) : []

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
  }

  if (!mounted) return null

  if (!item) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <div className="py-40 text-center">
          <h1 className="text-4xl font-bold mb-4">Media Item Not Found</h1>
          <Link href="/media-center" className="text-primary hover:underline">
            Back to Media Center
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Image */}
      <div className="h-96 md:h-[500px] w-full overflow-hidden bg-muted">
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/media-center"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ChevronLeft size={20} />
            Back to Media Center
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  item.type === "Press Release" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                }`}
              >
                {item.type}
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-1">
                <Calendar size={14} />
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
            <p className="text-lg text-foreground/70 mb-6">{item.excerpt}</p>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <span className="text-sm text-foreground/60">By {item.author}</span>
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => window.print()}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 text-foreground/70 hover:text-foreground"
                  aria-label="Print article"
                >
                  <Print size={20} />
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: item.title,
                        text: item.excerpt,
                        url: window.location.href,
                      })
                    }
                  }}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-300 text-foreground/70 hover:text-foreground"
                  aria-label="Share article"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-16">
            {item.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles */}
          {relatedItems.length > 0 && (
            <div className="pt-16 border-t border-border">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedItems.map((related) => (
                  <Link
                    key={related.id}
                    href={`/media-center/${related.id}`}
                    className="group p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300"
                  >
                    <div className="mb-4 h-48 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary inline-block mb-2">
                      {related.type}
                    </span>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-foreground/60 flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(related.date).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
