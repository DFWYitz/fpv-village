import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us in building the world's most advanced FPV drone manufacturing ecosystem. Limited investment
            opportunities available for qualified investors.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              href="/investment"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-12 py-5 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <span>Request Investment Materials</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-cyan-400 hover:bg-cyan-400/10 px-12 py-5 rounded-2xl font-bold text-lg transition-all flex items-center space-x-3 hover:border-cyan-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Schedule Call</span>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Minimum investment: $1M • Accredited investors only • NDA required</p>
          </div>
        </div>
      </div>
    </section>
  )
}
