import React, { useState } from 'react'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'
import '@fontsource/poppins/600.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-purple-400 flex items-center">
            <FaCode />
          </h1>
          <h1 className="text-2xl font-bold text-purple-400">Yash Jumde</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 font-semibold">
            <li><NavLink to="/" className="hover:text-purple-400 transition">Home</NavLink></li>
            <li><NavLink to="/project" className="hover:text-purple-400 transition">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-purple-400 transition">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-6 font-semibold">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Home</NavLink></li>
            <li><NavLink to="/project" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
