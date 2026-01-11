"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 animate-fadeInUp text-balance">
              تواصل معنا الآن
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              نحن هنا للإجابة على جميع استفساراتك والمساعدة في بدء رحلتك نحو حياة أفضل
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Phone,
                  label: "رقم العيادة",
                  value: "01010560575",
                  subtext: "اتصل بنا مباشرة",
                  delay: "0s",
                },
                {
                  icon: MessageCircle,
                  label: "واتس آب",
                  value: "01010560575",
                  subtext: "تواصل معنا فوراً",
                  delay: "0.1s",
                },
                {
                  icon: MapPin,
                  label: "العنوان",
                  value: "المنصورة، الدقهلية",
                  subtext: "مصر",
                  delay: "0.2s",
                },
                {
                  icon: Mail,
                  label: "البريد الإلكتروني",
                  value: "info@drazmy.com",
                  subtext: "نرد في أسرع وقت",
                  delay: "0.3s",
                },
              ].map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <div
                    key={idx}
                    className="group p-6 rounded-2xl bg-white border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fadeInUp cursor-pointer"
                    style={{ animationDelay: contact.delay }}
                  >
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-125 transition-transform" />
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-base font-bold text-primary mb-1">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.subtext}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-border/50 p-8 sm:p-12 shadow-lg animate-scaleIn">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">أرسل لنا رسالة</h2>
              <p className="text-center text-muted-foreground mb-8">سنرد عليك في أسرع وقت ممكن</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 transition-all"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 transition-all"
                    placeholder="01010560575"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 transition-all resize-none"
                    placeholder="اكتب رسالتك أو استفسارك"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 transform active:scale-95 text-lg"
                >
                  {submitted ? "✓ تم الإرسال بنجاح" : "إرسال الرسالة"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
