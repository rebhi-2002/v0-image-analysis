import { ScrollReveal } from "@/components/scroll-reveal"

const timelineItems = [
  {
    year: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Lead developer for enterprise SaaS applications using React, TypeScript, and Next.js.",
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed responsive web applications and e-commerce platforms using React and Redux.",
  },
  {
    year: "2018 - 2020",
    title: "Web Developer",
    company: "Creative Agency",
    description: "Created interactive websites and web applications for various clients across different industries.",
  },
]

export default function Timeline() {
  return (
    <div className="mt-6 space-y-8">
      {timelineItems.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
            <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-3 items-center justify-center rounded-full border border-muted bg-background">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-1">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
