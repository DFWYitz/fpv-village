import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former VP of Manufacturing at DJI, 15 years in drone industry",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      background: "Ex-Tesla Autopilot Engineer, PhD in Robotics from MIT",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of R&D",
      background: "Former SpaceX Propulsion Engineer, 20+ patents in aerospace",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Liu",
      role: "CFO",
      background: "Former Goldman Sachs VP, specialized in manufacturing investments",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    { year: "2023", event: "Company Founded", description: "Secured initial seed funding of $10M" },
    { year: "2024", event: "Prototype Development", description: "First FPV drone prototypes completed and tested" },
    { year: "2024", event: "Series A", description: "Raised $50M Series A led by Andreessen Horowitz" },
    {
      year: "2025",
      event: "Factory Construction",
      description: "Breaking ground on 500,000 sq ft manufacturing facility",
    },
    { year: "2025", event: "Production Launch", description: "First commercial production run of 10,000 units" },
    { year: "2026", event: "Scale Up", description: "Target production capacity of 100,000 units monthly" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About FPV Village
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're building the future of FPV drone manufacturing through innovative technology, world-class talent, and
            a vision to democratize high-performance drone technology.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To revolutionize the FPV drone industry by creating the world's most advanced, vertically integrated
                manufacturing ecosystem that delivers unparalleled quality, performance, and innovation to pilots
                worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the global leader in FPV drone manufacturing, setting new standards for quality, innovation,
                and sustainability while empowering the next generation of drone pilots and creators.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.background}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Milestones */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Company Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 group">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gradient-to-r from-black/30 to-black/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Stats */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-pink-400 mb-2">15</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-2">$60M</div>
              <div className="text-gray-300">Funding Raised</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
