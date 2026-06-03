import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    icon: Briefcase,
    year: "2024 — Now",
    title: "Senior Product Engineer",
    org: "Lumen Labs",
    desc: "Leading the design-engineering team building AI-native developer tools used by 40k+ teams.",
  },
  {
    icon: Briefcase,
    year: "2021 — 2024",
    title: "Frontend Engineer",
    org: "Northwind",
    desc: "Shipped the design system + checkout funnel that grew conversion by 38%.",
  },
  {
    icon: Briefcase,
    year: "2019 — 2021",
    title: "Freelance Developer",
    org: "Self-employed",
    desc: "Delivered 24+ websites and web apps for startups across Europe.",
  },
  {
    icon: GraduationCap,
    year: "2015 — 2019",
    title: "B.Sc. Computer Science",
    org: "TU Berlin",
    desc: "Specialized in human-computer interaction and computer graphics.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title={<>Experience & <span className="text-gradient">education.</span></>}>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple/40 to-transparent" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-purple ring-4 ring-background animate-glow z-10" />
              <div className="md:w-1/2" />
              <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                    <t.icon className="h-4 w-4 text-neon-blue" />
                    <span className="text-xs font-mono text-neon-blue">{t.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{t.title}</h3>
                  <div className="text-sm text-neon-purple mb-2">{t.org}</div>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
