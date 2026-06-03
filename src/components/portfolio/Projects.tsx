import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    img: p1,
    title: "Nebula Analytics",
    desc: "Realtime SaaS dashboard with custom query builder and 50+ visualization types.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "D3"],
  },
  {
    img: p2,
    title: "Pulse Fitness",
    desc: "Native-feeling cross-platform fitness app with adaptive AI coaching.",
    tech: ["React Native", "Expo", "Supabase"],
  },
  {
    img: p3,
    title: "Synth.ai",
    desc: "Conversational AI workspace with multi-model routing and shared context.",
    tech: ["Next.js", "OpenAI", "Vercel AI"],
  },
  {
    img: p4,
    title: "Velocity Store",
    desc: "Headless e-commerce template with edge-rendered product pages.",
    tech: ["Astro", "Shopify", "Stripe"],
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
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
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
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-purple hover:text-neon-pink transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
                <a
                  href="#"
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
