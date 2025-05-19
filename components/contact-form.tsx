"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setIsSuccess(true)

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        form.reset()
      }, 3000)

      setIsSubmitting(false)
    }, 1500)

    // In a real application, you would send the form data to a server
    // Example with EmailJS:
    // emailjs.send('service_id', 'template_id', values, 'user_id')
    //   .then(() => {
    //     toast({
    //       title: "Message sent!",
    //       description: "Thank you for reaching out. I'll get back to you soon.",
    //     })
    //     setIsSuccess(true)
    //     setTimeout(() => {
    //       setIsSuccess(false)
    //       form.reset()
    //     }, 3000)
    //   })
    //   .catch((error) => {
    //     toast({
    //       title: "Error",
    //       description: "There was an error sending your message. Please try again.",
    //       variant: "destructive",
    //     })
    //     console.error(error)
    //   })
    //   .finally(() => {
    //     setIsSubmitting(false)
    //   })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className="transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is this regarding?"
                  {...field}
                  className="transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  className="min-h-[120px] resize-y transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting || isSuccess}>
          <span
            className={`flex items-center justify-center transition-all duration-300 ${isSuccess ? "opacity-0" : "opacity-100"}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </span>
          {isSuccess && (
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Message Sent!
            </motion.span>
          )}
        </Button>
      </form>
    </Form>
  )
}
