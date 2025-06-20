import Header from "@/components/header"
import Footer from "@/components/footer"
import { TrendingUp, DollarSign, Target, BarChart3, Download, Calendar } from "lucide-react"
import Link from "next/link"

export default function InvestmentPage() {
  const financialProjections = [
    { year: "2025", revenue: "$25M", growth: "Launch Year" },
    { year: "2026", revenue: "$150M", growth: "500%" },
    { year: "2027", revenue: "$400M", growth: "167%" },
    { year: "2028", revenue: "$800M", growth: "100%" },
    { year: "2029", revenue: "$1.2B", growth: "50%" },
  ]

  const investmentHighlights = [
    {
      title: "Market Opportunity",
      value: "$12.8B",
      description: "Total addressable market by 2028 with 24.7% CAGR",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Revenue Projection",
      value: "$1.2B",
      description: "Projected annual revenue by 2029",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Production Capacity",
      value: "6M Units",
      description: "Annual production capacity at full scale",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Investment Required",
      value: "$575M",
      description: "Total funding needed for full scale operations",
      icon: <DollarSign className="w-8 h-8" />,
    },
  ]

  const useOfFunds = [
    { category: "Manufacturing Infrastructure", percentage: 43, amount: "$250M" },
    { category: "Supply Chain Integration", percentage: 26, amount: "$150M" },
    { category: "R&D Innovation Hub", percentage: 17, amount: "$100M" },
    { category: "Software & Technology", percentage: 13, amount: "$75M" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Investment Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join us in capturing the explosive growth of the FPV drone market through strategic investment in
            next-generation manufacturing technology.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 shadow-lg shadow-cyan-500/25 hover:scale-105">
              <Download className="w-5 h-5" />
              <span>Download Investment Deck</span>
            </button>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 hover:border-cyan-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Investor Call</span>
            </Link>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Investment Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{highlight.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{highlight.value}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Projections */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Financial Projections
          </h2>
          <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-5 gap-6">
              {financialProjections.map((projection, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{projection.year}</div>
                  <div className="text-2xl font-bold text-white mb-2">{projection.revenue}</div>
                  <div className="text-sm text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                    {projection.growth}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>Revenue projections based on market analysis and production capacity scaling</p>
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Use of Funds
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {useOfFunds.map((fund, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-black/30 to-black/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">{fund.category}</h3>
                    <span className="text-2xl font-bold text-cyan-400">{fund.amount}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${fund.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">{fund.percentage}%</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Total Investment</h3>
              <div className="text-6xl font-bold text-white mb-4">$575M</div>
              <p className="text-gray-300 text-lg mb-6">
                Strategic funding to build the world's most advanced FPV drone manufacturing ecosystem
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Series B Target:</span>
                  <span className="text-white font-semibold">$200M</span>
                </div>
                <div className="flex justify-between">
                  <span>Series C Target:</span>
                  <span className="text-white font-semibold">$375M</span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Investment:</span>
                  <span className="text-white font-semibold">$1M</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Launch Plan */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Strategic Launch Plan - $50M Entry Point
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-3xl p-8 border border-green-500/30">
              <h3 className="text-3xl font-bold mb-6 text-green-400">Baseline Starter Option</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                A focused entry strategy targeting tactical/military-civilian hybrid drones with $50M capital infusion.
                This phased approach allows for rapid market entry while building toward full vertical integration.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Initial Capital:</span>
                  <span className="text-2xl font-bold text-green-400">$50M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Target Production:</span>
                  <span className="text-xl font-semibold text-white">600K Units (2 years)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Revenue Estimate:</span>
                  <span className="text-xl font-semibold text-white">$170M-$200M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">EBITDA Breakeven:</span>
                  <span className="text-xl font-semibold text-white">18-24 months</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Target Market Segments</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Border defense & civilian security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>GPS-denied navigation systems</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Abraham Accord nations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>African strategic partners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold mb-4 text-purple-400">Vertical Integration Roadmap</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Year 2-3:</span>
                    <span>Raw material partnerships</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 3-4:</span>
                    <span>Localized battery/magnet production</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 4-5:</span>
                    <span>Custom PCB & propulsion lines</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Post-Year 5:</span>
                    <span>Full hardware self-sufficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Terms */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Investment Terms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Strategic Launch</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Capital: $50M</p>
                  <p>Focus: Tactical/Military-Civilian</p>
                  <p>Target: 600K units (2 years)</p>
                  <p>Timeline: Q1 2025</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Series B</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Valuation: $800M</p>
                  <p>Raise: $200M</p>
                  <p>Use: Manufacturing & R&D</p>
                  <p>Timeline: Q2 2025</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Series C</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Valuation: $2.5B</p>
                  <p>Raise: $375M</p>
                  <p>Use: Scale & Expansion</p>
                  <p>Timeline: Q4 2025</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">IPO Target</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Valuation: $8B+</p>
                  <p>Timeline: 2027-2028</p>
                  <p>Exchange: NASDAQ</p>
                  <p>Revenue Run Rate: $1B+</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
