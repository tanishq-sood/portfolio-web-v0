import Image from "next/image"

const achievements = [
  {
    title: "SIH 2024 Winner",
    description: "Won the Smart India Hackathon 2024 in the [Your Category] category.",
    image: "/placeholder.svg",
  },
  // Add more achievements as needed
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 flex items-center">
              <Image
                src={achievement.image}
                alt={achievement.title}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

