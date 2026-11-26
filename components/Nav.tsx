"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
}

export function openPalette() {
  window.dispatchEvent(new Event("open-cmdk"));
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand-mark">AM</span>
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Sections">
          <ul className="nav-links">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={openPalette} aria-label="Open command menu">
            <span className="hide-sm">Menu</span>
            <span className="kbd">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
