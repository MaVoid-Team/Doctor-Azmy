"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Portfolio() {
  const qualifications = [
    "دكتوراه علاج السمنة (القصر العيني)",
    "ماجستير التجميل غير الجراحي",
    "استشاري التخسيس وعلاج السمنة",
    "زميل الجمعية الأمريكية لأبحاث السمنة I.A.S.O",
    "البورد الأمريكي في التجميل غير الجراحي",
    "طبيب زمالة معتمد من وزارة الصحة المصرية",
  ]

  const philosophy = [
    {
      title: "أساس علمي دقيق",
      desc: "يعتمد على أحدث الأبحاث الطبية العالمية",
    },
    {
      title: "نتائج آمنة ومستدامة",
      desc: "التركيز على سلامة المريض في المقام الأول",
    },
    {
      title: "برامج مخصصة",
      desc: "كل حالة لها خطة علاجية فريدة",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-fadeInUp">السيرة المهنية</h1>
            <p className="text-lg text-muted-foreground animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              دكتور محمد عزمي
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">الملخص المهني</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              يحمل دكتور محمد عزمي دكتوراه علاج السمنة، وماجستير التجميل غير الجراحي، وهو استشاري تغذية علاجية وعلاج
              السمنة، وزميل جمعية I.A.S.O الأمريكية لأبحاث السمنة، وحاصل على البورد الأمريكي في التجميل غير الجراحي.
            </p>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">المؤهلات العلمية</h2>
            <div className="grid gap-4">
              {qualifications.map((qual, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{qual}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Philosophy */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">الفلسفة الطبية</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              يعتمد دكتور محمد عزمي في برامجه العلاجية على أسس علمية دقيقة، مستندة إلى أحدث الأبحاث الطبية العالمية، مع
              التركيز على تحقيق نتائج آمنة ومستدامة دون الإضرار بصحة المريض.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">الخدمات الطبية</h2>

            <div className="space-y-8">
              {/* Weight Loss */}
              <div className="border-r-4 border-primary pr-6">
                <h3 className="text-2xl font-bold text-primary mb-4">نحت الجسم وتفتيت الدهون وشد الترهلات</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ ليزر تفتيت الدهون وشد الترهلات</li>
                  <li>✓ تفتيت الدهون بتقنية Cavitation</li>
                  <li>✓ شد الترهلات وتصريف الدهون بجهاز RF</li>
                  <li>✓ شد الترهلات بجهاز EMT</li>
                  <li>✓ ميزوثيرابي أوروبي Mesotherapy (6 أنواع في الجلسة)</li>
                  <li>✓ تفتيت الدهون بالتبريد Cryolipolysis</li>
                </ul>
              </div>

              {/* Skin Care */}
              <div className="border-r-4 border-accent pr-6">
                <h3 className="text-2xl font-bold text-accent mb-4">تجميل البشرة</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ جلسات Dermapen باستخدام أفضل أنواع الميزوثيرابي العالمية</li>
                  <li>✓ نضارة البشرة (H.A + Glow + Skin Lift)</li>
                  <li>✓ تفتيح البشرة (Glutathione + H.A + Vit C)</li>
                  <li>✓ علاج الهالات السوداء (Vitamins + Amino Acids + Antioxidants)</li>
                </ul>
              </div>

              {/* Hair */}
              <div className="border-r-4 border-primary pr-6">
                <h3 className="text-2xl font-bold text-primary mb-4">إنبات الشعر ومنع تساقطه</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ ميزوثيرابي متقدم (HairStem + Growth Factors + Peptides + Dutasteride)</li>
                </ul>
              </div>

              {/* Laser Hair Removal */}
              <div className="border-r-4 border-accent pr-6">
                <h3 className="text-2xl font-bold text-accent mb-4">إزالة الشعر بالليزر</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ باستخدام جهاز Diode Laser 810nm الآمن وذو النتائج الفعالة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
