"use client";

import type { MouseEvent } from "react";
import type { Project } from "@/data/profile";

export default function ProjectCard({ p }: { p: Project }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article className={`project${p.featured ? " featured" : ""}`} onMouseMove={onMove}>
      <div className="project-top mono">
        <span className="project-tag">{p.tag}</span>
        {p.href ? (
          <a className="project-link" href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.title} — visit`}>
            {p.org} ↗
          </a>
        ) : (
          <span>{p.org}</span>
        )}
      </div>
      <h3>{p.title}</h3>
      <p>{p.blurb}</p>
      {p.metric && (
        <div className="project-metric">
          <strong>{p.metric.value}</strong>
          <span>{p.metric.label}</span>
        </div>
      )}
      <div className="tags">
        {p.stack.map((s) => (
          <span className="tag" key={s}>
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
