"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({ children, delay = 0, duration = 0.5, once = true }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      if (once) {
        setHasAnimated(true)
      }
    } else if (!isInView && !once && hasAnimated) {
      controls.start("hidden")
    }
  }, [isInView, controls, once, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
