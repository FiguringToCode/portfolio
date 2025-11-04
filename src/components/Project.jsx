import { FaReact, FaBootstrap, FaNodeJs, } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


export default function Project() {
  const projects = [
    {
      name: "Zeptronics E-commerce App",
      img: "public/Screenshot 2025-11-04 134733.png",
      link: "https://fe-mp-1.vercel.app/",
      description: "A full-stack e-commerce app where you can browse, add, buy different electronic gadgets and appliances. Built with React frontend, Express/Node backend and MongoDB Database"
    },
    {
      name: "Anvaya CRM App",
      img: "public/Generated Image November 04, 2025 - 1_55PM.png",
      link: "https://fe-mp-2.vercel.app/",
      description: "A full-stack CRM app where you can manage, add, edit information about leads and sales agents. Built with React frontend, Express/Node backend and MongoDB Database"
    },
  ];

  return (
    <section id="project" className="w-full bg-gray-900 py-30">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-5xl font-semibold text-center text-white mb-12">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="w-[350px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-56 object-cover"
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-500">
                  {proj.name}
                </h3>
                <p className="text-md font-medium text-white my-7">{proj.description}</p>
                <div className="flex gap-5 text-purple-500 text-xl">
                    <p><FaReact /></p>
                    <p><FaBootstrap /></p>
                    <p><FaNodeJs /></p>
                    <p><SiReactrouter /></p>
                    <p><SiMongodb /></p>
                    <p><SiExpress /></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
