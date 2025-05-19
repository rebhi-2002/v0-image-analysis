"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true))
        el.addEventListener("mouseout", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden ? 0 : 1,
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 0.8,
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      x: position.x - 24,
      y: position.y - 24,
      scale: 1.5,
      opacity: hidden ? 0 : 0.8,
    },
  }

  const cursorDotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: hidden ? 0 : 1,
    },
    clicked: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 0.5,
      opacity: hidden ? 0 : 1,
    },
    hovered: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: 0,
    },
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-primary"
        variants={cursorVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-primary"
        variants={cursorDotVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </div>
  )
}
