import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle =
        window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (
          scrollMiddle >= top &&
          scrollMiddle < top + height
        ) {
          setActive(section);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass container */}
      <div  className="backdrop-blur-xl bg-white/10 border-b border-white/20 pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl font-bold
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent"
          >
            Saleem<span className="text-white">.</span>dev
          </motion.h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 relative">
            {sections.map((item) => (
              <li key={item} className="relative">
                <a
                  href={`#${item}`}
                  className={`capitalize text-sm tracking-wide transition ${
                    active === item
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>

                {/* Underline */}
                {active === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-cyan-400 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-4">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className={`capitalize text-sm ${
                    active === item
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
