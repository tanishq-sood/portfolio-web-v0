import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Research and Development Intern",
    company: "REFFTO",
    duration: "April 2023 - June 2023",
    location: "Bhopal, India",
    description: [
      "Collaborated with a team to develop innovative solutions, leveraging programming skills in Python and C++.",
      "Contributed to project design and implementation, enhancing product features based on user feedback.",
      "Assisted in troubleshooting and debugging processes to ensure high-quality deliverables.",
    ],
  },
  {
    title: "Speaker Outreach and Promotions Head",
    company: "TEDxLNCT",
    duration: "February 2024 - Present",
    location: "Bhopal, India",
    description: [
      "Led speaker outreach and promotional efforts, increasing event participation and engagement.",
      "Managed technical logistics for TEDx events, ensuring seamless execution.",
    ],
  },
  {
    title: "Marketing & Outreach Head",
    company: "Go Global Club, LNCT",
    duration: "April 2024 - Present",
    location: "Bhopal, India",
    description: [
      "Orchestrated marketing campaigns to promote global initiatives among students.",
      "Enhanced club visibility through strategic social media and partnerships.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  <span className="font-semibold text-blue-400">{exp.company}</span>
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

