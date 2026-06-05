"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Zap, File } from "lucide-react";
import { Section } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";

import OdooHackathonCert from "../../assets/Odoo Hackathon Certificate.jpeg";
import IBMUnleashingCert from "../../assets/New IBM Certificate.png";
import ExcellenceCert from "../../assets/Certificate of Excellence.jpeg";
import IBMGettingStartedCert from "../../assets/IBM Getting Started with AI.png";

const items = [
  { icon: Trophy, title: "Odoo Hackathone Certificate", desc: "Participated in January 2026", certificate: OdooHackathonCert, type: "image" },
  { icon: Award, title: "IBM certified", desc: "Unleashing the power of AI Agents, August 2025", certificate: IBMUnleashingCert, type: "image" },
  { icon: Star, title: "Certificate Of Excellence", desc: "DBMS Course - Master the Fundamental and Advanced Concepts, November 2025", certificate: ExcellenceCert, type: "image" },
  { icon: Zap, title: "IBM certified", desc: "Getting Started with AI, January 2025", certificate: IBMGettingStartedCert, type: "image" },
];

export function Achievements() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  function openCert(i: number) {
    setSelected(i);
    setOpen(true);
  }

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
            <button onClick={() => openCert(i)} className="w-full">
              <div className="inline-flex p-3 rounded-2xl bg-linear-to-br from-neon-purple/20 to-neon-blue/20 border border-white/10 mb-4 group-hover:animate-glow">
                <it.icon className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="font-display font-semibold mb-1">{it.title}</h3>
              <p className="text-xs text-muted-foreground">{it.desc}</p>
            </button>
          </motion.div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selected !== null ? items[selected].title : "Certificate"}</DialogTitle>
            <DialogDescription>
              {selected !== null ? items[selected].desc : "Certificate preview"}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-center">
            {selected !== null && items[selected].type === "image" ? (
              <img src={items[selected].certificate} alt={items[selected].title} className="max-h-[60vh] w-auto rounded shadow" />
            ) : selected !== null && items[selected].type === "pdf" ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <File className="h-24 w-24 text-neon-purple opacity-60" />
                <p className="text-center text-sm text-muted-foreground">
                  PDF Certificate
                </p>
                <a
                  href={items[selected].certificate}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neon-purple rounded hover:bg-neon-purple/80 transition text-white text-sm"
                >
                  Download PDF
                </a>
              </div>
            ) : null}
          </div>

          <DialogClose className="sr-only">Close</DialogClose>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
