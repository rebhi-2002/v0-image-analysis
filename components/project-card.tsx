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
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
        featured ? "border-primary/50 shadow-md" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        {featured && (
          <div className="absolute top-0 right-0 z-10 bg-gradient-blue-purple text-primary-foreground px-3 py-1 text-xs font-medium">
            Featured
          </div>
        )}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-500 hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="transition-all hover:bg-secondary/80">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="gap-1 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </Link>
        <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="gap-1 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="h-4 w-4" />
            View Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
