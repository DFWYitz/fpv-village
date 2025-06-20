"use client"

import { useState, useEffect } from "react"

export default function DroneAnimation() {
  const [dronePosition, setDronePosition] = useState({ x: -200, y: 600 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const animateDrone = () => {
      setIsVisible(true)
      const startX = -200
      const endX = typeof window !== "undefined" ? window.innerWidth + 200 : 1400
      const startY = Math.random() * 400 + 300 // Random height between 300-700px
      const endY = Math.random() * 200 + 100 // Random end height between 100-300px

      let progress = 0
      const duration = 6000 // Slower, more realistic flight
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        progress = Math.min(elapsed / duration, 1)

        // More realistic easing with slight wobble
        const easeOut = 1 - Math.pow(1 - progress, 2)
        const wobble = Math.sin(progress * 20) * 5 // Slight vertical wobble

        const x = startX + (endX - startX) * easeOut
        const y = startY + (endY - startY) * easeOut + wobble

        setDronePosition({ x, y })

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setIsVisible(false)
          // Schedule next drone after random delay
          setTimeout(animateDrone, Math.random() * 10000 + 5000)
        }
      }

      animate()
    }

    // Start first animation after initial delay
    const timer = setTimeout(animateDrone, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed z-40 transition-all duration-100 pointer-events-none"
      style={{
        left: `${dronePosition.x}px`,
        top: `${dronePosition.y}px`,
        transform: "rotate(-8deg)",
      }}
    >
      {/* DJI FPV Inspired Drone */}
      <div className="w-20 h-12 relative">
        {/* Main Body */}
        <div className="absolute inset-x-2 inset-y-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-2xl">
          {/* Camera Gimbal */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full border border-gray-600"></div>
          {/* LED Lights */}
          <div className="absolute top-0 left-1 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 right-1 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        </div>

        {/* Arms */}
        <div className="absolute top-1 left-0 w-4 h-2 bg-gray-700 rounded-full transform -rotate-45"></div>
        <div className="absolute top-1 right-0 w-4 h-2 bg-gray-700 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-1 left-0 w-4 h-2 bg-gray-700 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-1 right-0 w-4 h-2 bg-gray-700 rounded-full transform -rotate-45"></div>

        {/* Propellers with realistic spin */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin opacity-60"></div>
        <div
          className="absolute -top-1 -right-1 w-6 h-6 border-2 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin opacity-60"
          style={{ animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute -bottom-1 -left-1 w-6 h-6 border-2 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin opacity-60"
          style={{ animationDirection: "reverse" }}
        ></div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-2 border-transparent border-t-cyan-400 border-r-cyan-400 rounded-full animate-spin opacity-60"></div>

        {/* Propeller Blur Effect */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse"></div>

        {/* Flight Trail */}
        <div className="absolute left-full top-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent transform -translate-y-1/2"></div>
      </div>
    </div>
  )
}
