import { Target, Factory, Cpu, Shield, Rocket, Users } from "lucide-react"

export default function KeyAdvantages() {
  const advantages = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Perfect Market Timing",
      description:
        "FPV market exploding with 24.7% CAGR, driven by racing, content creation, and commercial applications",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Vertical Integration",
      description:
        "Complete supply chain control from raw materials to finished products, ensuring quality and margins",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Tech Innovation",
      description:
        "Proprietary software, AI flight systems, and advanced manufacturing creating sustainable competitive advantages",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality Assurance",
      description: "Military-grade testing protocols and quality control systems ensuring premium product reliability",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Scalable Operations",
      description: "Modular manufacturing design allowing rapid capacity expansion to meet growing market demand",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      description:
        "Industry veterans from DJI, Tesla, and SpaceX leading engineering, manufacturing, and business operations",
      gradient: "from-orange-500 to-yellow-600",
    },
  ]

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Competitive Advantages
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Six key differentiators that position us for market leadership and sustainable growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
            <div
              className={`w-20 h-20 bg-gradient-to-r ${advantage.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
            >
              <div className="text-white">{advantage.icon}</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">{advantage.title}</h3>
            <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
