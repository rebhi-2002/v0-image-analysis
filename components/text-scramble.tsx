"use client"

import { useState, useEffect, useRef } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [output, setOutput] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const chars = "!<>-_\\/[]{}—=+*^?#________"
  const observerRef = useRef<IntersectionObserver | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scramble = async () => {
    setIsScrambling(true)
    let iteration = 0
    const maxIterations = 15

    const interval = setInterval(() => {
      setOutput(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsScrambling(false)
      }

      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    if (!containerRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isScrambling) {
          scramble()
        }
      },
      { threshold: 0.5 },
    )

    observerRef.current.observe(containerRef.current)

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current)
      }
    }
  }, [text])

  return (
    <div ref={containerRef} className={className}>
      {output}
    </div>
  )
}
