"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary" | "outline"
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-blue-purple text-white"
      case "secondary":
        return "bg-gradient-blue-teal text-white"
      case "outline":
        return "bg-transparent border border-primary text-primary hover:bg-primary/10"
      default:
        return "bg-gradient-blue-purple text-white"
    }
  }

  const ButtonContent = (
    <motion.div
      ref={buttonRef}
      className={`relative overflow-hidden rounded-full px-6 py-3 font-medium transition-colors ${getVariantClasses()} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
    >
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={{ x: position.x * 0.1, y: position.y * 0.1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.span>
      {variant !== "outline" && (
        <motion.div
          className="absolute inset-0 bg-gradient-blue-purple opacity-100"
          animate={{
            x: position.x * 0.05,
            y: position.y * 0.05,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        />
      )}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{ButtonContent}</a>
  }

  return ButtonContent
}
