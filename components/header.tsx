"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Investment", href: "/investment" },
    { name: "Technology", href: "/technology" },
    { name: "Factory Tour", href: "/factory-tour" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="relative z-50 p-6 backdrop-blur-sm bg-black/20 border-b border-white/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          FPV VILLAGE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-105 transform duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Schedule Tour
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-xl font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
