"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  const credentials = [
    { title: "دكتوراه علاج السمنة", icon: "🎓", desc: "  جامعة القصر العيني" },
    { title: "استشاري تغذية علاجية", icon: "💊", desc: "خبرة ١٥ عاماً" },
    { title: "زميل جمعية IASO", icon: "🏆", desc: "الجمعية الأمريكية للسمنة" },
    { title: "عضو الجمعية الأوروبية", icon: "⭐", desc: "ESPEN" },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-16 items-center text-center">

          {/* Content Side */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-wider text-sm bg-primary/10 px-4 py-2 rounded-full">من نحن</span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mt-4 mb-6 leading-tight">
                رؤية طبية متطورة لصحة مستدامة
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                يمارس دكتور محمد عزمي عمله في مجال علاج السمنة والتغذية العلاجية وفق منهج علمي قائم على أحدث الأبحاث والدراسات الطبية العالمية. نحن لا نقدم حميات غذائية فحسب، بل نصمم أسلوب حياة صحي متكامل يناسب طبيعة جسمك وحياتك.
              </p>
            </motion.div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-white border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl bg-secondary/20 p-2 rounded-lg group-hover:scale-110 transition-transform">{cred.icon}</span>
                    <div>
                      <p className="font-bold text-foreground mb-1">{cred.title}</p>
                      <p className="text-xs text-muted-foreground">{cred.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Image src="/signature.png" alt="Signature" width={150} height={50} className="opacity-0 hidden" /> {/* Placeholder for signature if exists, hidden for now */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
