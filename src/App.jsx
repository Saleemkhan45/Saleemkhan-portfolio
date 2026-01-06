import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Particles from "./Components/Particles.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import BackToTop from "./Components/BackToTop.jsx";

import Loader from "./Components/Loader.jsx";
import PageReveal from "./Components/PageReveal.jsx";
import ScrollProgress from "./Components/ScrollProgress.jsx";
import CursorGlow from "./Components/CursorGlow.jsx";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱ loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔹 LOADER (SHOWS FIRST) */}
      <Loader show={loading} />

      {/* 🔹 WEBSITE (AFTER LOADER) */}
      {!loading && (
        <>
          {/* 🔹 TOP SCROLL PROGRESS BAR */}
          <ScrollProgress />

              {/* 🔹 CURSOR GLOW */}
          <CursorGlow />

          {/* 🔹 PAGE REVEAL ANIMATION */}
          <PageReveal>
            
            <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-black dark:text-white transition-colors duration-300">
              <Navbar />
              <Home />
              <Particles />
              <About />
              <Projects />
              <Contact />
              <Footer />
              <BackToTop />
            </div>
          </PageReveal>
        </>
      )}
    </>
  );
};

export default App;
