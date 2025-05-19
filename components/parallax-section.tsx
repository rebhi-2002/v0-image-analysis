"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className="relative h-[40vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/80 z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0" />

      <motion.div style={{ y, opacity, scale }} className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-blue-purple">Crafting Digital Experiences</h2>
        <p className="text-xl md:text-2xl text-muted-foreground">
          I build modern, responsive, and user-friendly web applications that deliver exceptional user experiences.
        </p>
      </motion.div>
    </section>
  )
}
