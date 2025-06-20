import Header from "@/components/header"
import Footer from "@/components/footer"
import { Cpu, Zap, Shield, Wifi, Camera, Settings } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Advanced Flight Controllers",
      description:
        "Custom-designed flight control systems with 32-bit ARM processors, advanced gyroscopes, and real-time processing capabilities for superior flight performance.",
      features: [
        "32-bit ARM Cortex-M7 processor",
        "Advanced IMU with 9-axis sensors",
        "Real-time flight data processing",
        "Custom firmware optimization",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "High-Performance Motors",
      description:
        "Proprietary brushless motors engineered for maximum efficiency, durability, and power output with advanced magnetic bearing technology.",
      features: [
        "Brushless motor design",
        "Magnetic bearing technology",
        "High power-to-weight ratio",
        "Extended operational lifespan",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "AI Safety Systems",
      description:
        "Machine learning-powered safety features including obstacle avoidance, emergency landing protocols, and predictive maintenance alerts.",
      features: [
        "Computer vision obstacle detection",
        "Predictive maintenance AI",
        "Emergency landing protocols",
        "Real-time risk assessment",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Long-Range Communication",
      description:
        "Advanced radio systems with extended range capabilities, low-latency transmission, and interference resistance for professional applications.",
      features: [
        "Extended range up to 10km",
        "Low-latency transmission",
        "Interference resistance",
        "Encrypted communication",
      ],
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "4K Camera Systems",
      description:
        "Professional-grade camera systems with 4K recording, advanced stabilization, and real-time streaming capabilities for content creation.",
      features: [
        "4K video recording",
        "3-axis gimbal stabilization",
        "Real-time streaming",
        "Professional color grading",
      ],
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Modular Design",
      description:
        "Innovative modular architecture allowing for easy customization, upgrades, and maintenance with standardized component interfaces.",
      features: [
        "Standardized interfaces",
        "Easy component swapping",
        "Upgrade compatibility",
        "Simplified maintenance",
      ],
      gradient: "from-orange-500 to-yellow-600",
    },
  ]

  const specifications = [
    {
      category: "Flight Performance",
      specs: ["Max Speed: 140 km/h", "Flight Time: 20-25 minutes", "Max Range: 10 km", "Operating Altitude: 4,000m"],
    },
    {
      category: "Camera & Video",
      specs: ["4K/60fps Recording", "1080p/120fps Slow Motion", "3-axis Mechanical Gimbal", "Real-time HD Streaming"],
    },
    {
      category: "Build Quality",
      specs: ["Carbon Fiber Frame", "IP54 Weather Resistance", "Modular Component Design", "Military-grade Testing"],
    },
    {
      category: "Smart Features",
      specs: ["AI Obstacle Avoidance", "GPS Return-to-Home", "Predictive Maintenance", "Mobile App Control"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Cutting-Edge Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary FPV drone technology combining advanced engineering, AI-powered systems, and
            professional-grade components for unmatched performance.
          </p>
        </section>

        {/* Technology Features */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${tech.gradient} rounded-3xl flex items-center justify-center mb-6`}
                >
                  <div className="text-white">{tech.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{tech.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation Pipeline */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Innovation Pipeline
          </h2>
          <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 border border-cyan-500/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">2025 Roadmap</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI-powered autonomous flight modes</li>
                  <li>• Advanced battery technology (40min flight)</li>
                  <li>• 8K camera system integration</li>
                  <li>• Enhanced weather resistance (IP67)</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2026 Vision</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Swarm intelligence capabilities</li>
                  <li>• Solar charging integration</li>
                  <li>• Advanced materials (graphene)</li>
                  <li>• 5G connectivity standard</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Future Tech</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quantum communication systems</li>
                  <li>• Self-repairing materials</li>
                  <li>• Neural interface controls</li>
                  <li>• Zero-emission propulsion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
