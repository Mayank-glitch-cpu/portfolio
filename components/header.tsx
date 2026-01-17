"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'testimonials', 'dashboards', 'videos', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      } else {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Testimonials']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/60 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left: Name */}
          <a href="#" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
            Mayank Vyas
          </a>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Contact Me button + Mobile menu */}
          <div className="flex items-center space-x-2">
            <a
              href="mailto:vyasmayank963@gmail.com"
              className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="mailto:vyasmayank963@gmail.com"
                className="mt-4 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
