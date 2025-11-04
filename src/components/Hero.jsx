import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Hero() {
  return (

    <section id='home' className='bg-white dark:bg-gray-900 w-screen pt-25'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>

        <div className='flex flex-col justify-center p-16 mt-4 text-2xl'>
          <a href='https://www.linkedin.com/in/yashjumde/' className='text-gray-300 hover:text-gray-300 py-4'><FaLinkedin /></a>
          <a href='https://github.com/FiguringToCode' className='text-gray-300 hover:text-gray-300 py-4'><FaGithub /></a>
          <a href='https://github.com/FiguringToCode' className='text-gray-300 hover:text-gray-300 py-4'><FaSquareXTwitter /></a>
        </div>

        <div className=''>
          <h1 className='text-5xl font-bond text-white'>Hello, I'm <br/>
            <span className='text-purple-400'>Yash Jumde</span>
          </h1>
          <h2 className='text-2xl font-semibold mt-5 text-gray-300'>Full Stack Developer</h2>
          <p className='mt-7 text-gray-400'>Passionate full-stack developer crafting intuitive digital experiences with modern technologies.</p>
          <p className='mt-7 text-gray-400'>Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.</p>

          <button className='mt-6 me-5 px-6 py-2 bg-purple-500 rounded text-white hover:bg-purple-800'><Link to='/contact'>Contact Me</Link></button>
          <button className='mt-6 px-6 py-2 bg-purple-500 rounded text-white hover:bg-purple-800'><a target='_blank' href='public\yash_jumde_Resume.pdf'>Resume</a></button>
        </div>
        <img src="public\Screenshot 2025-11-04 131239.png" alt='Developer Illustration' className='w-1/2' />
      </div>
    </section>

  )
}
