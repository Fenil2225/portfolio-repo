import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build <span className="text-gradient">something.</span></>}>
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm currently taking on freelance work and full-time roles. Send a message and I'll get
            back within 24 hours.
          </p>
          <div className="space-y-4">
            <a href="mailto:hello@alexcarter.dev" className="flex items-center gap-3 group">
              <span className="p-2.5 rounded-xl glass group-hover:glow-purple transition-all">
                <Mail className="h-4 w-4 text-neon-purple" />
              </span>
              <span className="text-sm">hello@alexcarter.dev</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl glass">
                <MapPin className="h-4 w-4 text-neon-blue" />
              </span>
              <span className="text-sm text-muted-foreground">Berlin, Germany</span>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-xl glass hover:bg-white/10 hover:-translate-y-0.5 hover:glow-purple transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 space-y-4 neon-border"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@studio.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue text-primary-foreground hover:glow-purple transition-all disabled:opacity-70"
          >
            {sent ? "Message sent — thanks!" : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: {
  label: string; name: string; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
      />
    </div>
  );
}
