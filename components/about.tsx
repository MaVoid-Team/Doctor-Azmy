"use client"

const About = () => {
  const credentials = [
    { title: "دكتوراه علاج السمنة", icon: "🎓" },
    { title: "استشاري تغذية علاجية", icon: "💊" },
    { title: "زميل جمعية IASO الأمريكية", icon: "🏆" },
    { title: "البورد الأمريكي التجميل", icon: "⭐" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="animate-slideInRight">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">👨‍⚕️</p>
                <p className="text-sm text-muted-foreground">صورة دكتور محمد عزمي</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-6">من نحن</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              يمارس دكتور محمد عزمي عمله في مجال علاج السمنة والتغذية العلاجية وفق منهج علمي قائم على أحدث الأبحاث
              والدراسات الطبية العالمية، بهدف تحسين صحة المرضى وتقليل المضاعفات المرتبطة بالسمنة.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cred.icon}</p>
                  <p className="text-sm font-semibold text-foreground">{cred.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
