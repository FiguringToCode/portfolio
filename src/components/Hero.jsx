import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12">
        
        {/* Left content (text + buttons) */}
        <div className="text-center md:text-left w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hello, I'm <br />
            <span className="text-purple-500">Yash Jumde</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Passionate full-stack developer crafting intuitive digital experiences with modern technologies.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-purple-500 rounded text-white hover:bg-purple-700 transition"
            >
              Contact Me
            </Link>
            <a 
              href="/yash_jumde_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-500 rounded text-white hover:bg-purple-700 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img 
            src="/Screenshot 2025-11-04 131239.png"
            alt="Developer Illustration" 
            className="w-3/4 sm:w-2/3 md:w-full max-w-sm md:max-w-md object-contain" 
          />
        </div>

      </div>
    </section>
  )
}
