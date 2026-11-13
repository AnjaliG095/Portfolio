import { Mail, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { person } from "../data/site";

export default function Contact() {
  return (
    <section className="px-6 pt-36 pb-24 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-(--color-accent)">CONTACT</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Let's start a conversation.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
            Open to internships, projects and collaborations. Reach out any time.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2">
          <a href={`mailto:${person.email}`} className="rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-8 transition-colors hover:border-(--color-accent)">
            <Mail className="text-(--color-accent)" size={26} />
            <p className="mt-5 text-xs tracking-[0.2em] text-(--color-ink-soft)">EMAIL</p>
            <p className="mt-2 break-all font-display text-xl font-medium">{person.email}</p>
          </a>
          <a href={`tel:${person.phone}`} className="rounded-3xl border border-(--color-line) bg-(--color-canvas-alt) p-8 transition-colors hover:border-(--color-accent)">
            <Phone className="text-(--color-accent)" size={26} />
            <p className="mt-5 text-xs tracking-[0.2em] text-(--color-ink-soft)">PHONE</p>
            <p className="mt-2 font-display text-xl font-medium">{person.phone}</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
