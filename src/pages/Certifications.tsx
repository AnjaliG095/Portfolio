import { motion } from "motion/react";
import { Award } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { certifications } from "../data/site";

export default function Certifications() {
  return (
    <section className="px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-(--color-accent)">ACHIEVEMENTS & CERTIFICATIONS</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Learning across code, cloud and AI.
          </h1>
        </Reveal>
        <RevealGroup className="mt-14 grid gap-8 lg:grid-cols-3 sm:grid-cols-2" stagger={0.08}>
          {certifications.map((c) => (
            <motion.div variants={revealItem} key={c.title} className="flex flex-col rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-8">
              <Award className="text-(--color-accent)" size={28} />
              <p className="mt-5 text-xs tracking-[0.2em] text-(--color-accent)">{c.date.toUpperCase()}</p>
              <h3 className="mt-3 font-display text-2xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-(--color-ink-soft)">{c.issuer}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
