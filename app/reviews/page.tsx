"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { X, ZoomIn } from "lucide-react"

// Mock data for reviews - in a real app these would be paths to actual screenshots
const reviews = [
    { id: 1, src: "/placeholder.jpg", alt: "Review 1", ratio: "aspect-[3/4]" },
    { id: 2, src: "/placeholder.jpg", alt: "Review 2", ratio: "aspect-[4/3]" },
    { id: 3, src: "/placeholder.jpg", alt: "Review 3", ratio: "aspect-[3/5]" },
    { id: 4, src: "/placeholder.jpg", alt: "Review 4", ratio: "aspect-[3/4]" },
    { id: 5, src: "/placeholder.jpg", alt: "Review 5", ratio: "aspect-[4/5]" },
    { id: 6, src: "/placeholder.jpg", alt: "Review 6", ratio: "aspect-[3/4]" },
    { id: 7, src: "/placeholder.jpg", alt: "Review 7", ratio: "aspect-[4/3]" },
    { id: 8, src: "/placeholder.jpg", alt: "Review 8", ratio: "aspect-[3/5]" },
    { id: 9, src: "/placeholder.jpg", alt: "Review 9", ratio: "aspect-[4/5]" },
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

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            layoutId={`card-${review.id}`}
                            key={review.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            onClick={() => setSelectedId(review.id)}
                            className="break-inside-avoid relative group cursor-zoom-in rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`relative ${review.ratio} w-full`}>
                                <Image
                                    src={review.src}
                                    alt={review.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
