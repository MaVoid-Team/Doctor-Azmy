"use client"

import type React from "react"
import { useState, useRef } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title: string
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 sm:h-96 overflow-hidden cursor-col-resize bg-muted rounded-2xl group select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full bg-muted overflow-hidden">
        <div className="w-full h-full relative">
          <img src={beforeImage || "/placeholder.svg"} alt="قبل" className="w-full h-full object-cover" />
          {/* Label */}
          <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
            قبل
          </div>
        </div>
      </div>

      {/* After Image (Sliding overlay) */}
      <div className="absolute inset-0 overflow-hidden transition-all duration-75" style={{ width: `${position}%` }}>
        <div className="w-screen h-full relative">
          <img
            src={afterImage || "/placeholder.svg"}
            alt="بعد"
            className="w-full h-full object-cover"
            style={{ maxWidth: "none" }}
          />
          {/* Label */}
          <div className="absolute top-4 left-4 bg-primary/80 text-white px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
            بعد
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white shadow-2xl transition-all duration-75 z-20"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-2xl group-hover:scale-125 transition-transform">
          <div className="flex gap-1">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 15a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hint text on hover */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
        اسحب للمقارنة
      </div>
    </div>
  )
}

export default BeforeAfterSlider
