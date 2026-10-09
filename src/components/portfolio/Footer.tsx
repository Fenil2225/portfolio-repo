export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="text-gradient font-display font-bold">&lt;Fenil/&gt;</span>
          <span className="ml-2">© {new Date().getFullYear()} — Crafted with caffeine.</span>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
