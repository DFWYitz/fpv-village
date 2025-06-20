"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, BarChart3, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)

  const marketStats = [
    { label: "Total Addressable Market", value: "$12.8B", subtitle: "FPV Drone Market by 2028", trend: "+24.7%" },
    { label: "Global Production", value: "2.4M", subtitle: "FPV Drones Annually", trend: "+18.3%" },
    { label: "Market Growth", value: "24.7%", subtitle: "CAGR 2023-2028", trend: "Accelerating" },
    { label: "Our Target Capacity", value: "6M", subtitle: "Units Annually at Full Scale", trend: "2.5x Industry" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % marketStats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-cyan-500/30">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-medium">Market Leader in FPV Manufacturing</span>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
          The Future of
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            FPV Manufacturing
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          A vertically integrated manufacturing village designed to capture the exploding FPV drone market through
          advanced technology, complete supply chain control, and unmatched production capacity.
        </p>

        {/* Enhanced Market Stats Ticker */}
        <div className="bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-md rounded-3xl p-10 mb-16 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
          <div className="text-center transition-all duration-700 transform">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {marketStats[currentStat].value}
              </div>
              <div className="text-sm font-semibold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                {marketStats[currentStat].trend}
              </div>
            </div>
            <div className="text-xl md:text-2xl text-white font-semibold mb-2">{marketStats[currentStat].label}</div>
            <div className="text-gray-400 text-lg">{marketStats[currentStat].subtitle}</div>
          </div>
          <div className="flex justify-center mt-6 space-x-3">
            {marketStats.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStat
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link
            href="/factory-tour"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Virtual Factory Tour</span>
          </Link>
          <Link
            href="/investment"
            className="group border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 hover:border-cyan-300 hover:scale-105"
          >
            <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Investment Deck</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
