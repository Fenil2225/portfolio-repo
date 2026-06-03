import { motion } from "framer-motion";
import { Code2, Palette, Wrench, Database } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["TypeScript 95%", "React / Next 92%", "Node.js 88%", "Python 78%", "Rust 65%"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["Figma 94%", "Motion Design 85%", "Design Systems 90%", "Blender 70%"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git 95%", "Docker 82%", "Vite 90%", "Vercel 92%", "Linear 88%"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["PostgreSQL 86%", "Supabase 90%", "tRPC 84%", "Redis 75%"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>What I bring to the <span className="text-gradient">table.</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-white/10 mb-4">
                <g.icon className="h-5 w-5 text-neon-purple" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">{g.title}</h3>
              <ul className="space-y-3">
                {g.items.map((item) => {
                  const [name, pct] = item.split(/ (\d+%)/);
                  return (
                    <li key={name} className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">{name}</span>
                        <span className="font-mono text-xs text-neon-blue">{pct}</span>
                      </div>
                      <div className="h-1 rounded bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: pct }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
