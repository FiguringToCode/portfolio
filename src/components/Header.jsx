import React from 'react'
import { FaCode } from 'react-icons/fa'
import '@fontsource/poppins/600.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='z-20 w-full bg-gray-900 text-white shadow-md py-7 px-40 fixed top-0 left-0'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <h1 className='text-2xl font-bold text-purple-500 dark:text-purple-300 cursor-pointer d-flex'> <FaCode /></h1>
            <h1 className='text-2xl font-bold text-purple-500 dark:text-purple-300 cursor-pointer d-flex'> Yash Jumde </h1>
        </div>

        <nav className='flex'>
            <ul className='flex space-x-8 font-bold font-lg'>
              <li><NavLink to={`/`} className='text-gray-700 dark:text-gray-300'>Home</NavLink></li>
              <li><NavLink to={`/project`} className='text-gray-700 dark:text-gray-300'>Projects</NavLink></li>
              <li><NavLink to={`/contact`} className='text-gray-700 dark:text-gray-300'>Contact</NavLink></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
