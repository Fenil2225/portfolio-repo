import { useRef, useState, type ChangeEvent, type FormEvent, type RefObject } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { Section } from "./Section";

const EMAILJS_SERVICE_ID = "service_n3wqvxb";
const EMAILJS_TEMPLATE_ID = "template_jebp3h9";
const EMAILJS_PUBLIC_KEY = "DZYEbdODf0e3qh_4t";

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    nameRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    // client-side email validation
    const email = formData.user_email?.trim();
    const isValidEmail = (e: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    };

    if (!isValidEmail(email)) {
      setError("Email is incorrect");
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          from_name: formData.user_name,
          from_email: formData.user_email,
          reply_to: formData.user_email,
          subject: formData.subject,
          email_subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Unable to send message right now. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm currently taking on freelance work. Send a message and I'll get back within 24
            hours.
          </p>
          <div className="space-y-4">
            <a href="tel:+916355644942" className="flex items-center gap-3 group">
              <span className="p-2.5 rounded-xl glass group-hover:glow-purple transition-all">
                <Phone className="h-4 w-4 text-neon-purple" />
              </span>
              <span className="text-sm">+91 6355644942</span>
            </a>

            <button
              type="button"
              onClick={handleEmailClick}
              className="flex items-center gap-3 group"
            >
              <span className="p-2.5 rounded-xl glass group-hover:glow-purple transition-all">
                <Mail className="h-4 w-4 text-neon-purple" />
              </span>
              <span className="text-sm">patelminal253@gmail.com</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl glass">
                <MapPin className="h-4 w-4 text-neon-blue" />
              </span>
              <span className="text-sm text-muted-foreground">Ahmedabad, India</span>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/Fenil2225"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass hover:bg-white/10 hover:-translate-y-0.5 hover:glow-purple transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/fenil-patel-3b1936322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass hover:bg-white/10 hover:-translate-y-0.5 hover:glow-purple transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 space-y-4 neon-border"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Name"
              name="user_name"
              placeholder="Jane Doe"
              value={formData.user_name}
              onChange={handleChange}
              inputRef={nameRef}
            />
            <Field
              label="Email"
              name="user_email"
              type="email"
              placeholder="jane@studio.com"
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
              Subject
            </label>
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting || sent}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-linear-to-r from-neon-purple via-neon-pink to-neon-blue text-primary-foreground hover:glow-purple transition-all disabled:opacity-70"
          >
            {sent ? (
              "Message sent — thanks!"
            ) : (
              <>
                {submitting ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  inputRef,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
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
        value={value}
        onChange={onChange}
        ref={inputRef}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
      />
    </div>
  );
}
