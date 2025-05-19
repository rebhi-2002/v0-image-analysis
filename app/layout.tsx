import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import MobileNav from "@/components/mobile-nav"
import CustomCursor from "@/components/custom-cursor"
import FloatingNav from "@/components/floating-nav"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Your Name - React & JavaScript Developer</title>
        <meta name="description" content="Personal portfolio website showcasing React and JavaScript projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                  <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      YourName
                    </span>
                  </a>
                </div>
                <nav className="hidden gap-6 md:flex">
                  <a href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                  <a
                    href="#portfolio"
                    className="text-sm font-medium transition-colors hover:text-primary relative group"
                  >
                    Portfolio
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                  <a href="#about" className="text-sm font-medium transition-colors hover:text-primary relative group">
                    About
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                  <a href="/blog" className="text-sm font-medium transition-colors hover:text-primary relative group">
                    Blog
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium transition-colors hover:text-primary relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </nav>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:inline-block"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <MobileNav />
                </div>
              </div>
            </header>
            <PageTransition>{children}</PageTransition>
            <FloatingNav />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
