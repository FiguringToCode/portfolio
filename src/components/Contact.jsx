import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section className="w-full bg-gray-900 py-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-5">
          Let's Connect
        </h2>
        <p className="text-purple-400 mb-12 text-lg sm:text-xl font-medium text-center">
          Let's collaborate on something amazing together
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* GitHub */}
        <div className="w-full sm:w-[350px] p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
          <a
            href="https://github.com/FiguringToCode"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 text-4xl sm:text-5xl flex items-center justify-center gap-4 hover:text-gray-100"
          >
            <FaGithub /> GitHub
          </a>
          <p className="text-purple-400 text-xl sm:text-2xl mt-8">
            Connect on GitHub
          </p>
        </div>

        {/* LinkedIn */}
        <div className="w-full sm:w-[350px] p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
          <a
            href="https://www.linkedin.com/in/yashjumde/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 text-4xl sm:text-5xl flex items-center justify-center gap-4 hover:text-gray-100"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <p className="text-purple-400 text-xl sm:text-2xl mt-8">
            Connect on LinkedIn
          </p>
        </div>

        {/* Gmail */}
        <div className="w-full sm:w-[350px] p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-center cursor-pointer">
          <a href="mailto:marineryash2000@gmail.com" className="text-gray-300 text-4xl sm:text-5xl hover:text-gray-100">
            <p className="flex justify-center gap-5"><SiGmail /> Gmail</p>
            <p className="text-purple-400 text-xl sm:text-xl my-4">
                Send a Mail to marineryash2000@gmail.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
