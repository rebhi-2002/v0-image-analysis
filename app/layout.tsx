import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

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
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                  <a href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold">YourName</span>
                  </a>
                </div>
                <nav className="hidden gap-6 md:flex">
                  <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </a>
                  <a href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
                    Portfolio
                  </a>
                  <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </a>
                  <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </a>
                </nav>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:inline-block"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:hidden">
                    Menu
                  </button>
                </div>
              </div>
            </header>
            {children}
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
