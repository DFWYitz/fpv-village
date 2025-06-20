import Link from "next/link"
import { ChevronRight, Factory, Cpu, Globe, Zap } from "lucide-react"

export default function InvestmentAreas() {
  const investmentAreas = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Manufacturing Infrastructure",
      description: "State-of-the-art production facilities with 500K+ monthly capacity and Industry 4.0 automation",
      investment: "$250M",
      returns: "18-24 month payback",
      details: "Advanced robotics, quality control systems, and scalable production lines",
      href: "/investment#manufacturing",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Software & Tech Development",
      description: "Proprietary flight control, AI systems, and customer platforms with machine learning capabilities",
      investment: "$75M",
      returns: "High-margin recurring revenue",
      details: "Custom firmware, mobile apps, and cloud-based fleet management",
      href: "/investment#technology",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Supply Chain Integration",
      description: "Vertical integration of critical materials and components with strategic partnerships",
      investment: "$150M",
      returns: "30%+ margin improvement",
      details: "Raw material sourcing, component manufacturing, and logistics optimization",
      href: "/investment#supply-chain",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "R&D Innovation Hub",
      description: "Advanced propulsion, materials science, and autonomous systems research facility",
      investment: "$100M",
      returns: "Patent portfolio + licensing",
      details: "Next-gen battery tech, carbon fiber composites, and AI flight systems",
      href: "/investment#research",
    },
  ]

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Strategic Investment Areas
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Four key pillars driving our path to market dominance and sustainable competitive advantage
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {investmentAreas.map((area, index) => (
          <Link
            key={index}
            href={area.href}
            className="group bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="flex items-start space-x-6">
              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors p-3 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20">
                {area.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">{area.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                <p className="text-sm text-gray-400 mb-6 italic">{area.details}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400">Investment Required</div>
                    <div className="text-2xl font-bold text-cyan-400">{area.investment}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Expected Returns</div>
                    <div className="text-2xl font-bold text-purple-400">{area.returns}</div>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
