import { motion } from "framer-motion";
import { Section } from "./Section";
import profile from "@/assets/profile.jpg";

const skills = [
  { name: "Frontend Engineering", pct: 95 },
  { name: "UI / UX Design", pct: 88 },
  { name: "Backend & APIs", pct: 82 },
  { name: "Motion & 3D", pct: 76 },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title={<>The person <span className="text-gradient">behind the pixels.</span></>}>
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-neon-purple to-neon-blue rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
              <img
                src={profile}
                alt="Alex Carter portrait"
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 glass-strong rounded-2xl px-4 py-3 text-xs animate-float">
              <div className="text-neon-purple font-mono">6+ years</div>
              <div className="text-muted-foreground">shipping product</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a creative developer based in Berlin obsessed with the intersection of code,
            motion, and visual systems. I help startups turn fuzzy ideas into products people
            actually want to use — from the brand mark down to the database query.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not shipping, you'll find me tinkering with synthesizers, climbing,
            or contributing to open source.
          </p>

          <div className="space-y-4 pt-4">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{s.name}</span>
                  <span className="text-muted-foreground font-mono">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
