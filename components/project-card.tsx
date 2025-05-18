import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  repoUrl: string
}

export default function ProjectCard({ title, description, image, technologies, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 hover:scale-105"
          fill
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            Demo
          </Button>
        </Link>
        <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1">
            <Github className="h-4 w-4" />
            Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
