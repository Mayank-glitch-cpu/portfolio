"use client"

import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/hrishikeshmagadum",
    label: "LinkedIn"
  },
  {
    icon: FaGithub,
    href: "https://github.com/hrishikeshm12",
    label: "GitHub"
  },
  {
    icon: FaEnvelope,
    href: "mailto:hrishikeshmagadum09@gmail.com",
    label: "Email"
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com/hrishikesh.magadum.3",
    label: "Facebook"
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/+16238002607",
    label: "WhatsApp"
  }
]

const Footer = () => {
  return (
    <footer className="py-8 bg-background/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hrishikesh Magadum. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

