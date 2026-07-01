import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiReactrouter, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { ImGithub } from "react-icons/im";

export default function Project() {
  const projects = [
    {
      name: 'AI Doctor Consultant App',
      img: "/ai-doctor-img.png",
      link: "https://ai-doctor-client.vercel.app/",
      description: "AI Doctor Consultant is a full-stack AI-powered symptom checker that lets users describe their symptoms, age, and gender, then receive a structured preliminary health assessment via a language model.",
      githubRepoFE: "https://github.com/FiguringToCode/ai_doctor_client.git",
      githubRepoBE: "https://github.com/FiguringToCode/ai_doctor_server.git",
      demoLink: "https://drive.google.com/file/d/10J4Xx4ngq3XPnAqHvtwYTf-Ke7ZzWxHm/view?usp=sharing"
    },
    {
      name: 'Kavios Pix Image Management App',
      img: "/kavios-pixs-img.webp",
      link: "https://kavios-pix-client.vercel.app/",
      description: "An API-based image management system similar to Google Photos with authentication through Google Auth. Users can create albums, share them with others via email, and upload images with various metadata.",
      githubRepoFE: "https://github.com/FiguringToCode/KaviosPix-client",
      githubRepoBE: "https://github.com/FiguringToCode/KaviosPix-server",
      demoLink: "https://drive.google.com/file/d/10J4Xx4ngq3XPnAqHvtwYTf-Ke7ZzWxHm/view?usp=sharing"
    },
    {
      name: "Zeptronics E-commerce App",
      img: "/e-commImg.png",
      link: "https://fe-mp-1.vercel.app/",
      description: "A full-stack e-commerce app where you can browse, add, buy different electronic gadgets and appliances. Built with React frontend, Express/Node backend and MongoDB Database",
      githubRepoFE: "https://github.com/FiguringToCode/FE-MP1.git",
      githubRepoBE: "https://github.com/FiguringToCode/BE-MP1.git",
      demoLink: "https://www.loom.com/share/3b01efccd3734b15aa9c1520b8244cce"
    },
    {
      name: "Anvaya CRM App",
      img: "/crmImg.png",
      link: "https://fe-mp-2.vercel.app/",
      description: "A full-stack CRM app where you can manage, add, edit information about leads and sales agents. Built with React frontend, Express/Node backend and MongoDB Database",
      githubRepoFE: "https://github.com/FiguringToCode/FE-MP2",
      githubRepoBE: "https://github.com/FiguringToCode/BE-MP2",
      demoLink: "https://www.loom.com/share/88a62a7898044a52bf592469595f8cf1"
    },
    {
      name: "Workasana Task Management and Team Collaboration App",
      img: "/person-using-ai-tool-job-800x500.jpg",
      link: "https://frontend-workasana-eta.vercel.app/",
      description: "A full stack Task Management app where you can add, edit and delete tasks/projects along sign-up and login feature. Built with MERN stack.",
      githubRepoFE: "https://github.com/FiguringToCode/frontend-workasana.git",
      githubRepoBE: "https://github.com/FiguringToCode/backend-workasana.git",
      demoLink: "https://www.loom.com/share/c189fc7cefa1486aa4f2a6a5100202a2"
    },
    {
      name: 'Chat Application',
      img: "/in-app-chat-blog-cover-image.png",
      link: "https://chat-app-frontend-six-lac.vercel.app/",
      description: "A real-time chat application where users can send messages in real-time. Bulit with MERN stack along with websockets.",
      githubRepoFE: "https://github.com/FiguringToCode/chat-app-frontend.git",
      githubRepoBE: "https://github.com/FiguringToCode/chat-app-backend.git",
      demoLink: "https://www.loom.com/share/e499a0d2e1ce49098251d813b26222b1",
    },
  ];

  return (
    <section id="project" className="w-full bg-gray-900 py-2">
      <div className="container mx-auto px-4 sm:px-6 md:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mt-4 mb-10">
          Projects
        </h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mb-40">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img src={proj.img} alt={proj.name} className="w-full h-48 sm:h-56 object-cover"/>
                <div className="p-4">
                  
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold text-purple-500 hover:text-violet-300">
                    {proj.name}
                    </h3>
                  </a>    
                  
                  <p className="text-sm sm:text-md font-medium text-white my-4">{proj.description}</p>
                  
                  <div className="flex gap-3 items-center my-5">
                    <a href={proj.githubRepoFE} target="_blank" className=" text-purple-500 hover:text-violet-300 m-0"><ImGithub size={20} /></a><br />
                    <a href={proj.githubRepoBE} target="_blank" className=" text-purple-500 hover:text-violet-300"><BiLogoGit size={20} /></a><br />
                    <a href={proj.demoLink} target="_blank" className="text-lg text-purple-500 hover:text-violet-300">Code / Live</a>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-purple-500 text-md mt-5">
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


        <div className="overflow-hidden relative w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-10">
            Tech Stack
            </h2>
            <div className="flex animate-scroll space-x-6 w-max">
              <img src="/reactjs-benefits.jpg" alt="reactLogo" className="h-32 w-auto object-contain" />
              <img src="/what-is-bootstrap.webp" alt="bootstrap" className="h-32 w-auto object-contain" />
              <img src="/Node_js_Architecture_A_Comprehensive_Guide_1_af37a73e1e.webp" alt="nodeJs_Logo" className="h-32 w-auto object-contain" />
              <img src="/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg" alt="mongoDB_Logo" className="h-32 w-auto object-contain" />
              <img src="/expressjs.png" alt="express_Logo" className="h-32 w-auto object-contain" />
              <img src="/1_3IcLSFuT8PQg4cUBaRXH1A.png" alt="express_Logo" className="h-32 w-auto object-contain" />
              <img src="/10b88c68-typescript-logo.png" alt="express_Logo" className="h-32 w-auto object-contain" />
              {/* Duplicate for continuous loop */}
              <img src="/reactjs-benefits.jpg" alt="reactLogo" className="h-32 w-auto object-contain" />
              <img src="/what-is-bootstrap.webp" alt="bootstrap" className="h-32 w-auto object-contain" />
              <img src="/Node_js_Architecture_A_Comprehensive_Guide_1_af37a73e1e.webp" alt="nodeJs_Logo" className="h-32 w-auto object-contain" />
              <img src="/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg" alt="mongoDB_Logo" className="h-32 w-auto object-contain" />
              <img src="/expressjs.png" alt="express_Logo" className="h-32 w-auto object-contain" />
              <img src="/1_3IcLSFuT8PQg4cUBaRXH1A.png" alt="express_Logo" className="h-32 w-auto object-contain" />
              <img src="/10b88c68-typescript-logo.png" alt="express_Logo" className="h-32 w-auto object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
}
    