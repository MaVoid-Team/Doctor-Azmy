"use client"

const Services = () => {
  const services = [
    {
      title: "نحت الجسم وتفتيت الدهون",
      desc: "تقنيات متقدمة لتفتيت الدهون وشد الترهلات",
      icon: "✨",
      items: ["ليزر تفتيت الدهون", "تقنية Cavitation", "RF وEMT"],
      bgGradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "تجميل البشرة",
      desc: "برامج متخصصة لتحسين صحة البشرة",
      icon: "💆",
      items: ["Dermapen جلسات", "تفتيح البشرة", "علاج الهالات"],
      bgGradient: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "إنبات الشعر",
      desc: "حلول فعالة لمشاكل تساقط الشعر",
      icon: "💇",
      items: ["ميزوثيرابي متقدم", "Growth Factors", "علاجات فعالة"],
      bgGradient: "from-pink-500/20 to-pink-600/20",
    },
    {
      title: "إزالة الشعر بالليزر",
      desc: "تقنية آمنة وفعالة للنتائج الدائمة",
      icon: "⚡",
      items: ["Diode Laser 810nm", "نتائج دائمة", "آمن وفعال"],
      bgGradient: "from-amber-500/20 to-amber-600/20",
    },
  ]

  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">الخدمات الطبية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            برامج علاجية شاملة تجمع بين أحدث التقنيات الطبية والخبرة العلمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl animate-fadeInUp cursor-pointer bg-gradient-to-br ${service.bgGradient} from-white to-muted/10 hover:to-muted/30`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Background gradient animation */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />

              <div className="relative z-10">
                {/* Icon with scale animation */}
                <p className="text-5xl mb-6 group-hover:scale-125 group-hover:animate-bounceDown transition-transform duration-300 origin-left inline-block">
                  {service.icon}
                </p>

                {/* Title and description */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors">
                  {service.desc}
                </p>

                {/* Service items with staggered animation */}
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm bg-primary/15 text-primary px-4 py-2 rounded-full font-medium group-hover:bg-primary/25 transition-all duration-300 transform group-hover:scale-105"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
