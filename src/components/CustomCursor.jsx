import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: "none", // ⭐ VERY IMPORTANT
        }}
        className="fixed z-[9999] w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Glow */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: "none", // ⭐ VERY IMPORTANT
        }}
        className="fixed z-[9998] w-16 h-16 bg-cyan-400/20 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
