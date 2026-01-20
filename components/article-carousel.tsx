"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const ArticleCarousel = () => {
    const articles = [
        {
            id: 1,
            title: "دكتور محمد عزمي يكشف سر الرشاقة الليلي: كيف يضاعف النوم معدلات حرق الدهون؟",
            category: "صحة",
            color: "bg-blue-100 text-blue-700",
            link: "https://ngearab.com/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D8%B2%D9%85%D9%8A-%D9%8A%D9%83%D8%B4%D9%81-%D8%B3%D8%B1-%D8%A7%D9%84%D8%B1%D8%B4%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D9%84%D9%8A%D9%84%D9%8A/"
        },
        {
            id: 2,
            title: "د. محمد عزمي يكشف روشتة التخلص من الكرش نهائياً بدون جراحة",
            category: "سمنة",
            color: "bg-emerald-100 text-emerald-700",
            link: "https://masrnews.net/146657/"
        },
        {
            id: 3,
            title: "الدكتور محمد عزمي: الفيتامينات المهمة لزيادة حرق الدهون",
            category: "تغذية",
            color: "bg-rose-100 text-rose-700",
            link: "https://www.elbaladnewss.com/2026/01/33.html?m=1"
        },
    ]

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">أحدث المقالات</h2>
                        <p className="text-muted-foreground">تصفح مكتبتنا الطبية المتجددة</p>
                    </div>
                    <Link href="/articles" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                        عرض الكل <ArrowLeft size={20} />
                    </Link>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="min-w-[300px] md:min-w-[350px] snap-center"
                        >
                            {article.link ? (
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block group">
                                    <div className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col justify-between aspect-[4/3]">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${article.color}`}>
                                                {article.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                                <ArrowLeft size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <Link href={`/articles/${article.id}`} className="block group">
                                    <div className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col justify-between aspect-[4/3]">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${article.color}`}>
                                                {article.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                                <ArrowLeft size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </motion.div>
                    ))}

                    <div className="min-w-[100px] flex items-center justify-center">
                        <Link href="/articles" className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <ArrowLeft />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleCarousel
