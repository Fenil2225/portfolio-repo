import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <header
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)] transition-all duration-300 ${
          scrolled ? "glass-strong rounded-2xl mt-2" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#hero" className="font-display font-bold text-lg">
            <span className="text-gradient">&lt;Fenil/&gt;</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-purple after:to-neon-blue hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full neon-border hover:glow-purple transition-all"
          >
            Hire me
          </a>
        </nav>
      </header>
    </>
  );
}
