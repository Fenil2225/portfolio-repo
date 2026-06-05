import { motion } from "framer-motion";
import { Code2, Palette, Wrench, Database } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["TypeScript", "React / Next", "Node.js", "Python"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Docker", "Vite", "Vercel", "Linear"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["PostgreSQL", "Supabase", "tRPC", "Redis"],
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
              <div className="inline-flex p-2.5 rounded-xl bg-linear-to-br from-neon-purple/20 to-neon-blue/20 border border-white/10 mb-4">
                <g.icon className="h-5 w-5 text-neon-purple" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">{g.title}</h3>
              <div className="grid gap-3">
                {g.items.map((item) => (
                  <div key={item} className="group flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:-translate-y-1 hover:border-neon-purple/30 hover:bg-white/10">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-neon-purple transition-all group-hover:scale-110" />
                    <span className="text-sm font-medium text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
