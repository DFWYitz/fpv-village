"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    investmentInterest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["investors@fpvvillage.com", "info@fpvvillage.com"],
      description: "General inquiries and investor relations",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Business hours: Monday - Friday, 9 AM - 6 PM PST",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["1234 Innovation Drive", "Silicon Valley, CA 94025"],
      description: "Manufacturing facility and headquarters",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9 AM - 6 PM PST", "Saturday: 10 AM - 4 PM PST"],
      description: "Factory tours available by appointment",
    },
  ]

  const departments = [
    { name: "Investor Relations", email: "investors@fpvvillage.com" },
    { name: "Partnership Opportunities", email: "partnerships@fpvvillage.com" },
    { name: "Media & Press", email: "press@fpvvillage.com" },
    { name: "Technical Support", email: "support@fpvvillage.com" },
    { name: "Careers", email: "careers@fpvvillage.com" },
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-3xl p-12 border border-green-500/30">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-6 text-green-400">Message Sent Successfully!</h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in FPV Village. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss investment opportunities, partnerships, or learn more about our technology? We'd love to
            hear from you.
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentInterest" className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Interest
                  </label>
                  <select
                    id="investmentInterest"
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select your interest level</option>
                    <option value="series-b">Series B Investment ($1M+)</option>
                    <option value="series-c">Series C Investment ($5M+)</option>
                    <option value="strategic">Strategic Partnership</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Investment Opportunity Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your investment interests, partnership ideas, or any questions you have about FPV Village..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3 hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-cyan-400 mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300 mb-1">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Department Contacts</h3>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-4 border border-purple-500/20"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white">{dept.name}</span>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Visit Our Facility
          </h2>
          <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Manufacturing Headquarters</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Located in the heart of Silicon Valley, our 500,000 sq ft facility is open for investor tours and
                  partnership meetings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">1234 Innovation Drive, Silicon Valley, CA 94025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Tours available Monday - Friday, 9 AM - 5 PM</span>
                  </div>
                </div>
                <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                  Schedule Facility Tour
                </button>
              </div>
              <div className="h-80 bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Silicon Valley, California</p>
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
