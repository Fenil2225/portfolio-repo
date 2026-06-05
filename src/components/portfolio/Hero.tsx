import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Sparkles } from "lucide-react";
import { Particles } from "./Particles";

const roles = ["Creative Developer", "Problem Solver", "Tech Enthusiast"];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % roles.length);
        return;
      }
      setText(current.slice(0, text.length + (del ? -1 : 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient font-mono">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-neon-purple ml-1 animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Particles />
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-neon-purple/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-neon-blue/20 blur-3xl animate-blob [animation-delay:-9s]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-neon-purple" />
          Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold leading-[0.95] tracking-tighter text-5xl sm:text-7xl lg:text-8xl"
        >
          Hey, I'm <br />
          <span className="text-gradient">Fenil Patel.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl"
        >
          I build <Typed /> — crafting fast, beautiful interfaces where design meets engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground hover:glow-purple transition-all"
          >
            View Projects
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:bg-white/10 transition-all"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="https://github.com/Fenil2225"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:bg-white/10 transition-all"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2"
        >
          Scroll
          <div className="w-px h-10 bg-gradient-to-b from-neon-purple to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
