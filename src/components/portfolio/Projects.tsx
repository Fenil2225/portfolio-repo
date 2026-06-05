import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "./Section";
import p1 from "../../assets/Gear-guard.jpeg";
import p2 from "../../assets/Eco System.jpeg";
import p3 from "../../assets/SkyPastel.jpeg";

const projects = [
  {
    img: p1,
    title: "Gear Guard - Maintenance Management System",
    desc: "A comprehensive maintenance management system designed to streamline equipment maintenance operations, track maintenance requests, and manage technician teams with a modern React-based frontend.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
    repo: "https://github.com/Fenil2225/gear-guardian.git",
  },
  {
    img: p2,
    title: "Ecoflow Navigator System",
    desc: "The ECO Flow Navigator System manages and tracks Engineering Change Orders (ECOs) across products, BOM, components, and operations. It ensures all changes are properly controlled, approved, and consistently implemented throughout the system.",
    tech: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS"],
    repo: "https://github.com/Fenil2225/ecoflow-navigator.git",
  },
  {
    img: p3,
    title: "SkyPastel - Flight Booking",
    desc: "Book Smarter - flights that fit your life. Fast search, flexible fares, hand-picked routes — the right flight, every time.",
    tech: ["Next.js", "Java Script", "Tailwind CSS", "MySQL", "HTML"],
    repo: "https://github.com/Fenil2225/SkyPastel-Flight_Booking.git",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Selected <span className="text-gradient">work.</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative glass rounded-3xl overflow-hidden hover:shadow-[0_20px_80px_-20px_rgba(180,120,255,0.4)] transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden relative min-h-[220px]">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="p-6 -mt-16 relative">
              <h3 className="font-display font-bold text-2xl mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full glass text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
