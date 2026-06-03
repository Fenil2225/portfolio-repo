import { motion } from "framer-motion";
import { Award, Trophy, Star, Zap } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Trophy, title: "Awwwards SOTD", desc: "Site of the Day for Nebula Analytics, 2024" },
  { icon: Award, title: "AWS Certified", desc: "Solutions Architect – Associate, 2023" },
  { icon: Star, title: "GitHub Star", desc: "10k+ stars across open-source libraries" },
  { icon: Zap, title: "Y Combinator W22", desc: "Co-founded an AI tooling startup" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title={<>Things I'm <span className="text-gradient">proud of.</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
          >
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-white/10 mb-4 group-hover:animate-glow">
              <it.icon className="h-6 w-6 text-neon-purple" />
            </div>
            <h3 className="font-display font-semibold mb-1">{it.title}</h3>
            <p className="text-xs text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
