"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BeforeAfterSlider from "@/components/before-after-slider"

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState("all")

  const cases = [
    {
      id: 1,
      category: "weightloss",
      title: "نحت الجسم وإنقاص الوزن",
      description: "نتيجة فعالة لبرنامج علاج السمنة الشامل - فقد 40 كجم في 6 أشهر",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      category: "bodycontouring",
      title: "شد الترهلات وتنسيق الجسم",
      description: "تحسن واضح في مرونة الجلد والمظهر العام بعد الالتزام بالبرنامج",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      category: "skincare",
      title: "تفتيح وتنضيض البشرة",
      description: "بشرة أكثر إشراقاً وحيوية بعد برنامج العناية المتخصص",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      category: "weightloss",
      title: "نقص الوزن الملحوظ",
      description: "تحول شامل في الوزن والصحة العامة - نتيجة ملهمة جداً",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      category: "bodycontouring",
      title: "تصحيح الترهلات والدهون الموضعية",
      description: "نتيجة ممتازة في تحديد ملامح الجسم وتحسن الثقة بالنفس",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      category: "skincare",
      title: "علاج الهالات والشيخوخة",
      description: "مظهر أكثر شباباً وحيوية للوجه مع تحسن واضح في جودة البشرة",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 7,
      category: "weightloss",
      title: "تحول كامل في أسلوب الحياة",
      description: "لم يكن فقط فقداناً للوزن بل اكتساب الصحة والنشاط والثقة",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 8,
      category: "bodycontouring",
      title: "تحسن في قياسات الجسم",
      description: "انخفاض ملحوظ في قياسات الخصر والوركين مع الحفاظ على الكتلة العضلية",
      beforeImage: "/placeholder.svg?height=400&width=400",
      afterImage: "/placeholder.svg?height=400&width=400",
    },
  ]

  const categories = [
    { id: "all", label: "الكل" },
    { id: "weightloss", label: "إنقاص الوزن" },
    { id: "bodycontouring", label: "تنسيق الجسم" },
    { id: "skincare", label: "العناية بالبشرة" },
  ]

  const filteredCases = activeCategory === "all" ? cases : cases.filter((c) => c.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 animate-fadeInUp text-balance">
              نتائج حقيقية وملهمة
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              صور حقيقية لمرضى خضعوا لبرامج علاج السمنة ونحت الجسم تحت إشراف دكتور محمد عزمي، مع الالتزام الكامل
              بالمعايير الطبية والأمان. اسحب المؤشر للمقارنة بين الصور.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/40"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredCases.map((caseItem, idx) => (
                <div key={caseItem.id} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <BeforeAfterSlider
                        beforeImage={caseItem.beforeImage}
                        afterImage={caseItem.afterImage}
                        title={caseItem.title}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-muted/50 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base text-muted-foreground leading-relaxed">
              ⚕️ جميع النتائج المعروضة هي نتائج فعلية لمرضى حقيقيين. النتائج قد تختلف من شخص لآخر حسب الحالة الصحية
              والالتزام ببرنامج العلاج. استشر الطبيب قبل بدء أي برنامج علاجي.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
