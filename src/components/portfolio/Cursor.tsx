import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, input, textarea, [role=button]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="hidden md:block pointer-events-none fixed z-[100] rounded-full mix-blend-screen transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 50 : 14,
          height: hover ? 50 : 14,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, oklch(0.78 0.22 300 / 0.7), transparent 70%)",
        }}
      />
      <div
        className="hidden md:block pointer-events-none fixed z-[100] w-1 h-1 rounded-full bg-white"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%,-50%)" }}
      />
    </>
  );
}
