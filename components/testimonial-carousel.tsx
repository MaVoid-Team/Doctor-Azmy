"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const TestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            name: "أحمد محمد",
            result: "خسارة 25 كجم",
            text: "تجربة غيرت حياتي بالكامل. لم أكن أتخيل أنني سأصل لهذا الوزن بدون جراحة. شكراً دكتور محمد.",
            rating: 5,
        },
        {
            id: 2,
            name: "سارة علي",
            result: "تحسن في مقاومة الأنسولين",
            text: "أسلوب علمي ومتابعة دقيقة. تحسنت صحتي العامة وليس مجرد نزول في الوزن.",
            rating: 5,
        },
        {
            id: 3,
            name: "محمود حسن",
            result: "خسارة 15 كجم",
            text: "الدكتور محترم جداً وفريق العمل متعاون. أنصح أي حد بيعاني من السمنة يزور العيادة.",
            rating: 5,
        },
    ]

    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">قصص نجاح حقيقية</h2>
                    <p className="text-primary-foreground/80 text-xl">نفخر بكوننا جزء من رحلة تغييركم</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Next Button (Left Side in RTL) */}
                    <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 hidden md:block">
                        <button onClick={next} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all group">
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>
                    </div>
                    {/* Prev Button (Right Side in RTL) */}
                    <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-20 hidden md:block">
                        <button onClick={prev} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all group">
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="overflow-hidden py-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white text-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative"
                            >
                                <Quote className="absolute top-8 right-8 text-primary/10 w-20 h-20" />

                                <div className="flex flex-col items-center text-center">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[current].rating)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                                        "{testimonials[current].text}"
                                    </p>

                                    <div>
                                        <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-bold mt-2">
                                            {testimonials[current].result}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                        <button onClick={prev} className="p-3 bg-white/20 rounded-full"><ChevronRight /></button>
                        <button onClick={next} className="p-3 bg-white/20 rounded-full"><ChevronLeft /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialCarousel
