import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0F19] border-t border-white/10 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Saleem<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 mt-4 max-w-sm">
              React Developer focused on building modern, scalable, and
              user-friendly web applications.
            </p>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col items-center md:items-start gap-3 text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Pakistan, Peshawar</span>
            </div>
            <p className="text-sm text-gray-500">
              Available for remote & freelance work
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-end gap-6 text-xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/saleemkhan-wed-dev"
              target="_blank"
              className="hover:text-cyan-400 transition"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-cyan-400 transition"
              aria-label="Visit Github profile"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:Saleemsherzad0@gmail.com"
              className="hover:text-cyan-400 transition"
              aria-label="Mail to Saleem khan"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saleem Khan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
