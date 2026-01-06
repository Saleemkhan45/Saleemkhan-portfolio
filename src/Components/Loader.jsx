import { motion, AnimatePresence } from "framer-motion";

const name = "Saleem Khan";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const Loader = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow background */}
          <div className="absolute w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>

          {/* Name animation */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative flex text-4xl md:text-6xl font-extrabold tracking-wide"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
