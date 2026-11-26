"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { sections, toggleTheme } from "./Nav";

type Cmd = { label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const flash = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  }, []);

  const commands = useMemo<Cmd[]>(
    () => [
      ...sections.map((s) => ({
        label: `Go to ${s.label}`,
        hint: "Navigate",
        run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        label: "Copy email address",
        hint: profile.email,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => flash("Email copied"),
            () => flash(profile.email)
          );
        },
      },
      { label: "Open GitHub", hint: "github.com", run: () => window.open(profile.socials.github, "_blank", "noopener") },
      { label: "Open LinkedIn", hint: "linkedin.com", run: () => window.open(profile.socials.linkedin, "_blank", "noopener") },
      { label: "View resume", hint: "PDF", run: () => window.open(profile.resumeUrl, "_blank", "noopener") },
      { label: "Toggle theme", hint: "Light / dark", run: toggleTheme },
    ],
    [flash]
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const run = (c?: Cmd) => {
    if (!c) return;
    setOpen(false);
    c.run();
  };

  return (
    <>
      {open && (
        <div className="cmdk-overlay" onMouseDown={() => setOpen(false)}>
          <div
            className="cmdk"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={q}
              placeholder="Type a command or search…"
              aria-label="Search commands"
              onChange={(e) => {
                setQ(e.target.value);
                setSel(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setSel((s) => Math.min(s + 1, filtered.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setSel((s) => Math.max(s - 1, 0));
                } else if (e.key === "Enter") {
                  run(filtered[sel]);
                }
              }}
            />
            {filtered.length ? (
              <ul role="listbox">
                {filtered.map((c, i) => (
                  <li key={c.label}>
                    <button
                      role="option"
                      aria-selected={i === sel}
                      onMouseEnter={() => setSel(i)}
                      onClick={() => run(c)}
                    >
                      <span>{c.label}</span>
                      <span className="hint mono">{c.hint}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="cmdk-empty">No matches.</div>
            )}
          </div>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}
