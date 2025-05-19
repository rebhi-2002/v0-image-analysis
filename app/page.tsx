import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  ExternalLink,
  Calendar,
  ChevronRight,
  Code,
  Briefcase,
  Users,
  Award,
  BookOpen,
  Coffee,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import TechShowcase from "@/components/tech-showcase"
import Testimonials from "@/components/testimonials"
import Timeline from "@/components/timeline"
import ParallaxSection from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import Hero3D from "@/components/hero-3d"
import SkillsGrid from "@/components/skills-grid"
import MagneticButton from "@/components/magnetic-button"
import TextScramble from "@/components/text-scramble"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with 3D background */}
      <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <ScrollReveal>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                    Available for hire
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <TextScramble text="React & JavaScript Developer" className="text-gradient-blue-purple" />
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Building modern web experiences with clean code and thoughtful user interfaces. Passionate about
                    creating performant applications that solve real problems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <MagneticButton href="#portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
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
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/50">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Developer portrait"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section with improved design */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg bg-card shadow-sm border transition-all hover:shadow-md hover:border-primary/20">
                <div className="mb-2 rounded-full bg-primary/10 p-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary md:text-4xl">5+</span>
                <span className="text-sm text-muted-foreground md:text-base">Years Experience</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg bg-card shadow-sm border transition-all hover:shadow-md hover:border-primary/20">
                <div className="mb-2 rounded-full bg-primary/10 p-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary md:text-4xl">50+</span>
                <span className="text-sm text-muted-foreground md:text-base">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg bg-card shadow-sm border transition-all hover:shadow-md hover:border-primary/20">
                <div className="mb-2 rounded-full bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary md:text-4xl">20+</span>
                <span className="text-sm text-muted-foreground md:text-base">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg bg-card shadow-sm border transition-all hover:shadow-md hover:border-primary/20">
                <div className="mb-2 rounded-full bg-primary/10 p-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary md:text-4xl">15+</span>
                <span className="text-sm text-muted-foreground md:text-base">Open Source Contributions</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section - New section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Services
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Offer</h2>
              <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Specialized services tailored to meet your project needs with expertise and precision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-blue-purple text-white">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Frontend Development</h3>
                  <p className="mb-4 text-muted-foreground">
                    Building responsive, accessible, and performant user interfaces using modern frameworks and best
                    practices.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>React & Next.js Applications</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Responsive Web Design</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Interactive UI Components</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance Optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-blue-teal text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Web Application Development</h3>
                  <p className="mb-4 text-muted-foreground">
                    Creating full-stack web applications with robust backends and intuitive frontends.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Full-Stack JavaScript Applications</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>RESTful API Development</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Database Design & Integration</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Authentication & Authorization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-purple-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">UI/UX Consultation</h3>
                  <p className="mb-4 text-muted-foreground">
                    Providing expert advice on user interface design and user experience optimization.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>User Interface Audits</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>UX Improvement Recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Accessibility Compliance</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      <span>Design System Implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section with enhanced animations */}
      <section id="portfolio" className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Portfolio
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A collection of my recent work showcasing my skills in React, JavaScript, and modern web development.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <ProjectCard
                title="E-commerce Dashboard"
                description="A comprehensive dashboard for online store management with real-time analytics and inventory tracking."
                image="/placeholder.svg?height=300&width=500"
                technologies={["React", "Redux", "Tailwind CSS", "Chart.js"]}
                demoUrl="https://example.com/demo"
                repoUrl="https://github.com/yourusername/project"
                featured={true}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ProjectCard
                title="Task Management App"
                description="A Kanban-style task management application with drag-and-drop functionality and team collaboration features."
                image="/placeholder.svg?height=300&width=500"
                technologies={["React", "TypeScript", "Firebase", "Framer Motion"]}
                demoUrl="https://example.com/demo"
                repoUrl="https://github.com/yourusername/project"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ProjectCard
                title="Weather Forecast App"
                description="A weather application that provides detailed forecasts, interactive maps, and location-based alerts."
                image="/placeholder.svg?height=300&width=500"
                technologies={["React", "Context API", "OpenWeather API", "Styled Components"]}
                demoUrl="https://example.com/demo"
                repoUrl="https://github.com/yourusername/project"
              />
            </ScrollReveal>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/projects">
              <MagneticButton variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection />

      {/* About Section with enhanced content */}
      <section id="about" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  About Me
                </span>
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
                    My approach to development focuses on creating clean, maintainable code that scales well and
                    performs efficiently. I believe in the power of well-designed systems and the importance of
                    user-centered design.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                    projects. I'm also passionate about mentoring junior developers and sharing knowledge with the
                    community.
                  </p>

                  {/* Personal interests section */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-xl font-bold mb-4">When I'm Not Coding</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Reading</h4>
                          <p className="text-sm text-muted-foreground">Tech books & sci-fi novels</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Coffee className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Coffee</h4>
                          <p className="text-sm text-muted-foreground">Exploring local cafés</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/resume.pdf" target="_blank">
                      <MagneticButton>
                        Download Full Resume
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <SkillsGrid />

                <h3 className="mt-10 text-2xl font-bold mb-6">Experience Timeline</h3>
                <Timeline />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Technical Showcase with enhanced animations */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Showcase
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Showcase</h2>
              <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Interactive components demonstrating my React and JavaScript skills.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TechShowcase />
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Blog
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
              <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Thoughts, tutorials, and insights about web development and technology.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Link href="/blog/mastering-react-hooks" className="group">
                <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog post thumbnail"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100">
                      <span className="text-sm">Read article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2023-04-01">April 1, 2023</time>
                    </div>
                    <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">
                      Mastering React Hooks: A Comprehensive Guide
                    </h3>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">
                      Learn how to leverage the power of React Hooks to write cleaner, more efficient functional
                      components.
                    </p>
                    <div className="mt-4 flex items-center text-primary">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/blog/typescript-best-practices" className="group">
                <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog post thumbnail"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100">
                      <span className="text-sm">Read article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2023-03-15">March 15, 2023</time>
                    </div>
                    <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">
                      TypeScript Best Practices for React Developers
                    </h3>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">
                      Discover how to effectively use TypeScript with React to create type-safe, maintainable
                      applications.
                    </p>
                    <div className="mt-4 flex items-center text-primary">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link href="/blog/nextjs-app-router" className="group">
                <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Blog post thumbnail"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all group-hover:bottom-0 group-hover:opacity-100">
                      <span className="text-sm">Read article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2023-02-20">February 20, 2023</time>
                    </div>
                    <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">
                      Migrating to Next.js App Router: A Step-by-Step Guide
                    </h3>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">
                      Learn how to migrate your Next.js application from Pages Router to the new App Router
                      architecture.
                    </p>
                    <div className="mt-4 flex items-center text-primary">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/blog">
              <MagneticButton variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I'm currently available for freelance work and exciting opportunities. Let's build something amazing
                together!
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton href="#contact">
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </MagneticButton>
                <Link href="/projects">
                  <Button variant="outline">View My Work</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section with enhanced design */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Contact
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
                together or just say hello!
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
                <div className="mt-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Availability</p>
                      <p className="font-medium">Monday - Friday, 9AM - 5PM EST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold">Connect with me</h4>
                  <div className="mt-4 flex space-x-4">
                    <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer with enhanced design */}
      <footer className="border-t bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gradient-blue-purple">YourName</span>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Building modern web experiences with clean code and thoughtful user interfaces.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/resume.pdf" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Subscribe to my newsletter for the latest articles and updates.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700"
                  required
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
