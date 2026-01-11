"use client"

import Link from "next/link"
import SocialLinks from "./social-links"

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4">دكتور محمد عزمي</h3>
            <p className="text-sm text-white/70 mb-4">علاج السمنة والتغذية العلاجية بأفضل المعايير الطبية</p>
            <p className="text-sm text-white/70">الأفضل في المنصورة والشرقية</p>
          </div>

          {/* Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-6 text-lg">الروابط السريعة</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  السيرة المهنية
                </Link>
              </li>
              <li>
                <Link
                  href="/before-after"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  قبل وبعد
                </Link>
              </li>
              <li>
                <Link
                  href="/nutrition"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  التغذية العلاجية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-6 text-lg">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <span>📞</span>
                <span className="hover:text-white transition-colors cursor-pointer">01010560575</span>
              </p>
              <p className="flex items-start gap-2">
                <span>💬</span>
                <span className="hover:text-white transition-colors cursor-pointer">واتس اب: 01010560575</span>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span className="hover:text-white transition-colors cursor-pointer">المنصورة، الدقهلية</span>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-6 text-lg">تابعنا على السوشيال</h4>
            <div className="flex gap-3">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/50 mb-2">
            © جميع الحقوق محفوظة – دكتور محمد عزمي {new Date().getFullYear()}
          </p>
          <p className="text-center text-xs text-white/40">
            Powered by <span className="font-semibold">MaVoid</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
