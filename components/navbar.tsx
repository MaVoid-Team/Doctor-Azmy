"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "الرئيسية", href: "/" },
    { label: "قبل وبعد", href: "/before-after" },
    { label: "السيرة المهنية", href: "/portfolio" },
    { label: "تجارب ناجحة", href: "/reviews" },
    { label: "المقالات", href: "/articles" },
    { label: "التغذية العلاجية", href: "/nutrition" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-border/40 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg ring-2 ring-white/50 group-hover:scale-105 transition-transform duration-300">
              د
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-lg leading-tight transition-colors", scrolled ? "text-primary" : "text-primary")}>
                دكتور محمد عزمي
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                استشاري التخسيس
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20 shadow-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-white/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              احجز موعدك
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-foreground hover:bg-muted/50 rounded-xl transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
              >
                <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                  {links.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center py-4 text-xl font-bold text-foreground hover:text-primary hover:bg-muted/30 rounded-2xl transition-all"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
