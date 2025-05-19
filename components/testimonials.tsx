"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations in every way.",
    author: "Jane Smith",
    role: "CEO, TechStart Inc.",
  },
  {
    id: 2,
    content:
      "The attention to detail and technical expertise demonstrated throughout our project was impressive. I highly recommend their services to anyone looking for a skilled React developer.",
    author: "Michael Johnson",
    role: "CTO, InnovateCorp",
  },
  {
    id: 3,
    content:
      "Not only did they build a beautiful website, but they also took the time to explain their process and educate our team. A true professional who cares about their clients.",
    author: "Sarah Williams",
    role: "Marketing Director, GrowthBrand",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Feedback from clients and colleagues I've had the pleasure to work with.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl overflow-hidden py-10">
          <div
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full bg-background shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full bg-background shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -200 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center px-12"
              >
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 text-center">
                    <Quote className="mx-auto mb-6 h-12 w-12 text-primary opacity-20" />
                    <p className="mb-6 text-xl md:text-2xl italic">"{testimonials[current].content}"</p>
                    <div>
                      <p className="font-semibold">{testimonials[current].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
