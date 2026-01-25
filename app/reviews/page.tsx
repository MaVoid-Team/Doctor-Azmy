"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { X, ZoomIn } from "lucide-react"

// Success stories from customer reviews
const reviews = [
    { id: 0, src: "/reveeeeee.jpg", alt: "Review Featured" },
    { id: 1, src: "/rev1.jpg", alt: "Review 1" },
    { id: 2, src: "/rev2.jpg", alt: "Review 2" },
    { id: 3, src: "/rev3.jpg", alt: "Review 3" },
    { id: 4, src: "/rev4.jpg", alt: "Review 4" },
    { id: 5, src: "/rev5.jpg", alt: "Review 5" },
    { id: 6, src: "/rev6.jpg", alt: "Review 6" },
    { id: 7, src: "/rev7.jpg", alt: "Review 7" },
    { id: 8, src: "/rev9.jpg", alt: "Review 8" },
    { id: 9, src: "/rev10.jpg", alt: "Review 9" },
    { id: 10, src: "/rev11.jpg", alt: "Review 10" },
    { id: 11, src: "/rev12.jpg", alt: "Review 11" },
    { id: 12, src: "/rev13.jpg", alt: "Review 12" },
    { id: 13, src: "/rev14.jpg", alt: "Review 13" },
    { id: 14, src: "/rev15.jpg", alt: "Review 14" },
    { id: 15, src: "/rev16.jpg", alt: "Review 15" },
    { id: 16, src: "/rev17.jpg", alt: "Review 16" },
    { id: 17, src: "/rev18.jpg", alt: "Review 17" },
    { id: 18, src: "/rev19.jpg", alt: "Review 18" },
    { id: 19, src: "/rev20.jpg", alt: "Review 19" },
    { id: 20, src: "/rev21.jpg", alt: "Review 20" },
    { id: 21, src: "/rev22.jpg", alt: "Review 21" },
    { id: 22, src: "/rev23.jpg", alt: "Review 22" },
    { id: 23, src: "/rev24.jpg", alt: "Review 23" },
    { id: 24, src: "/rev25.jpg", alt: "Review 24" },
]

export default function ReviewsPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-6"
                    >
                        تجارب وقصص نجاح
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        آراء حقيقية من أشخاص تغيرت حياتهم للأفضل. نفخر بكوننا جزءاً من رحلة نجاحهم.
                    </motion.p>
                </div>

                {/* Masonry Grid - Responsive to Image Sizes */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {reviews.map((review, index) => (
                        <motion.div
                            layoutId={`card-${review.id}`}
                            key={review.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            onClick={() => setSelectedId(review.id)}
                            className="break-inside-avoid relative group cursor-zoom-in rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 mb-4"
                        >
                            <div className="relative w-full h-auto">
                                <Image
                                    src={review.src}
                                    alt={review.alt}
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    <ZoomIn size={20} className="text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative flex-1 min-h-[50vh]">
                                {reviews.find(r => r.id === selectedId) && (
                                    <Image
                                        src={reviews.find(r => r.id === selectedId)!.src}
                                        alt="Review Details"
                                        fill
                                        className="object-contain bg-mutde/20"
                                    />
                                )}
                            </div>

                            <div className="p-6 bg-white border-t border-border">
                                <h3 className="font-bold text-lg">تفاصيل التجربة</h3>
                                <p className="text-muted-foreground text-sm">اضغط خارج الإطار للإغلاق</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    )
}
