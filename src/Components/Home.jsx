import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import profile from '../assets/MeImage.webp'

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0B0F19] flex md:items-center">
      <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I’m{" "}
            <span className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
              Saleem Khan
            </span>
          </h1>

          {/* TYPEWRITER ROLE */}
          <p className="mt-4 text-xl text-gray-300">
            <Typewriter
              words={[
                "React Developer",
                "Frontend Engineer",
                "UI Focused Web Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="mt-6 text-gray-400 max-w-xl">
            I build fast, modern and scalable web applications using React,
            Tailwind CSS and clean UI principles.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            aria-label="View projects">
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition"
            aria-label="Contact me">
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 text-2xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/saleemkhan-wed-dev"
              target="_blank"
              aria-label="LinkedIn icon"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/saleemkhan45"
              target="_blank"
              aria-label="Github icon"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:Saleemsherzad0@gmail.com"
              className="hover:text-cyan-400 transition"
              aria-label="Send email to Saleem Khan"
            >
              <MdEmail />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9, delay: 0.2 }}
              className="flex justify-center order-first md:order-last mt-10 md:mt-0">
  <div className="relative">

    {/* GLOW */}
    <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

    {/* IMAGE */}
    <img
      src={profile}
      alt="Saleem Khan profile picture"
      loading="lazy"
      className="relative 
                 w-48 h-48 
                 sm:w-56 sm:h-56 
                 md:w-72 md:h-72
                 object-cover rounded-full 
                 border-4 border-cyan-400"
    />
  </div>
</motion.div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
             <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
        <span className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></span>
        </div>
         </div>

      </div>
    </section>

    
  );
};

export default Home;
