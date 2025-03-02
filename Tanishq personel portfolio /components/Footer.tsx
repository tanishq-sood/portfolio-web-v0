import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#home" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition duration-300">
              About
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition duration-300">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

