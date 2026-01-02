import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // lg screens

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop]);

  // 👉 Mobile & Tablet pe kuch bhi render nahi hoga
  if (!isDesktop) return null;

  return (
    <>
      {/* Main dot */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: "none",
        }}
        className="fixed z-[9999] w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Glow */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: "none",
        }}
        className="fixed z-[9998] w-16 h-16 bg-cyan-400/20 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
