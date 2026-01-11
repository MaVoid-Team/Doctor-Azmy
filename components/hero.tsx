"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute top-10 right-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-floatUp" />
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-floatUp"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-6">
          <p
            className="text-lg sm:text-xl text-primary font-semibold mb-4 animate-slideInRight"
            style={{ animationDelay: "0.05s" }}
          >
            🏥 أفضل طبيب تغذية علاجية في المنصورة
          </p>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground mb-6 animate-fadeInUp leading-tight text-balance tracking-tight">
          دكتور محمد عزمي
        </h1>

        <div className="relative mb-8">
          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            متخصص علاج السمنة والتغذية العلاجية
          </p>
          <div className="absolute -inset-2 bg-primary/5 rounded-full blur-2xl -z-10" />
        </div>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fadeInUp leading-relaxed text-pretty"
          style={{ animationDelay: "0.2s" }}
        >
          حلول طبية متكاملة لإنقاص الوزن وتحسين جودة الحياة بأسلوب علمي آمن ومستدام. خبرة عملية تعود لسنوات في علاج
          السمنة والأمراض المرتبطة بها.
        </p>

        <div className="mb-12 animate-scaleIn" style={{ animationDelay: "0.3s" }}>
          <div className="inline-block bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl px-8 py-4 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
            <p className="text-accent font-bold text-lg">✨ نتائج حقيقية مع متابعة طبية دقيقة</p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/contact"
            className="group px-8 sm:px-12 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 transform active:scale-95 text-lg"
          >
            احجز استشارة الآن
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/before-after"
            className="px-8 sm:px-12 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all duration-300 hover:shadow-lg text-lg"
          >
            شاهد النتائج الحقيقية
          </Link>
        </div>

        <div className="flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground font-medium">اسحب للأسفل</p>
            <ArrowDown className="text-primary animate-pulseGlow" size={28} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
