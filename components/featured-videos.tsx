"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const FeaturedVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const videos = [
    {
      id: 1,
      title: "شاهد قصة تحول واحدة من أنجح الحالات",
      description: "نتيجة مذهلة لمريض التزم ببرنامج العلاج الشامل",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "نصائح مهمة لإنقاص الوزن بشكل آمن",
      description: "أهم الخطوات التي يجب اتباعها للحصول على نتائج دائمة",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "التغذية العلاجية وأهميتها في حياتك",
      description: "فهم عميق لدور التغذية السليمة في تحسين الصحة",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "placeholder.svg?height=400&width=600",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, videos.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">الفيديوهات المميزة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            شاهد أحدث النصائح والقصص الملهمة من دكتور محمد عزمي
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative animate-scaleIn">
          <div className="relative overflow-hidden rounded-2xl bg-foreground/5 border border-border/50 shadow-xl group">
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
              {/* Play Button Overlay */}
              <button
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                onClick={() => setIsAutoPlay(false)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors z-20 group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulseGlow hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </button>

              {/* Video or Thumbnail */}
              <img
                src={videos[currentIndex].thumbnail || "placeholder.svg"}
                alt={videos[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:left-8"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:right-8"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 z-20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-balance">
                {videos[currentIndex].title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base">{videos[currentIndex].description}</p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                    ? "bg-primary w-10 shadow-lg shadow-primary/50"
                    : "bg-primary/30 w-3 hover:bg-primary/50"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Indicator */}
        {isAutoPlay && (
          <div className="text-center mt-6 text-sm text-muted-foreground animate-pulse">
            التشغيل التلقائي قيد التشغيل
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedVideos
