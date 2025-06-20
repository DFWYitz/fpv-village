"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function FactoryTourPage() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentRoom, setCurrentRoom] = useState(0)
  const [tourStarted, setTourStarted] = useState(false)

  // Simple 3D projection
  const project = (point, camera, canvas) => {
    const x = point.x - camera.x
    const y = point.y - camera.y
    const z = point.z - camera.z

    const distance = 300
    const scale = distance / (distance + z)

    return {
      x: canvas.width / 2 + x * scale,
      y: canvas.height / 2 - y * scale,
      scale: scale > 0 ? scale : 0,
    }
  }

  // Factory rooms with realistic equipment and processes
  const rooms = [
    {
      name: "Assembly Line",
      color: "#00ffff",
      camera: { x: 0, y: 80, z: -250 },
      description: "Robotic arms assembling components on moving conveyor belt",
      equipment: [
        // Main conveyor belt
        { type: "conveyor", pos: { x: 0, y: -20, z: 0 }, size: { x: 400, y: 10, z: 60 } },
        // Robotic arms
        { type: "robot", pos: { x: -120, y: 40, z: 30 }, size: { x: 20, y: 60, z: 20 } },
        { type: "robot", pos: { x: 0, y: 40, z: 30 }, size: { x: 20, y: 60, z: 20 } },
        { type: "robot", pos: { x: 120, y: 40, z: 30 }, size: { x: 20, y: 60, z: 20 } },
        // Work stations
        { type: "station", pos: { x: -120, y: 0, z: -40 }, size: { x: 50, y: 40, z: 30 } },
        { type: "station", pos: { x: 120, y: 0, z: -40 }, size: { x: 50, y: 40, z: 30 } },
      ],
      products: [], // Will be populated with moving products
    },
    {
      name: "Power Plant",
      color: "#00ff40",
      camera: { x: 0, y: 100, z: -350 },
      description: "Massive turbines generating electricity",
      equipment: [
        // Steam turbines
        { type: "turbine", pos: { x: -100, y: 60, z: 0 }, size: { x: 80, y: 120, z: 80 } },
        { type: "turbine", pos: { x: 100, y: 60, z: 0 }, size: { x: 80, y: 120, z: 80 } },
        // Generators
        { type: "generator", pos: { x: -100, y: 0, z: -100 }, size: { x: 60, y: 40, z: 60 } },
        { type: "generator", pos: { x: 100, y: 0, z: -100 }, size: { x: 60, y: 40, z: 60 } },
        // Steam pipes
        { type: "pipe", pos: { x: 0, y: 80, z: -150 }, size: { x: 300, y: 20, z: 20 } },
      ],
      products: [],
    },
    {
      name: "Chemical Processing",
      color: "#ff0080",
      camera: { x: 0, y: 120, z: -280 },
      description: "Chemical tanks and processing equipment",
      equipment: [
        // Large chemical tanks
        { type: "tank", pos: { x: -80, y: 60, z: 0 }, size: { x: 60, y: 120, z: 60 } },
        { type: "tank", pos: { x: 80, y: 60, z: 0 }, size: { x: 60, y: 120, z: 60 } },
        { type: "tank", pos: { x: 0, y: 60, z: -100 }, size: { x: 50, y: 100, z: 50 } },
        // Processing pipes
        { type: "pipe", pos: { x: -40, y: 100, z: 0 }, size: { x: 80, y: 10, z: 10 } },
        { type: "pipe", pos: { x: 40, y: 100, z: 0 }, size: { x: 80, y: 10, z: 10 } },
        { type: "pipe", pos: { x: 0, y: 80, z: -50 }, size: { x: 10, y: 10, z: 100 } },
      ],
      products: [],
    },
    {
      name: "Control Center",
      color: "#ff8000",
      camera: { x: 0, y: 60, z: -200 },
      description: "Monitoring and control systems",
      equipment: [
        // Control panels
        { type: "panel", pos: { x: -100, y: 30, z: 0 }, size: { x: 80, y: 60, z: 10 } },
        { type: "panel", pos: { x: 100, y: 30, z: 0 }, size: { x: 80, y: 60, z: 10 } },
        { type: "panel", pos: { x: 0, y: 40, z: -80 }, size: { x: 120, y: 80, z: 10 } },
        // Server racks
        { type: "rack", pos: { x: -50, y: 40, z: 50 }, size: { x: 30, y: 80, z: 30 } },
        { type: "rack", pos: { x: 50, y: 40, z: 50 }, size: { x: 30, y: 80, z: 30 } },
      ],
      products: [],
    },
    {
      name: "Foundry",
      color: "#8000ff",
      camera: { x: 0, y: 140, z: -320 },
      description: "Molten metal casting and forging",
      equipment: [
        // Furnaces
        { type: "furnace", pos: { x: -120, y: 80, z: 0 }, size: { x: 80, y: 160, z: 80 } },
        { type: "furnace", pos: { x: 120, y: 80, z: 0 }, size: { x: 80, y: 160, z: 80 } },
        // Casting area
        { type: "cast", pos: { x: 0, y: 20, z: 60 }, size: { x: 150, y: 40, z: 80 } },
        // Overhead crane
        { type: "crane", pos: { x: 0, y: 120, z: 0 }, size: { x: 200, y: 20, z: 30 } },
      ],
      products: [],
    },
    {
      name: "Warehouse",
      color: "#ffff00",
      camera: { x: 0, y: 100, z: -400 },
      description: "Automated storage and retrieval",
      equipment: [
        // Storage racks
        { type: "rack", pos: { x: -150, y: 60, z: 0 }, size: { x: 40, y: 120, z: 200 } },
        { type: "rack", pos: { x: -50, y: 60, z: 0 }, size: { x: 40, y: 120, z: 200 } },
        { type: "rack", pos: { x: 50, y: 60, z: 0 }, size: { x: 40, y: 120, z: 200 } },
        { type: "rack", pos: { x: 150, y: 60, z: 0 }, size: { x: 40, y: 120, z: 200 } },
        // Automated crane
        { type: "crane", pos: { x: 0, y: 100, z: 0 }, size: { x: 350, y: 20, z: 30 } },
        // Conveyor system
        { type: "conveyor", pos: { x: 0, y: 0, z: 120 }, size: { x: 300, y: 10, z: 40 } },
      ],
      products: [],
    },
  ]

  // Animation state
  const animationState = useRef({
    time: 0,
    roomIndex: 0,
    transitionTime: 0,
  })

  // Draw wireframe box
  const drawBox = (ctx, vertices, color, lineWidth = 1) => {
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // front face
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // back face
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], // connecting edges
    ]

    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.shadowColor = color
    ctx.shadowBlur = 5

    edges.forEach(([start, end]) => {
      const startPoint = vertices[start]
      const endPoint = vertices[end]

      if (startPoint.scale > 0.1 && endPoint.scale > 0.1) {
        ctx.beginPath()
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(endPoint.x, endPoint.y)
        ctx.stroke()
      }
    })
  }

  // Draw equipment based on type
  const drawEquipment = (ctx, equipment, room, time) => {
    const { pos, size, type } = equipment

    // Create box vertices
    const vertices = [
      { x: pos.x - size.x / 2, y: pos.y - size.y / 2, z: pos.z - size.z / 2 },
      { x: pos.x + size.x / 2, y: pos.y - size.y / 2, z: pos.z - size.z / 2 },
      { x: pos.x + size.x / 2, y: pos.y + size.y / 2, z: pos.z - size.z / 2 },
      { x: pos.x - size.x / 2, y: pos.y + size.y / 2, z: pos.z - size.z / 2 },
      { x: pos.x - size.x / 2, y: pos.y - size.y / 2, z: pos.z + size.z / 2 },
      { x: pos.x + size.x / 2, y: pos.y - size.y / 2, z: pos.z + size.z / 2 },
      { x: pos.x + size.x / 2, y: pos.y + size.y / 2, z: pos.z + size.z / 2 },
      { x: pos.x - size.x / 2, y: pos.y + size.y / 2, z: pos.z + size.z / 2 },
    ]

    // Project vertices
    const projectedVertices = vertices.map((vertex) => project(vertex, room.camera, ctx.canvas))

    // Draw based on equipment type
    switch (type) {
      case "conveyor":
        drawBox(ctx, projectedVertices, room.color, 2)
        // Draw moving belt texture
        const beltOffset = (time * 0.02) % 1
        for (let i = 0; i < 5; i++) {
          const x = pos.x - size.x / 2 + (i + beltOffset) * (size.x / 5)
          const linePos = project({ x, y: pos.y, z: pos.z + size.z / 2 }, room.camera, ctx.canvas)
          if (linePos.scale > 0.1) {
            ctx.strokeStyle = room.color
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(linePos.x - 10, linePos.y)
            ctx.lineTo(linePos.x + 10, linePos.y)
            ctx.stroke()
          }
        }
        break

      case "robot":
        drawBox(ctx, projectedVertices, room.color, 2)
        // Draw moving robot arm
        const armAngle = Math.sin(time * 0.03) * 0.5
        const armEnd = project(
          {
            x: pos.x + Math.cos(armAngle) * 30,
            y: pos.y + 20,
            z: pos.z + Math.sin(armAngle) * 30,
          },
          room.camera,
          ctx.canvas,
        )
        const armBase = project(pos, room.camera, ctx.canvas)

        if (armEnd.scale > 0.1 && armBase.scale > 0.1) {
          ctx.strokeStyle = room.color
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.moveTo(armBase.x, armBase.y)
          ctx.lineTo(armEnd.x, armEnd.y)
          ctx.stroke()
        }
        break

      case "turbine":
        drawBox(ctx, projectedVertices, room.color, 3)
        // Draw spinning blades
        const bladeCount = 8
        for (let i = 0; i < bladeCount; i++) {
          const angle = (i / bladeCount) * Math.PI * 2 + time * 0.1
          const bladePos = project(
            {
              x: pos.x + Math.cos(angle) * size.x * 0.3,
              y: pos.y + Math.sin(angle) * size.y * 0.3,
              z: pos.z,
            },
            room.camera,
            ctx.canvas,
          )

          if (bladePos.scale > 0.1) {
            ctx.fillStyle = room.color
            ctx.beginPath()
            ctx.arc(bladePos.x, bladePos.y, 3, 0, Math.PI * 2)
            ctx.fill()
          }
        }
        break

      case "tank":
        drawBox(ctx, projectedVertices, room.color, 2)
        // Draw liquid level
        const liquidLevel = 0.7 + Math.sin(time * 0.02) * 0.1
        const liquidPos = project(
          {
            x: pos.x,
            y: pos.y - size.y / 2 + size.y * liquidLevel,
            z: pos.z,
          },
          room.camera,
          ctx.canvas,
        )

        if (liquidPos.scale > 0.1) {
          ctx.strokeStyle = room.color
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(liquidPos.x - (size.x / 2) * liquidPos.scale, liquidPos.y)
          ctx.lineTo(liquidPos.x + (size.x / 2) * liquidPos.scale, liquidPos.y)
          ctx.stroke()
        }
        break

      case "crane":
        drawBox(ctx, projectedVertices, room.color, 2)
        // Draw moving crane trolley
        const trolleyPos = Math.sin(time * 0.02) * size.x * 0.3
        const trolley = project(
          {
            x: pos.x + trolleyPos,
            y: pos.y - 20,
            z: pos.z,
          },
          room.camera,
          ctx.canvas,
        )

        if (trolley.scale > 0.1) {
          ctx.fillStyle = room.color
          ctx.fillRect(trolley.x - 5, trolley.y - 5, 10, 10)
        }
        break

      default:
        drawBox(ctx, projectedVertices, room.color, 1)
    }
  }

  // Draw products moving on conveyor
  const drawProducts = (ctx, room, time) => {
    if (room.name === "Assembly Line") {
      // Draw products moving on conveyor
      for (let i = 0; i < 5; i++) {
        const productX = -180 + ((time * 0.5 + i * 50) % 360)
        const productPos = project(
          {
            x: productX,
            y: -10,
            z: 0,
          },
          room.camera,
          ctx.canvas,
        )

        if (productPos.scale > 0.1) {
          ctx.fillStyle = room.color
          ctx.shadowColor = room.color
          ctx.shadowBlur = 10
          ctx.fillRect(productPos.x - 8, productPos.y - 8, 16, 16)
        }
      }
    }
  }

  // Main animation loop
  const animate = useCallback(() => {
    if (!canvasRef.current || !isPlaying) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const time = animationState.current.time

    // Clear canvas
    ctx.fillStyle = "#000011"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Room transition logic
    const roomDuration = 400 // frames per room
    if (time % roomDuration === 0 && time > 0) {
      animationState.current.roomIndex = (animationState.current.roomIndex + 1) % rooms.length
      setCurrentRoom(animationState.current.roomIndex)
    }

    const room = rooms[animationState.current.roomIndex]

    // Draw room title
    ctx.fillStyle = room.color
    ctx.font = "bold 28px Arial"
    ctx.textAlign = "center"
    ctx.shadowColor = room.color
    ctx.shadowBlur = 15
    ctx.fillText(room.name, canvas.width / 2, 60)

    // Draw description
    ctx.font = "16px Arial"
    ctx.fillText(room.description, canvas.width / 2, 90)

    // Draw all equipment
    room.equipment.forEach((equipment) => {
      drawEquipment(ctx, equipment, room, time)
    })

    // Draw moving products
    drawProducts(ctx, room, time)

    animationState.current.time++
    animationRef.current = requestAnimationFrame(animate)
  }, [isPlaying])

  // Canvas setup
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      const ctx = canvas.getContext("2d")
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  // Animation control
  useEffect(() => {
    if (isPlaying) {
      animate()
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, animate])

  const startTour = () => {
    setTourStarted(true)
    setIsPlaying(true)
    animationState.current = { time: 0, roomIndex: 0, transitionTime: 0 }
  }

  const togglePlayPause = () => setIsPlaying(!isPlaying)

  const resetTour = () => {
    setIsPlaying(false)
    setCurrentRoom(0)
    animationState.current = { time: 0, roomIndex: 0, transitionTime: 0 }
  }

  if (!tourStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Factory Production Tour
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Take a 3D wireframe tour through our manufacturing facility. Watch real production processes, moving
              assembly lines, and industrial equipment in action.
            </p>
            <button
              onClick={startTour}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-12 py-6 rounded-2xl font-bold text-xl transition-all flex items-center space-x-4 mx-auto hover:scale-105"
            >
              <Play className="w-8 h-8" />
              <span>Start Production Tour</span>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <canvas ref={canvasRef} className="w-full h-screen" />

      {/* Controls */}
      <div className="absolute top-24 left-8 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
        <h3 className="text-lg font-bold text-cyan-400 mb-3">Tour Controls</h3>
        <div className="flex space-x-3">
          <button
            onClick={togglePlayPause}
            className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <button
            onClick={resetTour}
            className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Room info */}
      <div className="absolute top-24 right-8 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 max-w-sm">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">Current Area</h3>
        <h4 className="text-xl font-bold text-white mb-2">{rooms[currentRoom]?.name}</h4>
        <p className="text-gray-300 text-sm">{rooms[currentRoom]?.description}</p>
        <div className="mt-3 text-sm">
          <span className="text-gray-400">
            Room {currentRoom + 1} of {rooms.length}
          </span>
        </div>
      </div>

      {/* Exit */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={() => setTourStarted(false)}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition-all"
        >
          Exit Tour
        </button>
      </div>

      <Footer />
    </div>
  )
}
