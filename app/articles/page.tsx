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
        title: "أهمية التغذية العلاجية في علاج السمنة المفرطة",
        excerpt: "اكتشف كيف يمكن للتغذية السليمة أن تكون بديلاً فعالاً للجراحة في حالات السمنة المتقدمة.",
        date: "٢٠٢٤/٠١/١٥",
        author: "د. محمد عزمي",
        category: "سمنة",
        gradientClass: "from-blue-600 to-cyan-500",
    },
    {
        id: 2,
        title: "مقاومة الأنسولين: العلامات، الأعراض، وطرق العلاج",
        excerpt: "دليل شامل لفهم مقاومة الأنسولين وكيفية التعامل معها من خلال تغيير نمط الحياة والنظام الغذائي.",
        date: "٢٠٢٤/٠١/١٠",
        author: "د. محمد عزمي",
        category: "صحة عامة",
        gradientClass: "from-emerald-600 to-teal-500",
    },
    {
        id: 3,
        title: "أخطاء شائعة نقع فيها عند اتباع حمية الكيتو",
        excerpt: "تعرف على الأخطاء التي قد تمنعك من الوصول إلى الحالة الكيتونية وكيفية تجنبها للحصول على أفضل النتائج.",
        date: "٢٠٢٣/١٢/٢٨",
        author: "د. محمد عزمي",
        category: "كيتو",
        gradientClass: "from-orange-500 to-amber-500",
    },
    {
        id: 4,
        title: "الصيام المتقطع: هل هو مناسب لجميع الحالات؟",
        excerpt: "تحليل علمي لفوائد وأضرار الصيام المتقطع، ومن هي الفئات التي يجب عليها تجنبه.",
        date: "٢٠٢٣/١٢/٢٠",
        author: "د. محمد عزمي",
        category: "أنظمة غذائية",
        gradientClass: "from-purple-600 to-indigo-500",
    },
    {
        id: 5,
        title: "تغذية الأطفال: بناء عادات صحية تدوم مدى الحياة",
        excerpt: "نصائح عملية للآباء لتشجيع أطفالهم على تناول الطعام الصحي وتجنب السمنة في سن مبكرة.",
        date: "٢٠٢٣/١٢/١٥",
        author: "د. محمد عزمي",
        category: "أطفال",
        gradientClass: "from-pink-500 to-rose-500",
    },
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
                        نشاركك أحدث ما توصل إليه العلم في مجال التغذية العلاجية وعلاج السمنة لنمط حياة صحي ومستدام
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
