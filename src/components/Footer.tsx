import { Link } from "../lib/router";
import { nav, person } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-(--color-ink) text-(--color-canvas)">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-medium">{person.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-canvas)/60">{person.role}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">EXPLORE</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-(--color-canvas)/75 hover:text-(--color-canvas)">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-(--color-canvas)/40">CONNECT</p>
            <ul className="mt-4 space-y-3 text-sm text-(--color-canvas)/75">
              <li><a href={`mailto:${person.email}`} className="hover:text-(--color-canvas)">{person.email}</a></li>
              <li><a href={`tel:${person.phone}`} className="hover:text-(--color-canvas)">{person.phone}</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-(--color-canvas)/15 pt-8 text-xs text-(--color-canvas)/40">
          © 2026 {person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
