"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, User, ArrowLeft, ArrowUpRight } from "lucide-react"

// Updated gradient logic to strictly use Tailwind classes that will be detected
const articles = [
    {
        id: 1,
        title: "دكتور محمد عزمي يكشف سر الرشاقة الليلي: كيف يضاعف النوم معدلات حرق الدهون؟",
        excerpt: "يوضح الدكتور محمد عزمي أن النوم ليس مجرد وقت للراحة، بل هو محرك حيوي لعمليات الأيض وحرق الدهون. اكتشف كيف تؤثر جودة النوم على تنظيم هرمونات الجسم والشعور بالشبع.",
        date: "٢٠٢٦/٠١/١٤",
        author: "د. محمد عزمي",
        category: "صحة",
        link: "https://ngearab.com/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D8%B2%D9%85%D9%8A-%D9%8A%D9%83%D8%B4%D9%81-%D8%B3%D8%B1-%D8%A7%D9%84%D8%B1%D8%B4%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D9%84%D9%8A%D9%84%D9%8A/",
        gradientClass: "from-blue-600 to-cyan-500",
    },
    {
        id: 2,
        title: "د. محمد عزمي يكشف روشتة التخلص من الكرش نهائياً بدون جراحة",
        excerpt: "يضع الدكتور محمد عزمي منهجاً طبياً حديثاً يعتمد على مبدأ التكامل للوصول إلى بطن مسطح وجسم متناسق. تشمل الخطة: نظام غذائي متوازن، أدوية آمنة، نشاط بدني منتظم، وتقنيات طبية متقدمة.",
        date: "٢٠٢٦/٠١/١١",
        author: "د. محمد عزمي",
        category: "سمنة",
        link: "https://masrnews.net/146657/",
        gradientClass: "from-emerald-600 to-teal-500",
    },
    {
        id: 3,
        title: "الدكتور محمد عزمي: الفيتامينات المهمة لزيادة حرق الدهون",
        excerpt: "يوضح الدكتور أهمية العناصر الغذائية الأساسية مثل فيتامين D3، مجموعة فيتامينات B، الزنك والماغنسيوم في تسريع عملية التمثيل الغذائي وحرق الدهون بكفاءة أعلى.",
        date: "٢٠٢٦/٠١/١٤",
        author: "د. محمد عزمي",
        category: "تغذية",
        link: "https://www.elbaladnewss.com/2026/01/33.html?m=1",
        gradientClass: "from-orange-500 to-amber-500",
    },
    {
        id: 4,
        title: "د. محمد عزمي يوضح .. كيف تتخلص من الدهون العنيدة بأمان تام؟",
        excerpt: "تتعددت الطرق الطبية الحديثة للتخلص من السمنة الموضعية بدون جراحة وبأمان تام. اكتشف تقنيات الكافيتيشن، الراديو فريكوانسي، والليزر التي تقدم حلولاً فعالة وآمنة.",
        date: "٢٠٢٦/٠١/١٤",
        author: "د. محمد عزمي",
        category: "تقنيات",
        link: "https://alqaheratimes.com/292756/",
        gradientClass: "from-purple-600 to-indigo-500",
    },
    {
        id: 5,
        title: "الدكتور محمد عزمي يوضح: ما هو أفضل نظام غذائي للتخسيس؟",
        excerpt: "يؤكد الدكتور أن الدايت المثالي ليس قالباً ثابتاً يصلح للجميع، بل هو رحلة علاجية تُصمم خصيصاً لكل فرد حسب حالته الصحية واحتياجاته الخاصة.",
        date: "٢٠٢٦/٠١/٠٨",
        author: "د. محمد عزمي",
        category: "أنظمة غذائية",
        link: "https://sahafa360.com/146595/",
        gradientClass: "from-pink-500 to-rose-500",
    },
    {
        id: 6,
        title: "دكتور محمد عزمي.. رائد علاج السمنة والتخسيس في مصر",
        excerpt: "يواصل دكتور محمد عزمي تحقيق نجاحات ملحوظة في مجال علاج السمنة و التخسيس، حاملاً دكتوراه علاج السمنة وماجستير التجميل غير الجراحي، وزميل جمعية I.A.S.O الأمريكية لأبحاث السمنة.",
        date: "٢٠٢٥/١٢/٢٧",
        author: "د. محمد عزمي",
        category: "سمنة",
        link: "https://www.elbaladnewss.com/2025/12/14.html?m=1",
        gradientClass: "from-red-600 to-pink-500",
    },
    {
        id: 7,
        title: "دكتور محمد عزمي: رائد علاج السمنة والتخسيس في مصر",
        excerpt: "يمارس دكتور محمد عزمي عمله في مجال علاج السمنة والتخسيس وفق منهج علمي قائم على أحدث الأبحاث والدراسات الطبية العالمية، مقدماً حلولاً متكاملة لإنقاص الوزن وتحسين جودة الحياة.",
        date: "٢٠٢٥/١٢/١٨",
        author: "د. محمد عزمي",
        category: "صحة عامة",
        link: "https://akhbaralgomhuria.com/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D8%B2%D9%85%D9%8A-%D8%B1%D8%A7%D8%A6%D8%AF-%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B3%D9%85%D9%86%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%BA/",
        gradientClass: "from-green-600 to-emerald-500",
    }

]

const ArticleCard = ({ article, index }: { article: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            {article.link ? (
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 p-6 md:p-8 flex flex-col justify-between">

                        {/* Gradient top bar - using bg-gradient-to-r and the valid class string */}
                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${article.gradientClass}`} />

                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted text-primary border border-primary/20">
                                    {article.category}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Calendar size={12} />
                                    {article.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                                {article.excerpt}
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border border-white overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${article.gradientClass} opacity-50`} />
                                </div>
                                <span className="text-xs font-bold text-foreground">{article.author}</span>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="text-foreground group-hover:text-white transition-colors" size={20} />
                            </div>
                        </div>

                    </div>
                </a>
            ) : (
                <Link href={`/articles/${article.id}`} className="block h-full">
                    <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 p-6 md:p-8 flex flex-col justify-between">

                        {/* Gradient top bar - using bg-gradient-to-r and the valid class string */}
                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${article.gradientClass}`} />

                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted text-primary border border-primary/20">
                                    {article.category}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Calendar size={12} />
                                    {article.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                                {article.excerpt}
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border border-white overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${article.gradientClass} opacity-50`} />
                                </div>
                                <span className="text-xs font-bold text-foreground">{article.author}</span>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="text-foreground group-hover:text-white transition-colors" size={20} />
                            </div>
                        </div>

                    </div>
                </Link>
            )}
        </motion.div>
    )
}

export default function ArticlesPage() {
    const { scrollYProgress } = useScroll()

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Abstract Background */}
            <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-6"
                    >
                        المقالات الطبية
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        نشاركك أحدث ما توصل إليه العلم في مجال االتخسيس وعلاج السمنة لنمط حياة صحي ومستدام
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <ArticleCard key={article.id} article={article} index={idx} />
                    ))}
                </div>

                {/* Load More Trigger */}
                <div className="mt-20 text-center">
                    <button className="px-8 py-3 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                        عرض المزيد من المقالات
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    )
}
