import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import TechShowcase from "@/components/tech-showcase"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  React & JavaScript Developer
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building modern web experiences with clean code and thoughtful user interfaces. Passionate about
                  creating performant applications that solve real problems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#portfolio">
                  <Button className="w-full">View My Work</Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="w-full">
                    Contact Me
                  </Button>
                </Link>
                <Link href="/resume.pdf" target="_blank">
                  <Button variant="outline" className="w-full">
                    Download Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer portrait"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A collection of my recent work showcasing my skills in React, JavaScript, and modern web development.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Dashboard"
              description="A comprehensive dashboard for online store management with real-time analytics and inventory tracking."
              image="/placeholder.svg?height=300&width=500"
              technologies={["React", "Redux", "Tailwind CSS", "Chart.js"]}
              demoUrl="https://example.com/demo"
              repoUrl="https://github.com/yourusername/project"
            />
            <ProjectCard
              title="Task Management App"
              description="A Kanban-style task management application with drag-and-drop functionality and team collaboration features."
              image="/placeholder.svg?height=300&width=500"
              technologies={["React", "TypeScript", "Firebase", "Framer Motion"]}
              demoUrl="https://example.com/demo"
              repoUrl="https://github.com/yourusername/project"
            />
            <ProjectCard
              title="Weather Forecast App"
              description="A weather application that provides detailed forecasts, interactive maps, and location-based alerts."
              image="/placeholder.svg?height=300&width=500"
              technologies={["React", "Context API", "OpenWeather API", "Styled Components"]}
              demoUrl="https://example.com/demo"
              repoUrl="https://github.com/yourusername/project"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <div className="mt-4 space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  I'm a passionate frontend developer with 5+ years of experience building modern web applications. I
                  specialize in React and JavaScript, creating responsive and accessible user interfaces that deliver
                  exceptional user experiences.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  With a background in computer science and a keen eye for design, I bridge the gap between
                  functionality and aesthetics. I'm constantly learning new technologies and techniques to stay at the
                  forefront of web development.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
                <div className="pt-4">
                  <Link href="/resume.pdf" target="_blank">
                    <Button>Download Full Resume</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                <SkillBadge name="React" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Redux" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="GraphQL" />
                <SkillBadge name="REST APIs" />
                <SkillBadge name="Git" />
                <SkillBadge name="Responsive Design" />
                <SkillBadge name="UI/UX" />
                <SkillBadge name="Testing (Jest)" />
                <SkillBadge name="Webpack" />
                <SkillBadge name="Vite" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Showcase */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Showcase</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Interactive components demonstrating my React and JavaScript skills.
            </p>
          </div>
          <TechShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
                together or just say hello!
              </p>
              <div className="mt-6 flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
