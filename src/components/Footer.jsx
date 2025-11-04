import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-screen h-32 bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white text-lg">
        <p>&copy; Create By Yash Jumde | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/yashjumde/" className="hover:text-gray-300"><FaLinkedin /></a>
          <a href="https://github.com/FiguringToCode" className="hover:text-gray-300"><FaGithub /></a>
          <a href="https://www.marineryash2000@gmail.com" className="hover:text-gray-300"><SiGmail /></a>
        </div>
      </div>
    </footer>
  )
}
