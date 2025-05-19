"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Skill {
  name: string
  level: number // 1-10
  category: "frontend" | "backend" | "tools" | "design"
  icon?: string
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 9, category: "frontend" },
  { name: "JavaScript", level: 9, category: "frontend" },
  { name: "TypeScript", level: 8, category: "frontend" },
  { name: "Next.js", level: 8, category: "frontend" },
  { name: "HTML5", level: 9, category: "frontend" },
  { name: "CSS3", level: 9, category: "frontend" },
  { name: "Tailwind CSS", level: 9, category: "frontend" },
  { name: "Redux", level: 8, category: "frontend" },
  { name: "Framer Motion", level: 8, category: "frontend" },
  { name: "Responsive Design", level: 9, category: "frontend" },

  // Backend
  { name: "Node.js", level: 7, category: "backend" },
  { name: "Express", level: 7, category: "backend" },
  { name: "GraphQL", level: 7, category: "backend" },
  { name: "RESTful APIs", level: 8, category: "backend" },
  { name: "MongoDB", level: 6, category: "backend" },
  { name: "Firebase", level: 7, category: "backend" },
  { name: "PostgreSQL", level: 6, category: "backend" },

  // Tools
  { name: "Git", level: 8, category: "tools" },
  { name: "Webpack", level: 7, category: "tools" },
  { name: "Jest", level: 7, category: "tools" },
  { name: "GitHub", level: 8, category: "tools" },
  { name: "VS Code", level: 9, category: "tools" },
  { name: "npm/yarn", level: 8, category: "tools" },

  // Design
  { name: "UI/UX", level: 8, category: "design" },
  { name: "Figma", level: 7, category: "design" },
  { name: "Adobe XD", level: 6, category: "design" },
  { name: "Responsive Design", level: 9, category: "design" },
]

export default function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    tools: "Tools & Workflow",
    design: "Design & UI/UX",
  }

  const getSkillsByCategory = (category: "frontend" | "backend" | "tools" | "design") => {
    return skills.filter((skill) => skill.category === category)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div ref={ref} className="space-y-8">
      {Object.entries(categories).map(([key, title]) => (
        <div key={key} className="space-y-4">
          <h4 className="text-xl font-semibold text-gradient-blue-purple inline-block">{title}</h4>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {getSkillsByCategory(key as "frontend" | "backend" | "tools" | "design").map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <div className="relative overflow-hidden rounded-lg border bg-card p-3 transition-all hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full ${
                            i < Math.round(skill.level / 2) ? "bg-primary" : "bg-primary/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-blue-purple"
                      style={{ width: `${skill.level * 10}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
