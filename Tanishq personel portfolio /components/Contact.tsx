"use client"

import type React from "react"

import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using a service like EmailJS or similar
      // For now, just show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-200">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-200">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-200">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="flex flex-col justify-center items-center space-y-6">
            <a
              href="https://linkedin.com/in/tanishq-sood/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Linkedin className="h-8 w-8 mr-3" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tanishq-sood"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Github className="h-8 w-8 mr-3" />
              GitHub
            </a>
            <a
              href="mailto:tanishqsood.24@gmail.com"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Mail className="h-8 w-8 mr-3" />
              tanishqsood.24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

