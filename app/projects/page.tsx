import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for online store management with real-time analytics and inventory tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Weather Forecast App",
    description: "A weather application that provides detailed forecasts, interactive maps, and location-based alerts.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Context API", "OpenWeather API", "Styled Components"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A finance management application that helps users track expenses, set budgets, and visualize spending habits.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MongoDB", "Chart.js", "Auth0"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "A community-driven platform for sharing and discovering recipes with social features and personalized recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Real-time Chat Application",
    description: "A messaging application with real-time updates, file sharing, and user presence indicators.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Socket.io", "Firebase", "Material UI"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-first application for tracking workouts, setting fitness goals, and monitoring progress over time.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Content Management System",
    description: "A custom CMS built for content creators with a focus on ease of use and flexibility.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    title: "E-learning Platform",
    description:
      "An educational platform with course management, student progress tracking, and interactive learning materials.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/project",
  },
]

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                A collection of my work showcasing my skills in React, JavaScript, and modern web development.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                All
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                React
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Next.js
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                TypeScript
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Node.js
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Firebase
              </Badge>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  repoUrl={project.repoUrl}
                  featured={project.featured}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
