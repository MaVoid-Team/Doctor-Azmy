"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import FeaturedVideos from "@/components/featured-videos"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ArticleCarousel from "@/components/article-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TestimonialCarousel />
      <FeaturedVideos />
      <ArticleCarousel />
      <Footer />
    </main>
  )
}
