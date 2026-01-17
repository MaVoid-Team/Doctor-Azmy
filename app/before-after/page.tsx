"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CompareSlider from "@/components/compare-slider"

export default function BeforeAfterPage() {
  const transformations = [
    {
      id: 1,
      title: "تحول مذهل: خسارة ٤٥ كجم",
      description: "رحلة محمد خلال ٨ أشهر من الالتزام ببرنامج التغذية العلاجية، دون جراحة.",
      stats: ["-٤٥ كجم", "٨ أشهر", "بدون جراحة"],
      beforeImage: "/doctor-im.jpg", // Using placeholders for now
      afterImage: "/doctor-im.jpg",
    },
    {
      id: 2,
      title: "التعافي من مقاومة الأنسولين",
      description: "سارة استطاعت التغلب على أعراض مقاومة الأنسولين واستعادة نشاطها بالكامل.",
      stats: ["تحسن ٩٠٪", "٦ أشهر", "نشاط وحيوية"],
      beforeImage: "/placeholder-user.jpg",
      afterImage: "/placeholder-user.jpg",
    },
    {
      id: 3,
      title: "بناء عضلات ونحت الجسم",
      description: "برنامج رياضي وغذائي متكامل للوصول للجسم المثالي.",
      stats: ["زيادة عضلية", "٤ أشهر", "شكل مثالي"],
      beforeImage: "/doctor-im.jpg",
      afterImage: "/doctor-im.jpg",
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
          >
            ✨ نتائج تتحدث عن نفسها
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-foreground mb-6"
          >
            معرض التحولات
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            شاهد كيف ساعد دكتور محمد عزمي مئات المرضى في تغيير حياتهم للأفضل.
            الصورة تغني عن ألف كلمة.
          </motion.p>
        </div>

        <div className="space-y-24">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[3rem] p-6 md:p-12 shadow-xl border border-border/50"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Info */}
                <div className="order-2 lg:order-1">
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {item.stats.map((stat, i) => (
                      <span key={i} className="px-4 py-2 bg-secondary/30 text-secondary-foreground rounded-xl font-bold text-sm">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <button className="text-primary font-bold hover:gap-4 gap-2 transition-all flex items-center">
                    اقرأ القصة كاملة <span>←</span>
                  </button>
                </div>

                {/* Slider Component */}
                <div className="order-1 lg:order-2">
                  <CompareSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                  <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                    <span className="hidden md:inline">←</span>
                    ملاحظة: حرك المؤشر للمقارنة
                    <span className="hidden md:inline">→</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
