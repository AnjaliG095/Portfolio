import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { education, person, strengths } from "../data/site";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20 lg:px-10 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">ABOUT ME</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              A developer who loves solving problems.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              I'm {person.name}, a Computer Science undergraduate with hands-on experience in web development
              and AI-based applications, plus practical exposure to cloud computing and generative AI concepts.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent)">
                Get in touch <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/about-portrait.png"
              alt={`${person.name}`}
              className="aspect-[2/3] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-(--color-ink-soft)">
          <Reveal>
            <p className="font-display text-2xl font-medium text-(--color-ink)">
              I developed an AI-enabled recruitment management system, combining full-stack development with
              intelligent resume screening.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              My core stack is Java, SQL, JavaScript, Node.js, Express.js and EJS. I've also earned
              certifications in cloud computing, design thinking and generative AI.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">EDUCATION</p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2" stagger={0.1}>
            {education.map((e) => (
              <motion.div variants={revealItem} key={e.title} className="border-l-2 border-(--color-line) pl-5">
                <p className="font-display text-2xl font-medium">{e.title}</p>
                <p className="mt-2 text-(--color-accent)">{e.place}</p>
                <p className="mt-1 text-sm text-(--color-ink-soft)">{e.period}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-gold)">CORE STRENGTHS</p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {strengths.map((s) => (
              <motion.div variants={revealItem} key={s} className="border-t border-(--color-canvas)/15 pt-6">
                <p className="font-display text-lg font-medium">{s}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
