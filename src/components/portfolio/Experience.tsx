import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    icon: GraduationCap,
    year: "2024 - 2028 : Running Now",
    title: "Information And Communication Technology Eng. (ICT)",
    org: "Vishwakarma Gov. Eng. College, Chandkheda",
    desc: "Building smart, efficient solutions by combining software skills with hardware knowledge.",
  },
  {
    icon: GraduationCap,
    year: "2024",
    title: "H.S.C",
    org: "New Meghdoot Vidyavihar, Vatva",
    desc: "Successfully Passed 12th with A2 Grade.",
  },
  {
    icon: GraduationCap,
    year: "2022",
    title: "S.S.C",
    org: "Muktajivan School, Isanpur",
    desc: "Successfully Passed 10th with B1 Grade.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title={<>Experience & <span className="text-gradient">education.</span></>}>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neon-purple/40 to-transparent" />
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
                <div className="glass rounded-2xl p-6 hover:bg-white/6 transition-colors">
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
