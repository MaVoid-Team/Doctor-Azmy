"use client"

import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      title: "نحت الجسم وتفتيت الدهون",
      desc: "تقنيات متقدمة لتفتيت الدهون وشد الترهلات بدون جراحة.",
      icon: "✨",
      items: ["ليزر تفتيت الدهون", "تقنية Cavitation", "RF وEMT"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "hover:border-blue-500/30"
    },
    {
      title: "تجميل البشرة والعناية",
      desc: "برامج متخصصة لتحسين نضارة البشرة وعلاج المشاكل الجلدية.",
      icon: "💆",
      items: ["Dermapen جلسات", "تفتيح البشرة", "علاج الهالات"],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "hover:border-purple-500/30"
    },
    {
      title: "علاج تساقط الشعر",
      desc: "حلول فعالة لمشاكل السقوط وإعادة الإنبات بأحدث الطرق.",
      icon: "💇",
      items: ["ميزوثيرابي متقدم", "Growth Factors", "خلايا جذعية"],
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "hover:border-emerald-500/30"
    },
    {
      title: "إزالة الشعر بالليزر",
      desc: "تقنية آمنة وفعالة لنتائج دائمة وبشرة ناعمة.",
      icon: "⚡",
      items: ["Diode Laser 810nm", "نتائج دائمة", "تبريد ذاتي"],
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "hover:border-amber-500/30"
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4"
          >
            حلول طبية متكاملة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            نجمع بين الطب والتكنولوجيا لنقدم لك أفضل النتائج في التغذية التجميل
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-2xl ${service.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="text-5xl p-4 bg-muted rounded-2xl group-hover:scale-110 group-hover:bg-white/50 transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm bg-background border border-border px-3 py-1 rounded-full font-medium text-foreground/80 group-hover:border-primary/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
