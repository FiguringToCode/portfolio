import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact () {
    return (
        <>
            <section className="w-full bg-gray-900 pb-30 pt-30 h-screen">
                
                <div className="container mx-auto px-6 md:px-16">
                    <h2 className="text-5xl font-semibold text-center text-white mb-5">
                        Let's Connect
                    </h2>
                    <p className="text-purple-400 mb-12 text-xl font-medium text-center">Let's collaborate on something amazing together</p>
                </div>

                <div className="container mx-auto md:px-16 flex justify-center gap-10">
                    <div className="w-[400px] p-10 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
                        <a href='https://github.com/FiguringToCode' className='text-gray-300 text-5xl hover:text-gray-300 flex gap-5 justify-center'>
                            <FaGithub /> GitHub
                        </a>
                        <p className="text-purple-400 text-2xl my-5">Follow on GitHub</p>
                    </div>
                    <div className="w-[400px] p-10 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
                        <a href='https://www.linkedin.com/in/yashjumde/' className='text-gray-300 text-5xl hover:text-gray-300 flex gap-5 justify-center'>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <p className="text-purple-400 text-2xl my-5">Follow on LinkedIn</p>
                    </div>
                    <div className="w-[400px] p-10 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
                        <a href='https://github.com/FiguringToCode' className='text-gray-300 text-5xl hover:text-gray-300 flex gap-5 justify-center'>
                            <SiGmail /> Gmail
                        </a>
                        <p className="text-purple-400 text-2xl my-5">Send a Mail</p>
                    </div>
                </div>
                

            </section>
        </>
    )
}