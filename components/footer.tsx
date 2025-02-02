"use client"

import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mayank-vyas-369796213/",
    label: "LinkedIn"
  },
  {
    icon: FaGithub,
    href: "https://github.com/mayank-glitch-cpu",
    label: "GitHub"
  },
  {
    icon: FaEnvelope,
    href: "mailto:mvyas7@asu.edu",
    label: "Email"
  },
  // {
  //   icon: FaFacebookF,
  //   href: "https://facebook.com/hrishikesh.magadum.3",
  //   label: "Facebook"
  // },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/+16025171664",
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
            © {new Date().getFullYear()} Mayank Vyas. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

