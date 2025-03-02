"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Database, Server, Globe, Terminal, GitGraphIcon as Git, Monitor } from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Terminal },
      { name: "C++", icon: Code2 },
      { name: "Java", icon: Terminal },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Monitor },
    ],
  },
  {
    category: "Technologies & Tools",
    items: [
      { name: "Git", icon: Git },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Server },
    ],
  },
  {
    category: "Specialized Skills",
    items: [
      { name: "AI/ML", icon: Brain },
      { name: "IoT", icon: Monitor },
      { name: "Robotics", icon: Terminal },
      { name: "Blockchain", icon: Database },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <skill.icon className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

