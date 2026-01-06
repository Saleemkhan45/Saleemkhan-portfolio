import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window) return;

    const glow = document.getElementById("cursor-glow");

    let mouseX = 0;
    let mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (glow) {
        glow.style.transform = `translate(${mouseX - 150}px, ${mouseY - 150}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed top-0 left-0 z-30
      w-[300px] h-[300px] rounded-full
      bg-cyan-400/20 blur-[120px]
      transition-opacity duration-300"
    />
  );
};

export default CursorGlow;
