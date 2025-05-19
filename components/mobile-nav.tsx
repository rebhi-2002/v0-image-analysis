"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-provider"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <a href="/" className="flex items-center gap-2" onClick={closeMenu}>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  YourName
                </span>
              </a>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <nav className="flex flex-col gap-4 p-4">
              <motion.a
                href="/"
                className="flex h-12 items-center rounded-md px-4 text-lg font-medium hover:bg-muted"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#portfolio"
                className="flex h-12 items-center rounded-md px-4 text-lg font-medium hover:bg-muted"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Portfolio
              </motion.a>
              <motion.a
                href="#about"
                className="flex h-12 items-center rounded-md px-4 text-lg font-medium hover:bg-muted"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                About
              </motion.a>
              <motion.a
                href="/blog"
                className="flex h-12 items-center rounded-md px-4 text-lg font-medium hover:bg-muted"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Blog
              </motion.a>
              <motion.a
                href="#contact"
                className="flex h-12 items-center rounded-md px-4 text-lg font-medium hover:bg-muted"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Contact
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="mt-4 flex h-12 items-center justify-center rounded-md bg-primary px-4 text-lg font-medium text-primary-foreground hover:bg-primary/90"
                onClick={closeMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                rel="noreferrer"
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
