"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Nutrition() {
  const benefits = [
    {
      title: "تحسين الصحة العامة",
      desc: "برامج غذائية تعزز الصحة الشاملة وتحسن المناعة",
      icon: "💪",
      details: "الغذاء السليم يقوي جهاز المناعة ويحمي من الأمراض",
    },
    {
      title: "تنظيم الوزن",
      desc: "إنقاص وزن مستدام طويل الأمد بدون حرمان",
      icon: "⚖️",
      details: "البرامج المخصصة تضمن فقدان الدهون مع الحفاظ على العضلات",
    },
    {
      title: "تقليل الأمراض",
      desc: "الوقاية من الأمراض المزمنة المرتبطة بالسمنة",
      icon: "❤️",
      details: "تجنب السكري وارتفاع ضغط الدم وأمراض القلب",
    },
    {
      title: "تحسين الطاقة",
      desc: "زيادة النشاط والحيوية اليومية بشكل ملحوظ",
      icon: "⚡",
      details: "غذاء متوازن يعطيك الطاقة لممارسة حياتك بكفاءة",
    },
  ]

  const goodFoods = [
    {
      title: "الخضروات الورقية الداكنة",
      description: "السبانخ، الكرنب، الجرجير غنية بالمعادن والفيتامينات ومنخفضة السعرات",
      benefits: "فيتامين K، حديد، كالسيوم، مضادات أكسدة",
      icon: "🥬",
    },
    {
      title: "البروتينات الخالية من الدهون",
      description: "الدجاج، السمك، البيض، اللحم الأحمر قليل الدهن تساعد في بناء العضلات",
      benefits: "أحماض أمينية، فيتامين B12، حديد، دعم النسيج العضلي",
      icon: "🍗",
    },
    {
      title: "الحبوب الكاملة",
      description: "الأرز البني، الشوفان، القمح الكامل توفر ألياف وتشعرك بالشبع لفترة أطول",
      benefits: "ألياف غذائية، فيتامينات B، معادن، تحسين الهضم",
      icon: "🌾",
    },
    {
      title: "الدهون الصحية",
      description: "زيت الزيتون، الأفوكادو، المكسرات، الأسماك الدهنية تساعد في امتصاص الفيتامينات",
      benefits: "أوميجا 3، فيتامين E، صحة القلب والدماغ",
      icon: "🥑",
    },
    {
      title: "الفواكه والتوت",
      description: "التفاح، البرتقال، التوت الأزرق غنية بالفيتامينات ومضادات الأكسدة",
      benefits: "فيتامين C، ألياف، مضادات أكسدة قوية، تقليل الالتهاب",
      icon: "🍎",
    },
    {
      title: "البقوليات",
      description: "العدس، الحمص، الفول تحتوي على بروتين نباتي عالي وألياف",
      benefits: "بروتين نباتي، ألياف، حديد، تحسين صحة الجهاز الهضمي",
      icon: "🫘",
    },
  ]

  const foodsToAvoid = [
    {
      title: "المشروبات السكرية والعصائر",
      description: "المشروبات الغازية، عصائر الفواكه المحلاة تحتوي على سعرات فارغة عالية جداً",
      risks: "زيادة الوزن السريعة، ارتفاع السكر، تسوس الأسنان، مرض السكري",
      icon: "🥤",
    },
    {
      title: "الأطعمة المصنعة والمعلبة",
      description: "الرقائق، الحلويات، الوجبات السريعة تحتوي على صوديوم ودهون عالية جداً",
      risks: "ارتفاع ضغط الدم، السمنة، أمراض القلب، مواد حافظة ضارة",
      icon: "🍔",
    },
    {
      title: "السكريات المكررة والدقيق الأبيض",
      description: "الخبز الأبيض، المعجنات، الحلويات تسبب قفزات سريعة في السكر",
      benefits: "رفع السكر بسرعة، الإرهاق اللاحق، زيادة الجوع",
      icon: "🍞",
    },
    {
      title: "الدهون المشبعة والمتحولة",
      description: "الزبدة، الدهون الحيوانية، الزيوت المهدرجة ترفع الكوليسترول الضار",
      risks: "تصلب الشرايين، أمراض القلب، السمنة، تراجع الصحة العامة",
      icon: "🧈",
    },
    {
      title: "الأطعمة المقلية",
      description: "الدجاج المقلي، البطاطس المقلية، الأطعمة المخبوزة بالزيت العميق",
      risks: "سعرات عالية جداً، دهون متحولة، التهاب، مشاكل هضمية",
      icon: "🍟",
    },
    {
      title: "الكحول والمشروبات المحلاة",
      description: "البيرة والنبيذ والمشروبات الكحولية تحتوي على سعرات كثيرة وفارغة",
      risks: "سعرات فارغة، زيادة دهون البطن، تأثر الكبد، إدمان",
      icon: "🍺",
    },
  ]

  const nutritionTips = [
    {
      title: "اختر الأطعمة الطبيعية",
      description: "تجنب الأطعمة المعالجة والمشروبات السكرية. ركز على الخضار والفواكه والبروتينات الطبيعية.",
      icon: "🥗",
    },
    {
      title: "تناول البروتين بانتظام",
      description: "البروتين يساعد في الشعور بالشبع ويحافظ على الكتلة العضلية أثناء فقدان الوزن.",
      icon: "🥚",
    },
    {
      title: "شرب الماء بكثرة",
      description: "الماء ضروري لعمليات الأيض والهضم. اشرب 8-10 أكواب يومياً على الأقل.",
      icon: "💧",
    },
    {
      title: "تجنب السكريات المكررة",
      description: "استبدل السكريات البيضاء بالسكريات الطبيعية والحبوب الكاملة.",
      icon: "🚫",
    },
    {
      title: "تناول الدهون الصحية",
      description: "الزيت الزيتون وزيت جوز الهند والأسماك الدهنية غنية بالدهون المفيدة.",
      icon: "🥑",
    },
    {
      title: "تنظيم أوقات الوجبات",
      description: "قسم طعامك على 3-4 وجبات منتظمة لتجنب الجوع الشديد والإفراط في الأكل.",
      icon: "⏰",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fadeInUp">
              <p className="text-lg sm:text-xl font-semibold mb-4 text-white/90">🏆 معترف به دولياً</p>
              <h1 className="text-5xl sm:text-7xl font-black mb-6 text-white text-balance leading-tight">
                دكتور محمد عزمي
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-white/95 mb-8">
               افضل دكتور تخسيس
              </p>

              <div
                className="inline-block bg-white/20 border border-white/30 rounded-2xl px-8 py-4 backdrop-blur-md"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-lg font-semibold text-white">
                  ✨ خبرة عملية تزيد عن 15 سنة في مجال االتخسيس والعلاج المتكامل
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { number: "1000+", label: "مريض شُفي بنجاح" },
                { number: "95%", label: "معدل رضا المرضى" },
                { number: "15+", label: "سنة خبرة" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center animate-scaleIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <p className="text-4xl sm:text-5xl font-black mb-2 text-white">{stat.number}</p>
                  <p className="text-white/80 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Header */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fadeInUp">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">التغذية العلاجية</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                التغذية العلاجية ليست نظاماً مؤقتاً، بل هي أسلوب حياة مستدام يهدف إلى تحسين الصحة العامة، تنظيم الوزن،
                وتقليل مخاطر الأمراض المزمنة. يعتمد دكتور محمد عزمي على برامج غذائية مخصصة لكل حالة بناءً على التحاليل
                الطبية ونمط الحياة.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
              فوائد التغذية العلاجية
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-left">{benefit.icon}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.desc}</p>
                  <p className="text-xs text-primary font-semibold bg-primary/10 p-2 rounded-lg">{benefit.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Good Foods Section */}
        <section className="py-20 bg-green-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">الأطعمة الصحية الموصى بها</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goodFoods.map((food, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-green-200/50 p-6 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 hover:translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <p className="text-4xl mb-4 group-hover:scale-125 transition-transform">{food.icon}</p>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-green-600 transition-colors">
                    {food.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{food.description}</p>
                  <p className="text-xs text-green-700 font-semibold bg-green-50 p-2 rounded-lg">{food.benefits}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foods to Avoid Section */}
        <section className="py-20 bg-red-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">الأطعمة التي يجب تجنبها</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodsToAvoid.map((food, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-red-200/50 p-6 hover:border-red-500/50 hover:shadow-xl transition-all duration-300 hover:translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <p className="text-4xl mb-4 group-hover:scale-125 transition-transform">{food.icon}</p>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                    {food.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{food.description}</p>
                  <p className="text-xs text-red-700 font-semibold bg-red-50 p-2 rounded-lg">⚠️ المخاطر: {food.risks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">نصائح غذائية مهمة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <p className="text-4xl mb-4 group-hover:scale-125 transition-transform">{tip.icon}</p>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
              منهج العلاج المتكامل
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "التقييم الشامل",
                  desc: "فحص طبي تفصيلي وتحاليل مخبرية لفهم احتياجاتك الفريدة",
                  details: "نقيس الوزن والطول و تحليل الدهون بافضل جهاز انبودي عالميا من حيث الدقة inbody 270",
                },
                {
                  step: 2,
                  title: "البرنامج المخصص",
                  desc: "وضع خطة غذائية مخصصة حسب حالتك الصحية ونمط حياتك",
                  details: "برنامج يناسب ذوقك وحياتك دون حرمان من الطعام المفضل",
                },
                {
                  step: 3,
                  title: "المتابعة المنتظمة",
                  desc: "متابعة دورية أسبوعية لضمان التزامك بالبرنامج",
                  details: "تقييم التقدم وتعديل البرنامج حسب النتائج",
                },
                {
                  step: 4,
                  title: "النتائج المستدامة",
                  desc: "تحقيق نتائج طويلة المدى وتحسين جودة الحياة",
                  details: "ليس فقط خسارة الوزن، بل اكتساب صحة دائمة وأسلوب حياة صحي",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 p-8 bg-white rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group animate-fadeInUp"
                  style={{ animationDelay: `${item.step * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{item.desc}</p>
                    <p className="text-sm text-primary font-semibold">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Devices Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
              أجهزة طبية متقدمة
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              نستخدم أحدث وأفضل الأجهزة الطبية العالمية لضمان أفضل النتائج وأعلى معايير السلامة والفعالية
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* InBody 270 Device */}
              <div className="group bg-white rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary/50 animate-fadeInUp">
                <div className="relative h-80 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/devices/inbody-270.png" 
                    alt="جهاز InBody 270" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    قياس تحليل الجسم المتقدم
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    أفضل جهاز قياس تحليل الدهون عالمياً من حيث الدقة والموثوقية
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-foreground">قياس نسبة الدهون وتوزيعها في الجسم</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-foreground">قياس نسبة السوائل والعضلات</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-foreground">تحليل كثافة العظام</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-foreground">قياس معدل الحرق الأساسي</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-foreground">درجة الدهون الثلاثية ودرجة السمنة</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-semibold mt-6 bg-primary/10 p-3 rounded-lg">
                    📍 المقياس الأول والأساسي لبرنامجك العلاجي
                  </p>
                </div>
              </div>

              {/* I-Sculpture Device */}
              <div className="group bg-white rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary/50 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <div className="relative h-80 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden flex items-center justify-center p-6">
                  <img 
                    src="/devices/sculpture.png" 
                    alt="جهاز نحت الجسم I-Sculpture" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    أجهزة نحت وشد الجسم
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    نحت الجسم وشد الترهلات بدون جراحة بأمان تام وبدون أعراض جانبية
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">⭐</span>
                      <span className="text-foreground">جلسات ميزوثيرابي عالمية متقدمة</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">⭐</span>
                      <span className="text-foreground">تقنية الليزر لتفتيت الدهون</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">⭐</span>
                      <span className="text-foreground">تقنية الكرايو 3D Cryolipolysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">⭐</span>
                      <span className="text-foreground">جهاز I-Sculpture الموثوق عالمياً</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">⭐</span>
                      <span className="text-foreground">LS650 للعلاجات المتقدمة</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-semibold bg-primary/10 p-3 rounded-lg">
                    ✨ نتائج من الجلسة الأولى تحت إشراف الطبيب مباشرة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-scaleIn">
            <h2 className="text-4xl font-bold text-foreground mb-6">ابدأ رحلتك نحو حياة صحية</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا الآن. دكتور محمد عزمي وفريقه جاهزان لمساعدتك على تحقيق أهدافك الصحية.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              احجز استشارتك الآن
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
