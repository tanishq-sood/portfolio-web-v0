"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ResQ By AARAMBH",
    description:
      "Advanced accident detection and response system leveraging IoT sensors, AI models, and GPS technologies for rapid emergency response.",
    technologies: ["IoT", "AI/ML", "Python", "C++", "YOLO", "ESP32-CAM"],
    github: "https://github.com/tanishq-sood/SAFEGUARD360-Accident-detection-model",
    demo: "https://police-dash.vercel.app/dashboard",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prototype%20ResQ-mtTvSgighMIWR5ixpNLTXUHpaGJIAL.jpeg",
  },
  {
    title: "Autonomous Sample Retrieving Planetary Rover",
    description:
      "ISRO URSC IRoC 2024 finalist project integrating SLAM for autonomous navigation and inverse kinematics for precision robotic arm control.",
    technologies: ["Python", "ROS2", "SLAM", "Robotics", "Computer Vision"],
    github: "#",
    demo: null,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-01%20at%2010.57.12-EC2RrBk0zxqlG7p8upXUuZIVbzwMrJ.jpeg",
  },
  {
    title: "AYUSH Startup Registration Portal",
    description:
      "Streamlined portal for AYUSH sector startup registration featuring blockchain-based authentication and user-friendly interface.",
    technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "Tailwind CSS"],
    github: "https://github.com/tanishq-sood/ayush-dash",
    demo: "https://ayush-dash.vercel.app/login",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "IoT Based Smart Home Automation",
    description:
      "Comprehensive home automation system with smart lighting control, environmental monitoring, and mobile app integration.",
    technologies: ["IoT", "Arduino", "React Native", "Node.js", "MQTT"],
    github: "https://github.com/tanishq-sood/HOME-AUTOMATION-Smart-light-contorl-system",
    demo: null,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 w-full relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <CardHeader className="p-6 relative z-10 -mt-20">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm" className="hover:bg-gray-700/50">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

