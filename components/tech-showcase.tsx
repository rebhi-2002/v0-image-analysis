"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useAnimation, useInView } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState("interactive-chart")
  const [chartData, setChartData] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Array<{ x: number; y: number; size: number; speed: number; color: string }>>([])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })
  const controls = useAnimation()
  const [copied, setCopied] = useState(false)

  const codeSnippet = `import { useState, useEffect } from 'react';

// Custom hook for fetching data with loading and error states
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err instanceof Error ? err : new Error(String(err)));
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}`

  // Generate random data for the chart on component mount
  useEffect(() => {
    const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    setChartData(data)

    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    }))

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Regenerate data when clicking the chart
  const regenerateData = () => {
    const newData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    setChartData(newData)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation for particles
  useEffect(() => {
    if (activeTab !== "animation" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles without setting state
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.y -= particle.speed

        // Reset if off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [activeTab])

  return (
    <div ref={ref}>
      <Tabs defaultValue="interactive-chart" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="interactive-chart">Interactive Chart</TabsTrigger>
          <TabsTrigger value="code-snippet">Code Snippet</TabsTrigger>
          <TabsTrigger value="animation">Animation</TabsTrigger>
        </TabsList>

        <TabsContent value="interactive-chart">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Chart</CardTitle>
              <CardDescription>
                A responsive bar chart built with React. Click on the chart to regenerate data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                className="h-64 w-full cursor-pointer"
                onClick={regenerateData}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                <div className="flex h-full items-end justify-between gap-1">
                  {chartData.map((value, index) => (
                    <motion.div
                      key={index}
                      className="relative flex w-full flex-col items-center"
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-primary to-purple-500 rounded-t-sm"
                        style={{ height: `${value}%` }}
                      ></div>
                      <span className="mt-2 text-xs">{index + 1}</span>
                      <span className="absolute -top-6 text-xs font-medium">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <p className="mt-4 text-center text-sm text-gray-500">Click on the chart to regenerate random data</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code-snippet">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Custom React Hook</CardTitle>
                <CardDescription>
                  A reusable hook for handling API requests with loading and error states.
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                className="transition-all duration-200 hover:bg-primary/20"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy code</span>
              </Button>
            </CardHeader>
            <CardContent>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="relative"
              >
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-30 blur"></div>
                <pre className="relative overflow-x-auto rounded-lg bg-black p-4 text-sm text-gray-100">
                  <code>{codeSnippet}</code>
                </pre>
                {copied && (
                  <div className="absolute right-4 top-4 rounded-md bg-green-500 px-2 py-1 text-xs text-white">
                    Copied!
                  </div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="animation">
          <Card>
            <CardHeader>
              <CardTitle>Animation Demo</CardTitle>
              <CardDescription>Interactive particle animation built with Canvas and React.</CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[300px]">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={controls}
                  variants={{
                    hidden: { scale: 0, rotate: -180 },
                    visible: {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      },
                    },
                  }}
                  className="relative h-40 w-40"
                >
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-b-4 border-t-4 border-primary"></div>
                  <div className="absolute inset-0 animate-spin-reverse-slow rounded-full border-l-4 border-r-4 border-purple-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-background shadow-lg"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      React
                    </span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
