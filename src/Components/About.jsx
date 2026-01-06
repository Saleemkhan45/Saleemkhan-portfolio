import { motion } from "framer-motion";
import {
  FaReact,
  FaSearch,
  FaBullhorn,
  FaPenNib,
  FaUserTie,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGreensock } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GSAP Animation", icon: <SiGreensock className="text-green-400" /> },
  { name: "Digital Marketing", icon: <FaBullhorn className="text-pink-400" /> },
  { name: "SEO", icon: <FaSearch className="text-purple-400" /> },
  { name: "Creative Writer", icon: <FaPenNib className="text-orange-400" /> },
  { name: "Freelancer", icon: <FaUserTie className="text-emerald-400" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111827] py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Who I am and what I bring to the table
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT: ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I’m <span className="text-white font-semibold">Saleem Khan</span>,
              a passionate <span className="text-cyan-400">React Developer</span>{" "}
              focused on building modern, fast, and scalable web applications.
              I care deeply about clean UI, smooth animations, and user
              experience.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Along with frontend development, I bring strong experience in
              <span className="text-white"> Digital Marketing</span>,
              <span className="text-white"> SEO</span>, and
              <span className="text-white"> Creative Writing</span>, which helps
              me build products that are not only beautiful but also effective
              and conversion-focused.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a freelancer, I understand client needs, deadlines, and real-
              world problem solving — not just code.
            </p>
          </motion.div>

          {/* RIGHT: SKILLS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition">
                  {skill.icon}
                </div>
                <p className="text-gray-200 text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
