import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "../lib/router";
import { MagneticButton } from "../components/MagneticButton";
import { FloatingShapes } from "../components/FloatingShapes";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import {
  certifications,
  experience,
  person,
  projects,
  skillGroups,
  stats,
  strengths,
  tech,
} from "../data/site";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
        <FloatingShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.p variants={revealItem} className="text-xs font-medium tracking-[0.25em] text-(--color-accent)">
              FULL-STACK DEVELOPER · AI ENTHUSIAST
            </motion.p>
            <motion.h1
              variants={revealItem}
              className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I'm {person.first}.
              <br />
              I build <span className="italic text-(--color-accent)">smart</span> web apps.
            </motion.h1>
            <motion.p variants={revealItem} className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
              Computer Science undergraduate with hands-on experience in web development and AI-based
              applications, skilled in Java, SQL, JavaScript, Node.js, Express.js and EJS.
            </motion.p>
            <motion.div variants={revealItem} className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-(--color-ink) px-7 py-3.5 text-sm font-medium text-(--color-canvas) transition-colors hover:bg-(--color-accent)">
                  Get in touch <ArrowRight size={16} />
                </MagneticButton>
              </Link>
              <Link
                to="/about"
                data-cursor="grow"
                className="inline-flex items-center gap-2 rounded-full border border-(--color-line) px-7 py-3.5 text-sm font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                About me
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/img/hero-portrait.png"
                alt={`Portrait of ${person.name}`}
                className="aspect-[2/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: easeOutExpo }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-(--color-canvas) p-5 shadow-xl ring-1 ring-(--color-line) sm:-left-10"
            >
              <p className="font-display text-xl font-medium">B.Tech CSE</p>
              <p className="text-xs text-(--color-ink-soft)">Rama University · 2024 – Present</p>
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.3} className="relative mt-24">
          <p className="text-center text-xs tracking-[0.2em] text-(--color-ink-soft)/70">TECH I WORK WITH</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {tech.map((p) => (
              <span key={p} className="font-display text-lg text-(--color-ink-soft)/60">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">PROFESSIONAL PROFILE</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Problem-solving, from backend to browser.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-(--color-ink-soft)">
              I have practical exposure to cloud computing and generative AI concepts, and I developed an
              AI-enabled recruitment management system that shows my problem-solving and full-stack
              development abilities.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-(--color-ink-soft)">
                  <Check size={18} className="mt-0.5 shrink-0 text-(--color-accent)" />
                  {s}
                </li>
              ))}
            </ul>
            <Link to="/about" data-cursor="grow" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) hover:underline">
              Read more about me <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] text-(--color-accent)">AT A GLANCE</p>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4" stagger={0.1}>
            {stats.map((a) => (
              <motion.div variants={revealItem} key={a.label} className="border-l-2 border-(--color-line) pl-5">
                <p className="font-display text-4xl font-medium text-(--color-accent) sm:text-5xl">{a.number}</p>
                <p className="mt-2 text-sm leading-snug text-(--color-ink-soft)">{a.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-gold)">TECHNICAL SKILLS</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              My toolbox.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {skillGroups.map((g) => (
              <motion.div variants={revealItem} key={g.title} className="border-t border-(--color-canvas)/15 pt-6">
                <p className="font-display text-xl font-medium">{g.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="rounded-full border border-(--color-canvas)/25 px-4 py-1.5 text-sm text-(--color-canvas)/80">
                      {i}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">EXPERIENCE</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Where I've worked.</h2>
          </Reveal>
          {experience.map((e) => (
            <Reveal key={e.company} className="mt-12 grid gap-6 border-t border-(--color-line) pt-8 lg:grid-cols-[1fr_1.6fr]">
              <div>
                <p className="font-display text-2xl font-medium">{e.role}</p>
                <p className="mt-1 text-(--color-accent)">{e.company}</p>
                <p className="mt-1 text-sm text-(--color-ink-soft)">{e.period}</p>
              </div>
              <ul className="space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-(--color-ink-soft)">
                    <Check size={18} className="mt-1 shrink-0 text-(--color-accent)" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-(--color-canvas-alt) px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">PROJECTS</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Things I've built.</h2>
          </Reveal>
          {projects.map((p) => (
            <Reveal key={p.title} className="mt-12 rounded-3xl border border-(--color-line) bg-(--color-canvas) p-8 sm:p-10">
              <h3 className="font-display text-2xl font-medium sm:text-3xl">{p.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-(--color-canvas-alt) px-3 py-1 text-xs text-(--color-accent)">{t}</span>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-(--color-ink-soft)">
                    <Check size={18} className="mt-1 shrink-0 text-(--color-accent)" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-(--color-accent)">CERTIFICATIONS</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Always learning.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-3" stagger={0.08}>
            {certifications.slice(0, 3).map((c) => (
              <motion.article variants={revealItem} key={c.title} className="border-t border-(--color-line) pt-6">
                <p className="text-xs tracking-wide text-(--color-accent)">{c.date.toUpperCase()}</p>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-(--color-ink-soft)">{c.issuer}</p>
              </motion.article>
            ))}
          </RevealGroup>
          <Reveal className="mt-10">
            <Link to="/certifications" data-cursor="grow" className="inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) hover:underline">
              See all certifications <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-(--color-ink) px-6 py-24 text-(--color-canvas) lg:px-10">
        <FloatingShapes />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-(--color-gold)">LET'S WORK TOGETHER</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Have an opportunity or an idea?
          </h2>
          <p className="mt-5 text-lg text-(--color-canvas)/65">I'd love to hear from you.</p>
          <a
            href={`mailto:${person.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-canvas) px-8 py-3.5 text-sm font-medium text-(--color-ink) hover:bg-(--color-gold)"
          >
            {person.email} <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>
    </>
  );
}
