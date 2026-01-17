"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 lg:pt-40 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-right order-2 lg:order-1 relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-8 border border-primary/20 shadow-lg shadow-primary/5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              الخيار الأول والأفضل في هذا المجال 🥇
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-normal mb-8 tracking-tight">
              نحن نغير <br />
              <span className="relative inline-block text-primary pb-2">
                مفهوم صحتك
                <svg className="absolute w-full h-3 -bottom-1 right-0 text-accent/40 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                </svg>
              </span>
              <br /> للأفضل
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mr-auto lg:mr-0 leading-relaxed font-medium">
              عندما تبحث عن <span className="text-primary font-bold decoration-accent decoration-2 underline-offset-4 underline">الأفضل</span>، فإن دكتور محمد عزمي هو وجهتك. خبرة لا تضاهى في التغذية العلاجية وعلاج السمنة بنتائج مضمونة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">احجز استشارتك الآن</span>
              </Link>

              <Link
                href="/portfolio"
                className="group px-8 py-4 bg-white border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                تعرف على الدكتور
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative ring-2 ring-background hover:scale-110 transition-transform duration-300 z-0 hover:z-10">
                    <img src="placeholder-user.jpg" alt="Client" className="object-cover w-full h-full absolute inset-0" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">+2,000</p>
                <p className="text-sm text-muted-foreground">قصة نجاح حقيقية</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content - Flashy 3D Effect */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div
              initial={{ opacity: 0, rotateY: 30, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[500px] aspect-[4/5] mx-auto group transform-style-3d"
            >
              {/* Dynamic Animated Glow Back */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary via-accent to-primary rounded-[2.5rem] opacity-60 blur-2xl group-hover:opacity-100 group-hover:blur-3xl transition-all duration-1000 animate-pulse-slow" />

              {/* Main Card Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transition-transform duration-500 group-hover:rotate-y-6">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90 z-20 opacity-80" />

                <img
                  src="doctor-im.jpg"
                  alt="Dr. Mohamed Azmy"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110 w-full h-full absolute inset-0"
                />

                {/* Floating Holographic Badge Top Right */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 z-30 w-20 h-20 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl shadow-primary/20"
                >
                  <span className="text-4xl filter drop-shadow-md">👨‍⚕️</span>
                </motion.div>

                {/* Floating Info Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-10 left-0 right-0 z-30 px-8 text-center"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-2xl inline-block shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform">
                    <p className="text-white font-black text-3xl tracking-wide drop-shadow-lg mb-1">د. محمد عزمي</p>
                    <div className="h-0.5 w-1/2 bg-accent mx-auto mb-2 rounded-full" />
                    <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm">The Expert</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Particles/Orbs around */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-floatUp delay-100 z-20" />
              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-floatUp delay-700 z-20" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-medium tracking-widest uppercase">اكتشف المزيد</span>
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  )
}

export default Hero
