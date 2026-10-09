import { motion } from "framer-motion";
import { Section } from "./Section";
import profile from "../../assets/profile.jpeg";

const skills = ["Frontend Developer", "UI/UX Design", "Backend & APIs"];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          The person <span className="text-gradient">behind the pixels.</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div className="relative w-full h-full min-h-144 mx-auto">
            <div className="absolute -inset-4 bg-linear-to-br from-neon-purple to-neon-blue rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2 h-full">
              <img
                src={profile}
                alt="Fenil Patel portrait"
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute right-4 bottom-4 max-w-48 rounded-[1.75rem] bg-linear-to-r from-neon-purple/80 via-neon-pink/80 to-neon-blue/80 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-24px_rgba(139,92,246,0.9)] backdrop-blur-md animate-pulse">
                <span className="block leading-tight">Beginner & Available</span>
                <span className="block leading-tight">for Freelance</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-1 space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a creative web developer based in Ahmedabad, focused on building clean, responsive,
            and user-friendly websites. I enjoy turning ideas into real digital experiences — from
            simple landing pages to functional web applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I work with modern web technologies and continuously improve my skills by building
            real-world projects. My goal is to deliver websites that not only look good but also
            perform smoothly and provide a great user experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you're looking for someone reliable who can bring your ideas to life and grow with
            your project, I'd love to work together.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="mt-2 h-px bg-white/10" />
    </Section>
  );
}
