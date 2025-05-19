"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

interface Skill {
  name: string
  level: number // 1-10
  color: string
}

const skills: Skill[] = [
  { name: "React", level: 9, color: "#61DAFB" },
  { name: "JavaScript", level: 9, color: "#F7DF1E" },
  { name: "TypeScript", level: 8, color: "#3178C6" },
  { name: "Next.js", level: 8, color: "#000000" },
  { name: "Tailwind CSS", level: 9, color: "#06B6D4" },
  { name: "Node.js", level: 7, color: "#339933" },
  { name: "GraphQL", level: 7, color: "#E10098" },
  { name: "Redux", level: 8, color: "#764ABC" },
  { name: "HTML5", level: 9, color: "#E34F26" },
  { name: "CSS3", level: 9, color: "#1572B6" },
  { name: "Framer Motion", level: 8, color: "#0055FF" },
  { name: "Git", level: 8, color: "#F05032" },
  { name: "Webpack", level: 7, color: "#8DD6F9" },
  { name: "Jest", level: 7, color: "#C21325" },
  { name: "RESTful APIs", level: 8, color: "#FF6C37" },
  { name: "Responsive Design", level: 9, color: "#38B2AC" },
  { name: "UI/UX", level: 8, color: "#FF4088" },
  { name: "Figma", level: 7, color: "#F24E1E" },
  { name: "Firebase", level: 7, color: "#FFCA28" },
  { name: "MongoDB", level: 6, color: "#47A248" },
]

export default function SkillsCloud() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="relative h-[400px] w-full overflow-hidden rounded-xl bg-muted/30 p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              },
            },
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: "translate(-50%, -50%)",
            zIndex: skill.level,
          }}
          whileHover={{ scale: 1.2, rotate: [-1, 1, -1, 1, 0], transition: { duration: 0.5 } }}
        >
          <div
            className="whitespace-nowrap rounded-full px-3 py-1.5 font-medium shadow-lg"
            style={{
              backgroundColor: `${skill.color}20`,
              color: skill.color,
              fontSize: `${skill.level * 0.15 + 0.8}rem`,
            }}
          >
            {skill.name}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
