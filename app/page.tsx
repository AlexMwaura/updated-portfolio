import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";
import FlowDiagram from "@/components/FlowDiagram";
import LedgerFeed from "@/components/LedgerFeed";
import Clock from "@/components/Clock";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { profile, experience, projects, openSource, skills, markets, education } from "@/data/profile";

const marqueeItems = [
  "Spring Boot", "Kotlin", "Django", "Next.js", "TypeScript", "RabbitMQ", "PostgreSQL",
  "AWS", "Kubernetes", "M-Pesa", "MTN MoMo", "React", "Angular", "Docker", "Terraform",
];

function SectionHead({ n, label, title, aside }: { n: string; label: string; title: React.ReactNode; aside?: string }) {
  return (
    <Reveal className="section-head">
      <div>
        <div className="section-label mono">
          <b>{n}</b> / {label}
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <CommandPalette />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                <span className="pulse" aria-hidden="true" />
                {profile.role} at {experience[0].company}
              </span>
              <h1>
                <span className="line">
                  <span>{profile.headline.lead}</span>
                </span>
                <span className="line">
                  <span>
                    <span className="serif">{profile.headline.emphasis}</span> {profile.headline.tail}
                  </span>
                </span>
              </h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#work">
                  See my work <span className="arrow">↗</span>
                </a>
                <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
              <div className="hero-meta mono">
                <span>◎ {profile.location}</span>
                <span>
                  ◷ <Clock timeZone={profile.timezone} />
                </span>
                <span>⌘K to explore</span>
              </div>
            </div>

            <div className="panel">
              <div className="panel-head mono">
                <span className="dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>lending-platform.flow</span>
                <span className="hide-sm">live</span>
              </div>
              <FlowDiagram />
              <LedgerFeed />
              <div className="panel-foot mono">Illustrative — the kind of systems I build.</div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span className="marquee-item" key={i}>
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="container">
          {/* ---------- Stats ---------- */}
          <Reveal className="section" as="div">
            <Stats />
          </Reveal>

          {/* ---------- About ---------- */}
          <section id="about" className="section">
            <SectionHead
              n="01"
              label="About"
              title={
                <>
                  Fintech engineer. <span className="serif">Systems</span> thinker.
                </>
              }
            />
            <div className="about-grid">
              <Reveal className="about-copy">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
              <div className="stack-col">
                <Reveal className="card" delay={0.1}>
                  <div className="card-label mono">Markets I&apos;ve shipped to</div>
                  <div className="markets">
                    {markets.map((m) => (
                      <div className="market" key={m.code}>
                        <span className="code mono">{m.code}</span>
                        {m.name}
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal className="card" delay={0.18}>
                  <div className="card-label mono">Education</div>
                  <ul className="edu-list">
                    {education.map((e) => (
                      <li key={e.title}>
                        <div>
                          {e.title}
                          <small>{e.org}</small>
                        </div>
                        <span className="mono">{e.period}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ---------- Experience ---------- */}
          <section id="experience" className="section">
            <SectionHead
              n="02"
              label="Experience"
              title={
                <>
                  Where I&apos;ve been <span className="serif">building</span>.
                </>
              }
              aside="From SACCO mobile banking to regional lending architecture and multi-market regulatory reporting."
            />
            <div className="timeline">
              {experience.map((j, i) => (
                <Reveal className="job" key={`${j.company}-${j.role}`} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="job-period mono">
                    {j.period}
                    {i === 0 && (
                      <div>
                        <span className="now">● Current</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3>
                      {j.role} <span className="at">at</span> {j.company}
                    </h3>
                    <div className="job-where mono">{j.where}</div>
                    <p className="job-summary">{j.summary}</p>
                    {j.highlights.length > 0 && (
                      <ul>
                        {j.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {j.stack.length > 0 && (
                      <div className="tags">
                        {j.stack.map((s) => (
                          <span className="tag" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- Work ---------- */}
          <section id="work" className="section">
            <SectionHead
              n="03"
              label="Selected work"
              title={
                <>
                  Systems that <span className="serif">move</span> real money.
                </>
              }
              aside="Production platforms across lending, payments and credit risk. Most are private, so here's what they do and what they changed."
            />
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.06} className={`project-wrap${p.featured ? " featured" : ""}`} as="div">
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>

            <Reveal className="section-label mono" as="div">
              <span style={{ marginTop: 56, display: "block" }}>Open source · github.com/AlexMwaura</span>
            </Reveal>
            <div className="repos">
              {openSource.map((r) => (
                <a
                  className="repo"
                  key={r.name}
                  href={`${profile.socials.github}/${r.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <strong>{r.name}</strong>
                    <p>{r.desc}</p>
                  </div>
                  <span className="lang mono">{r.lang}</span>
                </a>
              ))}
            </div>
          </section>

          {/* ---------- Skills ---------- */}
          <section id="skills" className="section">
            <SectionHead
              n="04"
              label="Toolkit"
              title={
                <>
                  The <span className="serif">stack</span>, end to end.
                </>
              }
            />
            <div className="skills">
              {skills.map((g, i) => (
                <Reveal className="card skill-group" key={g.group} delay={(i % 3) * 0.06}>
                  <h4 className="mono">{g.group}</h4>
                  <div className="tags">
                    {g.items.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="contact">
          <div className="container">
            <Reveal>
              <div className="section-label mono">
                <b>05</b> / Contact
              </div>
              <h2 className="contact-title">
                Let&apos;s build
                <br />
                something <span className="serif">solid</span>.
              </h2>
            </Reveal>
            <div className="contact-grid">
              <Reveal>
                <p style={{ color: "var(--fg-2)", fontSize: 18, marginTop: 0, maxWidth: 460 }}>
                  Always happy to talk fintech platforms, lending systems and hard engineering problems.
                </p>
                <a className="email-big" href={`mailto:${profile.email}`}>
                  {profile.email} <span aria-hidden="true">↗</span>
                </a>
                <div className="contact-links">
                  <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="container footer mono">
          <span>
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span>Built with Next.js · Designed in Nairobi</span>
        </footer>
      </main>
    </>
  );
}
