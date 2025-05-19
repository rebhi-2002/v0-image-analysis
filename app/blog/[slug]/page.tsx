"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Share2, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

// This would typically come from a CMS or API
const blogPosts = {
  "mastering-react-hooks": {
    title: "Mastering React Hooks: A Comprehensive Guide",
    date: "April 1, 2023",
    author: "Your Name",
    tags: ["React", "JavaScript", "Web Development"],
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They've revolutionized how we write React components, making code more reusable and easier to understand.</p>
      
      <h2>Why Hooks?</h2>
      <p>Before Hooks, if you wanted to add state to a functional component, you had to convert it to a class component. This led to complex components that were difficult to understand and reuse.</p>
      
      <p>Hooks solve this problem by allowing you to "hook into" React state and lifecycle features directly from function components. This means you can use state and other React features without writing a class.</p>
      
      <h2>The Basic Hooks</h2>
      
      <h3>useState</h3>
      <p>The useState hook lets you add state to functional components. It returns a stateful value and a function to update it.</p>
      
      <pre><code>
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      </code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      
      <pre><code>
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);
        
        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
          // Update the document title using the browser API
          document.title = \`You clicked \${count} times\`;
        });
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      </code></pre>
      
      <h3>useContext</h3>
      <p>The useContext hook accepts a context object and returns the current context value for that context.</p>
      
      <pre><code>
      import React, { useContext } from 'react';
      
      const ThemeContext = React.createContext('light');
      
      function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button className={theme}>I am styled by theme context!</button>;
      }
      </code></pre>
      
      <h2>Advanced Hooks</h2>
      
      <h3>useReducer</h3>
      <p>The useReducer hook is an alternative to useState. It is preferable when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
      
      <h3>useMemo</h3>
      <p>The useMemo hook returns a memoized value. It only recomputes the memoized value when one of the dependencies has changed.</p>
      
      <h3>useCallback</h3>
      <p>The useCallback hook returns a memoized callback. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
      
      <h2>Custom Hooks</h2>
      <p>One of the most powerful features of Hooks is the ability to create your own. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.</p>
      
      <pre><code>
      import { useState, useEffect } from 'react';

      function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        return width;
      }
      
      function MyComponent() {
        const width = useWindowWidth();
        return <div>Window width: {width}</div>;
      }
      </code></pre>
      
      <h2>Rules of Hooks</h2>
      <p>There are two important rules to follow when using Hooks:</p>
      
      <ol>
        <li>Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.</li>
        <li>Only call Hooks from React function components or custom Hooks. Don't call Hooks from regular JavaScript functions.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>React Hooks have transformed how we write React components, making our code more reusable, easier to understand, and simpler to test. By mastering Hooks, you'll be able to write more efficient and maintainable React applications.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog">
          <Button className="mt-6">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted/30 py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                    <Image src="/placeholder.svg?height=40&width=40" alt={post.author} width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="relative mb-10 aspect-video overflow-hidden rounded-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" fill priority />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <article className="prose prose-gray max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12 border-t pt-6">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <p className="text-sm text-muted-foreground">Share this article</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share link</span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Related Articles</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <Link href="/blog/typescript-best-practices" className="group">
                    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Blog post thumbnail"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-1 text-lg font-bold group-hover:text-primary transition-colors">
                          TypeScript Best Practices for React Developers
                        </h3>
                      </div>
                    </div>
                  </Link>
                  <Link href="/blog/nextjs-app-router" className="group">
                    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Blog post thumbnail"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-1 text-lg font-bold group-hover:text-primary transition-colors">
                          Migrating to Next.js App Router: A Step-by-Step Guide
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
