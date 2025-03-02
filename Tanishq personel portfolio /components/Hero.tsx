"use client"

import { useState, useEffect } from "react"
import { FileText, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Hero3D from "./Hero3D"

const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "DSA Enthusiast"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none"
      />
      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Tanishq Sood
              </span>
            </h1>
            <div className="h-[40px] sm:h-[60px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-300"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
            >
              <a
                href="https://drive.google.com/file/d/1S0kXWMfUdISAW-cv031Z6_IYkt19u3sr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" /> View Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <Link href="https://github.com/tanishq-sood" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 h-14 w-14">
                <Github className="h-8 w-8" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/tanishq-sood/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 h-14 w-14">
                <Linkedin className="h-8 w-8" />
              </Button>
            </Link>
            <Link href="https://x.com/TanishqSood_24" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50 h-14 w-14">
                <Twitter className="h-8 w-8" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  )
}

