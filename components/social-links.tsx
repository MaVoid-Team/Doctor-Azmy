"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const SocialLinks = () => {
  const socials = [
    {
      name: "فيسبوك",
      icon: Facebook,
      url: "https://www.facebook.com/share/1EXK4C57Zn/",
      color: "hover:text-blue-600 hover:bg-blue-100",
      delay: "0s",
    },
    {
      name: "إنستجرام",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600 hover:bg-pink-100",
      delay: "0.1s",
    },
    {
      name: "يوتيوب",
      icon: Youtube,
      url: "#",
      color: "hover:text-red-600 hover:bg-red-100",
      delay: "0.2s",
    },
    {
      name: "لينكد إن",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-700 hover:bg-blue-100",
      delay: "0.3s",
    },
  ]

  return (
    <div className="flex gap-3 items-center justify-center flex-wrap">
      {socials.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} animate-scaleIn`}
            style={{ animationDelay: social.delay }}
            title={social.name}
          >
            <Icon size={20} />
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
