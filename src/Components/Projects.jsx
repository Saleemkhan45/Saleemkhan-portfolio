import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import ShopHub from "../assets/ShopHub.webp";
import SaasFlow from "../assets/SaasFlow.webp";
import DashboardImage from '../assets/DashboardImage.png';

const projects = [
  {
    title: "ShopHub E-commerce Website",
    description:
      "A modern e-commerce web application built with React and Tailwind CSS featuring clean UI, responsive design, and product-focused layout.",
    image: ShopHub,
    live: "https://react-tailwind-e-com-fexr.bolt.host/",
  },
  {
    title: "SaaS Flow Landing Page",
    description:
      "A high-conversion SaaS landing page with modern layout, smooth animations, and strong visual hierarchy for startups.",
    image: SaasFlow,
    live: "https://broad-dream-4205.dev.animaapp.io/?v=1765912255.883126",
  },
  {
    title: "Freelance Dashboard ",
    description:
      "A modern freelancer dashboard built with React and Tailwind CSS to manage projects, track time, visualize earnings, and monitor productivity through a clean UI",
    image: DashboardImage,
    live: "https://freelancer-dashboard-three.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0B0F19] py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Real-world projects showcasing my frontend development and UI skills.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold flex items-center gap-2"
                    aria-label={`View live website for ${project.title}`}
                  >
                    Live Preview <FaExternalLinkAlt />
                  </a>
                  
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
