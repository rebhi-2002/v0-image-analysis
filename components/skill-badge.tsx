"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Badge
        variant="outline"
        className="px-3 py-1 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
      >
        {name}
      </Badge>
    </motion.div>
  )
}
