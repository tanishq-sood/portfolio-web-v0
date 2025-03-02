import { CheckCircle } from "lucide-react"

const timelineEvents = [
  {
    year: "2021",
    event:
      "Began B.Tech journey in Computer Science at LNCT, specializing in IoT, Cybersecurity, and Blockchain Technology",
  },
  {
    year: "2023",
    events: [
      "Team Lead for Smart India Hackathon (SIH) 2023 Finalist Team",
      "Research and Development Intern at REFFTO",
      "Participated in AICTE Idea Labs projects",
    ],
  },
  {
    year: "2024",
    events: [
      "Team Lead for Smart India Hackathon (SIH) 2024 Winning Team",
      "Core Team Member for TEDxLNCT 2024",
      "Contributed to ISRO URSC IRoC 2024",
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Introduction</h3>
              <p className="text-gray-300">
                Hello! I'm Tanishq Sood, a tech enthusiast and problem-solver passionate about creating meaningful
                solutions at the intersection of innovation and real-world challenges. Currently pursuing a B.Tech in
                Computer Science and Engineering with a specialization in IoT, Cybersecurity, and Blockchain Technology
                at LNCT.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What Drives Me</h3>
              <p className="text-gray-300">
                I am deeply inspired by the transformative power of Artificial Intelligence and Machine Learning,
                particularly their practical applications in solving pressing global problems. Data analytics combined
                with core development concepts fascinates me, and I aim to harness this synergy to innovate and deliver
                results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Vision for the Future</h3>
              <p className="text-gray-300">
                I aspire to contribute to the field of AI and ML by exploring practical use cases and advancing research
                that pushes technological boundaries. My ultimate goal is to drive impactful change, bridging technology
                and leadership to create sustainable solutions for a better tomorrow.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">My Journey</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-6 pb-6 border-l-2 border-blue-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <div className="font-bold text-lg mb-2 text-blue-300">{event.year}</div>
                  {Array.isArray(event.events) ? (
                    <ul className="space-y-2">
                      {event.events.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{e}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{event.event}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

