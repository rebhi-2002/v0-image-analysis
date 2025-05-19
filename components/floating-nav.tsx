"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-provider"

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }

      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 transform md:flex"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : 100,
          opacity: isScrolled ? 1 : 0,
          transition: { duration: 0.3 },
        }}
      >
        <div className="flex items-center gap-1 rounded-full border bg-background/80 p-1 shadow-lg backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Icon className="h-5 w-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-background px-2 py-1 text-xs font-medium opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            )
          })}
          <div className="mx-1 h-6 w-px bg-border"></div>
          <ThemeToggle />
        </div>
      </motion.div>

      <motion.button
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-end bg-black/50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full rounded-t-xl bg-background p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold">Navigation</h3>
                <ThemeToggle />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center gap-2 rounded-lg p-3 transition-colors ${
                        activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                        setIsOpen(false)
                      }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
