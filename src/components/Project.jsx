import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiReactrouter, SiExpress, SiMongodb } from "react-icons/si";

export default function Project() {
  const projects = [
    {
      name: "Zeptronics E-commerce App",
      img: "/e-commImg.png",
      link: "https://fe-mp-1.vercel.app/",
      description: "A full-stack e-commerce app where you can browse, add, buy different electronic gadgets and appliances. Built with React frontend, Express/Node backend and MongoDB Database"
    },
    {
      name: "Anvaya CRM App",
      img: "/crmImg.png",
      link: "https://fe-mp-2.vercel.app/",
      description: "A full-stack CRM app where you can manage, add, edit information about leads and sales agents. Built with React frontend, Express/Node backend and MongoDB Database"
    },
  ];

  return (
    <section id="project" className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-10">
          Projects
        </h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-500">
                  {proj.name}
                </h3>
                <p className="text-sm sm:text-md font-medium text-white my-4">{proj.description}</p>
                <div className="flex flex-wrap gap-3 text-purple-500 text-xl">
                  <FaReact />
                  <FaBootstrap />
                  <FaNodeJs />
                  <SiReactrouter />
                  <SiMongodb />
                  <SiExpress />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
