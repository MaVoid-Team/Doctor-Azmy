"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { GripVertical } from "lucide-react"

interface CompareSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

const CompareSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = "قبل",
    afterLabel = "بعد"
}: CompareSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

        setSliderPosition(percent)
    }, [])

    const handleMouseDown = useCallback(() => setIsDragging(true), [])
    const handleMouseUp = useCallback(() => setIsDragging(false), [])

    // Global mouse/touch events for smoother dragging outside container
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return
            handleMove(e.clientX)
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return
            handleMove(e.touches[0].clientX)
        }

        const handleEnd = () => setIsDragging(false)

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove)
            window.addEventListener("mouseup", handleEnd)
            window.addEventListener("touchmove", handleTouchMove)
            window.addEventListener("touchend", handleEnd)
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleEnd)
            window.removeEventListener("touchmove", handleTouchMove)
            window.removeEventListener("touchend", handleEnd)
        }
    }, [isDragging, handleMove])

    // Interaction directly on container for click-to-move
    const handleContainerClick = (e: React.MouseEvent) => {
        handleMove(e.clientX)
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden cursor-col-resize select-none border border-border/50 shadow-2xl group bg-neutral-100"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onClick={handleContainerClick}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={afterImage}
                    alt="After Transformation"
                    className="object-contain w-full h-full absolute inset-0"
                    draggable={false}
                />
                {/* Visual Label */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10 pointer-events-none">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground) */}
            <div
                className="absolute inset-0 w-full h-full bg-neutral-100/50" // Semi-transparent bg for the clipped overlay if needs to cover
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="absolute inset-0 w-full h-full bg-neutral-100"> {/* Solid backer for Before slide to obscure After slide */}
                    <img
                        src={beforeImage}
                        alt="Before Transformation"
                        className="object-contain w-full h-full absolute inset-0"
                        draggable={false}
                    />
                </div>

                {/* Visual Label */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10 pointer-events-none">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary transform transition-transform hover:scale-110 active:scale-95">
                    <GripVertical size={20} />
                </div>
            </div>
        </div>
    )
}

export default CompareSlider
