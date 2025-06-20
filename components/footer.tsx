import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              FPV VILLAGE
            </div>
            <p className="text-gray-400 text-sm">
              Building the future of FPV drone manufacturing through advanced technology and vertical integration.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/investment" className="block text-gray-400 hover:text-white transition-colors">
                Investment
              </Link>
              <Link href="/technology" className="block text-gray-400 hover:text-white transition-colors">
                Technology
              </Link>
              <Link href="/factory-tour" className="block text-gray-400 hover:text-white transition-colors">
                Factory Tour
              </Link>
            </div>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Investment</h3>
            <div className="space-y-2">
              <Link href="/investment" className="block text-gray-400 hover:text-white transition-colors">
                Investment Deck
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Investor Relations
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Financial Reports
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Partnership
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">investors@fpvvillage.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 FPV Manufacturing Village. All rights reserved. Confidential Investment Opportunity.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
