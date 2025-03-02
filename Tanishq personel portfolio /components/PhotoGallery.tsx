"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-01%20at%2010.57.58-aY8rga0WvfNYCKpqbCKGabt633D92U.jpeg",
    alt: "Smart India Hackathon Winners",
    title: "SIH 2024 Victory",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-01%20at%2010.55.13%20%281%29-pG3TC1CXi4iQiJ3hFY1ZWj6y16PeaV.jpeg",
    alt: "TEDxLNCT Team",
    title: "TEDxLNCT 2024",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team_AARAMBH%20Group%20photo-GakxYM1oepUcSnPQEGkTuR483cUQLM.jpeg",
    alt: "Team AARAMBH",
    title: "Team AARAMBH",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-01%20at%2010.57.12-EC2RrBk0zxqlG7p8upXUuZIVbzwMrJ.jpeg",
    alt: "ISRO URSC IRoC",
    title: "ISRO URSC IRoC 2024",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-01%20at%2010.56.36-JlJ1zhn1ove8rAUgc72DTcRGfgRjDc.jpeg",
    alt: "Project Presentation",
    title: "Innovation Showcase",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prototype%20ResQ-mtTvSgighMIWR5ixpNLTXUHpaGJIAL.jpeg",
    alt: "ResQ Prototype",
    title: "ResQ Device",
  },
]

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Photo Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full h-full">
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
                    <p className="text-gray-300 text-sm">{photo.alt}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

