import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

const blogPosts = [
  {
    id: "mastering-react-hooks",
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt: "Learn how to leverage the power of React Hooks to write cleaner, more efficient functional components.",
    date: "April 1, 2023",
    tags: ["React", "JavaScript", "Web Development"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Discover how to effectively use TypeScript with React to create type-safe, maintainable applications.",
    date: "March 15, 2023",
    tags: ["TypeScript", "React", "Best Practices"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "nextjs-app-router",
    title: "Migrating to Next.js App Router: A Step-by-Step Guide",
    excerpt: "Learn how to migrate your Next.js application from Pages Router to the new App Router architecture.",
    date: "February 20, 2023",
    tags: ["Next.js", "React", "Web Development"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "tailwind-css-tips",
    title: "10 Tailwind CSS Tips to Improve Your Workflow",
    excerpt: "Discover practical tips and tricks to make your Tailwind CSS development faster and more efficient.",
    date: "January 10, 2023",
    tags: ["CSS", "Tailwind", "Frontend"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "state-management",
    title: "Modern State Management in React Applications",
    excerpt: "Explore different state management solutions for React and when to use each one.",
    date: "December 5, 2022",
    tags: ["React", "State Management", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "web-performance",
    title: "Web Performance Optimization Techniques",
    excerpt: "Learn how to optimize your web applications for better performance and user experience.",
    date: "November 15, 2022",
    tags: ["Performance", "Web Development", "Optimization"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog & Articles</h1>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Thoughts, tutorials, and insights about web development and technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    All
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    React
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Next.js
                  </Badge>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.id}`} className="group">
                    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.date}>{post.date}</time>
                        </div>
                        <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
                        <div className="flex items-center text-primary">
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
